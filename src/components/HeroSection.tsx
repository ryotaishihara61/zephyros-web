"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import PlexusBackground from "./PlexusBackground";

const stats = [
  { value: 280, suffix: "+", label: "導入社数" },
  { value: 415000, suffix: "+", label: "累計受講者数", format: true },
  { value: 50, suffix: " years", label: "創業" },
];

const clients = [
  "Amazon", "Toyota", "伊藤忠商事", "三菱商事", "ソニー",
  "富士通", "NTTデータ", "日立製作所", "パナソニック", "Honda",
  "住友商事", "丸紅",
];

function CountUp({ target, suffix, format }: { target: number; suffix: string; format?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target]);

  const display = format ? count.toLocaleString() : count;

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#000b1d] py-32 text-white">
        <PlexusBackground />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400"
          >
            Global Leadership & Communication
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            世界で成果を出す<br />
            <span className="text-amber-400">「日本人」</span>を創る。
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
          >
            創業50年。私たちが教えてきたのは、単なる英語ではなく、<br className="hidden sm:block" />
            人を動かすためのグローバル・コミュニケーションです。
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 py-8">
                <p className="text-3xl font-bold text-amber-400 sm:text-4xl lg:text-5xl">
                  <CountUp target={stat.value} suffix={stat.suffix} format={stat.format} />
                </p>
                <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client logos */}
      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
            導入実績企業（一部）
          </p>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {clients.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-4 text-xs font-semibold text-gray-500"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
