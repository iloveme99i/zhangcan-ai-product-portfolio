import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root=new URL("../",import.meta.url);
const read=(path)=>readFile(new URL(path,root),"utf8");

test("external portfolio does not expose localhost product calls to action",async()=>{
  const files=await Promise.all([
    read("app/page.tsx"),read("app/projects/threadline/page.tsx"),
    read("app/projects/zhixu/page.tsx"),read("app/projects/signal/page.tsx")
  ]);
  for(const source of files)assert.doesNotMatch(source,/href="http:\/\/localhost|url:"http:\/\/localhost/);
  assert.doesNotMatch(files[0],/公开演示访问权限待恢复|公开体验版待部署/);
  assert.match(files[0],/百词斩 AIGC 实习/);
  assert.match(files[0],/3000\+ 条模型生成结果/);
  assert.match(files[0],/7 人跨职能团队 Agent Web MVP/);
  assert.match(files[0],/PRD · 信息架构 · 原型 · P0 验收/);
  assert.match(files[0],/四川大学 · 2029 届/);
  assert.match(files[0],/旅游管理本科（工科转入）/);
  assert.match(files[1],/threadline-agent\.oliverruby788\.chatgpt\.site/);
});

test("legacy about page returns to the confirmed one-screen profile",async()=>{
  const [about,redirect]=await Promise.all([read("app/about/page.tsx"),read("app/about/AboutRedirect.tsx")]);
  assert.match(about,/AboutRedirect/);
  assert.match(redirect,/sitePath\("\/#about"\)/);
  assert.doesNotMatch(about,/三个独立产品|我能承担的工作/);
});

test("each case has evidence, product boundaries, and a distinct narrative",async()=>{
  const [threadline,zhixu,signal]=await Promise.all([
    read("app/projects/threadline/page.tsx"),read("app/projects/zhixu/page.tsx"),read("app/projects/signal/page.tsx")
  ]);
  assert.match(threadline,/role:"产品负责人"/);
  assert.match(threadline,/7 人跨职能团队/);
  assert.match(threadline,/两个真实课程协作项目/);
  assert.match(threadline,/Confirmed.*Applied.*Verified/);
  assert.match(threadline,/团队共同完成/);
  assert.match(threadline,/产品负责人交付物/);
  assert.match(threadline,/AI 项目变化识别与审批 Agent/);
  assert.doesNotMatch(threadline,/项目变化控制层，而不是另一个任务看板|先说明我负责什么|这个项目的价值不在/);
  assert.match(zhixu,/zhixu-v1\.png/);
  assert.match(zhixu,/JD 文本与公开链接|JD 文本和公开链接/);
  assert.match(zhixu,/4 名同校实习求职用户/);
  assert.match(signal,/signal-v1\.png/);
  assert.match(signal,/多轮真实自用迭代/);
  assert.match(signal,/经项目服务发送给 DeepSeek/);
  assert.doesNotMatch(signal,/数据和 API Key 留在当前浏览器/);
  assert.match(zhixu,/pmEvidence:"zhixu"/);
  assert.match(threadline,/pmEvidence:"threadline"/);
  assert.equal((zhixu.match(/^    \{label:/gm)||[]).length,5);
  assert.equal((threadline.match(/^    \{label:/gm)||[]).length,7);
  assert.equal((signal.match(/^    \{label:/gm)||[]).length,6);
});

test("case navigation supports stable desktop and mobile reading",async()=>{
  const [component,progress,css]=await Promise.all([
    read("app/projects/ProjectCase.tsx"),read("app/CaseProgress.tsx"),read("app/globals.css")
  ]);
  assert.match(component,/case-mobile-nav/);
  assert.match(component,/case-evidence/);
  assert.match(component,/case-marker/);
  assert.match(component,/case-cover-hint/);
  assert.match(component,/CaseHeroMotion/);
  assert.match(component,/ImageLightbox/);
  assert.match(progress,/getBoundingClientRect\(\)\.top/);
  assert.match(progress,/locked\.current=\{index,until:Date\.now\(\)\+900\}/);
  assert.match(css,/case-mobile-nav \.case-progress/);
  assert.match(css,/\.case-rail\{background:#090909/);
  assert.match(css,/\.case-ownership/);
  assert.match(css,/\.case-cover img.*width:100%;max-width:100%/s);
  assert.match(css,/\.case-facts dd\{margin-top:28px;font-size:13px/);
  assert.match(css,/\.case-ownership p\{font-size:14px/);
});

test("real current and historical product images are packaged",async()=>{
  await Promise.all([
    "public/real-threadline.png","public/real-zhixu.png","public/real-signal.png",
    "public/zhixu-v1.png","public/signal-v1.png"
  ].map(path=>access(new URL(path,root))));
});

test("Zhixu uses every verified portfolio handoff screenshot",async()=>{
  const page=await read("app/projects/zhixu/page.tsx");
  const assets=[
    "zhixu-today-workspace.png","zhixu-inbox-review.png","zhixu-evidence-decision.png",
    "zhixu-application-tracking.png","zhixu-information-records.png"
  ];
  for(const asset of assets){
    assert.match(page,new RegExp(asset.replaceAll(".","\\.")));
    await access(new URL(`public/${asset}`,root));
  }
  assert.doesNotMatch(page,/Cloudflare 403/);
  assert.match(page,/zhixu-career\.homercobbuwd\.chatgpt\.site/);
  assert.match(page,/关键产品判断/);
  assert.match(page,/截图 OCR 和 PDF 解析仍处于实验阶段/);
});

test("Zhixu in-page demo exposes a complete five-step decision flow",async()=>{
  const demo=await read("app/projects/ZhixuJourneyDemo.tsx");
  for(const step of ["导入岗位","确认事实","硬性条件","经历证据","投递行动"])assert.match(demo,new RegExp(step));
  assert.match(demo,/使用模拟岗位和模拟用户档案/);
  assert.match(demo,/IntersectionObserver/);
  assert.match(demo,/自动演示中/);
  assert.match(demo,/takeControl/);
  assert.match(demo,/重新演示/);
  assert.match(demo,/创建.*行动/);
  assert.match(demo,/疑似重复岗位/);
  assert.match(demo,/原文未提及/);
});

test("Signal uses every verified portfolio handoff screenshot",async()=>{
  const page=await read("app/projects/signal/page.tsx");
  const assets=[
    "signal-library-overview.png","signal-category-tree.png","signal-content-detail.png",
    "signal-board-view.png","signal-note-import.png"
  ];
  for(const asset of assets){
    assert.match(page,new RegExp(asset.replaceAll(".","\\.")));
    await access(new URL(`public/${asset}`,root));
  }
  assert.match(page,/公开演示版待部署/);
  assert.match(page,/隔离演示数据/);
});
