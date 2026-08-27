import ProjectCase,{CaseData} from "../ProjectCase";

export const metadata={title:"Threadline 产品案例｜张灿 AI 产品作品集",description:"7 人团队完成并由 2 个真实课程协作小组持续测试的 AI 项目变化识别与审批 Agent。",openGraph:{title:"Threadline｜张灿 AI 产品作品集",description:"项目变化识别、证据展示、影响分析与人工审批。",images:["https://iloveme99i.github.io/zhangcan-ai-product-portfolio/real-threadline.png"]},twitter:{card:"summary_large_image",title:"Threadline｜张灿 AI 产品作品集",description:"项目变化识别、证据展示、影响分析与人工审批。",images:["https://iloveme99i.github.io/zhangcan-ai-product-portfolio/real-threadline.png"]}};
export const dynamic="force-static";

const d:CaseData={
  name:"Threadline",index:"01",next:{name:"职序 ZHIXU",href:"/projects/zhixu"},cover:"/real-threadline.png",
  kicker:"7 人团队项目 · AI 项目变化识别与审批 Agent · 2026.04—06",tagline:"识别项目变化，核对证据，再由负责人确认",
  summary:"从会议和项目材料中识别范围、负责人与时间变化，展示原始依据和影响，由负责人确认后写入内部记录。",
  role:"产品负责人",nature:"7 人跨职能团队项目",user:"3–10 人轻量项目团队",stage:"可运行 Web MVP · 公开 Demo · 2 个课程小组测试",
  facts:[["项目周期","2026.04—06 · 7 人团队 MVP 与课程测试"],["当前产品","GitHub Pages 公开体验版"],["团队与职责","7 人跨职能团队 · 产品负责人"],["验证","2 个课程协作小组完成项目周期测试"]],
  story:[
    {label:"项目概览",title:"产品范围与当前状态",intro:"当前版本已完成上下文导入、变化识别、证据核对、影响预览、人工审批和内部记录；尚未接入外部工具自动执行。",blocks:[
      {label:"产品类型",title:"AI 项目变化识别与审批 Agent",body:"面向 3–10 人轻量团队，处理范围、负责人、时间与交付要求的变化。"},
      {label:"当前交付",title:"可运行 Web MVP",body:"已完成公开 Demo，并在两个真实课程协作项目中持续测试。"},
      {label:"主要入口",title:"聊天、会议与项目材料",body:"导入后保留原文、来源、时间和新旧状态，供负责人核对。"}
    ],media:[{src:"/threadline-change-center.png",alt:"Threadline 变化中心总览",caption:"真实产品界面 · 变化、来源、影响、判断与状态同屏查看"}]},
    {label:"职责与团队分工",title:"我的职责与团队分工",ownership:[
      {label:"01 / 我负责",title:"产品定位与交付管理",detail:"负责问题定义、Agent 状态与审批流程、MVP 范围、版本优先级、验收标准和跨职能推进。"},
      {label:"02 / 团队完成",title:"Web MVP 设计与实现",detail:"团队共同完成 UI、前后端、模型接入、测试、Bug 修正和版本交付。"},
      {label:"03 / 贡献边界",title:"团队成果共同归属",detail:"我的个人贡献集中在产品与项目推进；代码、视觉和工程实现由相应成员共同完成。"}
    ],blocks:[],artifact:{eyebrow:"产品负责人交付物",title:"产品战略、状态设计与 12 周升级方案",meta:"V1.0",items:["确定目标用户、核心问题与 MVP 范围","定义 Captured、Proposed、Confirmed、Applied、Verified 状态","将来源追溯、人工审批和执行边界写入 P0 验收标准"]}},
    {label:"产品经理交付物",title:"需求、流程、状态与验收标准",intro:"这些交付物把 Agent 概念转成团队可以设计、开发、测试和验收的产品范围。",blocks:[],pmEvidence:"threadline"},
    {label:"用户与问题",title:"用户场景与问题定义",intro:"小型团队的计划通常保存在任务工具中，但范围、负责人和截止时间变化会先出现在群聊、会议和临时文件里。负责人需要重新核对沟通内容，再手动更新原计划。",blocks:[
      {label:"问题 01",title:"讨论与决定混在一起",body:"成员提出的想法、暂定方案和正式决定出现在同一段沟通中，模型容易误判状态。"},
      {label:"问题 02",title:"同一变化分散出现",body:"一次脚本或交付调整可能分散在多条消息里，逐条处理会生成重复记录。"},
      {label:"问题 03",title:"批准前缺少影响信息",body:"负责人需要看到原始依据、旧状态和受影响任务，才能决定是否接受变化。"}
    ]},
    {label:"产品方案",title:"Agent 流程与人工审批",intro:"模型识别变化，规则控制状态和权限，项目负责人确认事实与行动。",interactive:true,blocks:[
      {label:"识别",title:"上下文与变化提议",body:"导入聊天、会议或材料，模型提取变化对象、原文证据、新旧状态与潜在影响。"},
      {label:"控制",title:"状态与审批规则",body:"Captured、Proposed 与 Confirmed 分开处理，未确认内容不会写入正式项目状态。"},
      {label:"记录",title:"内部行动与结果确认",body:"批准后生成内部行动记录；Applied 与 Verified 分别表示已应用和已核对结果。"}
    ],media:[{src:"/threadline-change-review.png",alt:"Threadline 变化详情与人工审批界面",caption:"真实产品界面 · 来源证据、新旧对照、影响范围与审批动作"}]},
    {label:"用户测试",title:"测试发现与产品修改",intro:"项目复盘整理 · 基于课程项目测试发现与版本修改记录",comparison:{headers:["测试发现","产品修改"],rows:[
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
    ],evidence:[{meta:"MVP 与课程测试",title:"2026.04—2026.06",detail:"7 人团队完成 Web MVP，并在两个课程协作项目中测试。"}],media:[{src:"/threadline-project-memory.png",alt:"Threadline 项目记忆界面",caption:"真实产品界面 · 目标、已确认事件与任务持续关联"}]}
  ],
  demo:"threadline",demoIntro:"公开产品展示来源、旧状态、影响对象和建议行动。",productImage:"/real-threadline.png",imageNote:"公开体验数据 · 当前真实产品界面",links:[{label:"打开 Threadline 产品",url:"https://iloveme99i.github.io/threadline-agent/",note:"直接进入完整产品"}]
};

export default function Page(){return <ProjectCase d={d}/>}
