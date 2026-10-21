import { useState } from 'react';
import { Pause, Play } from 'lucide-react';
const clients = [
 {name:'ТМК',file:'',source:'Предоставленный скриншот ЧТПЗ / ТМК'},
 {name:'РОСАТОМ',file:'rosatom.svg',source:'https://logo-teka.com/en/rosatom/'},
 {name:'СИНАРА',file:'sinara.webp',source:'https://www.sinara-group.com/press-center/'},
 {name:'РОССИЯ 24',file:'russia24.svg',source:'https://commons.wikimedia.org/wiki/File:Rossiya-24_Logo.svg'},
 {name:'Кинофестиваль «Одна шестая»',file:'one-sixth.webp',source:'https://optim.tildacdn.com/tild3163-3532-4665-b830-316136633839/-/format/webp/1_6_fest_logo2-07.png.webp'},
 {name:'МОТИВ',file:'motiv.webp',source:'https://img.motivtelecom.ru/docs/5e574f08238eb.png'},
 {name:'Строгоорганик',file:'strogoorganic.webp',source:'https://strogoorganic.ru/'},
];
function Logo({client}:{client:typeof clients[number]}){return <div className="client-logo">{client.file?<img src={`${import.meta.env.BASE_URL}images/clients/${client.file}`} alt={client.name} loading="eager"/>:<div className="tmk-client"><svg viewBox="60 64 61 60" role="img" aria-label="ТМК"><image href={`${import.meta.env.BASE_URL}images/tmk.webp`} width="1158" height="760"/></svg><span>ТМК</span></div>}</div>;}
export default function ClientsSection(){
 const [paused,setPaused]=useState(false);
 return <section id="clients" className="clients-section wrap"><div className="section-heading"><span className="section-index">03 /</span><h2>НАШИ КЛИЕНТЫ</h2><button className="clients-motion-toggle" type="button" onClick={()=>setPaused(!paused)} aria-label={paused?'Продолжить движение логотипов':'Приостановить движение логотипов'} aria-pressed={paused}>{paused?<Play size={16}/>:<Pause size={16}/>}</button></div><div className="clients-marquee"><div className={`clients-track ${paused?'is-paused':''}`}>{[0,1].map(copy=><div className="clients-group" key={copy} aria-hidden={copy===1?true:undefined}>{clients.map(client=><Logo client={client} key={client.name}/>)}</div>)}</div></div></section>;
}
