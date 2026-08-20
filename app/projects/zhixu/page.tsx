import ProjectCase,{CaseData} from "../ProjectCase";

export const metadata={title:"职序 ZHIXU 产品案例｜张灿 AI 产品作品集",description:"4 名同校实习求职用户完成真实 JD 导入与投递判断任务的 AI 求职工作台。",openGraph:{title:"职序 ZHIXU｜张灿 AI 产品作品集",description:"岗位信息确认、个人证据判断与投递行动管理。",images:["https://iloveme99i.github.io/zhangcan-ai-product-portfolio/real-zhixu.png"]},twitter:{card:"summary_large_image",title:"职序 ZHIXU｜张灿 AI 产品作品集",description:"4 名目标用户完成真实 JD 导入与投递判断测试。",images:["https://iloveme99i.github.io/zhangcan-ai-product-portfolio/real-zhixu.png"]}};
export const dynamic="force-static";

const d:CaseData={
  name:"职序 ZHIXU",index:"02",next:{name:"Signal",href:"/projects/signal"},cover:"/real-zhixu.png",
  kicker:"独立 0→1 项目 · AI 求职信息与决策工作台 · 2026",tagline:"真实岗位信息、个人证据与投递行动工作台",
  summary:"帮助实习与校招求职者保存岗位来源、确认 JD 字段、核对硬性条件与个人经历依据，并继续管理投递任务和阶段记录。",
  role:"独立产品负责人",nature:"独立 0→1 项目",user:"同时处理多条实习机会的求职者",stage:"功能型 MVP · 4 名目标用户任务测试",
  facts:[["项目时间","2026.07—08"],["产品调整","职业规划工具修改为真实岗位机会工作台"],["核心对象","招聘机会、个人求职档案、投递行动"],["真实测试","4 名同校实习求职用户完成真实 JD 导入与投递判断"]],
  story:[
    {label:"项目背景",title:"V1 使用问题与项目调整",intro:"职序最初提供职业分析、能力差距和学习路径。实际使用中，这些内容无法继续承接真实 JD、岗位来源、截止时间、投递材料和投递进度，因此项目将核心对象调整为具体招聘机会。",blocks:[
      {label:"V1",title:"职业规划与差距分析",body:"用户选择目标岗位，系统生成要求拆解、能力差距和学习建议。"},
      {label:"使用问题",title:"分析结束后仍要重新整理",body:"岗位材料和投递任务继续分散在招聘平台、备忘录与表格中。"},
      {label:"当前版本",title:"以真实岗位机会为核心",body:"每条机会连接来源、确认字段、个人证据、行动和投递阶段。"}
    ],media:[{src:"/zhixu-v1.png",alt:"职序 V1 职业规划页面",caption:"V1 · 职业分析、差距诊断与学习路径"},{src:"/real-zhixu.png",alt:"职序当前今日工作台",caption:"当前版本 · 岗位机会、证据判断与行动推进"}]},
    {label:"V1 调整",title:"V1 问题与产品调整",blocks:[],comparison:{headers:["V1 问题","产品调整"],rows:[
      ["内容停留在职业分析","改为管理真实 JD 和具体招聘机会"],
      ["无法记录岗位来源","保留原文、公开链接和导入来源"],
      ["综合建议缺少依据","使用岗位要求与个人经历证据矩阵"],
      ["分析结束后没有行动","关联投递任务、材料和阶段记录"]
    ]},evidence:[{meta:"版本",title:"2026.07 V1 → 2026.08 当前版本",detail:"首个可运行版本验证职业分析形态；随后重建数据对象和主要工作流。"}]},
    {label:"信息结构",title:"三个主要产品对象",intro:"招聘机会保存岗位事实；个人求职档案提供经历依据；投递行动记录任务和阶段。三个对象通过岗位 ID 与用户确认结果保持关联。",blocks:[
      {label:"对象 01",title:"招聘机会",body:"保存原始 JD、公开链接、公司岗位、时间地点、硬性条件和确认状态。"},
      {label:"对象 02",title:"个人求职档案",body:"保存教育、经历、技能和项目证据，供每次岗位判断复用。"},
      {label:"对象 03",title:"投递行动",body:"记录投递、补证据、修改简历、比较、归档以及后续阶段。"}
    ],media:[{src:"/zhixu-application-tracking.png",alt:"职序投递阶段看板",caption:"投递管理 · 岗位在阶段间推进并保留历史",markers:[{x:31,y:34,label:"阶段"},{x:49,y:45,label:"岗位状态"},{x:79,y:34,label:"后续结果"}]}]},
    {label:"AI 与规则",title:"AI、规则与人工确认",intro:"不同类型的信息采用不同处理方式，避免模型输出直接成为岗位事实或投递决定。",blocks:[
      {label:"规则处理",title:"明确条件检查",body:"毕业年份、到岗日期、实习周期、城市和截止时间按确定性条件检查并返回原因。"},
      {label:"模型处理",title:"非结构化材料整理",body:"提取 JD 字段、整理岗位要求、匹配个人经历证据，并说明没有依据的缺口。"},
      {label:"用户确认",title:"关键事实与行动",body:"低置信字段、疑似重复岗位、个人证据和正式投递行动均由用户确认。"}
    ],media:[{src:"/zhixu-inbox-review.png",alt:"职序岗位导入确认页面",caption:"收集箱 · 原文、提取字段、疑似重复与确认入口",markers:[{x:43,y:38,label:"原始 JD"},{x:70,y:59,label:"疑似重复"},{x:88,y:77,label:"确认写入"}]},{src:"/zhixu-evidence-decision.png",alt:"职序岗位证据判断页面",caption:"岗位判断 · 硬性条件、经历证据和缺口分开呈现",markers:[{x:72,y:31,label:"投递判断"},{x:62,y:55,label:"硬性条件"},{x:78,y:84,label:"经历证据"}]}]},
    {label:"用户测试",title:"4 名目标用户的任务测试",intro:"4 名同校实习求职用户导入各自正在考虑的真实 JD，检查提取字段和硬性条件，核对个人经历依据，判断是否投递并创建下一步行动。",comparison:{headers:["测试发现","产品修改"],rows:[
      ["用户容易把 AI 提取结果当成事实","增加待确认字段，原始 JD 与提取结果并列"],
      ["同一岗位从不同渠道导入后难以处理重复","自动合并改为疑似重复复核，并保留各自来源"],
      ["证据矩阵信息过多，不知道先看什么","硬性条件优先，再展示经历证据和缺口"],
      ["岗位判断后缺少明确行动入口","增加投递、补证据、比较和归档，并关联投递阶段"]
    ]},blocks:[{label:"测试任务",title:"JD 导入与投递判断",body:"测试覆盖产品、AI/AIGC、产品运营和数据/商业分析方向的真实岗位。"},{label:"流程调整",title:"收集与正式机会分开",body:"收集箱、待确认、机会池、投递中和结束状态分开，未确认内容不会直接进入正式机会。"}]},
    {label:"结果与限制",title:"当前结果与产品限制",blocks:[
      {label:"已完成",title:"功能型 MVP",body:"岗位导入、信息确认、证据判断、行动创建和投递跟踪已形成可运行产品链路。"},
      {label:"已测试",title:"4 名目标用户",body:"4 名用户完成真实 JD 任务，测试结果推动信息确认、重复复核和行动入口修改。"},
      {label:"当前限制",title:"长期效果与输入边界",body:"尚未形成长期求职效率数据；JD 文本与公开链接较稳定，截图 OCR 和 PDF 解析仍处于实验阶段。"}
    ],media:[{src:"/zhixu-information-records.png",alt:"职序信息记录页面",caption:"信息记录 · 投递准备与复盘关联岗位和任务",markers:[{x:27,y:30,label:"记录列表"},{x:76,y:15,label:"关联岗位"},{x:72,y:92,label:"写回任务"}]}],demo:true}
  ],
  demo:"zhixu",demoIntro:"今日工作台集中处理待确认机会、临近截止、重复审阅和证据缺口。",productImage:"/zhixu-today-workspace.png",imageNote:"作品集演示数据 · 当前真实产品界面 · 2026.08.18",links:[{label:"公开体验版",note:"当前受 Cloudflare 403 访问限制"}]
};

export default function Page(){return <ProjectCase d={d}/>}
