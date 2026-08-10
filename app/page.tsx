const capabilities = [
  ["产品思考", "从真实场景出发，把模糊需求拆成能验证的任务和流程。"],
  ["AI 应用设计", "为岗位识别、简历改写等 7 类任务设计 Prompt 与结构化输出规则。"],
  ["快速落地", "用 AI 辅助开发，把产品想法做成可体验、可迭代的线上版本。"],
  ["复盘迭代", "保留版本、提交与反馈证据，让每次判断都可以回看。"],
];

const evidence = [
  ["14", "个线上版本"],
  ["21", "次 Git 提交"],
  ["7", "类 AI 任务规则"],
  ["1", "个已部署产品"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap" aria-label="主导航">
        <a className="brand" href="#top">PORTFOLIO<span>·</span>2026</a>
        <div className="nav-links">
          <a href="#work">项目</a>
          <a href="#about">关于我</a>
          <a className="nav-cta" href="#contact">联系</a>
        </div>
      </nav>

      <section className="hero wrap" id="top">
        <p className="eyebrow">AI PRODUCT · CHENGDU</p>
        <h1>把 AI 做成<br /><em>真正能用的产品。</em></h1>
        <div className="hero-bottom">
          <p className="intro">四川大学本科在读，正在探索 AI 产品、产品运营与大模型评测。关注真实用户问题，也享受把一个想法推到上线。</p>
          <a className="circle-link" href="#work" aria-label="查看作品">
            <span>查看<br />作品 ↓</span>
          </a>
        </div>
        <div className="hero-line" />
        <p className="availability"><span className="status-dot" /> 目前在成都 · 寻找 AI 产品相关实习机会</p>
      </section>

      <section className="statement wrap" id="about">
        <p className="section-label">01 / 我相信</p>
        <h2>好的 AI 产品，不是展示模型有多聪明，<br />而是让用户<strong>更快完成一件重要的事。</strong></h2>
        <p className="statement-note">我有工科训练与旅游管理的交叉背景，习惯同时看技术可行性、用户体验和商业场景。</p>
      </section>

      <section className="project-section" id="work">
        <div className="wrap">
          <div className="section-top">
            <p className="section-label">02 / SELECTED WORK</p>
            <p>主案例 / 01</p>
          </div>

          <article className="project-card">
            <div className="project-copy">
              <p className="project-type">AI 求职准备工具 · 2026</p>
              <h2>轻岗<br /><em>QingGang</em></h2>
              <p className="project-summary">面向在校学生的 AI 求职准备产品。帮助用户识别岗位、对比机会、梳理经历、改写简历，并形成下一步行动计划。</p>
              <div className="tags"><span>React</span><span>TypeScript</span><span>DeepSeek API</span><span>Cloudflare D1</span></div>
              <a href="#qinggang" className="text-link">阅读案例 <span>↘</span></a>
            </div>
            <div className="product-visual" aria-label="轻岗产品核心流程示意">
              <div className="browser-bar"><i /><i /><i /><b>qinggang / 求职准备</b></div>
              <div className="app-layout">
                <aside><span className="app-logo">Q</span><span className="active-bar" /><span /><span /><span /></aside>
                <div className="app-content">
                  <p>今天，先完成哪一步？</p>
                  <div className="task-grid"><div><b>岗位识别</b><small>找到适合你的方向</small></div><div><b>经历分析</b><small>把经历变成证据</small></div><div><b>简历优化</b><small>按岗位调整表达</small></div><div><b>行动计划</b><small>明确下一步</small></div></div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="case wrap" id="qinggang">
        <div className="case-heading"><p className="section-label">CASE STUDY / QINGGANG</p><h2>从“我不知道该做什么”，<br />到一条能执行的求职路径。</h2></div>
        <div className="case-grid">
          <div className="case-item"><span>01</span><h3>问题</h3><p>求职准备信息分散，学生难以判断岗位匹配度，也不知道如何把零散经历组织成可信的简历表达。</p></div>
          <div className="case-item"><span>02</span><h3>方案</h3><p>将岗位识别、对比、经历追问、简历改写与行动计划串成一个连续工作流，而非单点 AI 问答。</p></div>
          <div className="case-item"><span>03</span><h3>边界</h3><p>通过结构化规则约束输出，尤其限制模型生成无依据的经历，确保建议可解释、可追溯。</p></div>
        </div>
        <div className="evidence-row">
          {evidence.map(([number, label]) => <div className="metric" key={label}><strong>{number}</strong><span>{label}</span></div>)}
        </div>
        <p className="case-footnote">产品已公开部署；用户测试与迭代数据正在收集中。此处仅呈现已留存版本记录与开发证据，不把待验证结果包装成结论。</p>
      </section>

      <section className="skills">
        <div className="wrap">
          <p className="section-label">03 / HOW I WORK</p>
          <div className="skills-grid">
            {capabilities.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="next wrap">
        <p className="section-label">04 / IN PROGRESS</p>
        <div><h2>下一个案例，<br />正在发生。</h2><p>团队项目、用户测试与更多 AI 应用实验将持续补充到这里。我的原则是：只有自己能讲清、能拿出证据的内容，才会放进作品集。</p></div>
      </section>

      <footer id="contact">
        <div className="wrap footer-inner">
          <p className="section-label">LET&apos;S CONNECT</p>
          <h2>如果你也在做<br /><em>有用的 AI 产品，</em><br />欢迎联系我。</h2>
          <p className="contact-note">个人联系方式与简历下载链接将在正式投递前补充。</p>
          <div className="footer-bottom"><span>© 2026 · PERSONAL PORTFOLIO</span><a href="#top">回到顶部 ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
