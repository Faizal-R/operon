"use client";

import React, { useState, useEffect } from "react";
import {
  CalendarDays,
  Terminal as TerminalIcon,
  BellRing,
  TrendingUp,
  GitMerge,
  Activity,
} from "lucide-react";

export const PulseBento = () => {
  // Simulate active heatmap changes
  const [heatmap, setHeatmap] = useState(() =>
    Array.from({ length: 60 }).map(() => Math.random()),
  );

  // Simulate live terminal stream
  const [logs, setLogs] = useState<string[]>([
    "~ operon stream --listen",
    "[System] Connection established on wss://operon.dev/stream",
  ]);

  useEffect(() => {
    // Heatmap randomizer
    const mapInterval = setInterval(() => {
      setHeatmap((prev) => {
        const next = [...prev];
        const index = Math.floor(Math.random() * next.length);
        next[index] = Math.max(0.5, Math.random()); // Spike activity
        return next;
      });
    }, 1500);

    // Terminal log simulator
    const logInterval = setInterval(() => {
      const mockEvents = [
        "[200 OK] Webhook received: PR #42 Merged",
        "Evaluating streak continuity... +1",
        "> Updating dashboard...",
        "[Deploy] Production build successful (12s)",
        "[Code Review] Feedback requested by @alex",
        "> Recalculating team velocity...",
      ];
      setLogs((prev) => {
        const nextLog =
          mockEvents[Math.floor(Math.random() * mockEvents.length)];
        const updated = [...prev, nextLog];
        return updated.length > 5 ? updated.slice(1) : updated;
      });
    }, 2800);

    return () => {
      clearInterval(mapInterval);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <section className="relative py-32 overflow-hidden bg-operon-bg border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Your workflow,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              visualized.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get a glimpse into the Operon dashboard. Real-time momentum metrics,
            deep contribution heatmaps, and live webhook streaming.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Heatmap (Spans 2 columns) */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-black/20 backdrop-blur-xl border border-white/10 p-8 transition-all hover:bg-white/5 hover:border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                <CalendarDays size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">
                Always-On Heatmap
              </h3>
            </div>
            <p className="text-gray-400 mb-8 max-w-sm">
              Every commit, PR, and review is plotted instantly. Watch your grid
              light up without leaving your editor.
            </p>

            {/* Live Heatmap Grid Visual */}
            <div className="flex flex-wrap gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
              {heatmap.map((intensity, i) => {
                let bgClass = "bg-white/5";
                if (intensity > 0.8)
                  bgClass =
                    "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)] scale-110 z-10";
                else if (intensity > 0.5) bgClass = "bg-emerald-500/60";
                else if (intensity > 0.3) bgClass = "bg-emerald-900/40";

                return (
                  <div
                    key={i}
                    className={`w-6 h-6 rounded-md ${bgClass} transition-all duration-700`}
                  />
                );
              })}
            </div>
          </div>

          {/* Card 2: Terminal / Webhook Stream (Spans 1 column) */}
          <div className="md:col-span-1 rounded-3xl bg-black/80 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border border-white/10 p-6 flex flex-col relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* MacOS Terminal Dots */}
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4 relative z-10">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <span className="ml-2 text-xs font-mono text-gray-500 flex items-center gap-2">
                <Activity
                  size={12}
                  className="animate-pulse text-emerald-400"
                />
                live-stream
              </span>
            </div>

            {/* Live Simulated Log Stream */}
            <div className="flex-1 font-mono text-xs sm:text-sm text-gray-400 flex flex-col gap-3 relative z-10 justify-end overflow-hidden">
              {logs.map((log, index) => {
                const isLatest = index === logs.length - 1;
                return (
                  <div
                    key={index}
                    className={`transition-all duration-300 ${isLatest ? "text-white translate-y-0 opacity-100" : "opacity-50 -translate-y-2"}`}
                  >
                    {log.startsWith(">") ? (
                      <span className="text-fuchsia-400">{log}</span>
                    ) : log.includes("[200") || log.includes("[Deploy]") ? (
                      <span className="text-green-400">{log}</span>
                    ) : (
                      log
                    )}
                  </div>
                );
              })}
              {/* Blinking Cursor */}
              <div className="w-2 h-4 bg-white/50 animate-pulse mt-1" />
            </div>
          </div>

          {/* Card 3: Momentum Trends */}
          <div className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-black/20 backdrop-blur-xl border border-white/10 p-8 transition-all hover:bg-white/5 hover:border-violet-500/30">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
                  <TrendingUp size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Velocity</h3>
              </div>
              <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 group-hover:scale-105 transition-transform">
                +24%
              </span>
            </div>
            <p className="text-gray-400">
              Your output is trending higher than last week. Consistent PR sizes
              are boosting your score.
            </p>
          </div>

          {/* Card 4: Code Review Analytics (Spans 2 columns) */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-fuchsia-900/20 to-violet-900/20 border border-fuchsia-500/20 p-8 transition-all hover:border-fuchsia-500/50">
            <div className="absolute right-0 top-0 w-64 h-64 bg-fuchsia-500/20 blur-[100px] group-hover:bg-fuchsia-500/30 transition-colors" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-500/20 text-orange-400 group-hover:animate-bounce">
                    <Activity size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Review Intelligence
                  </h3>
                </div>
                <p className="text-gray-300 max-w-sm mb-6">
                  Operon analyzes the latency between a PR opening and the final
                  merge. Identify bottlenecks in your team&apos;s code review
                  workflow instantly.
                </p>
              </div>

              {/* Mock Hover Floating Insights */}
              <div className="flex-1 flex justify-center md:justify-end">
                <div className="inline-flex items-center gap-5 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl px-6 py-5 shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform -rotate-2 hover:rotate-0 hover:scale-[1.02] transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/80 to-pink-500/80 flex flex-col items-center justify-center shadow-lg border border-white/10">
                    <span className="text-[10px] font-bold text-white/70 uppercase">
                      Avg
                    </span>
                    <span className="text-lg font-black text-white leading-none">
                      2.4h
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">
                      Review Turnaround Time
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[85%] h-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,1)]" />
                      </div>
                      <p className="text-emerald-400 text-xs font-bold">
                        -14% vs last week
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
