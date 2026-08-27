export default function ProductManagerEvidence({kind}:{kind:"threadline"|"zhixu"}){
  return kind==="threadline"?<ThreadlineEvidence/>:<ZhixuEvidence/>;
}

function ThreadlineEvidence(){
  return <div className="pm-evidence pm-threadline">
    <section className="pm-prd">
      <header><span>PRD 摘要 / V1.0</span><b>需求、范围与验收放在同一张产品说明中</b></header>
      <dl><div><dt>目标用户</dt><dd>3–10 人轻量项目团队的项目负责人</dd></div><div><dt>核心问题</dt><dd>真实变化先发生在沟通中，计划与事实持续脱节</dd></div><div><dt>MVP 目标</dt><dd>让一次变化可识别、可核对、可审批、可追溯</dd></div><div><dt>明确不做</dt><dd>当前版本不自动操作微信、Notion 或 Linear</dd></div></dl>
    </section>
    <section className="pm-flow" aria-label="Threadline Agent 流程">
      <header><span>USER + AGENT FLOW</span><h3>一次变化如何成为可核对的行动记录</h3></header>
      <ol>{["上下文导入","变化识别","证据核对","影响分析","人工审批","内部行动记录","结果确认"].map((item,index)=><li key={item}><i>{index+1}</i><b>{item}</b><small>{index===0||index===4||index===6?"用户 / 负责人":"Agent + 规则"}</small></li>)}</ol>
    </section>
    <div className="pm-scope-grid">
      <section><span>MVP / 优先级</span><h3>P0 先保证可信流转</h3><ul><li>P0 · 来源、旧状态、影响对象可见</li><li>P0 · 未确认内容不得进入正式状态</li><li>P0 · 批准、应用、核对结果分开</li><li>P1 · 关联变化合并与父子关系</li><li>Later · 外部工具自动执行</li></ul></section>
      <section><span>P0 / 验收标准</span><h3>可直接用于交付验收</h3><ul><li>每条变化都能返回原文、来源与时间</li><li>负责人确认前不改写项目事实</li><li>展示任务、负责人和截止时间影响</li><li>相同变化不会生成重复正式记录</li><li>页面不把内部记录称为外部执行完成</li></ul></section>
    </div>
  </div>;
}

function ZhixuEvidence(){
  return <div className="pm-evidence pm-zhixu">
    <section className="pm-prd">
      <header><span>PRD 摘要 / 2026.02—03</span><b>以真实招聘机会承接判断和行动</b></header>
      <dl><div><dt>目标用户</dt><dd>同时处理多条实习与校招机会的求职者</dd></div><div><dt>核心任务</dt><dd>确认岗位事实，核对个人依据，决定下一步</dd></div><div><dt>MVP 范围</dt><dd>JD 导入、确认、判断、证据、行动与阶段</dd></div><div><dt>核心原则</dt><dd>原文没有的信息不补写，低置信结果由用户确认</dd></div></dl>
    </section>
    <section className="pm-ia">
      <header><span>INFORMATION ARCHITECTURE</span><h3>三个对象，而不是一组平铺功能</h3></header>
      <div><article><i>01</i><h4>招聘机会</h4><p>原始 JD、公开来源、提取字段、硬性条件、确认状态、岗位阶段</p></article><b>提供判断对象 →</b><article><i>02</i><h4>个人求职档案</h4><p>教育、实习、项目、技能，以及支持岗位要求的具体证据</p></article><b>形成依据 →</b><article><i>03</i><h4>投递行动</h4><p>投递、补证据、修改简历、比较、归档和阶段记录</p></article></div>
    </section>
    <section className="pm-boundary"><header><span>DECISION BOUNDARY</span><h3>AI、规则与用户分别负责什么</h3></header><div><article><b>AI</b><p>提取与整理非结构化 JD，检索可能相关的个人经历。</p></article><article><b>规则</b><p>判断毕业年份、实习周期、城市等确定性条件。</p></article><article><b>用户</b><p>确认低置信字段、重复岗位、证据采用和正式行动。</p></article></div></section>
    <section className="pm-data-note">
      <span>数据实现 / 辅助能力</span>
      <p>使用 D1/SQLite 保存岗位、证据判断与投递状态，并通过基础查询核对数据完整性和更新时间。</p>
    </section>
  </div>;
}
