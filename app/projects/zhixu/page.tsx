import ProjectCase,{CaseData} from "../ProjectCase";

export const metadata={title:"职序 ZHIXU 产品案例｜张灿 AI 产品作品集"};
export const dynamic="force-static";

const d:CaseData={
  name:"职序 ZHIXU",index:"02",next:{name:"Signal",href:"/projects/signal"},cover:"/real-zhixu.png",
  kicker:"独立 0→1 项目 · AI 求职信息与决策工作台 · 2026",
  tagline:"从职业答案，转向一条真实求职机会。",
  summary:"职序帮助校招与实习求职者保存岗位来源、确认关键信息、核对硬条件，并把岗位判断继续推进到投递任务与阶段记录。当前稳定入口以 JD 文本和公开链接为主。",
  role:"独立产品负责人",nature:"从 0 到 1 独立完成",user:"同时处理多条校招或实习机会的求职者",stage:"功能型 MVP · 已完成多轮定位与工作台迭代",
  facts:[
    ["起点","2026.07 从职业认知与求职规划工具开始"],
    ["关键转向","从‘告诉用户应该做什么’转向管理真实岗位与投递行动"],
    ["当前链路","收集来源 → AI 整理 → 用户确认 → 证据判断 → 行动 → 跟踪与复盘"],
    ["输入边界","JD 文本与公开链接已稳定；截图 OCR 与 PDF 完整解析仍处于实验阶段"]
  ],
  story:[
    {label:"起点与转向",title:"V1 能生成职业规划，却没有接住一次真实投递。",intro:"早期轻岗围绕岗位拆解、差距诊断和学习路径展开。它可以一次性给出内容，但真实 JD、截止时间、投递材料与阶段变化仍然散落在其他工具。",blocks:[
      {label:"V1",title:"职业认知与学习规划",body:"用户选择目标岗位，系统给出岗位要求、能力差距和行动路径。"},
      {label:"暴露的问题",title:"答案无法继续推进",body:"得到‘应该提升什么’之后，用户仍需在其他地方重新整理岗位与投递任务。"},
      {label:"产品转向",title:"把机会作为核心对象",body:"一条真实岗位持续连接来源、判断、材料、行动和结果。"}
    ],media:[
      {src:"/zhixu-v1.png",alt:"轻岗 V1 职业规划工具",caption:"V1 · 职业认知、差距诊断与学习路径"},
      {src:"/real-zhixu.png",alt:"职序当前今日工作台",caption:"当前版本 · 岗位机会、证据判断与行动推进"}
    ],evidence:[
      {meta:"07.21 · 5914c98",title:"轻岗 AI 职业规划 V1",detail:"首个可运行版本，核心路径是岗位选择、差距诊断和学习规划。"},
      {meta:"08.11 · 6e690d1",title:"重建为岗位机会工作台",detail:"承认核心对象选错，产品从职业方向切换为具体机会。"}
    ]},
    {label:"问题重定义",title:"用户缺少的不是更多岗位，而是把零散信息变成决定和行动。",intro:"高强度求职中，同一岗位可能来自多个渠道，要求会更新，个人经历需要反复匹配，投递之后还要继续准备和复盘。",blocks:[
      {label:"来源",title:"先保留原始材料",body:"JD、公开链接和来源先进入收集箱，结构化结果不能替代原文。"},
      {label:"判断",title:"结论必须说明依据",body:"不使用单一匹配分数，而是并列岗位要求、个人证据、缺口与建议。"},
      {label:"行动",title:"判断必须进入下一步",body:"机会继续关联投递阶段、任务、材料和记录，而不是停留在分析页面。"}
    ],evidence:[
      {meta:"核心对象",title:"招聘机会 + 求职档案 + 求职行动",detail:"三个对象持续关联，替代一次性问答与互相孤立的页面。"},
      {meta:"下一步验证",title:"真实任务效果尚未完成外部验证",detail:"目前证明了可运行链路，尚不能声称已经减少了普遍求职者的重复劳动。"}
    ]},
    {label:"AI 工作流",title:"规则、模型和用户分别处理不同的不确定性。",blocks:[
      {label:"确定性规则",title:"检查硬条件",body:"到岗天数、实习周期、截止时间和城市偏好等明确约束由规则返回具体原因。"},
      {label:"模型能力",title:"整理非结构化材料",body:"模型提取 JD 字段并匹配已有经历证据；没有依据时必须显式标记缺口。"},
      {label:"用户控制",title:"确认事实和写入",body:"低置信字段、重复机会、经历依据与正式行动都保留人工确认。"}
    ],media:[
      {src:"/zhixu-inbox-review.png",alt:"职序收集箱和 AI 提取审阅",caption:"收集箱 · 原文、提取状态、疑似重复和待确认字段",markers:[{x:43,y:38,label:"原始材料保留"},{x:70,y:59,label:"疑似重复"},{x:88,y:77,label:"确认后写入"}]},
      {src:"/zhixu-evidence-decision.png",alt:"职序证据化投递判断",caption:"证据判断 · 硬性风险和经历缺口不被压缩成黑箱分数",markers:[{x:72,y:31,label:"投递建议"},{x:62,y:55,label:"硬性条件"},{x:78,y:84,label:"经历证据"}]}
    ],evidence:[
      {meta:"规则层",title:"hard rules",detail:"确定性冲突先返回具体原因，不制造看似精确的综合准备度。"},
      {meta:"交互层",title:"confirm before write",detail:"AI 整理与正式记录分离，关键写入保留确认步骤。"}
    ]},
    {label:"当前产品",title:"当前工作台围绕待处理对象和下一步行动组织。",intro:"以下页面来自当前可运行产品，使用明确标记的作品集演示数据，不代表真实用户、招聘状态或投递结果。",blocks:[
      {label:"今日",title:"优先处理影响投递的对象",body:"待确认、临近截止、重复机会和证据缺口集中在默认工作面。"},
      {label:"投递",title:"阶段变化持续留痕",body:"岗位从判断进入材料、投递和面试阶段，每次状态变化保留历史。"},
      {label:"记录",title:"复盘可以回写求职系统",body:"信息记录关联岗位、简历与任务；AI 建议经确认后才写回。"}
    ],media:[
      {src:"/zhixu-application-tracking.png",alt:"职序投递管理看板",caption:"投递跟踪 · 机会在阶段间推进并保留历史",markers:[{x:31,y:34,label:"阶段列"},{x:49,y:45,label:"岗位状态"},{x:79,y:34,label:"后续结果"}]},
      {src:"/zhixu-information-records.png",alt:"职序信息记录编辑器",caption:"信息记录 · 投递准备和复盘与岗位、任务保持关联",markers:[{x:27,y:30,label:"记录列表"},{x:76,y:15,label:"关联岗位"},{x:72,y:92,label:"写回任务"}]}
    ],demo:true},
    {label:"迭代与成长",title:"结果不是页面变多，而是产品完成了一次核心对象重定义。",blocks:[
      {label:"0→1",title:"先完成可运行版本",body:"从角色选择、规划生成到状态保存，第一次把产品想法完整落地。"},
      {label:"重构",title:"承认方向不成立并重做",body:"没有继续堆职业内容，而是重建数据模型与首页，围绕真实机会组织工作流。"},
      {label:"深化",title:"把 AI 放回业务链路",body:"模型不再只生成建议，而是与来源、规则、个人证据和行动状态协同。"}
    ],evidence:[
      {meta:"当前已验证",title:"功能链路可以运行",detail:"文本/公开链接、字段确认、重复审阅、硬条件判断、证据矩阵、任务与阶段记录。"},
      {meta:"尚未验证",title:"真实任务收益",detail:"下一步需要用真实求职任务记录误判、重复操作和使用后的产品修改。"}
    ]}
  ],
  demo:"zhixu",demoIntro:"‘今日’工作台集中处理待确认机会、临近截止、重复审阅、证据缺口与快速记录。",productImage:"/zhixu-today-workspace.png",imageNote:"作品集演示数据 · 当前真实产品界面 · 2026.08.18",links:[{label:"公开体验版",note:"当前受 Cloudflare 403 访问限制"}]
};

export default function Page(){return <ProjectCase d={d}/>}
