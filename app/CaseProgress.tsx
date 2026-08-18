"use client";
import { useEffect, useRef, useState } from "react";

export default function CaseProgress({sections}:{sections:string[]}){
  const [active,setActive]=useState(0);
  const locked=useRef({index:-1,until:0});
  useEffect(()=>{
    const nodes=sections.map((_,i)=>document.getElementById(`section-${i+1}`)).filter(Boolean) as HTMLElement[];
    const update=()=>{
      if(Date.now()<locked.current.until){setActive(locked.current.index);return;}
      const threshold=window.innerWidth<=800?150:260;
      let current=0;
      nodes.forEach((node,index)=>{if(node.getBoundingClientRect().top<=threshold)current=index;});
      setActive(current);
    };
    update();
    const hashIndex=sections.findIndex((_,index)=>window.location.hash===`#section-${index+1}`);
    const hashTimer=window.setTimeout(()=>{
      if(hashIndex>=0){nodes[hashIndex]?.scrollIntoView();setActive(hashIndex);}
    },120);
    window.addEventListener("scroll",update,{passive:true});
    window.addEventListener("resize",update);
    return()=>{window.clearTimeout(hashTimer);window.removeEventListener("scroll",update);window.removeEventListener("resize",update);};
  },[sections]);
  return <nav className="case-progress" aria-label="案例目录"><i style={{transform:`scaleY(${(active+1)/sections.length})`}}/>{sections.map((section,index)=><a className={active===index?"active":""} href={`#section-${index+1}`} onClick={()=>{locked.current={index,until:Date.now()+900};setActive(index);}} key={section}><span>0{index+1}</span>{section}</a>)}</nav>;
}
