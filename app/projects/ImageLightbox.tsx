"use client";

import {ReactNode,useEffect,useState} from "react";

export default function ImageLightbox({src,alt,className,children}:{src:string;alt:string;className:string;children:ReactNode}){
  const [open,setOpen]=useState(false);

  useEffect(()=>{
    if(!open)return;
    const previous=document.body.style.overflow;
    const close=(event:KeyboardEvent)=>{if(event.key==="Escape")setOpen(false)};
    document.body.style.overflow="hidden";
    window.addEventListener("keydown",close);
    return()=>{document.body.style.overflow=previous;window.removeEventListener("keydown",close)};
  },[open]);

  return <>
    <button type="button" className={className} onClick={()=>setOpen(true)} aria-label={`放大查看：${alt}`}>{children}</button>
    {open&&<div className="image-lightbox" role="dialog" aria-modal="true" aria-label={`${alt}大图预览`} onClick={()=>setOpen(false)}>
      <header onClick={event=>event.stopPropagation()}>
        <button type="button" onClick={()=>setOpen(false)}>← 返回作品集</button>
        <span>{alt}</span>
        <button type="button" onClick={()=>setOpen(false)}>关闭 ×</button>
      </header>
      <div className="image-lightbox-stage" onClick={event=>event.stopPropagation()}><img src={src} alt={alt}/></div>
      <footer>点击黑色背景或按 Esc 返回作品集</footer>
    </div>}
  </>;
}
