import ProjectCase,{CaseData} from "../ProjectCase";

export const metadata={title:"Signal 产品案例｜张灿 AI 产品作品集"};
export const dynamic="force-static";

const d:CaseData={
  name:"Signal",index:"03",next:{name:"Threadline",href:"/projects/threadline"},cover:"/real-signal.png",
  kicker:"独立自用项目 · 信息识别与分类工具 · 2026",
  tagline:"从信息调度系统，收缩为轻量整理工具。",
  summary:"Signal 识别截图和混合备忘录，轻度整理后放入用户自己的分类树，同时保留原图、原文和来源。它来自我的真实整理问题，目前已进入个人连续自用。",
  role:"独立产品负责人",nature:"为自己设计并持续使用",user:"需要处理截图、收藏与混合备忘录的个人用户",stage:"本地可运行产品 · 已进入个人连续自用",
  facts:[
    ["真实输入","截图、收藏文字与混合备忘录"],
    ["核心原则","默认保留完整语境；只在主题彼此无关时拆分"],
    ["当前能力","OCR、轻度整理、多级分类、编辑、移动、收藏、置顶与来源溯源"],
    ["证据边界","可证明产品与连续迭代；尚无脱敏周记录证明稳定使用频率或效率提升"]
  ],
  story:[
    {label:"问题与替代方案",title:"我试过收藏夹、备忘录和 Notion，问题都发生在“保存之后”。",intro:"小红书、抖音、牛客、招聘平台和网页收藏持续增加，手机截图与备忘录也在堆积。现有工具能保存信息，但重新命名、归类、找回和核对来源仍要手动完成。",blocks:[
      {label:"平台收藏夹",title:"保留入口，但结构跟着平台走",body:"内容分散在不同 App；标题模糊或内容下架后，很难重新理解保存原因。"},
      {label:"备忘录 / Notion",title:"可以整理，但搬运成本过高",body:"每条内容都要重新命名、复制、归类并补来源，结果是信息长期停在收件箱。"},
      {label:"手机截图",title:"捕获最快，找回最弱",body:"原始画面仍在，但标题、主题和来源都依赖之后重新判断。"}
    ],evidence:[
      {meta:"独特任务",title:"轻度整理后进入自己的分类体系",detail:"Signal 不替代通用笔记工具，只压缩从碎片材料到可找回记录的中间劳动。"},
      {meta:"判断标准",title:"一周后仍能理解并回到来源",detail:"价值不在摘要数量，而在保留语境、个人结构与核对入口。"}
    ]},
    {label:"V1 与转向",title:"V1 替我判断得太多，反而制造新的阅读负担。",intro:"初始版本更像信息调度系统：AI 将材料拆成时间、待办、知识和行动，并继续生成优先级与建议。实际使用中，一条完整材料被拆散，页面也被状态和解释占满。",blocks:[
      {label:"V1",title:"统一收件箱与处理建议",body:"系统试图决定信息的时效、价值、行动和清理方式。"},
      {label:"失败",title:"AI 结论多于真实需要",body:"我需要快速理解与归类，而不是继续阅读另一层分析。"},
      {label:"转向",title:"从调度改为识别与分类",body:"删除复杂判断，将分类权与最终内容交还给用户。"}
    ],media:[
      {src:"/signal-v1.png",alt:"Signal V1 信息调度系统",caption:"V1 · 统一收件箱、优先级与 AI 建议"},
      {src:"/real-signal.png",alt:"Signal 当前信息分类工作区",caption:"当前版本 · 用户分类树、内容与来源"}
    ],evidence:[
      {meta:"08.12 · 1e0031e",title:"信息调度系统 V1",detail:"围绕来源、处理队列和 AI 建议建立第一个版本。"},
      {meta:"08.12 · 09284c8",title:"重构为识别与分类",detail:"核心任务收敛为提取、轻整理、归类和溯源。"}
    ]},
    {label:"产品决策",title:"三个取舍，让 Signal 更像工具而不是 AI 展示页。",blocks:[
      {label:"01 · 处理",title:"默认保留完整记录",body:"模型不机械拆字段；只有多个主题互不相关时才拆成少量完整内容。"},
      {label:"02 · 结构",title:"分类树由用户创建",body:"系统推荐已有路径，但不强迫用户接受预设知识体系。"},
      {label:"03 · 交互",title:"结果与来源同时存在",body:"整理内容、个人备注、原文和原图并列，摘要不会成为唯一事实。"}
    ],media:[
      {src:"/signal-note-import.png",alt:"Signal 混合备忘录导入界面",caption:"混合备忘录导入 · 模型调用前的真实输入界面",markers:[{x:33,y:22,label:"备忘录 / 截图"},{x:47,y:48,label:"保留完整语境"},{x:73,y:77,label:"整理后确认"}]}
    ],evidence:[
      {meta:"模型边界",title:"轻整理，不补造",detail:"不输出行动建议、价值判断和原文中不存在的信息。"},
      {meta:"隐私边界",title:"本地优先不等于完全离线",detail:"图片 OCR 在浏览器完成；AI 整理时文本和浏览器保存的 Key 会经项目服务发送给 DeepSeek。"}
    ]},
    {label:"当前产品",title:"同一工作区支持归类、找回、编辑与来源核对。",intro:"以下页面来自当前可运行 Signal，数据位于 signal.localhost 的隔离演示空间，不读取或覆盖个人日常使用的数据。",blocks:[
      {label:"左栏",title:"维护个人分类体系",body:"分类支持多级嵌套、移动、复制、图标和收藏。"},
      {label:"中栏",title:"浏览分类与完整记录",body:"子分类和内容保持列表密度，不把长文本全部摊开。"},
      {label:"右栏",title:"编辑并核对来源",body:"整理后内容、个人备注、原文和来源在同一上下文中。"}
    ],media:[
      {src:"/signal-category-tree.png",alt:"Signal 分类树与内容列表",caption:"分类树与列表 · 用户自己的结构",markers:[{x:11,y:61,label:"多级分类"},{x:49,y:34,label:"子分类"},{x:66,y:58,label:"完整记录"}]},
      {src:"/signal-content-detail.png",alt:"Signal 内容详情和来源溯源",caption:"详情与来源 · 整理结果可编辑、可核对",markers:[{x:42,y:50,label:"内容列表"},{x:78,y:34,label:"整理后内容"},{x:81,y:79,label:"原始来源"}]},
      {src:"/signal-board-view.png",alt:"Signal 分类看板",caption:"分类看板 · 同一信息库的跨分类概览",markers:[{x:9,y:44,label:"视图切换"},{x:43,y:25,label:"一级分类"},{x:74,y:36,label:"内容分布"}]}
    ],demo:true},
    {label:"自用迭代",title:"当前能证明的是连续自用与迭代，还不能证明效率提升。",blocks:[
      {label:"发现",title:"批量截图等待过长",body:"复用 OCR worker 并展示逐张进度，减少连续导入时的等待和不确定。"},
      {label:"发现",title:"层级多时难以浏览",body:"用缩进表达结构，收紧图标、按钮与色块，让导航保持工具密度。"},
      {label:"发现",title:"分类不是终点",body:"补充详情编辑、收藏、置顶、列表和看板，让信息可以被重新进入。"}
    ],evidence:[
      {meta:"81470bb",title:"批量截图识别提速",detail:"围绕实际导入阻力优化 OCR 资源复用与处理节奏。"},
      {meta:"faf8452 / d02663a",title:"分类导航与自定义工作区",detail:"连续修正层级、密度和用户可配置能力。"},
      {meta:"当前不足",title:"尚无一周脱敏自用记录",detail:"不使用‘每天使用’‘长期稳定’或‘提升效率’等尚未被直接记录证明的结论。"},
      {meta:"下一步",title:"记录真实找回任务",detail:"补充输入类型、整理次数、找回成功与失败、以及因此修改的功能。"}
    ]}
  ],
  demo:"signal",demoIntro:"信息库展示用户分类树、分类概览、最近整理内容和多视图入口。",productImage:"/signal-library-overview.png",imageNote:"作品集演示数据 · 独立浏览器来源 · 当前真实产品界面",links:[{label:"公开体验版",note:"Sites 项目不可用 · 公开演示版待部署"}]
};

export default function Page(){return <ProjectCase d={d}/>}
