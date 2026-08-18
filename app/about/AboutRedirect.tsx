"use client";

import { useEffect } from "react";
import { sitePath } from "../site-path";

export default function AboutRedirect() {
  const destination = sitePath("/#about");
  useEffect(() => { window.location.replace(destination); }, [destination]);
  return <main className="about-redirect"><p>正在返回作品集中的个人档案…</p><a href={destination}>立即查看</a></main>;
}
