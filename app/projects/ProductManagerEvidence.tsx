export default function ProductManagerEvidence({kind}:{kind:"threadline"|"zhixu"}){
  return kind==="threadline"?<ThreadlineEvidence/>:<ZhixuEvidence/>;
}

function ThreadlineEvidence(){
  const states=[
    ["Captured","保留原始材料","刚被系统捕获，还不是项目事实"],
    ["Proposed","形成变化提议","讨论与决定先分开"],
    ["Confirmed","负责人已确认","批准不等于已经执行"],
    ["Applied","写入内部行动记录","外部工具仍由成员处理"],
    ["Verified","核对结果","确认状态与实际结果一致"]
  ];
  return <div className="pm-evidence pm-threadline">
    <section className="pm-prd">
      <header><span>PRD 摘要 / V1.0</span><b>需求、范围与验收放在同一张产品说明中</b></header>
      <dl><div><dt>目标用户</dt><dd>3–10 人轻量项目团队的项目负责人</dd></div><div><dt>核心问题</dt><dd>真实变化先发生在沟通中，计划与事实持续脱节</dd></div><div><dt>MVP 目标</dt><dd>让一次变化可识别、可核对、可审批、可追溯</dd></div><div><dt>明确不做</dt><dd>当前版本不自动操作微信、Notion 或 Linear</dd></div></dl>
    </section>
    <section className="pm-flow" aria-label="Threadline Agent 流程">
      <header><span>USER + AGENT FLOW</span><h3>一次变化如何成为可核对的行动记录</h3></header>
      <ol>{["上下文导入","变化识别","证据核对","影响分析","人工审批","内部行动记录","结果确认"].map((item,index)=><li key={item}><i>{index+1}</i><b>{item}</b><small>{index===0||index===4||index===6?"用户 / 负责人":"Agent + 规则"}</small></li>)}</ol>
    </section>
    <section className="pm-states">
      <header><span>STATE MODEL</span><h3>五个状态解决三类误判</h3></header>
      <div>{states.map(([name,title,detail],index)=><article key={name}><i>{index+1}</i><b>{name}</b><strong>{title}</strong><p>{detail}</p></article>)}</div>
      <footer><span>讨论 ≠ 决定</span><span>批准 ≠ 执行完成</span><span>记录 ≠ 结果已核对</span></footer>
    </section>
    <div className="pm-scope-grid">
      <section><span>MVP / 优先级</span><h3>P0 先保证可信流转</h3><ul><li>P0 · 来源、旧状态、影响对象可见</li><li>P0 · 未确认内容不得进入正式状态</li><li>P0 · 批准、应用、核对结果分开</li><li>P1 · 关联变化合并与父子关系</li><li>Later · 外部工具自动执行</li></ul></section>
      <section><span>P0 / 验收标准</span><h3>可直接用于交付验收</h3><ul><li>每条变化都能返回原文、来源与时间</li><li>负责人确认前不改写项目事实</li><li>展示任务、负责人和截止时间影响</li><li>相同变化不会生成重复正式记录</li><li>页面不把内部记录称为外部执行完成</li></ul></section>
    </div>
    <section className="pm-exceptions"><header><span>EXCEPTION HANDLING</span><h3>异常情况不是补丁，而是产品边界</h3></header><div><article><b>讨论内容</b><p>停留在 Proposed，等待负责人确认。</p></article><article><b>重复变化</b><p>合并关联事件，并保留父子关系和原始来源。</p></article><article><b>影响不完整</b><p>标记待确认，不生成完整执行结论。</p></article><article><b>外部未执行</b><p>Confirmed 后仍需 Applied 与 Verified。</p></article></div></section>
  </div>;
}

function ZhixuEvidence(){
  return <div className="pm-evidence pm-zhixu">
    <section className="pm-prd">
      <header><span>PRD 摘要 / 2026.07</span><b>以真实招聘机会承接判断和行动</b></header>
      <dl><div><dt>目标用户</dt><dd>同时处理多条实习与校招机会的求职者</dd></div><div><dt>核心任务</dt><dd>确认岗位事实，核对个人依据，决定下一步</dd></div><div><dt>MVP 范围</dt><dd>JD 导入、确认、判断、证据、行动与阶段</dd></div><div><dt>核心原则</dt><dd>原文没有的信息不补写，低置信结果由用户确认</dd></div></dl>
    </section>
    <section className="pm-ia">
      <header><span>INFORMATION ARCHITECTURE</span><h3>三个对象，而不是一组平铺功能</h3></header>
      <div><article><i>01</i><h4>招聘机会</h4><p>原始 JD、公开来源、提取字段、硬性条件、确认状态、岗位阶段</p></article><b>提供判断对象 →</b><article><i>02</i><h4>个人求职档案</h4><p>教育、实习、项目、技能，以及支持岗位要求的具体证据</p></article><b>形成依据 →</b><article><i>03</i><h4>投递行动</h4><p>投递、补证据、修改简历、比较、归档和阶段记录</p></article></div>
    </section>
    <section className="pm-boundary"><header><span>DECISION BOUNDARY</span><h3>AI、规则与用户分别负责什么</h3></header><div><article><b>AI</b><p>提取与整理非结构化 JD，检索可能相关的个人经历。</p></article><article><b>规则</b><p>判断毕业年份、实习周期、城市等确定性条件。</p></article><article><b>用户</b><p>确认低置信字段、重复岗位、证据采用和正式行动。</p></article></div></section>
    <section className="pm-data">
      <header><div><span>DATA + SQL / 真实实现证据</span><h3>先核验样本，再决定是否展示趋势</h3></div><p>以下查询对应项目中的 D1 / SQLite 数据结构，用于复核每个工作区已保存的机会数量。它是可复现的数据核验，不冒充线上大规模行为分析。</p></header>
      <div className="pm-data-body"><dl><div><dt>数据对象</dt><dd><code>career_workspaces</code>、<code>file_snapshots</code></dd></div><div><dt>查询字段</dt><dd><code>user_id</code>、<code>updated_at</code>、<code>workspace_json.opportunities</code></dd></div><div><dt>产品问题</dt><dd>当前机会样本是否足以生成岗位趋势，而不是只展示事实统计？</dd></div><div><dt>产品决策</dt><dd>机会数少于 10 条时不输出趋势判断，只显示事实数量与待补证据。</dd></div></dl><pre><code>{`SELECT user_id, updated_at,
  json_array_length(
    json_extract(workspace_json, '$.opportunities')
  ) AS opportunity_count
FROM career_workspaces
ORDER BY updated_at DESC;`}</code></pre></div>
      <footer>4 名用户真实 JD 任务测试用于观察流程卡点；上面的 SQL 证据用于说明数据结构与统计口径，两者不混写。</footer>
    </section>
  </div>;
}
