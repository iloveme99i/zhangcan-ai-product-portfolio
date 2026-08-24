"use client";

import {useEffect,useRef,useState} from "react";

const steps=["导入岗位","确认事实","硬性条件","经历证据","投递行动"];
const facts=[
  {name:"毕业年份",value:"2027 届及以后",status:"已明确",confidence:"高",source:"graduate"},
  {name:"实习周期",value:"3 个月以上",status:"已明确",confidence:"高",source:"duration"},
  {name:"工作城市",value:"成都",status:"已明确",confidence:"高",source:"city"},
  {name:"截止时间",value:"原文未说明",status:"原文未提及",confidence:"—",source:"deadline"},
  {name:"到岗时间",value:"原文未说明",status:"需要确认",confidence:"低",source:"arrival"}
];
const conditions=[
  {name:"毕业年份",result:"满足",job:"2027 届及以后",profile:"2029 届本科",method:"确定性规则"},
  {name:"实习周期",result:"待确认",job:"连续实习 3 个月以上",profile:"档案中尚未填写",method:"用户补充"},
  {name:"工作城市",result:"满足",job:"成都现场办公",profile:"当前所在地：成都",method:"确定性规则"}
];
const evidence=[
  {requirement:"AIGC 项目经验",source:"百词斩 AIGC 实习",result:"直接证据",detail:"评测 3000+ 条模型生成结果，参与 Prompt 迭代、Bad Case 治理与人机协同流程。"},
  {requirement:"AI 产品设计",source:"Threadline / 职序",result:"项目证据",detail:"完成 Agent 状态与审批机制设计，并独立推进求职工作台从需求到可运行版本。"},
  {requirement:"数据分析能力",source:"职序 D1 / SQL 数据核验",result:"项目证据",detail:"围绕机会数量与统计样本门槛建立可复现查询；样本不足时不输出趋势判断。"},
  {requirement:"算法建模经验",source:"个人档案未提供",result:"没有依据",detail:"岗位将算法建模列为加分项；档案中没有对应经历，因此不由模型补写。"}
];

export default function ZhixuJourneyDemo(){
  const rootRef=useRef<HTMLElement|null>(null);
  const [step,setStep]=useState(0);
  const [activeSource,setActiveSource]=useState<string|null>(null);
  const [parsed,setParsed]=useState(0);
  const [condition,setCondition]=useState(0);
  const [expandedEvidence,setExpandedEvidence]=useState<number|null>(null);
  const [confirmed,setConfirmed]=useState(false);
  const [duplicateReviewed,setDuplicateReviewed]=useState(false);
  const [taskCreated,setTaskCreated]=useState(false);
  const [actionType,setActionType]=useState("投递");
  const [hasEntered,setHasEntered]=useState(false);
  const [autoPlaying,setAutoPlaying]=useState(true);

  useEffect(()=>{
    if(step!==1){setParsed(0);return;}
    const timers=facts.map((_,index)=>window.setTimeout(()=>setParsed(index+1),180+index*180));
    return()=>timers.forEach(window.clearTimeout);
  },[step]);

  useEffect(()=>{
    const node=rootRef.current;
    if(!node)return;
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){setAutoPlaying(false);return;}
    const observer=new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting){setHasEntered(true);observer.disconnect();}
    },{threshold:.35});
    observer.observe(node);
    return()=>observer.disconnect();
  },[]);

  useEffect(()=>{
    if(!hasEntered||!autoPlaying)return;
    const schedule:(readonly [number,()=>void])[]=[
      [900,()=>{setStep(1);setActiveSource("graduate")}],
      [1500,()=>setActiveSource("duration")],
      [2100,()=>setActiveSource("city")],
      [2700,()=>setActiveSource("arrival")],
      [3300,()=>setActiveSource(null)],
      [3900,()=>setDuplicateReviewed(true)],
      [4500,()=>{setConfirmed(true);setStep(2);setCondition(0)}],
      [6700,()=>{setStep(3);setExpandedEvidence(0)}],
      [9300,()=>{setExpandedEvidence(null);setStep(4)}],
      [10800,()=>setTaskCreated(true)],
      [12200,()=>setAutoPlaying(false)]
    ];
    const timers=schedule.map(([delay,action])=>window.setTimeout(action,delay));
    return()=>timers.forEach(window.clearTimeout);
  },[hasEntered,autoPlaying]);

  const takeControl=()=>setAutoPlaying(false);
  const goTo=(next:number)=>{takeControl();setStep(next)};
  const reset=()=>{setStep(0);setActiveSource(null);setParsed(0);setCondition(0);setExpandedEvidence(null);setConfirmed(false);setDuplicateReviewed(false);setTaskCreated(false);setActionType("投递");setHasEntered(true);setAutoPlaying(true)};

  return <section className="zhixu-journey" aria-label="职序五步交互演示" ref={rootRef}>
    <header className="zhixu-journey-head">
      <div><span>交互演示 · 使用模拟岗位和模拟用户档案</span><h3>从一份 JD 到可执行的投递行动</h3></div>
      <div className="zhixu-auto-control"><small className={autoPlaying?"playing":""}><i/>{autoPlaying?"自动演示中 · 点击任意步骤接管":"可点击任意步骤查看"}</small><button type="button" onClick={reset}>重新演示 ↺</button></div>
    </header>
    <nav className="zhixu-steps" aria-label="演示步骤">
      {steps.map((name,index)=><button type="button" aria-current={index===step?"step":undefined} className={index===step?"active":index<step?"done":""} onClick={()=>goTo(index)} key={name}><i>{index<step?"✓":index+1}</i><span>{name}</span></button>)}
    </nav>
    <div className="zhixu-demo-workspace">
      <aside className="zhixu-jd">
        <header><span>模拟岗位原文</span><b>AI 产品实习生</b><small>某互联网公司 · 成都</small></header>
        <p>参与 AI 产品需求分析、效果评测与迭代，协同算法和研发推进产品落地。</p>
        <p className={activeSource==="graduate"?"source-active":""}>面向 <mark>2027 届及以后</mark>在校生，<span className={activeSource==="city"?"source-active-inline":""}>工作地点为成都</span>。</p>
        <p className={activeSource==="duration"?"source-active":""}>每周到岗 4 天，可连续实习 <mark>3 个月以上</mark>。</p>
        <p>具备 AIGC 或 AI 产品项目经验；熟悉数据分析工具者优先，算法建模经验为加分项。</p>
        {activeSource&&<div className="zhixu-source-note">来源已定位到岗位原文；系统不会补写原文没有的信息。</div>}
      </aside>
      <div className="zhixu-demo-panel" key={step}>
        {step===0&&<div className="demo-intro-panel"><span>01 / 岗位来源</span><h4>先保留原始信息，再开始整理</h4><p>演示岗位已预置。职序保存原文和来源，AI 提取结果不会直接写成岗位事实。</p><dl><div><dt>输入</dt><dd>JD 文本 / 公开链接</dd></div><div><dt>保留</dt><dd>原文、来源、导入时间</dd></div></dl><button type="button" className="demo-primary auto-pulse" onClick={()=>goTo(1)}>开始解析岗位 →</button></div>}
        {step===1&&<div><span className="demo-panel-kicker">02 / 岗位事实</span><h4>逐项核对 AI 提取结果</h4><p className="demo-panel-copy">移入或点击字段可定位原文；每项都显示来源状态与置信度，原文没有的信息保持缺失。</p><div className="fact-list">{facts.map((fact,index)=><button type="button" className={`${index<parsed?"visible":""} ${activeSource===fact.source?"active":""}`} onMouseEnter={()=>setActiveSource(fact.source)} onMouseLeave={()=>setActiveSource(null)} onFocus={()=>setActiveSource(fact.source)} onClick={()=>{takeControl();setActiveSource(fact.source)}} key={fact.name}><span>{fact.name}</span><b>{fact.value}<small>来源：{fact.source==="arrival"||fact.source==="deadline"?"岗位原文无对应句":"已定位原文"} · 置信度 {fact.confidence}</small></b><i className={fact.status==="已明确"?"ok":"pending"}>{fact.status}</i></button>)}</div><aside className={`duplicate-review ${duplicateReviewed?"reviewed":""}`}><div><span>疑似重复岗位</span><b>同一岗位已从招聘平台收藏</b></div><button type="button" onClick={()=>{takeControl();setDuplicateReviewed(true)}}>{duplicateReviewed?"✓ 已保留两条来源":"由我复核"}</button></aside><button type="button" className="demo-primary" onClick={()=>{takeControl();setConfirmed(true);setStep(2)}}>{confirmed?"岗位事实已确认":"确认岗位事实"} →</button></div>}
        {step===2&&<div><span className="demo-panel-kicker">03 / 硬性条件</span><h4>确定性条件逐项判断，不生成总分</h4><div className="condition-list">{conditions.map((item,index)=><button type="button" className={condition===index?"active":""} onClick={()=>{takeControl();setCondition(index)}} key={item.name}><span>{item.name}</span><b className={item.result==="满足"?"ok":"pending"}>{item.result}</b></button>)}</div><article className="condition-detail"><dl><div><dt>岗位要求</dt><dd>{conditions[condition].job}</dd></div><div><dt>用户档案</dt><dd>{conditions[condition].profile}</dd></div><div><dt>判断方式</dt><dd>{conditions[condition].method}</dd></div></dl></article></div>}
        {step===3&&<div><span className="demo-panel-kicker">04 / 经历证据</span><h4>岗位要求必须对应具体经历</h4><div className="evidence-list">{evidence.map((item,index)=><article className={expandedEvidence===index?"active":""} key={item.requirement}><button type="button" onClick={()=>{takeControl();setExpandedEvidence(expandedEvidence===index?null:index)}}><span>{item.requirement}</span><b>{item.source}</b><i>{item.result}</i></button>{expandedEvidence===index&&<p>{item.detail}</p>}</article>)}</div></div>}
        {step===4&&<div><span className="demo-panel-kicker">05 / 投递行动</span><h4>{taskCreated?`${actionType}行动已进入准备阶段`:"选择下一步，而不是接收一个匹配分数"}</h4><p className="demo-panel-copy">待确认项和证据缺口始终可见，用户决定正式行动及岗位阶段。</p><div className="action-types">{["投递","补证据","比较","归档"].map(item=><button type="button" className={actionType===item?"active":""} onClick={()=>{takeControl();setActionType(item);setTaskCreated(false)}} key={item}>{item}</button>)}</div><ul className="action-list"><li>确认连续实习周期与到岗时间</li><li>针对岗位调整简历项目顺序</li><li>保留“算法建模无依据”的证据缺口</li><li>在截止时间前创建投递提醒</li></ul><button type="button" className={`demo-primary ${taskCreated?"complete":""}`} onClick={()=>{takeControl();setTaskCreated(true)}}>{taskCreated?`✓ 已创建 · 阶段：${actionType==="投递"?"投递准备":actionType}`:`创建${actionType}行动 →`}</button></div>}
      </div>
    </div>
    <footer className="zhixu-demo-controls"><button type="button" disabled={step===0} onClick={()=>goTo(step-1)}>← 上一步</button><span>{String(step+1).padStart(2,"0")} / 05</span><button type="button" disabled={step===4} onClick={()=>goTo(step+1)}>下一步 →</button></footer>
  </section>;
}
