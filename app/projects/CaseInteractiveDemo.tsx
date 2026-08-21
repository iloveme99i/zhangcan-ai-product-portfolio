"use client";

import {useState} from "react";
import ZhixuJourneyDemo from "./ZhixuJourneyDemo";

const demos={
  threadline:{
    title:"一次项目变化如何进入正式记录",
    items:[
      {name:"上下文材料",meta:"输入",summary:"会议记录与群聊原文",example:"“报告新增参考文献，提交日期改到 25 日。”",fields:["原文","来源：项目会议","时间：08.21"]},
      {name:"变化事件",meta:"Agent 整理",summary:"识别新旧状态和影响对象",example:"截止时间：23 日 → 25 日",fields:["影响 3 项任务","涉及 2 位成员","置信状态：待确认"]},
      {name:"审批结果",meta:"负责人决定",summary:"确认后写入内部行动记录",example:"已确认变化，生成 2 条后续行动",fields:["Confirmed","Applied 待处理","Verified 待核对"]}
    ]
  },
  zhixu:{
    title:"三个对象如何承接一次真实投递",
    items:[
      {name:"招聘机会",meta:"事实对象",summary:"保存 JD、来源和确认状态",example:"AI 产品实习｜每周 4 天｜来源：官网",fields:["硬性条件","岗位原文","截止时间"]},
      {name:"个人求职档案",meta:"证据对象",summary:"提供可复用的个人经历依据",example:"Threadline：Agent 流程与 7 人团队推进",fields:["教育经历","项目证据","技能与作品"]},
      {name:"投递行动",meta:"执行对象",summary:"把判断继续推进到下一步",example:"确认到岗时间 → 修改简历 → 08.28 前投递",fields:["负责人：本人","阶段：准备中","关联岗位与材料"]}
    ]
  },
  signal:{
    title:"一条碎片信息如何进入个人分类",
    items:[
      {name:"原始内容",meta:"输入",summary:"截图、收藏文字或混合备忘录",example:"一张包含岗位信息和个人备注的截图",fields:["原图","原文","来源链接"]},
      {name:"轻度整理",meta:"AI 处理",summary:"保留语境，只整理必要信息",example:"整理为一条完整记录，不生成优先级和行动建议",fields:["标题","完整内容","待确认分类"]},
      {name:"用户分类",meta:"人工确认",summary:"进入用户自己建立的分类树",example:"求职 / AI 产品 / 岗位资料",fields:["可编辑","可移动","可返回来源"]}
    ]
  }
} as const;

export default function CaseInteractiveDemo({kind}:{kind:keyof typeof demos}){
  if(kind==="zhixu")return <ZhixuJourneyDemo/>;
  return <CompactDemo kind={kind}/>;
}

function CompactDemo({kind}:{kind:"threadline"|"signal"}){
  const [active,setActive]=useState(0);
  const demo=demos[kind];
  const selected=demo.items[active];
  return <section className={`case-interactive-demo interactive-${kind}`} aria-label={`${demo.title}交互演示`}>
    <header><div><span>HTML INTERACTIVE DEMO</span><h3>{demo.title}</h3></div><small>点击或悬停查看例子</small></header>
    <div className="interactive-object-map">
      {demo.items.map((item,index)=><button type="button" className={index===active?"active":""} onMouseEnter={()=>setActive(index)} onFocus={()=>setActive(index)} onClick={()=>setActive(index)} key={item.name}><span>0{index+1} / {item.meta}</span><b>{item.name}</b><small>{item.summary}</small></button>)}
    </div>
    <article className="interactive-detail" key={`${kind}-${active}`}>
      <div><span>当前示例</span><h4>{selected.name}</h4><p>{selected.example}</p></div>
      <ul>{selected.fields.map(field=><li key={field}>{field}</li>)}</ul>
    </article>
  </section>;
}
