import { sitePath as path } from "./site-path";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="folio-home" id="home">
      <header className="folio-nav" data-site-nav>
        <a className="folio-mark" href="#home" aria-label="返回首页">ZC<span>／26</span></a>
        <nav aria-label="主导航">
          <a href="#work" data-nav-section="work">项目</a>
          <a href="#about" data-nav-section="about">关于</a>
          <a href={path("/resume.pdf")} download>简历 ↗</a>
        </nav>
        <a className="folio-contact" href="mailto:zc_xingshan@qq.com">联系我</a>
      </header>

      <section className="folio-hero folio-hero-index">
        <div className="folio-hero-black reveal-group">
          <header><span>AI PRODUCT PORTFOLIO</span><span>2026</span></header>
          <div className="folio-hero-name"><p>ZHANG CAN</p><h1>张灿</h1></div>
          <footer><span>四川大学</span><span>旅游管理本科（工科转入）</span><span>成都</span></footer>
        </div>
        <aside className="folio-hero-white reveal-group">
          <span>01 / INDEX</span>
          <div><p>求职方向</p><h2>AI 产品实习<br/>产品相关实习</h2><p className="folio-project-preview">百词斩 AIGC 实习｜Threadline · 职序 ZHIXU · Signal</p></div>
          <dl><div><dt>项目</dt><dd>3 个已落地 AI 产品项目</dd></div><div><dt>形式</dt><dd>1 个团队项目 / 2 个独立项目</dd></div><div><dt>当前状态</dt><dd>寻找 2026 实习机会</dd></div></dl>
          <nav><a href="#work">查看项目 <span>↓</span></a><a href={path("/resume.pdf")} download>下载简历 <span>↗</span></a></nav>
        </aside>
      </section>

      <section className="folio-work" id="work">
        <header className="folio-section-head reveal-group">
          <p>Selected work</p><h2>项目案例</h2><span>01—03</span>
        </header>
        <article className="folio-feature reveal-card">
          <a className="folio-feature-media" href={path("/projects/threadline/")}>
            <img src={path("/real-threadline.png")} alt="Threadline 项目变化执行工作台" />
            <i className="folio-cover-notes" aria-hidden="true"><b>来源证据</b><b>影响判断</b><b>人工审批</b></i>
            <span>查看完整案例 ↗</span>
          </a>
          <div className="folio-feature-copy">
            <div className="folio-project-no">01 <span>／ Team Project</span></div>
            <p className="folio-kicker">项目变化执行智能体</p>
            <h3>Threadline</h3>
            <p className="folio-summary">面向 3–10 人项目团队，从聊天、会议记录和项目材料中识别范围、负责人和截止时间变化，并在人工确认后更新内部行动记录。</p>
            <dl>
              <div><dt>我的工作</dt><dd>产品定位、Agent 流程、MVP 范围、版本优先级、验收与团队推进</dd></div>
              <div><dt>项目证据</dt><dd>7 人团队 · Web MVP · 2 个课程协作小组测试</dd></div>
            </dl>
            <div className="folio-project-actions"><a className="folio-text-link" href={path("/projects/threadline/")}>阅读 Case Study <span>↗</span></a><a className="folio-text-link" href="https://threadline-agent.oliverruby788.chatgpt.site/" target="_blank" rel="noreferrer">打开公开 Demo <span>↗</span></a></div>
          </div>
        </article>
        <div className="folio-project-pair">
          <article className="folio-project-card reveal-card">
            <a className="folio-card-media folio-card-zhixu" href={path("/projects/zhixu/")}><img src={path("/real-zhixu.png")} alt="职序当前求职决策工作台"/><i className="folio-cover-notes" aria-hidden="true"><b>岗位要求</b><b>个人证据</b><b>投递行动</b></i><span>02</span></a>
            <div className="folio-card-copy">
              <div><span>Independent Project</span><span>功能型 MVP · 4 人测试</span></div>
              <p>求职机会与决策工作台</p><h3>职序 ZHIXU</h3>
              <p className="folio-card-summary">面向实习与校招求职者，保存岗位来源，确认 JD 字段，核对硬性条件与个人经历依据，并管理投递行动。</p>
              <dl><div><dt>我的工作</dt><dd>需求定义、产品方案、AI 工作流、产品实现与用户测试</dd></div><div><dt>项目证据</dt><dd>功能型 MVP · 4 名用户任务测试 · V1 重构</dd></div></dl>
              <div className="folio-project-actions"><a className="folio-text-link" href={path("/projects/zhixu/")}>阅读 Case Study <span>↗</span></a></div>
            </div>
          </article>
          <article className="folio-project-card reveal-card">
            <a className="folio-card-media folio-card-signal" href={path("/projects/signal/")}><img src={path("/real-signal.png")} alt="Signal 当前信息分类工作区"/><i className="folio-cover-notes" aria-hidden="true"><b>原始来源</b><b>轻度整理</b><b>用户分类</b></i><span>03</span></a>
            <div className="folio-card-copy">
              <div><span>Independent Project</span><span>本地产品 · 自用迭代</span></div>
              <p>个人收藏整理工具</p><h3>Signal</h3>
              <p className="folio-card-summary">对截图、收藏文字和混合备忘录进行 OCR 与轻度整理，用户确认后放入自己的分类体系，并保留原始来源。</p>
              <dl><div><dt>我的工作</dt><dd>问题定义、信息架构、AI 整理规则、产品实现与自用迭代</dd></div><div><dt>项目证据</dt><dd>本地可运行产品 · 多轮真实自用迭代 · V1 功能删减</dd></div></dl>
              <div className="folio-project-actions"><a className="folio-text-link" href={path("/projects/signal/")}>阅读 Case Study <span>↗</span></a></div>
            </div>
          </article>
        </div>
      </section>

      <section className="folio-about" id="about">
        <header className="reveal-group"><p>About</p><h2>个人档案</h2><span>04</span></header>
        <div className="folio-profile">
          <article className="folio-profile-card reveal-card"><span>ZC / 2026</span><div><h3>张灿</h3><p>ZHANG CAN</p></div><a href="mailto:zc_xingshan@qq.com">zc_xingshan@qq.com ↗</a></article>
          <div className="folio-profile-details reveal-card">
            <p>四川大学旅游管理本科生（工科转入），正在寻找 AI 产品与产品相关实习。在百词斩参与 AIGC 内容生产、模型评测、Prompt 迭代、Bad Case 分析与人机协同流程。</p>
            <dl>
              <div><dt>Education</dt><dd>四川大学 · 旅游管理本科（工科转入）</dd></div>
              <div><dt>Experience</dt><dd>百词斩 · AIGC 内容量产助理</dd></div>
              <div><dt>Focus</dt><dd>AI 产品 · 可信交互 · 工作流</dd></div>
              <div><dt>Seeking</dt><dd>AI 产品实习 / 产品相关实习</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <footer className="folio-footer" id="contact">
        <p>Contact</p>
        <div><h2>联系</h2><a href="mailto:zc_xingshan@qq.com">zc_xingshan@qq.com <span>↗</span></a></div>
        <aside><span>成都 / 可实习</span><span>四川大学 · 旅游管理</span><a href={path("/resume.pdf")} download>下载 PDF 简历 ↓</a><a href="#home">回到顶部 ↑</a></aside>
      </footer>
    </main>
  );
}
