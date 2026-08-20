import CaseProgress from "../CaseProgress";
import { sitePath as path } from "../site-path";

type StoryBlock={label:string;title:string;body:string};
type EvidenceItem={meta:string;title:string;detail:string};
type StoryMarker={x:number;y:number;label:string};
type StoryMedia={src:string;alt:string;caption:string;markers?:StoryMarker[]};
type OwnershipItem={label:string;title:string;detail:string};
type ArtifactItem={eyebrow:string;title:string;meta:string;items:string[]};
type ComparisonTable={headers:[string,string];rows:[string,string][]};
type StorySection={label:string;title:string;intro?:string;blocks:StoryBlock[];evidence?:EvidenceItem[];media?:StoryMedia[];ownership?:OwnershipItem[];artifact?:ArtifactItem;comparison?:ComparisonTable;demo?:boolean};
type ProductLink={label:string;url?:string;note:string};
export type CaseData={
  name:string;index:string;next:{name:string;href:string};cover:string;kicker:string;tagline:string;summary:string;
  role:string;nature:string;user:string;stage:string;facts:[string,string][];story:StorySection[];
  demo:"zhixu"|"threadline"|"signal";demoIntro:string;productImage:string;imageNote:string;links:ProductLink[];
};

export default function ProjectCase({d}:{d:CaseData}){
  const sections=d.story.map((section)=>section.label);
  return <main className={`case-page ${d.demo}-case`}>
    <header className="case-nav"><a href={path("/")}>← 返回首页</a><span>{d.index} / {d.name}</span><a href={path(`${d.next.href}/`)}>下一项目：{d.next.name} →</a></header>
    <aside className="case-rail"><div><b>{d.name}</b><span>CASE {d.index}</span></div><CaseProgress sections={sections}/><div className="case-rail-links">{d.links.map(link=>link.url?<a key={link.label} href={link.url} target="_blank" rel="noreferrer">{link.label} ↗<small>{link.note}</small></a>:<p key={link.label}>{link.label}<small>{link.note}</small></p>)}</div></aside>
    <div className="case-mobile-nav"><CaseProgress sections={sections}/></div>
    <section className="case-hero">
      <div className="case-cover"><a className="case-cover-image" href={path(d.cover)} target="_blank" rel="noreferrer" aria-label={`查看 ${d.name} 产品界面原图`}><img src={path(d.cover)} alt={`${d.name} 产品界面`}/></a><span className="case-cover-hint">横向滑动 / 点击查看原图 →</span></div>
      <div className="case-hero-main">
        <p className="case-kicker">{d.kicker}</p><h1>{d.name}</h1><h2>{d.tagline}</h2><p className="case-summary">{d.summary}</p>
        {d.demo==="threadline"&&<div className="case-agent-preview" aria-label="Threadline Agent 工作流程动态示意"><header><span>AGENT FLOW / LIVE</span><b>检测到变化：报告新增参考文献要求</b></header><ol><li><i/>接收材料</li><li><i/>识别变化</li><li><i/>核对证据</li><li><i/>人工确认</li><li><i/>写入记录</li></ol></div>}
        <dl className="case-facts"><div><dt>我的角色</dt><dd>{d.role}</dd></div><div><dt>项目性质</dt><dd>{d.nature}</dd></div><div><dt>目标用户</dt><dd>{d.user}</dd></div><div><dt>当前状态</dt><dd>{d.stage}</dd></div></dl>
      </div>
    </section>
    <section className="case-snapshot">
      <p>项目概览</p><div>{d.facts.map(([label,value])=><dl key={label}><dt>{label}</dt><dd>{value}</dd></dl>)}</div>
    </section>
    <div className="case-body"><article className="case-story">
      {d.story.map((section,index)=><section id={`section-${index+1}`} key={section.label}>
        <p className="section-no">{String(index+1).padStart(2,"0")} / {section.label}</p>
        <h2>{section.title}</h2>{section.intro&&<p className="section-intro">{section.intro}</p>}
        {section.blocks.length>0&&<div className={`case-blocks case-blocks-${section.blocks.length}`}>{section.blocks.map((block)=><article className="case-tile" key={block.title}><span>{block.label}</span><h3>{block.title}</h3><p>{block.body}</p></article>)}</div>}
        {section.ownership&&<div className="case-ownership">{section.ownership.map(item=><article key={item.label}><span>{item.label}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div>}
        {section.comparison&&<div className="case-comparison" role="table" aria-label={`${section.label}对照表`}><div className="case-comparison-head" role="row"><b role="columnheader">{section.comparison.headers[0]}</b><b role="columnheader">{section.comparison.headers[1]}</b></div>{section.comparison.rows.map(([before,after])=><div role="row" key={before}><span role="cell">{before}</span><span role="cell">{after}</span></div>)}</div>}
        {section.artifact&&<aside className="case-artifact"><header><span>{section.artifact.eyebrow}</span><b>{section.artifact.meta}</b></header><h3>{section.artifact.title}</h3><ol>{section.artifact.items.map(item=><li key={item}>{item}</li>)}</ol></aside>}
        {section.evidence&&<div className="case-evidence">{section.evidence.map(item=><article key={`${item.meta}-${item.title}`}><span>{item.meta}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div>}
        {section.media&&<div className={`case-media-grid case-media-${section.media.length}`}>{section.media.map(item=><figure key={item.src}><a className="case-media-frame" href={path(item.src)} target="_blank" rel="noreferrer" aria-label={`查看原图：${item.alt}`}><img src={path(item.src)} alt={item.alt}/>{item.markers?.map((marker,index)=><span className="case-marker" style={{left:`${marker.x}%`,top:`${marker.y}%`}} key={`${marker.label}-${index}`}><i>{index+1}</i>{marker.label}</span>)}</a><figcaption>{item.caption}<span>点击查看原图 ↗</span></figcaption></figure>)}</div>}
        {section.demo&&<div className="product-proof"><div className="product-proof-head"><div><span>当前产品界面</span><p>{d.demoIntro}</p></div>{d.links.map(link=>link.url&&<a key={link.label} href={link.url} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div><img src={path(d.productImage)} alt={`${d.name} 当前真实产品界面`}/><footer><span>{d.imageNote}</span><span>2026.08</span></footer></div>}
      </section>)}
    </article></div>
    <footer className="case-footer"><p>下一个项目</p><a href={path(`${d.next.href}/`)}>{d.next.name}<span>↗</span></a></footer>
  </main>;
}
