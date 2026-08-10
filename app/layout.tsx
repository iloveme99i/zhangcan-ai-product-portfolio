import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 产品作品集 | 四川大学学生",
  description: "一名四川大学学生的 AI 产品作品集：轻岗 QingGang 与 AI 应用实践。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
