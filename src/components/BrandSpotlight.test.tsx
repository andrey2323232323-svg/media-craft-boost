import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import BrandSpotlight from './BrandSpotlight';

const rect = (left:number, top:number, width:number, height:number) => ({left,top,width,height,right:left+width,bottom:top+height,x:left,y:top,toJSON(){}});

beforeEach(() => {
  vi.stubGlobal('ResizeObserver', class { observe(){} disconnect(){} });
  vi.stubGlobal('DOMMatrix', class { inverse(){return this;} });
  vi.stubGlobal('DOMPoint', class { constructor(public x:number,public y:number){} matrixTransform(){return this;} });
  vi.stubGlobal('PointerEvent', class extends MouseEvent {
    pointerType: string;
    constructor(type:string, init:PointerEventInit = {}) { super(type, init); this.pointerType = init.pointerType ?? 'mouse'; }
  });
  Object.defineProperty(document, 'fonts', {configurable:true,value:{ready:Promise.resolve()}});
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function() {
    if (this.classList.contains('brand-lamp')) return rect(700,100,0,0);
    if (this.classList.contains('brand-showcase')) return rect(500,80,600,600);
    if (this.tagName === 'EM') return rect(100,300,400,80);
    return rect(600,200,200,160);
  });
});
afterEach(() => {cleanup();vi.restoreAllMocks();vi.unstubAllGlobals();});

function mount() {
  return render(<section className="hero"><BrandSpotlight/><h1><em>ЗАМЕТНЫМИ</em></h1></section>);
}
function endpoint(root:Element) {
  const style=(root as HTMLElement).style;
  const length=parseFloat(style.getPropertyValue('--beam-length'));
  const angle=parseFloat(style.getPropertyValue('--beam-angle'));
  return {x:700+Math.cos(angle)*length,y:100+Math.sin(angle)*length};
}

describe('BrandSpotlight', () => {
  it('keeps touch selection after release, switches brands and toggles back to the heading', () => {
    const {container,getAllByRole}=mount();
    const [first,second]=getAllByRole('button');
    const tap = (card:HTMLElement) => {
      fireEvent.pointerDown(card,{pointerType:'touch'});
      fireEvent.pointerUp(card,{pointerType:'touch'});
      fireEvent.pointerLeave(card,{pointerType:'touch'});
      fireEvent.click(card,{detail:1});
    };
    tap(first);
    expect(first).toHaveAttribute('aria-pressed','true');
    expect(endpoint(container.querySelector('.brand-showcase')!).y).toBeCloseTo(280);
    tap(second);
    expect(first).toHaveAttribute('aria-pressed','false');
    expect(second).toHaveAttribute('aria-pressed','true');
    tap(second);
    expect(container.querySelector('.brand-showcase')).toHaveClass('is-resting');
    expect(endpoint(container.querySelector('.brand-showcase')!).y).toBeCloseTo(340);
  });
  it('does not select a logo when a touch gesture is cancelled for scrolling', () => {
    const {container,getAllByRole}=mount();
    fireEvent.pointerDown(getAllByRole('button')[0],{pointerType:'touch'});
    fireEvent.pointerCancel(getAllByRole('button')[0],{pointerType:'touch'});
    expect(container.querySelector('.brand-showcase')).toHaveClass('is-resting');
  });
  it('keeps the beam in card gaps and returns to the heading only after leaving the stage', () => {
    const {container,getAllByRole}=mount();
    const root=container.querySelector('.brand-showcase')!;
    expect(endpoint(root).x).toBeCloseTo(320);
    expect(endpoint(root).y).toBeCloseTo(340);
    const card=getAllByRole('button')[1];
    fireEvent.pointerEnter(card,{clientX:745,clientY:270});
    expect(endpoint(root).x).toBeCloseTo(745);
    expect(endpoint(root).y).toBeCloseTo(270);
    expect(card).toHaveClass('is-active');
    const stage=container.querySelector('.brand-stage')!;
    fireEvent.pointerLeave(card,{relatedTarget:stage});
    expect(root).toHaveClass('is-tracking');
    expect(card).toHaveClass('is-active');
    expect(endpoint(root).x).toBeCloseTo(745);
    expect(endpoint(root).y).toBeCloseTo(270);
    const next=getAllByRole('button')[2];
    fireEvent.pointerOut(stage,{clientX:780,clientY:290,relatedTarget:next});
    expect(next).toHaveClass('is-active');
    expect(endpoint(root).x).toBeCloseTo(780);
    fireEvent.pointerLeave(stage);
    expect(root).toHaveClass('is-resting');
    expect(endpoint(root).x).toBeCloseTo(320);
    expect(endpoint(root).y).toBeCloseTo(340);
  });
  it('tracks the cursor inside a card instead of locking to its center', async () => {
    const {container,getAllByRole}=mount();
    const card=getAllByRole('button')[0];
    fireEvent.pointerEnter(card,{clientX:650,clientY:250});
    fireEvent.pointerMove(card,{clientX:770,clientY:315});
    await new Promise(resolve=>requestAnimationFrame(resolve));
    const end=endpoint(container.querySelector('.brand-showcase')!);
    expect(end.x).toBeCloseTo(770);
    expect(end.y).toBeCloseTo(315);
    expect(card.style.getPropertyValue('--light-x')).not.toBe('');
  });
});
