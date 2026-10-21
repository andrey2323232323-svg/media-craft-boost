const clients = [
 {name:'ТМК',file:'',source:'Предоставленный скриншот ЧТПЗ / ТМК'},
 {name:'РОСАТОМ',file:'rosatom.svg',source:'https://logo-teka.com/en/rosatom/'},
 {name:'СИНАРА',file:'sinara.webp',source:'https://www.sinara-group.com/press-center/'},
 {name:'РОССИЯ 24',file:'russia24.svg',source:'https://commons.wikimedia.org/wiki/File:Rossiya-24_Logo.svg'},
 {name:'Кинофестиваль «Одна шестая»',file:'one-sixth.webp',source:'https://optim.tildacdn.com/tild3163-3532-4665-b830-316136633839/-/format/webp/1_6_fest_logo2-07.png.webp'},
 {name:'МОТИВ',file:'motiv.webp',source:'https://ru.wikipedia.org/wiki/Файл:Motiv_logo.png'},
 {name:'Строгоорганик',file:'strogoorganic.webp',source:'https://strogoorganic.ru/'},
];
export default function ClientsSection(){return <section id="clients" className="clients-section wrap"><div className="section-heading"><span className="section-index">03 /</span><h2>НАШИ КЛИЕНТЫ</h2><p>Бренды и команды, с которыми мы работаем.</p></div><div className="client-logos">{clients.map(client=><div className="client-logo" key={client.name}>{client.file?<img src={`${import.meta.env.BASE_URL}images/clients/${client.file}`} alt={client.name} loading="lazy"/>:<div className="tmk-client"><svg viewBox="60 64 61 60" role="img" aria-label="ТМК"><image href={`${import.meta.env.BASE_URL}images/tmk.webp`} width="1158" height="760"/></svg><span>ТМК</span></div>}</div>)}</div></section>}
