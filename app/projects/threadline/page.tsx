import ProjectCase,{CaseData} from "../ProjectCase";

export const metadata={title:"Threadline 产品案例｜张灿 AI 产品作品集"};
export const dynamic="force-static";

const d:CaseData={
  name:"Threadline",index:"01",next:{name:"职序 ZHIXU",href:"/projects/zhixu"},cover:"/real-threadline.png",
  kicker:"7 人团队项目 · AI 项目执行 Agent · 2026",
  tagline:"项目变化控制层，而不是另一个任务看板。",
  summary:"面向 3–10 人轻量项目团队，Threadline 将聊天、会议和项目材料中的变化整理为带证据的事件，帮助负责人完成影响判断、人工审批、内部行动记录与追溯。",
  role:"项目总负责人兼 AI 产品负责人",nature:"7 人跨职能团队项目",user:"产品发布、活动执行与客户交付团队",stage:"已交付可运行 Agent MVP 与公开 Demo",
  facts:[
    ["我主导","产品定位、需求定义、Agent 机制、版本规划、团队协同与交付验收"],
    ["团队共同完成","方案讨论、产品实现、测试修正与 Web MVP 交付"],
    ["当前闭环","上下文捕获 → 变化提议 → 影响说明 → 人工批准 → 内部行动记录"],
    ["归属边界","不把全部页面、代码提交或团队产出归为个人完成"]
  ],
  story:[
    {label:"职责与交付",title:"先说明我负责什么，也说明哪些结果属于团队。",intro:"这个项目的价值不在“七个人”这个数字，而在我是否把方向、机制和验收组织成团队可以共同交付的版本。页面不把每一个实现提交都归到我名下。",blocks:[],ownership:[
      {label:"我主导",title:"产品方向与版本决策",detail:"收敛目标用户与核心问题，定义 Agent 状态、风险控制、版本范围和验收标准，并负责跨职能推进。"},
      {label:"团队共同完成",title:"可运行 Web MVP",detail:"团队围绕工作台、上下文收件箱、项目记忆、变化中心、行动队列和操作记录完成方案讨论、实现与测试。"},
      {label:"不归于个人",title:"具体实现不做全量认领",detail:"Commit 只作为版本发生的旁证；作品集不据此宣称所有代码、视觉和工程实现均由我个人完成。"}
    ],artifact:{
      eyebrow:"真实产品负责人工作底稿",title:"Threadline 产品战略、现状诊断与 12 周升级方案",meta:"V1.0 · 2026.08",
      items:["将产品定义为‘项目变化控制层’，避免继续扩展成通用协作套件","定义 Captured → Proposed / Pending → Confirmed → Applied → Verified 的事件状态","把来源可追溯、批准不等于外部执行、公开 Demo 隔离列为 P0 验收边界"]
    },evidence:[
      {meta:"交付物",title:"产品战略与版本路线",detail:"覆盖目标用户、问题定义、Agent 与数据架构、P0/P1/P2 路线及验证指标。"},
      {meta:"验收口径",title:"证据、状态与回执必须连接",detail:"页面存在不算完成；关键结论要能回到来源，动作要区分内部完成、外部完成与待人工。"}
    ]},
    {label:"问题与策略",title:"计划失真，不是因为没有看板，而是变化先发生在沟通里。",intro:"范围、负责人和时间通常先在会议、聊天和临时文件里变化。旧计划不会自动理解新信息，负责人只能反复判断、同步和追踪。",blocks:[
      {label:"问题",title:"沟通与计划脱节",body:"重要变化散落在多个入口，旧状态继续影响后续任务和交付。"},
      {label:"取舍",title:"不替代 Notion 或 Linear",body:"文档与任务仍留在原工具；Threadline 只维护变化、证据、影响和批准。"},
      {label:"目标",title:"先让变化可信",body:"建议、事实、风险和正式决定进入系统后保持不同状态，避免 AI 把讨论直接写成承诺。"}
    ],evidence:[
      {meta:"08.10 · 0af7f9e",title:"ContextFlow 产品原型",detail:"第一版验证从项目上下文识别事件的基本形态。"},
      {meta:"08.11 · cf7a2df",title:"收敛到项目变化工作流",detail:"产品从宽泛的上下文工具转向变化识别、审批和行动。"}
    ]},
    {label:"决策与机制",title:"三个关键决定，把“能识别”收紧为“可批准”。",blocks:[
      {label:"01 · 核心对象",title:"从任务转向变化",body:"先回答旧事实发生了什么变化，再决定是否创建任务，避免重复做项目管理工具。"},
      {label:"02 · 人机边界",title:"提议与决定分离",body:"模型输出先成为带证据的变化提议，负责人批准后才进入项目状态。"},
      {label:"03 · 执行边界",title:"批准不冒充外部执行",body:"当前版本把结果落为内部任务、草稿或处理项；外部系统回执仍是下一阶段。"}
    ],evidence:[
      {meta:"状态",title:"Captured → Proposed → Confirmed",detail:"识别、确认与应用是不同阶段，任何已确认事实也可能被替代或取消。"},
      {meta:"证据",title:"原文、来源与旧状态并列",detail:"负责人批准前可以检查模型的判断依据和受影响对象。"},
      {meta:"版本旁证",title:"b388f5a → 2193eea",detail:"产品从仪表盘重构为工作台，并补入证据驱动的项目记忆。"}
    ]},
    {label:"当前产品",title:"工作台把待判断变化放在项目负责人面前。",intro:"公开 Demo 使用隔离的示例项目。它证明当前 Web MVP 的产品结构和交互闭环，不代表真实客户数据或外部系统已经被自动修改。",blocks:[
      {label:"看什么",title:"来源、旧状态与影响",body:"每条变化先说明来自哪里、原状态是什么、影响哪些对象。"},
      {label:"做什么",title:"批准、拒绝或继续确认",body:"负责人保留最终决定权，高风险变化不会被模型自动写入。"}
    ],media:[
      {src:"/real-threadline.png",alt:"Threadline 当前项目变化工作台",caption:"公开 Demo 示例数据 · 当前真实产品工作台",markers:[
        {x:8,y:38,label:"变化与行动入口"},{x:46,y:55,label:"来源与旧状态"},{x:73,y:66,label:"影响和风险"}
      ]}
    ]},
    {label:"迭代与结果",title:"团队用同一个问题验收版本：负责人是否敢批准这条变化？",blocks:[
      {label:"阶段 01",title:"让上下文进入项目",body:"完成原型、备忘录与上下文接收，先解决信息停留在工具外的问题。"},
      {label:"阶段 02",title:"让变化能够被判断",body:"重构工作台、变化中心和项目记忆，增加旧状态、来源和影响说明。"},
      {label:"阶段 03",title:"收紧公开演示边界",body:"补充工作流测试、匿名演示隔离和模型调用限制，提高 Demo 稳定性。"}
    ],evidence:[
      {meta:"08.11",title:"上下文进入同一项目",detail:"eda1a60 / c6d3ef7 · 备忘录与 Agent 流程连接。"},
      {meta:"08.12",title:"变化流与工作台重构",detail:"c906226 / e2ab214 / b388f5a · 从展示信息转向处理变化。"},
      {meta:"08.16—08.17",title:"记忆、测试与演示隔离",detail:"2193eea / 95a079b / a621ff6 · 当前形成有控制边界的 Agent MVP。"},
      {meta:"下一步",title:"真实团队试点仍未完成",detail:"还需要验证稳定历史比对、审批负担和外部执行后的结果确认。"}
    ]}
  ],
  demo:"threadline",demoIntro:"公开 Demo 中的示例项目展示来源、旧状态、影响对象和建议行动。",productImage:"/real-threadline.png",imageNote:"公开 Demo 示例数据 · 当前真实产品界面",links:[{label:"打开 Threadline Demo",url:"https://threadline-agent.oliverruby788.chatgpt.site/",note:"公开体验版"}]
};

export default function Page(){return <ProjectCase d={d}/>}
