export default function CaseHeroMotion({kind}:{kind:"threadline"|"zhixu"|"signal"}){
  if(kind==="threadline")return <div className="case-motion case-motion-threadline" aria-label="Threadline 变化识别与审批动态示意">
    <header><span>PRODUCT MECHANISM / LIVE</span><b>变化识别与人工审批</b></header>
    <div className="case-motion-stage">
      <article className="motion-source"><small>会议记录 · 08.21</small><p>报告新增参考文献，提交时间调整至 25 日。</p><em>原文与来源已保留</em></article>
      <div className="motion-core"><span>CHANGE</span><b>23 → 25</b><small>截止时间变化</small></div>
      <article className="motion-result"><small>等待负责人确认</small><p>影响 3 项任务<br/>涉及 2 位成员</p><strong>批准变更 ↗</strong></article>
      <i className="motion-flow motion-flow-a"/><i className="motion-flow motion-flow-b"/>
    </div>
    <footer><span>01 来源证据</span><span>02 新旧状态</span><span>03 影响预览</span><span>04 人工审批</span></footer>
  </div>;

  if(kind==="zhixu")return <div className="case-motion case-motion-zhixu" aria-label="职序岗位判断动态示意">
    <header><span>PRODUCT MECHANISM / LIVE</span><b>JD、个人证据与投递行动</b></header>
    <div className="case-motion-stage">
      <article className="motion-source"><small>真实 JD · AI 产品实习</small><p>每周 4 天 · 实习 3 个月<br/>需要 Agent 项目经验</p><em>岗位原文已保留</em></article>
      <div className="motion-evidence"><span>硬性条件</span><b>符合 2 / 待确认 1</b><span>经历证据</span><b>Threadline · AIGC 实习</b></div>
      <article className="motion-result"><small>投递判断</small><p>具备相关证据<br/>到岗时间待确认</p><strong>创建投递行动 ↗</strong></article>
      <i className="motion-flow motion-flow-a"/><i className="motion-flow motion-flow-b"/>
    </div>
    <footer><span>01 岗位来源</span><span>02 硬条件</span><span>03 经历证据</span><span>04 下一步行动</span></footer>
  </div>;

  return <div className="case-motion case-motion-signal" aria-label="Signal 信息识别与分类动态示意">
    <header><span>PRODUCT MECHANISM / LIVE</span><b>识别、轻整理与来源保留</b></header>
    <div className="case-motion-stage">
      <div className="motion-source-stack"><article>截图 · 招聘信息</article><article>备忘录 · 灵感记录</article><article>收藏文字 · 产品文章</article></div>
      <div className="motion-scan"><i/><span>OCR + 轻整理</span><b>保留完整语境</b></div>
      <article className="motion-result"><small>我的分类树</small><p>求职 / AI 产品<br/>学习 / 产品文章</p><strong>原图与来源可核对 ↗</strong></article>
      <i className="motion-flow motion-flow-a"/><i className="motion-flow motion-flow-b"/>
    </div>
    <footer><span>01 原始输入</span><span>02 OCR</span><span>03 轻度整理</span><span>04 用户分类</span></footer>
  </div>;
}
