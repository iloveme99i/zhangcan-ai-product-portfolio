"use client";
import { useEffect, useState } from "react";

const threadViews=[
  {name:"捕获",eyebrow:"新上下文",title:"发布范围发生变化",text:"会议中确认移除第一版说话人识别，发布日期保持不变。"},
  {name:"变化",eyebrow:"影响分析",title:"5 项内容需要同步",text:"PRD、测试用例、定价页、发布文章与演示脚本受到影响。"},
  {name:"审批",eyebrow:"高风险动作",title:"逐项确认后再执行",text:"更改负责人、关键里程碑与外部通知不会被自动执行。"},
  {name:"验证",eyebrow:"执行回执",title:"行动是否真正完成",text:"记录执行结果、失败原因和回滚入口，形成可审计闭环。"},
];
export function ThreadlineDemo(){const[a,setA]=useState(0);const[ok,setOk]=useState(false);const v=threadViews[a];return <div className="context-demo"><aside><b><i>T</i> Threadline</b>{threadViews.map((x,i)=><button className={a===i?"active":""} onClick={()=>{setA(i);setOk(false)}} key={x.name}><span>0{i+1}</span>{x.name}</button>)}</aside><div className="context-screen"><header><span>AI 会议总结产品</span><small>变化执行链</small></header><main key={a}><p>{v.eyebrow}</p><h3>{v.title}</h3><p className="demo-description">{v.text}</p><div className={`evidence-card ${ok?"approved":""}`}><small>原始证据 · 产品例会录音 02:14</small><blockquote>“确定了，第一版不做说话人识别，但发布日期不变。”</blockquote><div><span>{ok?"已进入待执行队列":"确认前不会改动项目"}</span><button onClick={()=>setOk(!ok)}>{ok?"撤销":"确认行动"}</button></div></div></main></div></div>}

const zhixuSteps=[
  {name:"导入",title:"先保存来源，再提取岗位",text:"支持 JD 文本、链接、截图、PDF 与 CSV；低置信字段留空等待确认。",list:["原始来源与快照","结构化岗位字段","不确定项待确认"]},
  {name:"判断",title:"用要求—证据矩阵解释匹配",text:"先检查硬性条件、截止时间与风险，再关联用户已确认的经历证据。",list:["硬条件规则","个人证据映射","可解释建议"]},
  {name:"推进",title:"把岗位变成可跟踪机会",text:"对比真实岗位，管理投递阶段，并把任务、简历版本与面试复盘关联起来。",list:["2—4 岗位对比","投递阶段历史","任务与材料"]},
];
export function ZhixuDemo(){const[a,setA]=useState(0);const s=zhixuSteps[a];return <div className="qinggang-demo"><div className="qinggang-demo-top"><b>职序 ZHIXU</b><span>个人求职工作台</span></div><div className="qinggang-stepper">{zhixuSteps.map((x,i)=><button className={a===i?"active":""} onClick={()=>setA(i)} key={x.name}><i>{i+1}</i><span>{x.name}</span></button>)}</div><div key={a} className="qinggang-screen"><div><p>步骤 0{a+1}</p><h3>{s.title}</h3><span>{s.text}</span></div><ul>{s.list.map((x,i)=><li key={x}><i>{String(i+1).padStart(2,"0")}</i><b>{x}</b><span>查看规则与当前状态 →</span></li>)}</ul></div></div>}

const signalViews=[
  {name:"收集",title:"保留完整材料",text:"粘贴内容时保留原文与来源，不急着把一段有语境的材料拆碎。"},
  {name:"整理",title:"结构化，但不改变原意",text:"AI 可以调整标题、顺序和区块，不能发明内容或输出推理过程。"},
  {name:"行动",title:"把信息放回使用场景",text:"设置标签、截止时间、子任务，或用文本、待办、折叠块继续编辑。"},
];
export function SignalDemo(){const[a,setA]=useState(0);const v=signalViews[a];return <div className="signal-demo"><aside><b>Signal</b>{signalViews.map((x,i)=><button className={a===i?"active":""} onClick={()=>setA(i)} key={x.name}><span>0{i+1}</span>{x.name}</button>)}</aside><section key={a}><small>个人收藏条目</small><h3>{v.title}</h3><p>{v.text}</p><article><span>原始来源</span><blockquote>“收藏不是终点。真正重要的是，在需要它的时候能回到完整上下文。”</blockquote><footer><i>知识</i><i>产品设计</i><button>确认整理</button></footer></article></section></div>}

export function CaseProgress({sections}:{sections:string[]}){const[active,setActive]=useState(0);useEffect(()=>{const nodes=sections.map((_,i)=>document.getElementById(`section-${i+1}`)).filter(Boolean) as HTMLElement[];const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible)setActive(nodes.indexOf(visible.target as HTMLElement))},{rootMargin:"-18% 0px -58% 0px",threshold:[0,.15,.4]});nodes.forEach(n=>observer.observe(n));return()=>observer.disconnect()},[sections]);return <nav className="case-progress" aria-label="案例目录"><i style={{transform:`scaleY(${(active+1)/sections.length})`}}/>{sections.map((s,i)=><a className={active===i?"active":""} href={`#section-${i+1}`} key={s}><span>0{i+1}</span>{s}</a>)}</nav>}
