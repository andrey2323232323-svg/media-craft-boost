import { useEffect, useState } from 'react';
import { Play } from 'lucide-react';
type Clip = {title:string;file:string;poster:string};
export default function CaseVideos({videos,active}:{videos:Clip[];active:boolean}){
 const [playing,setPlaying]=useState<number|null>(null);
 useEffect(()=>{if(!active)setPlaying(null);},[active]);
 return <div className="case-videos" onKeyDown={e=>e.stopPropagation()}><h4>Смотреть ролики</h4><div className="case-video-grid">{videos.map((v,i)=><figure key={v.file}><div className="case-video-frame">{active&&playing===i?<video controls autoPlay playsInline preload="none" poster={`${import.meta.env.BASE_URL}${v.poster}`} src={`${import.meta.env.BASE_URL}${v.file}`} aria-label={v.title}/>:<button type="button" onClick={()=>setPlaying(i)} aria-label={`Смотреть: ${v.title}`}><img src={`${import.meta.env.BASE_URL}${v.poster}`} alt="" loading="lazy"/><span><Play size={28}/></span></button>}</div><figcaption><span>{String(i+1).padStart(2,'0')}</span>{v.title}</figcaption></figure>)}</div></div>;
}
