import type { Metadata } from "next";
import "./globals.css";
import SiteMotion from "./SiteMotion";

export const metadata: Metadata = {
  title: "张灿｜AI 产品方向",
  description: "四川大学张灿的个人求职网站，展示 AI 产品项目、AIGC 实习经历与产品能力。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body><SiteMotion />{children}</body></html>;
}
