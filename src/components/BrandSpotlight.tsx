import { useState, type CSSProperties } from 'react';
import './BrandSpotlight.css';

const brands = ['Орбита', 'Контур', 'Импульс', 'Поток', 'Спектр', 'Точка'];

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
        {brands.map((brand, i) => <button type="button" key={brand}
          className={`brand-tile ${active === i ? 'is-active' : ''}`}
          aria-label={`Подсветить абстрактный бренд «${brand}»`}
          aria-pressed={active === i}
          onPointerEnter={e => { if (e.pointerType !== 'touch') setHovered(i); }}
          onFocus={() => setFocused(i)} onBlur={() => setFocused(null)}
          onClick={() => setSelected(selected === i ? null : i)}>
          <span className="brand-id" aria-hidden="true">MD / 0{i + 1}</span>
          <svg className="brand-symbol" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            {i === 0 && <><ellipse cx="50" cy="50" rx="34" ry="17" transform="rotate(-35 50 50)"/><ellipse cx="50" cy="50" rx="34" ry="17" transform="rotate(35 50 50)"/><circle cx="50" cy="50" r="7" fill="currentColor" stroke="none"/></>}
            {i === 1 && <><path d="M20 70V30h40v40H20Zm20-20V10h40v40H40Z"/><path d="M40 70v20h40V50"/></>}
            {i === 2 && <><path d="m18 68 24-38v40l24-40v40l17-27" strokeWidth="8"/><circle cx="81" cy="22" r="5" fill="currentColor" stroke="none"/></>}
            {i === 3 && <><path d="M14 35c24-30 48 30 72 0M14 50c24-30 48 30 72 0M14 65c24-30 48 30 72 0" strokeWidth="7"/></>}
            {i === 4 && <><path d="m50 12 34 62H16L50 12Z"/><path d="m50 30 24 44H26l24-44Zm0 18 14 26H36l14-26Z"/></>}
            {i === 5 && <><circle cx="50" cy="50" r="29"/><circle cx="50" cy="50" r="13" fill="currentColor" stroke="none"/><path d="M50 10V0m0 100V90M10 50H0m100 0H90"/></>}
          </svg>
          <span className="brand-name">{brand}</span>
          <span className="brand-corner" aria-hidden="true" />
        </button>)}
      </div>
    </div>
    <span className="brand-hint" aria-hidden="true">НАВЕДИТЕ. СТАНЬТЕ ЗАМЕТНЕЕ.</span>
  </div>;
}
