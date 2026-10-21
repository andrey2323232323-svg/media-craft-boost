import { useCallback, useEffect, useLayoutEffect, useId, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Youtube } from 'lucide-react';
import { cases } from '@/lib/cases';
import type { CaseImage } from '@/lib/case-media';
import './CaseStudies.css';
import CeremonyGallery from './CeremonyGallery';

function Artwork({image,className='',fit='slice'}:{image:CaseImage;className?:string;fit?:'slice'|'meet'}) {
 const cropId=useId();
 return <svg className={className} viewBox={image.crop.join(' ')} role="img" aria-label={image.caption} preserveAspectRatio={`xMidYMid ${fit}`}><defs><clipPath id={cropId}><rect x={image.crop[0]} y={image.crop[1]} width={image.crop[2]} height={image.crop[3]}/></clipPath></defs><image clipPath={`url(#${cropId})`} href={`${import.meta.env.BASE_URL}images/${image.file}`} width={image.width} height={image.height}/></svg>;
}

export default function CaseStudies() {
 const [viewport,api]=useEmblaCarousel({loop:true,align:'start',watchResize:false,watchDrag:(_,event)=> !(event.target as HTMLElement).closest?.('a,button')});
 const [selected,setSelected]=useState(0);
 const [height,setHeight]=useState<number>();
 const track=useRef<HTMLDivElement>(null);
 const select=useCallback(()=>{if(api)setSelected(api.selectedScrollSnap());},[api]);
 useEffect(()=>{if(!api)return; select(); api.on('select',select).on('reInit',select); return ()=>{api.off('select',select).off('reInit',select);};},[api,select]);
 useEffect(()=>{if(!api)return; const sync=()=>{const m=location.hash.match(/^#case-(\d+)$/);if(m){const i=cases.findIndex(c=>c.number===m[1]);if(i>=0)api.scrollTo(i,true);}};sync();window.addEventListener('hashchange',sync);return()=>window.removeEventListener('hashchange',sync);},[api]);
 useEffect(()=>{if(!api||!track.current)return; const container=track.current.parentElement!;let width=container.clientWidth;const observer=new ResizeObserver(()=>{const next=container.clientWidth;if(next!==width){width=next;api.reInit();}});observer.observe(container);return()=>observer.disconnect();},[api]);
 useLayoutEffect(()=>{const card=track.current?.children[selected] as HTMLElement|undefined;if(!card)return;const measure=()=>setHeight(card.getBoundingClientRect().height);measure();const observer=new ResizeObserver(measure);observer.observe(card);return()=>observer.disconnect();},[selected]);
 return <section id="cases" className="section cases-section">
  <div className="wrap">
   <div className="section-heading"><span className="section-index">02 /</span><h2>НАШИ КЕЙСЫ</h2><p>Реальные проекты, контент и результаты. Листайте кейсы — знакомьтесь с нашей работой.</p></div>
   <div className="case-slider-toolbar"><nav className="case-index" aria-label="Выбрать кейс">{cases.map((c,i)=><button type="button" aria-pressed={selected===i} aria-controls="case-viewport" onClick={()=>api?.scrollTo(i)} key={c.number}><span>{c.number}</span>{c.title}</button>)}</nav><div className="slider-controls"><span aria-live="polite" aria-atomic="true">{String(selected+1).padStart(2,'0')} <small>/ {String(cases.length).padStart(2,'0')}</small></span><button type="button" onClick={()=>api?.scrollPrev()} aria-label="Предыдущий кейс"><ArrowLeft size={20}/></button><button type="button" onClick={()=>api?.scrollNext()} aria-label="Следующий кейс"><ArrowRight size={20}/></button></div></div>
   <div id="case-viewport" ref={viewport} className="case-viewport" style={{height}} role="region" aria-roledescription="карусель" aria-label="Кейсы агентства" tabIndex={0} onKeyDown={e=>{if(e.key==='ArrowLeft'){e.preventDefault();api?.scrollPrev();}if(e.key==='ArrowRight'){e.preventDefault();api?.scrollNext();}}}>
    <div className="case-track" ref={track}>{cases.map((c,i)=>{const d=c.details;const media=c.media;return <div className="case-slide" role="group" aria-roledescription="слайд" aria-label={`${i+1} из ${cases.length}: ${c.title}`} aria-hidden={selected!==i} {...(selected!==i?{inert:''}:{})} key={c.number}>
     <article id={`case-${c.number}`} className={`case-study study-${c.number==='08'?7:c.number==='06'?5:i} ${c.ceremony?'study-ceremony':''}`} aria-labelledby={`case-title-${c.number}`}>
      <div className="study-hero"><Artwork image={media.cover} className="study-art"/><div className="study-shade"/>
       <div className="study-intro"><span className="study-kicker">КЕЙС / {c.number}<span className="study-company">{c.company}</span></span><h3 id={`case-title-${c.number}`}>{c.link?<a href={c.link} target="_blank" rel="noopener noreferrer">{c.title}<ArrowUpRight aria-hidden="true"/></a>:c.title}</h3><p>{d.subtitle}</p><ul className="study-tags">{d.tags.map(tag=><li key={tag}>{tag}</li>)}</ul></div>
       {c.link&&<a className="study-platform" href={c.link} target="_blank" rel="noopener noreferrer"><span className="platform-icon">{d.platform==='YouTube'?<Youtube size={26}/>:<ArrowUpRight size={26}/>}</span><span><strong>{d.platform}</strong><span>{d.handle}</span><small>{d.platform==='YouTube'?'Смотреть видео на канале':'Перейти в сообщество'}</small></span><ArrowUpRight size={17}/></a>}
       
      </div>
      {d.metrics.length>0&&<div className="study-results"><h4>Результаты</h4><dl className="study-metrics">{d.metrics.map(([value,label,scope])=><div key={label}><dt>{label}</dt><dd>{value}</dd><span>{scope}</span></div>)}</dl></div>}
      <div className="study-details"><div><h4>Задача</h4><p>{d.task}</p>{d.note&&<p className="study-note">{d.note}</p>}</div><div><h4>{c.formatsOnly?'Форматы проекта':'Что мы сделали'}</h4><ol>{d.work.map((item,n)=><li key={item}><span>{String(n+1).padStart(2,'0')}</span>{item}</li>)}</ol></div></div>
      {c.achievements&&<div className="study-achievements"><h4>Достижения</h4><ul>{c.achievements.map(item=><li key={item}>{item}</li>)}</ul></div>}
      {(c.ceremony||c.galleryTitle)&&<CeremonyGallery photos={media.gallery} title={c.galleryTitle}/>}
     </article>
    </div>;})}</div>
   </div>
   <div className="slider-footer"><span>СТРАТЕГИЯ <ArrowRight aria-hidden="true" size={12}/> КОНТЕНТ <ArrowRight aria-hidden="true" size={12}/> РЕЗУЛЬТАТ</span><div className="slider-controls"><button type="button" onClick={()=>api?.scrollPrev()} aria-label="Листать назад"><ArrowLeft size={18}/></button><button type="button" onClick={()=>api?.scrollNext()} aria-label="Листать вперёд">Следующий кейс <ArrowRight size={18}/></button></div></div>
  </div>
 </section>;
}

