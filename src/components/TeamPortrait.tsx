import { useId } from 'react';
// Coordinates in a normalized 640px square. Each crop is 4:4.5, matching the card.
const crops: Record<string, [number, number, number, number]> = {
 'andrey-vkusov':[120,365,270,303.75],
 'victoria-bordonova':[0,0,568,639],
 'daria-solodilova':[60,0,520,585],
 'ekaterina-anisimova':[36,0,568,639],
 'sandra-elagina':[145,55,250,281.25],
 'alexey-merkulov':[45,0,568,639],
 'maria-osipova':[45,350,400,450],
 'evgeny-vashurkin':[170,50,330,371.25],
 'ivan-bondyrev':[30,0,568,639],
 'evgeny-entin':[0,0,568,639],
};
export default function TeamPortrait({photo,name}:{photo:string;name:string}){
 const id=useId();const crop=crops[photo]??[0,0,568,639];const file=photo==='andrey-vkusov'?'andrey-vkusov-new.webp':photo==='alexey-merkulov'?'alexey-merkulov-shirt.webp':photo==='ekaterina-anisimova'?'ekaterina-anisimova-enhanced.webp':`${photo}.webp`;
 return <svg className="team-portrait" viewBox={crop.join(' ')} role="img" aria-label={name}><defs><clipPath id={id}><rect x={crop[0]} y={crop[1]} width={crop[2]} height={crop[3]}/></clipPath></defs><image clipPath={`url(#${id})`} href={`${import.meta.env.BASE_URL}images/team/${file}`} width="640" height={photo==='maria-osipova'?640*2560/1441:photo==='andrey-vkusov'?640*1280/720:640} preserveAspectRatio="none"/></svg>;
}

