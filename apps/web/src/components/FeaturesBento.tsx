"use client";
import React from "react";
import { CursorGlowCard } from "./ui/CursorGlowCard";
import {
  Activity,
  GitCommit,
  Users,
  Zap,
  Terminal,
  ShieldAlert,
} from "lucide-react";
import { ThemeClasses } from "../app/theme";

const ActivityBars = () => (
  <div className="absolute right-10 bottom-0 flex items-end gap-3 h-32 opacity-80 z-0 group-hover:scale-x-110 transition-transform origin-bottom duration-500">
    {[40, 70, 100, 50, 80].map((h, i) => (
      <div
        key={i}
        className="w-4 bg-linear-to-t from-violet-600/50 to-fuchsia-400/80 rounded-t-md animate-pulse"
        style={{
          height: `${h}%`,
          animationDelay: `${i * 0.15}s`,
          animationDuration: "2s",
        }}
      />
    ))}
  </div>
);

const PulseNodes = () => (
  <div className="absolute top-1/2 right-16 -translate-y-1/2 flex items-center justify-center pointer-events-none opacity-60 z-0">
    <div
      className="absolute w-32 h-32 border border-fuchsia-500/30 rounded-full animate-ping"
      style={{ animationDuration: "3s" }}
    />
    <div
      className="absolute w-20 h-20 border border-fuchsia-500/50 rounded-full animate-ping"
      style={{ animationDuration: "3s", animationDelay: "0.5s" }}
    />
    <div className="w-8 h-8 bg-fuchsia-500 rounded-full shadow-[0_0_30px_#d946ef]" />
  </div>
);

const RadarSweep = () => (
  <div className="absolute -right-6 -bottom-6 w-48 h-48 rounded-full border border-amber-500/20 bg-amber-500/5 overflow-hidden z-0 group-hover:scale-110 transition-transform duration-700">
    <div
      className="absolute top-1/2 left-1/2 w-full h-full bg-linear-to-tr from-amber-500/40 to-transparent origin-top-left animate-spin"
      style={{ animationDuration: "4s" }}
    />
  </div>
);

export const FeaturesBento = () => {
  return (
    <section className="relative py-28 max-w-7xl mx-auto px-6">
      <div className="text-center mb-20 animate-slide-up">
        <div className={ThemeClasses.subHeadingWrap}>
          <span className={ThemeClasses.subHeadingText}>
            Intelligent Analysis
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
          Everything you need to <br />
          <span className={ThemeClasses.textGradient}>
            ship faster & smarter
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 auto-rows-[280px]">
        {/* Large Grid Item */}
        <CursorGlowCard className="col-span-1 md:col-span-2 row-span-1 p-8 flex flex-col justify-end group">
          <ActivityBars />
          <div className="absolute top-6 right-6 w-12 h-12 bg-violet-500/10 rounded-full flex items-center justify-center border border-violet-500/20 z-10 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            <Activity className="text-violet-400" />
          </div>
          <div className="relative z-10 pointer-events-none">
            <h3 className="text-2xl font-bold text-white mb-2">
              Real-Time Metric Aggregation
            </h3>
            <p className="text-gray-400 max-w-md">
              Our high-speed ingestion webhooks gather your commit strings
              globally without polling limits.
            </p>
          </div>
        </CursorGlowCard>

        {/* Small Grid Item */}
        <CursorGlowCard className="col-span-1 p-8 flex flex-col justify-end group">
          <PulseNodes />
          <div className="relative z-10">
            <GitCommit
              className="text-fuchsia-400 mb-4 group-hover:-translate-y-1 transition-transform"
              size={28}
            />
            <h3 className="text-xl font-bold text-white mb-2">
              Total Visibility
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Instantly review code velocity, commit sizes, and overall project
              momentum dynamically.
            </p>
          </div>
        </CursorGlowCard>

        {/* Small Grid Item */}
        <CursorGlowCard className="col-span-1 p-8 flex flex-col justify-end group">
          <RadarSweep />
          <div className="relative z-10">
            <ShieldAlert
              className="text-amber-400 mb-4 group-hover:-translate-y-1 transition-transform"
              size={28}
            />
            <h3 className="text-xl font-bold text-white mb-2">Burnout Radar</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Automatically flag weekend contributions or late-night commits to
              prevent developer burnout.
            </p>
          </div>
        </CursorGlowCard>

        {/* Medium Grid Item */}
        <CursorGlowCard className="col-span-1 md:col-span-2 row-span-1 p-8 flex flex-col justify-end overflow-hidden group">
          <div className="absolute top-[20px] right-10 w-[65%] h-[180px] border border-white/5 bg-[#0d0a1a] rounded-xl shadow-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 flex flex-col gap-3 p-4">
            <div className="w-full h-8 bg-white/5 rounded animate-pulse" />
            <div className="w-[80%] h-8 bg-violet-500/10 rounded animate-pulse delay-100" />
            <div className="w-[60%] h-8 bg-fuchsia-500/10 rounded animate-pulse delay-200" />
          </div>
          <div className="absolute top-[50px] right-20 w-[55%] h-[150px] border border-violet-500/20 bg-[#150a2b]/80 backdrop-blur-md rounded-xl shadow-[0_0_50px_rgba(139,92,246,0.15)] group-hover:translate-x-4 transition-transform duration-500 flex items-center justify-center">
            <Users className="text-violet-400/50 w-16 h-16" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              Collaborative Intelligence
            </h3>
            <p className="text-gray-400 max-w-md">
              Measure PR review turnaround times automatically and boost overall
              pipeline health without arbitrary metrics.
            </p>
          </div>
        </CursorGlowCard>
      </div>
    </section>
  );
};
