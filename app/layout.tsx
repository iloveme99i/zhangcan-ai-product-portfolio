import type { Metadata } from "next";
import "./globals.css";
import SiteMotion from "./SiteMotion";

export const metadata: Metadata = {
  metadataBase: new URL("https://iloveme99i.github.io/zhangcan-ai-product-portfolio/"),
  title: "张灿｜AI 产品实习作品集",
  description: "四川大学张灿的 AI 产品实习作品集：Threadline、职序与 Signal 三个真实产品项目。",
  openGraph: { title: "张灿｜AI 产品实习作品集", description: "Threadline、职序 ZHIXU 与 Signal 产品案例。", images: ["https://iloveme99i.github.io/zhangcan-ai-product-portfolio/og.png"] },
  twitter: { card: "summary_large_image", title: "张灿｜AI 产品实习作品集", description: "Threadline、职序 ZHIXU 与 Signal 产品案例。", images: ["https://iloveme99i.github.io/zhangcan-ai-product-portfolio/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body><SiteMotion />{children}</body></html>;
}
