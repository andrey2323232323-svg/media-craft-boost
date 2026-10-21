import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import './BrandSpotlight.css';

const brands = [
  {name:'Россия 24',file:'russia24.svg',kind:'russia'},
  {name:'Росатом',file:'rosatom.svg',kind:'white'},
  {name:'ТМК',file:'tmk.svg',kind:'white'},
  {name:'Синара',file:'sinara.webp',kind:'white'},
  {name:'Строгоорганик',file:'strogoorganic.webp',kind:'white'},
  {name:'Мотив',file:'motiv.webp',kind:'white'},
];

export default function BrandSpotlight() {
  const showcase = useRef<HTMLDivElement>(null);
  const lamp = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLButtonElement | null)[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const active = hovered ?? focused ?? selected;
  const aim = useCallback((index: number, pointer?: {x:number;y:number}) => {
    const root = showcase.current;
    const bulb = lamp.current;
    const card = cards.current[index];
    if (!root || !bulb || !card) return;
    const box = root.getBoundingClientRect();
    const source = bulb.getBoundingClientRect();
    const target = card.getBoundingClientRect();
    const x = source.left + source.width / 2 - box.left;
    const y = source.top + source.height / 2 - box.top;
    // Keep the beam anchored to the brand, with subtle tracking inside its card.
    const tx = target.left + target.width / 2;
    const ty = target.top + target.height / 2;
    const dx = tx + (pointer ? (pointer.x - tx) * .3 : 0) - box.left - x;
    const dy = ty + (pointer ? (pointer.y - ty) * .3 : 0) - box.top - y;
    root.style.setProperty('--beam-x', `${x}px`);
    root.style.setProperty('--beam-y', `${y}px`);
    root.style.setProperty('--beam-length', `${Math.hypot(dx, dy)}px`);
    root.style.setProperty('--beam-angle', `${Math.atan2(dy, dx)}rad`);
  }, []);
  useEffect(() => {
    if (active === null) return;
    const update = () => aim(active);
    update();
    const observer = new ResizeObserver(update);
    if (showcase.current) observer.observe(showcase.current);
    return () => observer.disconnect();
  }, [active, aim]);
  const position = active ?? 1;
  const style = {
    '--spot-x': `${17 + (position % 3) * 33}%`,
    '--spot-y': `${position < 3 ? 27 : 76}%`,
  } as CSSProperties;

  return <div ref={showcase} className={`brand-showcase ${active !== null ? 'has-beam' : ''}`} aria-label="Делаем бренды заметными — интерактивная витрина">
    <div className="brand-beam" aria-hidden="true" />
    <div ref={lamp} className="brand-orb" aria-hidden="true" />
    <div className={`brand-stage ${active !== null ? 'is-lit' : ''}`} style={style}
      onPointerLeave={() => setHovered(null)}>
      <div className="brand-echo" aria-hidden="true" />
      <div className="brand-light" aria-hidden="true" />
      <div className="brand-grid">
        {brands.map((brand, i) => <button type="button" key={brand.name}
          ref={node => { cards.current[i] = node; }}
          className={`brand-tile ${active === i ? 'is-active' : ''}`}
          aria-label={`Подсветить бренд «${brand.name}»`}
          aria-pressed={active === i}
          onPointerEnter={e => { if (e.pointerType !== 'touch') setHovered(i); }}
          onPointerMove={e => { if (e.pointerType !== 'touch') aim(i, {x:e.clientX,y:e.clientY}); }}
          onFocus={() => setFocused(i)} onBlur={() => setFocused(null)}
          onClick={() => setSelected(selected === i ? null : i)}>
          <span className="brand-id" aria-hidden="true">MD / 0{i + 1}</span>
          <img className={`brand-logo brand-logo--${brand.kind}`} src={`${import.meta.env.BASE_URL}images/clients/${brand.file}`} alt={brand.name} draggable={false}/>
          <span className="brand-corner" aria-hidden="true" />
        </button>)}
      </div>
    </div>
    <span className="brand-hint" aria-hidden="true">НАВЕДИТЕ. СТАНЬТЕ ЗАМЕТНЕЕ.</span>
  </div>;
}

