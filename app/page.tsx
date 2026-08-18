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
          <footer><span>四川大学</span><span>管理专业本科</span><span>成都</span></footer>
        </div>
        <aside className="folio-hero-white reveal-group">
          <span>01 / INDEX</span>
          <div><p>求职方向</p><h2>AI 产品实习<br/>产品相关实习</h2><p className="folio-project-preview">Threadline · 职序 ZHIXU · Signal</p></div>
          <dl><div><dt>项目</dt><dd>3 个产品案例</dd></div><div><dt>形式</dt><dd>团队项目 / 独立项目</dd></div><div><dt>当前状态</dt><dd>寻找 2026 实习机会</dd></div></dl>
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
            <span>查看完整案例 ↗</span>
          </a>
          <div className="folio-feature-copy">
            <div className="folio-project-no">01 <span>／ Team Project</span></div>
            <p className="folio-kicker">项目变化执行智能体</p>
            <h3>Threadline</h3>
            <p className="folio-summary">从会议、聊天与文件中识别项目变化，在证据、影响和权限判断之后进入受控执行。</p>
            <dl>
              <div><dt>我的角色</dt><dd>项目总负责人兼 AI 产品负责人</dd></div>
              <div><dt>项目性质</dt><dd>7 人跨职能团队 · Agent MVP</dd></div>
            </dl>
            <div className="folio-project-actions"><a className="folio-text-link" href={path("/projects/threadline/")}>阅读 Case Study <span>↗</span></a><a className="folio-text-link" href="https://threadline-agent.oliverruby788.chatgpt.site/" target="_blank" rel="noreferrer">打开公开 Demo <span>↗</span></a></div>
          </div>
        </article>
        <div className="folio-project-pair">
          <article className="folio-project-card reveal-card">
            <a className="folio-card-media folio-card-zhixu" href={path("/projects/zhixu/")}><img src={path("/real-zhixu.png")} alt="职序当前求职决策工作台"/><span>02</span></a>
            <div className="folio-card-copy">
              <div><span>Independent Project</span><span>功能型 MVP · 持续迭代</span></div>
              <p>求职机会与决策工作台</p><h3>职序 ZHIXU</h3>
              <p className="folio-card-summary">当前以 JD 文本和公开链接为主要输入，把招聘信息转化为可确认、可比较、可持续跟踪的求职机会。</p>
              <dl><div><dt>我的工作</dt><dd>产品定义、AI 工作流、独立落地</dd></div><div><dt>关键迭代</dt><dd>从职业认知工具转向求职决策工作台</dd></div></dl>
              <div className="folio-project-actions"><a className="folio-text-link" href={path("/projects/zhixu/")}>阅读 Case Study <span>↗</span></a><span className="folio-link-note">公开演示访问权限待恢复</span></div>
            </div>
          </article>
          <article className="folio-project-card reveal-card">
            <a className="folio-card-media folio-card-signal" href={path("/projects/signal/")}><img src={path("/real-signal.png")} alt="Signal 当前信息分类工作区"/><span>03</span></a>
            <div className="folio-card-copy">
              <div><span>Independent Project</span><span>本地产品 · 个人日常使用</span></div>
              <p>个人收藏整理工具</p><h3>Signal</h3>
              <p className="folio-card-summary">保留原始来源和完整语境，让散落的信息能够被检索、编辑，并真正回到后续行动。</p>
              <dl><div><dt>我的工作</dt><dd>信息架构、AI 交互、独立落地</dd></div><div><dt>迭代依据</dt><dd>围绕个人真实整理任务持续自用</dd></div></dl>
              <div className="folio-project-actions"><a className="folio-text-link" href={path("/projects/signal/")}>阅读 Case Study <span>↗</span></a><span className="folio-link-note">公开体验版待部署</span></div>
            </div>
          </article>
        </div>
      </section>

      <section className="folio-about" id="about">
        <header className="reveal-group"><p>About</p><h2>个人档案</h2><span>04</span></header>
        <div className="folio-profile">
          <article className="folio-profile-card reveal-card"><span>ZC / 2026</span><div><h3>张灿</h3><p>ZHANG CAN</p></div><a href="mailto:zc_xingshan@qq.com">zc_xingshan@qq.com ↗</a></article>
          <div className="folio-profile-details reveal-card">
            <p>四川大学管理专业本科生，正在寻找 AI 产品与产品相关实习。作品集中的三个案例分别记录团队协作、独立产品迭代与个人真实问题的产品化过程。</p>
            <dl>
              <div><dt>Education</dt><dd>四川大学 · 管理专业本科</dd></div>
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
        <aside><span>成都 / 可实习</span><span>四川大学 · 管理专业</span><a href={path("/resume.pdf")} download>下载 PDF 简历 ↓</a><a href="#home">回到顶部 ↑</a></aside>
      </footer>
    </main>
  );
}
