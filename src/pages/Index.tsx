import { useState } from 'react';
import { ArrowDown, ArrowUp, ArrowUpRight, Menu, X, Target, MessageSquare, Newspaper, Video, Users, CalendarDays, Radio, Plus } from 'lucide-react';
import { CONTACT_EMAIL_URL } from '@/lib/contacts';
import CaseStudies from '@/components/CaseStudies';
import ClientsSection from '@/components/ClientsSection';
import TeamPortrait from '@/components/TeamPortrait';
import BrandSpotlight from '@/components/BrandSpotlight';
import '@/redesign.css';
const team = [
  [
    "Андрей Вкусов",
    "Основатель",
    "andrey-vkusov"
  ],
  [
    "Виктория Бордонова",
    "Арт-директор",
    "victoria-bordonova"
  ],
  [
    "Дарья Солодилова",
    "Продюсер",
    "daria-solodilova"
  ],
  [
    "Екатерина Анисимова",
    "SMM-менеджер",
    "ekaterina-anisimova"
  ],
  [
    "Сандра Елагина",
    "SMM-менеджер",
    "sandra-elagina"
  ],
  [
    "Алексей Меркулов",
    "Видеопродакшен",
    "alexey-merkulov"
  ],
  [
    "Мария Осипова",
    "Эвент-продюсер",
    "maria-osipova"
  ],
  [
    "Евгений Вашуркин",
    "Видеопродакшен",
    "evgeny-vashurkin"
  ],
  [
    "Иван Бондырев",
    "Дизайнер, разработка сайтов",
    "ivan-bondyrev"
  ],
  [
    "Евгений Энтин",
    "Дизайнер",
    "evgeny-entin"
  ]
];
const services = [
 {icon:Target,title:'Таргетированная реклама',text:'Настраиваем и ведём рекламные кампании с прозрачной аналитикой.',tags:'Telegram Ads / VK Ads / Яндекс Директ / YouTube'},
 {icon:MessageSquare,title:'SMM сопровождение',text:'Стратегия, контент-план, создание материалов и работа с комьюнити.',tags:'Стратегия / Контент / Аналитика'},
 {icon:Newspaper,title:'Размещение в СМИ',text:'Публикации в федеральных изданиях. Повышаем узнаваемость и экспертность бренда.',tags:'PR / Медиа / Репутация'},
 {icon:Video,title:'Видеоконтент',text:'Подкасты, шоу и короткие ролики. Полный цикл производства видео для digital-каналов.',tags:'Подкасты / Шоу / Shorts / Reels'},
 {icon:Users,title:'Работа с блогерами',text:'Подбираем авторов под задачи бренда, разрабатываем интеграции и сопровождаем размещения.',tags:'Инфлюенс-маркетинг / Интеграции'},
 {icon:CalendarDays,title:'Организация офлайн мероприятий',text:'От идеи и программы до координации площадки, команды и гостей.',tags:'События / Бренд-мероприятия'},
 {icon:Radio,title:'Прямые трансляции',text:'Организуем эфиры: готовим сценарий, съёмку и техническое сопровождение.',tags:'Мультикамерная съёмка / Онлайн-эфиры'}
];
const nav = [['О нас','#about'],['Что мы делаем','#services'],['Кейсы','#cases'],['Клиенты','#clients'],['Команда','#team'],['Контакты','#contact']];
function CTA({label='Обсудить проект'}:{label?:string}) { return <a className="project-link" href={CONTACT_EMAIL_URL}><span className="arrow-disc"><ArrowUpRight size={23}/></span>{label}</a>; }
function SectionTitle({n,title,text}:{n:string;title:string;text:string}) {return <div className="section-heading"><span className="section-index">{n} /</span><h2>{title}</h2><p>{text}</p></div>}
export default function Index(){
 const [menu,setMenu]=useState(false);
 return <div className="agency"><a className="skip-link" href="#main">К содержанию</a>
 <header className="site-header wrap"><a href="#about" className="wordmark" aria-label="Манчестер Диджитал — главная">МАНЧЕСТЕР<br/>ДИДЖИТАЛ<span>®</span></a><nav className="desktop-nav" aria-label="Основная навигация">{nav.map(([name,url])=><a href={url} key={url}>{name}</a>)}</nav><a className="header-cta" href={CONTACT_EMAIL_URL}>Обсудить проект <ArrowUpRight size={15}/></a><button className="menu-toggle" aria-label={menu?'Закрыть меню':'Открыть меню'} aria-expanded={menu} aria-controls="mobile-nav" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>{menu&&<nav id="mobile-nav" className="mobile-nav" aria-label="Мобильная навигация">{nav.map(([name,url])=><a href={url} key={url} onClick={()=>setMenu(false)}>{name}</a>)}</nav>}</header>
 <main id="main"><section id="about" className="hero wrap"><BrandSpotlight/><div className="hero-copy"><p className="eyebrow"><i/> СТУДИЯ ПРОДВИЖЕНИЯ</p><h1>ДЕЛАЕМ<br/>БРЕНДЫ<br/><em>ЗАМЕТНЫМИ</em><span className="title-dot">.</span></h1><p className="hero-description">Таргет, SMM, видеопродакшен и размещения в СМИ. Комплексный подход к продвижению вашего проекта.</p><CTA/></div><div className="hero-bottom"><span>МАНЧЕСТЕР ДИДЖИТАЛ / DIGITAL & PEOPLE</span><a href="#services">Листайте вниз <ArrowDown aria-hidden="true" size={14}/></a></div></section>
 <div className="ticker" aria-hidden="true"><span>СТРАТЕГИЯ <b><ArrowUpRight aria-hidden="true" size="1em"/></b> КОНТЕНТ <b><ArrowUpRight aria-hidden="true" size="1em"/></b> ЛЮДИ <b><ArrowUpRight aria-hidden="true" size="1em"/></b> СОБЫТИЯ <b><ArrowUpRight aria-hidden="true" size="1em"/></b> РЕЗУЛЬТАТ <b><ArrowUpRight aria-hidden="true" size="1em"/></b></span></div>
 <section id="services" className="section wrap"><SectionTitle n="01" title="ЧТО МЫ ДЕЛАЕМ" text="Соединяем стратегию, контент и технологии. От первого контакта с брендом до долгосрочных отношений с аудиторией."/><div className="services-grid">{services.map((s,i)=><article className="service-card" key={s.title}><div className="service-top"><s.icon size={29} strokeWidth={1.4}/><span>0{i+1}</span></div><h3>{s.title}</h3><p>{s.text}</p><span className="service-tags">{s.tags}</span></article>)}<a href="#contact" className="service-invite"><span>Ваша задача<br/>не вписывается<br/>в список?</span><span className="invite-bottom">Давайте обсудим <ArrowUpRight/></span></a></div></section>
 <CaseStudies/>
 <ClientsSection/>
 <section id="team" className="section wrap"><SectionTitle n="04" title="НАША КОМАНДА" text="Наша команда. Разные специализации, общий подход: вникать в задачу и делать то, что работает."/><div className="team-grid">{team.map(([name,role,photo],i)=><article className="team-card" key={name}><div className={`team-photo ${photo?'has-photo':''}`}>{photo?<TeamPortrait photo={photo} name={name}/>:<><div className="portrait-placeholder" role="img" aria-label={`Место для фото: ${name}`}><span/><i/></div><span className="photo-label">ФОТО СКОРО</span><Plus className="portrait-plus" size={17}/></>}<span className="portrait-number">MD / {String(i+1).padStart(2,'0')}</span></div><h3>{name}</h3><p>{role}</p></article>)}<p className="team-network">Помимо ключевых специалистов, у нас есть пул проверенных профессионалов, которых мы подключаем под конкретные задачи — от небольших креативных проектов до масштабных кампаний и мероприятий.</p></div></section>
 <section id="contact" className="contact-section"><div className="wrap"><p className="eyebrow">05 / ДАВАЙТЕ СОЗДАДИМ</p><h2>ЧТО-ТО КРУТОЕ<br/><em>ВМЕСТЕ</em><span><ArrowUpRight aria-hidden="true" size="1em"/></span></h2><div className="contact-bottom"><p>Расскажите о задачах — мы предложим<br/>решение и рассчитаем бюджет.</p><CTA/></div></div></section></main><footer className="wrap site-footer"><a className="wordmark" href="#about">МАНЧЕСТЕР<br/>ДИДЖИТАЛ<span>®</span></a><span>Стратегия. Контент. Люди.</span><a href={CONTACT_EMAIL_URL}>info@manchesterdigital.ru <ArrowUpRight size={16}/></a><a href="#about">Наверх <ArrowUp aria-hidden="true" size={14}/></a></footer></div>
}


