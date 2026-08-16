"use client";

import { useEffect, useState } from "react";

export default function SiteMotion() {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const updateProgress = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(distance > 0 ? Math.min(1, window.scrollY / distance) : 0);
      document.querySelector("[data-site-nav]")?.classList.toggle("scrolled", window.scrollY > 24);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    const navigate = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest("a");
      if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("http")) return;
      event.preventDefault();
      setLeaving(true);
      window.setTimeout(() => { window.location.href = href; }, 520);
    };
    document.addEventListener("click", navigate);

    if (reduced) {
      document.documentElement.classList.add("motion-disabled");
      return () => { window.removeEventListener("scroll", updateProgress); document.removeEventListener("click", navigate); };
    }

    document.documentElement.classList.add("motion-ready");
    const targets = document.querySelectorAll(
      ".reveal-group > *, .reveal-card, .case-hero-copy > *, .case-facts, .case-story > section > *"
    );
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );
    targets.forEach((target) => observer.observe(target));

    const homeSections = Array.from(document.querySelectorAll("#home, #work, #portfolio, #about, #contact"));
    const sectionObserver = new IntersectionObserver((entries) => {
      const current = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!current) return;
      const sectionId = current.target.id;
      document.querySelectorAll("[data-nav-section]").forEach(link => link.classList.toggle("active", link.getAttribute("data-nav-section") === sectionId));
    }, { rootMargin: "-25% 0px -55%", threshold: [0, .2, .6] });
    homeSections.forEach(section => sectionObserver.observe(section));

    return () => {
      observer.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
      document.removeEventListener("click", navigate);
    };
  }, []);

  return <><div className="page-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" /><div className={`route-transition ${leaving ? "is-leaving" : ""}`} aria-hidden="true"><span>张灿 · AI 产品作品集</span></div></>;
}
