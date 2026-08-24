import ProjectCase,{CaseData} from "../ProjectCase";

export const metadata={title:"职序 ZHIXU 产品案例｜张灿 AI 产品作品集",description:"4 名同校实习求职用户完成真实 JD 导入与投递判断任务的 AI 求职工作台。",openGraph:{title:"职序 ZHIXU｜张灿 AI 产品作品集",description:"岗位信息确认、个人证据判断与投递行动管理。",images:["https://iloveme99i.github.io/zhangcan-ai-product-portfolio/real-zhixu.png"]},twitter:{card:"summary_large_image",title:"职序 ZHIXU｜张灿 AI 产品作品集",description:"4 名目标用户完成真实 JD 导入与投递判断测试。",images:["https://iloveme99i.github.io/zhangcan-ai-product-portfolio/real-zhixu.png"]}};
export const dynamic="force-static";

const d:CaseData={
  name:"职序 ZHIXU",index:"02",next:{name:"Signal",href:"/projects/signal"},cover:"/real-zhixu.png",
  kicker:"独立产品重构 · 2026.07—08",tagline:"AI 求职信息与决策工作台",
  summary:"将真实 JD、岗位来源和个人经历依据连接起来，帮助实习与校招求职者先确认岗位事实，再判断硬性条件、核对个人证据并创建投递行动。",
  role:"独立产品负责人",nature:"独立 0→1 项目",user:"同时处理多条实习机会的求职者",stage:"功能型 MVP · 4 名目标用户任务测试",
  facts:[["V1","2026.02—03 · 职业规划工具"],["重构与 MVP","2026.07—08 · 岗位决策工作台"],["核心链路","导入 → 确认 → 判断 → 证据 → 行动"],["真实测试","4 名同校实习求职用户完成真实 JD 任务"]],
  story:[
    {label:"项目结论",title:"从职业分析改为真实岗位决策",intro:"V1 能生成职业分析、能力差距和学习建议，但无法继续承接用户手里的真实 JD、岗位来源、截止时间和投递进度。当前版本将核心对象收敛为具体招聘机会，并把岗位事实、个人证据和投递行动关联起来。",blocks:[
      {label:"问题",title:"分析结束后仍要重新整理",body:"岗位信息和投递任务继续分散在招聘平台、备忘录与表格中，生成的建议无法承接下一步。"},
      {label:"我的工作",title:"独立推进 0→1",body:"负责需求定义、产品结构、AI 工作流、规则边界、产品实现和 4 名目标用户任务测试。"},
      {label:"当前结果",title:"可运行功能型 MVP",body:"已实现岗位导入、信息确认、证据判断、行动创建和投递阶段记录。"}
    ],comparison:{headers:["V1","使用问题","当前版本"],rows:[
      ["职业规划与差距分析","无法保存真实岗位来源和截止时间","以具体招聘机会为核心对象"],
      ["输出综合匹配建议","缺少个人经历依据","岗位要求与个人证据逐项对应"],
      ["分析到此结束","用户还要另建待办与表格","判断后直接创建投递行动"]
    ]},media:[{src:"/zhixu-v1.png",alt:"职序 V1 职业规划页面",caption:"V1 · 职业分析、差距诊断与学习路径"},{src:"/zhixu-today-workspace.png",alt:"职序当前今日工作台",caption:"当前产品 · 待确认机会、截止时间与下一步行动"}]},
    {label:"关键产品判断",title:"岗位事实、个人证据与行动必须相互关联",intro:"职序不使用一个总匹配分数替用户做决定。规则判断明确条件，模型整理非结构化信息，用户确认关键事实、个人证据和正式投递行动。下面的站内演示使用模拟岗位与模拟用户档案，不读取真实用户数据。",blocks:[
      {label:"规则",title:"判断明确条件",body:"毕业年份、实习周期、城市和截止时间按确定性条件逐项返回满足、待确认或不满足。"},
      {label:"模型",title:"整理非结构化材料",body:"提取 JD 字段、整理岗位要求并检索个人经历证据；原文未提及的字段保持缺失。"},
      {label:"用户",title:"确认事实与行动",body:"低置信字段、疑似重复岗位、证据采用和正式投递动作均由用户确认。"}
    ],media:[{src:"/zhixu-inbox-review.png",alt:"职序岗位导入确认页面",caption:"真实产品证据 · 原始 JD、提取字段、疑似重复与确认入口"},{src:"/zhixu-evidence-decision.png",alt:"职序岗位证据判断页面",caption:"真实产品证据 · 硬性条件、经历证据与缺口分开呈现"}]},
    {label:"产品经理交付物",title:"从 PRD、信息架构到数据核验",intro:"当前版本以招聘机会、个人求职档案和投递行动为三个核心对象；产品机制、数据结构和测试任务围绕同一条决策链路组织。",blocks:[],pmEvidence:"zhixu"},
    {label:"测试与修改",title:"4 名用户完成真实 JD 导入与投递判断",intro:"4 名同校实习求职用户使用各自正在考虑的 JD，完成字段核对、硬性条件检查、个人证据判断和下一步行动创建。每个观察结果都对应具体修改。",blocks:[],comparison:{headers:["用户卡点","原方案","修改后"],rows:[
      ["容易把 AI 提取结果当成事实","提取后直接写入机会","增加待确认状态，并列展示原始 JD"],
      ["同一岗位从不同渠道导入","自动合并重复记录","改为疑似重复复核，保留各自来源"],
      ["证据矩阵信息过多","所有信息同级展示","硬性条件优先，再展示经历证据和缺口"],
      ["完成判断后没有下一步","分析页面结束流程","增加投递、补证据、比较和归档入口"]
    ]},media:[{src:"/zhixu-application-tracking.png",alt:"职序投递阶段看板",caption:"真实产品证据 · 投递行动进入阶段并保留历史"}]},
    {label:"结果与边界",title:"已完成的产品链路与当前限制",blocks:[
      {label:"已完成",title:"岗位到行动的完整链路",body:"JD 文本与公开链接导入、字段确认、硬性条件判断、经历证据核对、行动创建与阶段记录已实现。"},
      {label:"已验证",title:"4 名目标用户任务测试",body:"真实 JD 任务推动信息确认、重复复核、信息优先级和行动入口修改。"},
      {label:"当前限制",title:"不声称长期效率提升",body:"尚未形成长期求职效率数据；截图 OCR 和 PDF 解析仍处于实验阶段。"}
    ],media:[{src:"/zhixu-information-records.png",alt:"职序信息记录页面",caption:"真实产品证据 · 投递准备与复盘关联岗位和任务"}],demo:true}
  ],
  demo:"zhixu",demoIntro:"今日工作台集中处理待确认机会、临近截止、重复审阅和证据缺口。",productImage:"/zhixu-today-workspace.png",imageNote:"当前产品界面 · 作品集隔离演示数据",links:[{label:"打开职序 Demo",url:"https://zhixu-career.homercobbuwd.chatgpt.site/",note:"公开体验版"}]
};

export default function Page(){return <ProjectCase d={d}/>}
