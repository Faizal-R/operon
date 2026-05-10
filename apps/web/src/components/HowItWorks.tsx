"use client";
import React from "react";
import { GitBranch } from "lucide-react";
import { ThemeClasses } from "../app/theme";

const StepMock1 = () => (
  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#0d0c17] border border-white/5 flex items-center justify-center p-8 group">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_50%)]" />
    <div className="relative z-10 flex items-center gap-6">
      <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-500 shadow-2xl">
        <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      </div>
      <div className="flex gap-2">
        <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-ping" />
        <span
          className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-ping"
          style={{ animationDelay: "0.2s" }}
        />
        <span
          className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-ping"
          style={{ animationDelay: "0.4s" }}
        />
      </div>
      <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-violet-600 to-fuchsia-600 border border-violet-400/30 flex items-center justify-center group-hover:translate-x-2 transition-transform duration-500 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
        <GitBranch className="text-white" size={32} />
      </div>
    </div>
  </div>
);

const StepMock2 = () => (
  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#0d0c17] border border-white/5 p-6 font-mono text-sm leading-relaxed group">
    <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
      <div className="w-3 h-3 rounded-full bg-red-500/80" />
      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
      <div className="w-3 h-3 rounded-full bg-green-500/80" />
    </div>
    <div className="text-gray-400 space-y-2 opacity-80 group-hover:opacity-100 transition-opacity">
      <p>
        <span className="text-violet-400">→</span> fetching commits [rep:
        core-api]...
      </p>
      <p>
        <span className="text-emerald-400">✔</span> mapped 1,240 historical
        markers
      </p>
      <p>
        <span className="text-violet-400">→</span> analyzing PR velocity
        (30d)...
      </p>
      <p className="animate-pulse">
        <span className="text-yellow-400">⟳</span> building metric timeline...
      </p>
    </div>
    <div className="absolute right-0 bottom-0 w-32 h-32 bg-fuchsia-500/10 blur-3xl rounded-full" />
  </div>
);

const StepMock3 = () => (
  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#0d0c17] border border-white/5 p-6 flex flex-col justify-center group">
    <div className="w-full flex items-end gap-3 h-32 border-b border-white/10 pb-4">
      {[30, 45, 20, 65, 80, 50, 95].map((h, i) => (
        <div
          key={i}
          className="flex-1 bg-linear-to-t from-violet-500/20 to-violet-400/80 rounded-t-sm group-hover:bg-linear-to-t group-hover:from-fuchsia-500/40 group-hover:to-fuchsia-400 transition-all duration-500"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
    <div className="pt-4 flex justify-between text-xs font-bold text-gray-500 uppercase tracking-widest">
      <span>Mon</span>
      <span>Tue</span>
      <span>Wed</span>
      <span>Thu</span>
      <span>Fri</span>
      <span>Sat</span>
      <span>Sun</span>
    </div>
  </div>
);

const steps = [
  {
    num: "01.",
    title: "Authenticate safely",
    desc: "Authorize Operon with one click securely via GitHub. Strict read-only OAuth means your private code is never scraped, stored, or compromised.",
    visual: <StepMock1 />,
  },
  {
    num: "02.",
    title: "The engine ingests",
    desc: "We immediately crawl your repository metadata, mapping out PR histories, commit timelines, and review latencies into our accelerated timeline engine.",
    visual: <StepMock2 />,
  },
  {
    num: "03.",
    title: "Your momentum, rendered",
    desc: "You are dropped into your live dashboard. Everything you shipped, reviewed, and pushed over the last month is visualized beautifully.",
    visual: <StepMock3 />,
  },
];

export const HowItWorks = () => {
  return (
    <section className="relative py-28 max-w-7xl mx-auto px-6">
      {/* Heavy, high-end Typography Header */}
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/10 pb-16 animate-slide-up">
        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight max-w-2xl tracking-tighter">
          Setup in <br />
          <span className={ThemeClasses.textGradient}>sixty seconds.</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-sm leading-relaxed font-medium">
          Zero configuration overhead. Connect your repos and let our ingestion
          engine do the heavy lifting.
        </p>
      </div>

      <div className="space-y-32">
        {steps.map(({ num, title, desc, visual }, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={num}
              className={`flex flex-col gap-10 md:gap-20 items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Text Side */}
              <div
                className="w-full md:w-5/12 animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="text-xl font-black text-operon-accent tracking-widest mb-4 block">
                  {num}
                </span>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                  {title}
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">{desc}</p>
              </div>

              {/* Visual Mock Side */}
              <div
                className="w-full md:w-7/12 animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                {visual}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
