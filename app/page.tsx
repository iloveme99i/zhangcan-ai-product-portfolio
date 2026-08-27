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
          <a href={path("/resume.pdf")} target="_blank" rel="noreferrer">简历 ↗</a>
        </nav>
        <a className="folio-contact" href="mailto:zc_xingshan@qq.com">联系我</a>
      </header>

      <section className="folio-hero folio-hero-index">
        <div className="folio-hero-black reveal-group">
          <header><span>AI PRODUCT PORTFOLIO</span><span>2026</span></header>
          <div className="folio-hero-name"><p>ZHANG CAN</p><h1>张灿</h1></div>
          <footer><span>四川大学 · 2029 届</span><span>旅游管理本科（工科转入）</span><span>成都</span></footer>
        </div>
        <aside className="folio-hero-white reveal-group">
          <span>01 / INDEX</span>
          <div><p>求职方向</p><h2>AI 产品实习生</h2><p className="folio-positioning">做过真实 AIGC 内容生产，也能从问题定义推进到可运行 MVP。</p><p className="folio-project-preview">评测 3000+ 条模型生成结果，参与 Prompt 迭代与 Bad Case 治理。</p></div>
          <dl className="folio-proof-list"><div><dt>真实业务</dt><dd>百词斩 AIGC 实习 · 3000+ 条评测</dd></div><div><dt>模型治理</dt><dd>Prompt 迭代 · Bad Case 闭环</dd></div><div><dt>团队交付</dt><dd>7 人跨职能团队 Agent Web MVP</dd></div><div><dt>用户验证</dt><dd>2 个课程小组 · 4 名真实 JD 用户</dd></div><div><dt>产品交付</dt><dd>PRD · 信息架构 · 原型 · P0 验收</dd></div><div><dt>独立实现</dt><dd>2 个可运行功能型产品</dd></div></dl>
          <nav><a href="#work">查看项目 <span>↓</span></a><a href={path("/resume.pdf")} target="_blank" rel="noreferrer">查看简历 <span>↗</span></a></nav>
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
            <p className="folio-kicker">AI 项目变化识别与审批 Agent</p>
            <h3>Threadline</h3>
            <p className="folio-summary">面向 3–10 人项目团队，从聊天、会议记录和项目材料中识别范围、负责人和截止时间变化，并在人工确认后更新内部行动记录。</p>
            <dl><div><dt>问题</dt><dd>讨论、决定与执行状态混在聊天和会议中</dd></div><div><dt>核心判断</dt><dd>AI 结果需经过来源核对、状态流转和人工审批</dd></div><div><dt>产品经理交付物</dt><dd>PRD · Agent 流程 · 状态模型 · P0 验收标准</dd></div><div><dt>真实证据</dt><dd>7 人跨职能团队 · Web MVP · 2 个课程项目测试</dd></div></dl>
            <div className="folio-project-actions"><a className="folio-text-link" href={path("/projects/threadline/")}>阅读 Case Study <span>↗</span></a><a className="folio-text-link" href="https://iloveme99i.github.io/threadline-agent/" target="_blank" rel="noreferrer">打开完整产品 <span>↗</span></a></div>
          </div>
        </article>
        <div className="folio-project-pair">
          <article className="folio-project-card reveal-card">
            <a className="folio-card-media folio-card-zhixu" href={path("/projects/zhixu/")}><img src={path("/real-zhixu.png")} alt="职序当前求职决策工作台"/><span>02</span></a>
            <div className="folio-card-copy">
              <div><span>Independent Project</span><span>功能型 MVP · 4 人测试</span></div>
              <p>求职机会与决策工作台</p><h3>职序 ZHIXU</h3>
              <p className="folio-card-summary">面向实习与校招求职者，保存岗位来源，确认 JD 字段，核对硬性条件与个人经历依据，并管理投递行动。</p>
              <dl><div><dt>问题</dt><dd>岗位事实、个人证据与投递行动彼此分散</dd></div><div><dt>核心判断</dt><dd>模型整理、规则判断、用户确认必须分层</dd></div><div><dt>产品经理交付物</dt><dd>PRD · 信息架构 · 原型 · 用户测试</dd></div><div><dt>真实证据</dt><dd>功能型 MVP · 4 名用户真实 JD 任务测试</dd></div></dl>
              <div className="folio-project-actions"><a className="folio-text-link" href={path("/projects/zhixu/")}>阅读 Case Study <span>↗</span></a><a className="folio-text-link" href="https://iloveme99i.github.io/zhixu-career/" target="_blank" rel="noreferrer">打开完整产品 <span>↗</span></a></div>
            </div>
          </article>
          <article className="folio-project-card folio-product-lab reveal-card">
            <a className="folio-card-media folio-card-signal" href={path("/projects/signal/")}><img src={path("/real-signal.png")} alt="Signal 当前信息分类工作区"/><span>03</span></a>
            <div className="folio-card-copy">
              <div><span>Product Lab</span><span>本地产品 · 自用迭代</span></div>
              <p>个人收藏整理工具</p><h3>Signal</h3>
              <p className="folio-card-summary">对截图、收藏文字和混合备忘录进行 OCR 与轻度整理，用户确认后放入自己的分类体系，并保留原始来源。</p>
              <dl><div><dt>问题</dt><dd>AI 分析过多，反而增加个人整理的阅读负担</dd></div><div><dt>关键设计</dt><dd>只保留识别、轻度整理、用户分类与原始来源</dd></div><div><dt>结果</dt><dd>真实自用推动 V1 功能删减与产品重构</dd></div></dl>
              <div className="folio-project-actions"><a className="folio-text-link" href={path("/projects/signal/")}>阅读 Case Study <span>↗</span></a></div>
            </div>
          </article>
        </div>
      </section>

      <section className="folio-about" id="about">
        <header className="reveal-group"><p>ABOUT / 04</p><h2>关于我</h2><span>04</span></header>
        <div className="folio-about-copy reveal-card">
          <p>我是张灿，四川大学2029届本科生，旅游管理专业，由工科转入。</p>
          <p>我在百词斩参与过AIGC内容生产，日常工作包括模型结果评测、Prompt迭代、Bad Case整理和审核流程优化。</p>
          <p>作品集里的三个项目都来自我实际遇到的问题：Threadline来自课程团队协作，职序来自自己的求职过程，Signal来自日常收藏和信息整理。我在这些项目中负责过需求分析、PRD、信息架构、产品流程、原型、用户测试、验收和团队推进。</p>
          <p>目前寻找AI产品实习或产品相关实习。</p>
        </div>
        <div className="folio-about-info reveal-card">
          <h3>个人信息</h3>
          <dl>
            <div><dt>学校</dt><dd>四川大学</dd></div><div><dt>年级</dt><dd>2029届本科</dd></div>
            <div><dt>专业</dt><dd>旅游管理（工科转入）</dd></div><div><dt>经历</dt><dd>百词斩AIGC内容量产助理</dd></div>
            <div><dt>求职方向</dt><dd>AI产品实习 / 产品实习</dd></div><div><dt>到岗安排</dt><dd>即日起可到岗｜每周5–6天｜可连续实习6个月以上</dd></div>
            <div><dt>所在地</dt><dd>成都</dd></div><div><dt>邮箱</dt><dd>zc_xingshan@qq.com</dd></div>
          </dl>
          <nav><a href={path("/resume.pdf")} download="张灿-产品-简历.pdf">下载简历</a><a href="mailto:zc_xingshan@qq.com">邮件联系</a></nav>
        </div>
      </section>

      <footer className="folio-footer" id="contact">
        <p>CONTACT / 05</p>
        <div className="folio-contact-main"><div><h2>正在寻找AI产品实习机会</h2><p>即日起可到岗｜每周5–6天｜可连续实习6个月以上</p><p>如果岗位合适，欢迎联系我。</p></div><address><b>张灿</b><span>四川大学｜2029届本科</span><a href="mailto:zc_xingshan@qq.com">zc_xingshan@qq.com</a></address></div>
        <nav className="folio-contact-actions"><a href={path("/resume.pdf")} download="张灿-产品-简历.pdf">下载简历</a><a href="mailto:zc_xingshan@qq.com">邮件联系</a><a href="#home">回到顶部</a></nav>
        <aside><span>ZHANG CAN · AI PRODUCT PORTFOLIO · 2026</span></aside>
      </footer>
    </main>
  );
}
