import ProjectCase,{CaseData} from "../ProjectCase";

export const metadata={title:"Signal 产品案例｜张灿 AI 产品作品集",description:"基于个人真实整理任务持续修改的信息识别、轻整理与来源保留工具。",openGraph:{title:"Signal｜张灿 AI 产品作品集",description:"截图、收藏文字与备忘录的识别、分类和来源核对。",images:["https://iloveme99i.github.io/zhangcan-ai-product-portfolio/real-signal.png"]},twitter:{card:"summary_large_image",title:"Signal｜张灿 AI 产品作品集",description:"基于个人真实整理任务完成多轮自用迭代。",images:["https://iloveme99i.github.io/zhangcan-ai-product-portfolio/real-signal.png"]}};
export const dynamic="force-static";

const d:CaseData={
  name:"Signal",index:"03",next:{name:"Threadline",href:"/projects/threadline"},cover:"/real-signal.png",
  kicker:"独立自用项目 · 信息识别与分类工具 · 2026",tagline:"截图、收藏与备忘录的信息识别和分类工具",
  summary:"系统对截图和混合备忘录进行 OCR 与轻度整理，用户确认后放入自己的分类体系，同时保留原文、原图和来源。",
  role:"独立产品负责人",nature:"独立自用项目",user:"需要处理截图、收藏与混合备忘录的个人用户",stage:"本地可运行产品 · 多轮真实自用迭代",
  facts:[["真实输入","截图、收藏文字与混合备忘录"],["我的工作","问题定义、信息架构、AI 整理规则、产品实现和自用迭代"],["当前能力","OCR、轻度整理、多级分类、编辑、移动、收藏、置顶和来源核对"],["当前证据","基于个人真实整理任务完成多轮功能删减与重构"]],
  story:[
    {label:"使用场景",title:"个人信息保存后的整理问题",intro:"个人信息分散在平台收藏、截图和备忘录中。保存之后仍需要手动命名、归类、找回并核对来源。",blocks:[
      {label:"平台收藏",title:"结构跟随平台",body:"内容分散在不同应用，标题模糊或内容下架后很难重新理解保存原因。"},
      {label:"备忘录与 Notion",title:"手动搬运步骤多",body:"重新命名、复制、归类和补来源需要逐条完成，信息容易长期停在收件箱。"},
      {label:"手机截图",title:"捕获快，找回困难",body:"画面仍在，但主题、标题和来源都需要之后重新判断。"}
    ]},
    {label:"V1 设计",title:"V1 的处理方式",intro:"V1 会将材料拆成时间、待办、知识和行动，并继续生成优先级与处理建议。该版本完成了统一收件箱和 AI 分析流程。",blocks:[
      {label:"输入",title:"统一收件箱",body:"收集截图、收藏文字与备忘录，并尝试识别内容类型。"},
      {label:"AI 输出",title:"拆分与优先级",body:"模型拆分内容，判断时效和价值，再生成行动建议。"},
      {label:"页面",title:"处理队列",body:"使用状态、优先级和建议组织待处理信息。"}
    ],media:[{src:"/signal-v1.png",alt:"Signal V1 信息调度页面",caption:"V1 · 统一收件箱、优先级与 AI 建议"}]},
    {label:"自用问题",title:"真实自用中发现的问题",blocks:[
      {label:"问题 01",title:"完整材料被机械拆散",body:"同一条材料被拆成多个字段后失去原有语境，核对时仍需返回截图。"},
      {label:"问题 02",title:"AI 判断增加阅读负担",body:"优先级、价值和行动建议形成另一层分析，但日常任务主要是理解、归类与找回。"},
      {label:"问题 03",title:"来源和个人结构不突出",body:"系统预设分类限制个人组织方式，整理结果又占据了原文和原图的位置。"}
    ],comparison:{headers:["V1 行为","自用问题"],rows:[["按时间、待办、知识和行动拆分","完整语境被打散"],["生成优先级与行动建议","用户需要阅读额外的 AI 分析"],["使用系统预设结构","个人分类习惯难以保留"],["摘要作为主要结果","原文、原图和来源不够突出"]]}},
    {label:"产品修改",title:"根据自用问题完成的功能修改",blocks:[
      {label:"内容处理",title:"保留完整语境",body:"删除优先级、价值判断和行动建议；仅在多个主题彼此无关时拆分。"},
      {label:"信息结构",title:"分类树由用户建立",body:"系统可推荐已有路径，但分类、层级和名称由用户维护。"},
      {label:"来源核对",title:"结果与原始材料并列",body:"整理内容、个人备注、原文、原图和来源在详情中同时展示。"}
    ],media:[{src:"/signal-note-import.png",alt:"Signal 混合备忘录导入页面",caption:"内容导入 · 保留完整语境，整理结果确认后写入",markers:[{x:33,y:22,label:"备忘录 / 截图"},{x:47,y:48,label:"完整语境"},{x:73,y:77,label:"确认写入"}]}],evidence:[{meta:"模型边界",title:"只做识别与轻度整理",detail:"不补充原文中不存在的信息，也不输出优先级、价值判断和行动建议。"},{meta:"数据处理",title:"本地优先，AI 整理需要模型服务",detail:"图片 OCR 在浏览器完成；整理文本会经项目服务发送给 DeepSeek。"}]},
    {label:"当前产品",title:"当前功能与工作区",intro:"当前版本支持导入、整理、分类、编辑、移动、收藏、置顶和来源核对。以下界面来自隔离演示数据，不读取个人日常使用数据。",blocks:[
      {label:"左栏",title:"多级分类树",body:"用户创建分类和子分类，并进行移动、复制、图标与收藏设置。"},
      {label:"中栏",title:"分类与内容列表",body:"子分类和完整记录保持列表密度，支持排序、拖拽和批量移动。"},
      {label:"右栏",title:"详情编辑与来源",body:"整理后内容、个人备注、原文和来源在同一页面核对。"}
    ],media:[{src:"/signal-category-tree.png",alt:"Signal 分类树与内容列表",caption:"分类与列表 · 用户维护多级结构",markers:[{x:11,y:61,label:"多级分类"},{x:49,y:34,label:"子分类"},{x:66,y:58,label:"完整记录"}]},{src:"/signal-content-detail.png",alt:"Signal 内容详情和来源",caption:"内容详情 · 编辑整理结果并核对原始来源",markers:[{x:42,y:50,label:"内容列表"},{x:78,y:34,label:"整理结果"},{x:81,y:79,label:"原始来源"}]},{src:"/signal-board-view.png",alt:"Signal 分类看板",caption:"分类看板 · 查看不同分类中的内容分布",markers:[{x:9,y:44,label:"视图切换"},{x:43,y:25,label:"一级分类"},{x:74,y:36,label:"内容分布"}]}],demo:true},
    {label:"迭代与限制",title:"自用迭代与当前限制",blocks:[],comparison:{headers:["自用问题","产品修改"],rows:[
      ["批量截图等待时间长","复用 OCR Worker，并增加逐张处理进度"],
      ["分类层级多时难以浏览","调整缩进、信息密度和导航交互"],
      ["分类后难以重新使用信息","增加详情、编辑、收藏、置顶、列表和看板"]
    ]},evidence:[
      {meta:"当前证据",title:"多轮真实自用迭代",detail:"产品已基于个人真实整理任务完成 V1 到当前版本的功能删减和重构。"},
      {meta:"当前限制",title:"没有公开的连续使用记录",detail:"尚未形成可公开的一周连续使用记录，因此不声称稳定使用频率或效率提升。"}
    ]}
  ],
  demo:"signal",demoIntro:"信息库展示用户分类树、分类概览、最近整理内容和多视图入口。",productImage:"/signal-library-overview.png",imageNote:"作品集演示数据 · 当前真实产品界面",links:[{label:"公开体验版",note:"公开演示版待部署"}]
};

export default function Page(){return <ProjectCase d={d}/>}
