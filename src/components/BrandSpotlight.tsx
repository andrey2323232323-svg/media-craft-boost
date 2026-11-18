import { useCallback, useEffect, useRef, useState } from 'react';
import './BrandSpotlight.css';

const brands = [
  {name:'Есть решение',file:'white-est-reshenie.svg'},
  {name:'Росатом',file:'rosatom.svg'},
  {name:'ТМК',file:'tmk.svg'},
  {name:'Синара',file:'sinara.webp'},
  {name:'Строгоорганик',file:'strogoorganic.webp'},
  {name:'Мотив',file:'motiv.webp'},
];

type Point = {x:number;y:number};

export default function BrandSpotlight() {
  const showcase = useRef<HTMLDivElement>(null);
  const lamp = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLButtonElement | null)[]>([]);
  const pointer = useRef<Point | null>(null);
  const frame = useRef(0);
  const inputType = useRef('mouse');
  const [hovered, setHovered] = useState<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const active = hovered ?? focused ?? selected;

  const aim = useCallback((index: number | null, position?: Point | null) => {
    const root = showcase.current;
    const source = lamp.current;
    const target = index === null
      ? root?.closest('.hero')?.querySelector('h1 em')
      : cards.current[index];
    if (!root || !source || !target) return;
    const box = root.getBoundingClientRect();
    const origin = source.getBoundingClientRect();
    const bounds = target.getBoundingClientRect();
    const tx = position?.x ?? bounds.left + bounds.width * .55;
    const ty = position?.y ?? bounds.top + bounds.height / 2;
    const x = origin.left - box.left;
    const y = origin.top - box.top;
    root.style.setProperty('--beam-x', `${x}px`);
    root.style.setProperty('--beam-y', `${y}px`);
    root.style.setProperty('--beam-length', `${Math.hypot(tx - origin.left, ty - origin.top)}px`);
    root.style.setProperty('--beam-angle', `${Math.atan2(ty - origin.top, tx - origin.left)}rad`);
    if (index !== null && stage.current) {
      const card = cards.current[index]!;
      // Invert the stage's 2D rotation so the light stays under the cursor.
      const inverse = new DOMMatrix(getComputedStyle(stage.current).transform).inverse();
      const local = new DOMPoint(tx - bounds.left - bounds.width / 2, ty - bounds.top - bounds.height / 2).matrixTransform(inverse);
      card.style.setProperty('--light-x', `${local.x + card.offsetWidth / 2}px`);
      card.style.setProperty('--light-y', `${local.y + card.offsetHeight / 2}px`);
    }
  }, []);

  useEffect(() => {
    const update = () => aim(active, hovered === null ? null : pointer.current);
    update();
    const observer = new ResizeObserver(update);
    if (showcase.current) observer.observe(showcase.current.closest('.hero')!);
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, {passive:true});
    void document.fonts.ready.then(update);
    return () => { observer.disconnect(); window.removeEventListener('resize', update); window.removeEventListener('scroll', update); cancelAnimationFrame(frame.current); };
  }, [active, hovered, aim]);

  return <div ref={showcase} className={`brand-showcase ${active === null ? 'is-resting' : 'is-tracking'}`} aria-label="Делаем бренды заметными — интерактивная витрина">
    <div className="brand-beam" aria-hidden="true" />
    <div ref={lamp} className="brand-lamp" aria-hidden="true">
      <div className="lamp-mount"/>
      <div className="lamp-head"><div className="lamp-body"/><div className="lamp-yoke"/><div className="lamp-door lamp-door-top"/><div className="lamp-door lamp-door-bottom"/><div className="lamp-lens"/></div>
    </div>
    <div ref={stage} className="brand-stage" onPointerLeave={() => { pointer.current = null; setHovered(null); }}>
      <div className="brand-echo" aria-hidden="true"/>
      <div className="brand-grid">
        {brands.map((brand, i) => <button type="button" key={brand.name}
          ref={node => { cards.current[i] = node; }}
          className={`brand-tile ${active === i ? 'is-active' : ''}`}
          aria-label={`Подсветить бренд «${brand.name}»`}
          aria-pressed={active === i}
          onPointerDown={e => { inputType.current = e.pointerType; }}
          onPointerEnter={e => { if (e.pointerType !== 'touch') {pointer.current = {x:e.clientX,y:e.clientY}; setHovered(i);} }}
          onPointerMove={e => { if (e.pointerType !== 'touch') { pointer.current = {x:e.clientX,y:e.clientY}; cancelAnimationFrame(frame.current); frame.current = requestAnimationFrame(() => aim(i, pointer.current)); } }}
          onPointerLeave={() => {cancelAnimationFrame(frame.current); pointer.current = null; setHovered(null);}}
          onFocus={e => { if (e.currentTarget.matches(':focus-visible')) setFocused(i); }} onBlur={() => setFocused(null)}
          onClick={e => {
            if (inputType.current === 'touch') {
              setFocused(null);
              setHovered(null);
              setSelected(current => current === i ? null : i);
            } else if (e.detail === 0) setFocused(i);
          }}>
          <span className="brand-id" aria-hidden="true">MD / 0{i + 1}</span>
          <img className="brand-logo" src={`${import.meta.env.BASE_URL}images/clients/${brand.file}`} alt={brand.name} draggable={false}/>
          <span className="brand-logo-light" aria-hidden="true"><img className="brand-logo" src={`${import.meta.env.BASE_URL}images/clients/${brand.file}`} alt="" draggable={false}/></span>
          <span className="brand-corner" aria-hidden="true"/>
        </button>)}
      </div>
    </div>
  </div>;
}
