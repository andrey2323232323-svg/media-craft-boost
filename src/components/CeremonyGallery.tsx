import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Expand } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import type { CaseImage } from '@/lib/case-media';

export default function CeremonyGallery({ photos, title = "Церемония награждения" }: { photos: CaseImage[]; title?: string }) {
  const [index, setIndex] = useState<number | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const touch = useRef<{x:number;y:number} | null>(null);
  const move = (direction: number) => setIndex(current => current === null ? null : (current + direction + photos.length) % photos.length);
  const photo = index === null ? null : photos[index];
  return <>
    <div className="ceremony-photos" aria-label={title}>
      {photos.map((item, i) => <button type="button" key={item.file} onClick={event => {trigger.current = event.currentTarget; setIndex(i);}} aria-label={`${item.caption} — открыть галерею`}>
        <img src={`${import.meta.env.BASE_URL}images/${item.file.replace(/\.webp$/, '-thumb.webp')}`} alt={item.caption} loading="lazy" width={item.width} height={item.height}/>
        <span>{item.caption}<Expand size={14}/></span>
      </button>)}
    </div>
    <Dialog open={index !== null} onOpenChange={open => {if (!open) setIndex(null);}}>
      <DialogContent className="ceremony-lightbox" onCloseAutoFocus={event => {event.preventDefault(); trigger.current?.focus();}}
        onKeyDown={event => {if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {event.preventDefault(); event.stopPropagation(); move(event.key === 'ArrowLeft' ? -1 : 1);}}}>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription className="sr-only">Листайте фотографии стрелками или свайпом. Escape — закрыть галерею.</DialogDescription>
        {photo && <><div className="ceremony-viewer" onTouchStart={event => {const p=event.touches[0];touch.current={x:p.clientX,y:p.clientY};}}
          onTouchEnd={event => {const start=touch.current;touch.current=null;if(!start)return;const p=event.changedTouches[0];const dx=p.clientX-start.x;const dy=p.clientY-start.y;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy))move(dx<0?1:-1);}} onTouchCancel={()=>{touch.current=null;}}>
          <img src={`${import.meta.env.BASE_URL}images/${photo.file}`} alt={photo.caption}/>
        </div><div className="ceremony-viewer-footer"><button type="button" onClick={()=>move(-1)} aria-label="Предыдущая фотография"><ArrowLeft size={22}/></button><p aria-live="polite"><strong>{photo.caption}</strong><span>{(index ?? 0)+1} / {photos.length}</span></p><button type="button" onClick={()=>move(1)} aria-label="Следующая фотография"><ArrowRight size={22}/></button></div></>}
      </DialogContent>
    </Dialog>
  </>;
}
