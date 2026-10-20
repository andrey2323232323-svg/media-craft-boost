import { useState, type CSSProperties } from 'react';
import './BrandSpotlight.css';

const brands = [
  {name:'Россия 24',file:'russia24.svg',kind:'russia'},
  {name:'Росатом',file:'rosatom.svg',kind:'white'},
  {name:'ТМК',file:'tmk.svg',kind:'white'},
  {name:'Синара',file:'sinara.png',kind:'white'},
  {name:'Строгоорганик',file:'strogoorganic.png',kind:'white'},
  {name:'Росреестр',file:'rosreestr.webp',kind:'paper'},
];

export default function BrandSpotlight() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const active = hovered ?? focused ?? selected;
  const position = active ?? 1;
  const style = {
    '--spot-x': `${17 + (position % 3) * 33}%`,
    '--spot-y': `${position < 3 ? 27 : 76}%`,
  } as CSSProperties;

  return <div className="brand-showcase" aria-label="Делаем бренды заметными — интерактивная витрина">
    <div className="brand-orb" aria-hidden="true" />
    <div className={`brand-stage ${active !== null ? 'is-lit' : ''}`} style={style}
      onPointerLeave={() => setHovered(null)}>
      <div className="brand-echo" aria-hidden="true" />
      <div className="brand-light" aria-hidden="true" />
      <div className="brand-grid">
        {brands.map((brand, i) => <button type="button" key={brand.name}
          className={`brand-tile ${active === i ? 'is-active' : ''}`}
          aria-label={`Подсветить бренд «${brand.name}»`}
          aria-pressed={active === i}
          onPointerEnter={e => { if (e.pointerType !== 'touch') setHovered(i); }}
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

