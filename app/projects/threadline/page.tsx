import ProjectCase,{CaseData} from "../ProjectCase";

export const metadata={title:"Threadline 产品案例｜张灿 AI 产品作品集",description:"7 人团队完成并由 2 个真实课程协作小组持续测试的 AI 项目变化识别与审批 Agent。",openGraph:{title:"Threadline｜张灿 AI 产品作品集",description:"项目变化识别、证据展示、影响分析与人工审批。",images:["https://iloveme99i.github.io/zhangcan-ai-product-portfolio/real-threadline.png"]},twitter:{card:"summary_large_image",title:"Threadline｜张灿 AI 产品作品集",description:"项目变化识别、证据展示、影响分析与人工审批。",images:["https://iloveme99i.github.io/zhangcan-ai-product-portfolio/real-threadline.png"]}};
export const dynamic="force-static";

const d:CaseData={
  name:"Threadline",index:"01",next:{name:"职序 ZHIXU",href:"/projects/zhixu"},cover:"/real-threadline.png",
  kicker:"7 人团队项目 · AI 项目变化识别与审批 Agent · 2026.04—06",tagline:"面向小型团队的项目变化识别与审批工具",
  summary:"系统从聊天、会议记录和项目材料中识别范围、负责人和截止时间变化，展示原始依据与影响对象，并在负责人确认后写入内部行动记录。",
  role:"产品负责人",nature:"7 人跨职能团队项目",user:"3–10 人轻量项目团队",stage:"可运行 Web MVP · 公开 Demo · 2 个课程小组测试",
  facts:[["项目时间","2026.04—2026.06"],["产品","项目变化识别与审批工具"],["团队与职责","7 人跨职能团队 · 产品负责人"],["验证","2 个课程协作小组完成项目周期测试"]],
  story:[
    {label:"项目概览",title:"产品范围与当前状态",intro:"Threadline 处理沟通中出现的项目变化。当前版本覆盖上下文导入、变化识别、证据展示、影响分析、人工审批和内部行动记录；外部工具自动执行尚未接入。",blocks:[
      {label:"产品类型",title:"AI 项目变化识别与审批 Agent",body:"面向 3–10 人轻量团队，处理范围、负责人、时间与交付要求的变化。"},
      {label:"当前交付",title:"可运行 Web MVP",body:"已完成公开 Demo，并在两个真实课程协作项目中持续测试。"},
      {label:"主要入口",title:"聊天、会议与项目材料",body:"导入后保留原文、来源、时间和新旧状态，供负责人核对。"}
    ],media:[{src:"/real-threadline.png",alt:"Threadline 项目变化工作台",caption:"变化中心 · 查看来源、旧状态、影响对象与建议行动",markers:[{x:8,y:38,label:"变化入口"},{x:46,y:55,label:"来源与旧状态"},{x:73,y:66,label:"影响对象"}]}],demo:true},
    {label:"职责与团队分工",title:"我的职责与团队分工",ownership:[
      {label:"01 / 我负责",title:"产品定位与交付管理",detail:"负责问题定义、Agent 状态与审批流程、MVP 范围、版本优先级、验收标准和跨职能推进。"},
      {label:"02 / 团队完成",title:"Web MVP 设计与实现",detail:"团队共同完成 UI、前后端、模型接入、测试、Bug 修正和版本交付。"},
      {label:"03 / 贡献边界",title:"团队成果共同归属",detail:"我的个人贡献集中在产品与项目推进；代码、视觉和工程实现由相应成员共同完成。"}
    ],blocks:[],artifact:{eyebrow:"产品负责人交付物",title:"产品战略、状态设计与 12 周升级方案",meta:"V1.0 · 2026.08",items:["确定目标用户、核心问题与 MVP 范围","定义 Captured、Proposed、Confirmed、Applied、Verified 状态","将来源追溯、人工审批和执行边界写入 P0 验收标准"]}},
    {label:"用户与问题",title:"用户场景与问题定义",intro:"小型团队的计划通常保存在任务工具中，但范围、负责人和截止时间变化会先出现在群聊、会议和临时文件里。负责人需要重新核对沟通内容，再手动更新原计划。",blocks:[
      {label:"问题 01",title:"讨论与决定混在一起",body:"成员提出的想法、暂定方案和正式决定出现在同一段沟通中，模型容易误判状态。"},
      {label:"问题 02",title:"同一变化分散出现",body:"一次脚本或交付调整可能分散在多条消息里，逐条处理会生成重复记录。"},
      {label:"问题 03",title:"批准前缺少影响信息",body:"负责人需要看到原始依据、旧状态和受影响任务，才能决定是否接受变化。"}
    ]},
    {label:"产品方案",title:"Agent 流程与人工审批",intro:"模型负责识别和整理变化；规则控制状态与权限；项目负责人确认事实和行动。当前版本只更新 Threadline 内部记录。",blocks:[
      {label:"识别",title:"上下文与变化提议",body:"导入聊天、会议或材料，模型提取变化对象、原文证据、新旧状态与潜在影响。"},
      {label:"控制",title:"状态与审批规则",body:"Captured、Proposed 与 Confirmed 分开处理，未确认内容不会写入正式项目状态。"},
      {label:"记录",title:"内部行动与结果确认",body:"批准后生成内部行动记录；Applied 与 Verified 分别表示已应用和已核对结果。"}
    ],evidence:[{meta:"完整流程",title:"上下文导入 → 变化识别 → 证据展示 → 影响分析 → 人工审批 → 内部行动记录 → 结果确认",detail:"外部通知、文档和任务系统仍需人工处理，页面不会把批准显示为外部执行完成。"}]},
    {label:"用户测试",title:"两个课程协作项目的测试与修改",intro:"测试覆盖选题、分工、内容制作、修改和最终提交。每次发现都对应具体产品调整。",comparison:{headers:["测试发现","产品修改"],rows:[
      ["AI 容易把讨论当成正式决定","增加 Proposed / Confirmed 状态，并展示原文、来源和时间"],
      ["同一变化被拆成多条记录","合并关联变化，保留父子关系"],
      ["批准前无法确认影响对象","增加新旧状态对照和任务、负责人、截止时间影响预览"],
      ["已批准容易被理解为外部任务已执行","区分 Confirmed / Applied / Verified"]
    ]},blocks:[
      {label:"形势与政策课程",title:"选题、资料、PPT、报告与提交",body:"交付内容和成员分工中途变化，验证讨论状态、重复变化与截止时间影响。"},
      {label:"思政参赛短视频",title:"主题、脚本、拍摄、剪辑与参赛",body:"脚本修改牵动拍摄和剪辑安排，验证关联变化合并与影响预览。"}
    ]},
    {label:"结果与限制",title:"当前结果与产品限制",blocks:[
      {label:"已完成",title:"Agent MVP 与公开 Demo",body:"变化识别、来源证据、影响分析、人工审批和内部行动记录已在 Web 产品中实现。"},
      {label:"已测试",title:"两个真实课程协作场景",body:"产品在两个完整课程项目周期中持续使用，并根据测试问题修改状态与审批机制。"},
      {label:"当前限制",title:"外部执行与企业验证未完成",body:"尚未连接微信、Notion、Linear 等外部工具，也未进行企业团队长期试点；不声称已提高普遍团队效率。"}
    ],evidence:[{meta:"项目周期",title:"2026.04—2026.06",detail:"项目时间与简历保持一致；团队角色和个人贡献以职责说明及交付物为主要证据。"}]}
  ],
  demo:"threadline",demoIntro:"公开 Demo 展示来源、旧状态、影响对象和建议行动。",productImage:"/real-threadline.png",imageNote:"公开 Demo 示例数据 · 当前真实产品界面",links:[{label:"打开 Threadline Demo",url:"https://threadline-agent.oliverruby788.chatgpt.site/",note:"公开体验版"}]
};

export default function Page(){return <ProjectCase d={d}/>}
