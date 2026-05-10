"use client";
import React, { useRef, forwardRef } from "react";
import {
  Code,
  GitBranch,
  GitPullRequest,
  CircleDot,
  MessageSquare,
  Kanban,
  Bell,
  LineChart,
  Activity,
} from "lucide-react";
import { ThemeClasses } from "../app/theme";
import { AnimatedBeam } from "./ui/animated-beam";

interface NodeProps {
  icon: React.ReactNode;
  bg?: string;
  delay?: number;
  tooltip?: string;
}

const Node = forwardRef<HTMLDivElement, NodeProps>(
  ({ icon, bg = "bg-white/5", delay = 0, tooltip }, ref) => (
    <div className="group relative z-20" ref={ref}>
      <div
        className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${bg} backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl relative cursor-pointer overflow-hidden transition-all duration-500 hover:scale-110 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]`}
        style={{ boxShadow: "inset 0 0 20px rgba(255,255,255,0.02)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
          {icon}
        </div>

        {/* Live tracking dot blinker */}
        <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-50 group-hover:animate-ping" />
        <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-50" />
      </div>

      {/* Professional Tooltip */}
      {tooltip && (
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-2 bg-zinc-900/90 backdrop-blur-2xl rounded-lg text-xs font-semibold text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:-translate-y-1 whitespace-nowrap z-50 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
          {tooltip}
        </div>
      )}
    </div>
  ),
);
Node.displayName = "Node";

export const IntegrationBeam = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Ingest Refs (Left)
  const commitRef = useRef<HTMLDivElement>(null);
  const prRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);

  // Core Ref (Center)
  const coreRef = useRef<HTMLDivElement>(null);

  // Broadcast Refs (Right)
  const alertsRef = useRef<HTMLDivElement>(null);
  const momentumRef = useRef<HTMLDivElement>(null);
  const velocityRef = useRef<HTMLDivElement>(null);
  const heatmapRef = useRef<HTMLDivElement>(null);

  // Gradient definitions for beams
  const gradientStartA = "#8B5CF6"; // deep violet
  const gradientStopA = "#EC4899"; // pink

  return (
    <section className="relative py-32 overflow-hidden bg-operon-bg border-y border-white/5">
      {/* High-end Technical Grid Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.02]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="beam-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#beam-grid)" />
      </svg>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center mb-20 animate-slide-up">
        {/* Sleek Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-2xl">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
          <span className="text-xs font-semibold text-indigo-300 tracking-[0.2em] uppercase">
            The Intelligence Core
          </span>
        </div>

        <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
          Data flows in. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400">
            Insights flow out.
          </span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          The Operon engine silently traces live data streams across your
          repositories and issue trackers. We calculate your developer momentum,
          isolate roadblocks, and push deep actionable insights straight into
          your team chat.
        </p>
      </div>

      <div
        className="relative w-full max-w-6xl mx-auto h-[450px] md:h-[600px] rounded-3xl border border-white/5 bg-black/20 backdrop-blur-3xl shadow-[inset_0_0_50px_rgba(255,255,255,0.02)]"
        ref={containerRef}
      >
        {/* Left Nodes (Ingestion Data) */}
        <div className="absolute left-[8%] md:left-[12%] top-[10%] -translate-y-1/2">
          <Node
            ref={commitRef}
            icon={<Code size={24} className="text-gray-200" />}
            delay={0}
            tooltip="Code Repositories"
          />
        </div>
        <div className="absolute left-[8%] md:left-[12%] top-[36%] -translate-y-1/2">
          <Node
            ref={prRef}
            icon={<GitBranch size={24} className="text-indigo-400" />}
            delay={1}
            bg="bg-indigo-500/10 border-indigo-500/20"
            tooltip="CI/CD Pipelines"
          />
        </div>
        <div className="absolute left-[8%] md:left-[12%] top-[63%] -translate-y-1/2">
          <Node
            ref={reviewRef}
            icon={<GitPullRequest size={24} className="text-blue-400" />}
            delay={2}
            bg="bg-blue-500/10 border-blue-500/20"
            tooltip="Code Reviews"
          />
        </div>
        <div className="absolute left-[8%] md:left-[12%] top-[90%] -translate-y-1/2">
          <Node
            ref={languageRef}
            icon={<CircleDot size={24} className="text-emerald-400" />}
            delay={3}
            bg="bg-emerald-500/10 border-emerald-500/20"
            tooltip="Issue Trackers"
          />
        </div>

        {/* Center Node (Operon Core) - The professional engine visual */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 group"
          ref={coreRef}
        >
          {/* Outer orbital spinning ring */}
          <div className="absolute inset-[-20px] rounded-[30px] border border-violet-500/30 opacity-50 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-[-10px] rounded-[24px] border border-fuchsia-500/20 opacity-50 animate-[spin_7s_linear_infinite_reverse]" />

          <div className="w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-600 border border-white/20 flex items-center justify-center shadow-[0_0_60px_rgba(139,92,246,0.6)] relative cursor-pointer hover:scale-[1.02] transition-transform duration-500 overflow-hidden backdrop-blur-2xl">
            <div className="absolute inset-0 bg-black/10 rounded-3xl" />
            <div className="absolute inset-0 bg-white/20 animate-pulse opacity-30 mix-blend-overlay" />
            <Activity
              size={48}
              className="text-white relative z-10 drop-shadow-2xl"
              strokeWidth={1.5}
            />
          </div>

          {/* Central badge */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 px-6 py-2 bg-black/90 backdrop-blur-xl rounded-full text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 border border-white/10 shadow-2xl tracking-widest uppercase shadow-[0_10px_30px_rgba(0,0,0,1)]">
            Operon Engine
          </div>
        </div>

        {/* Right Nodes (Platform Outputs) */}
        <div className="absolute right-[8%] md:right-[12%] top-[10%] -translate-y-1/2">
          <Node
            ref={alertsRef}
            icon={<MessageSquare size={24} className="text-cyan-400" />}
            delay={0.5}
            bg="bg-cyan-500/10 border-cyan-500/20"
            tooltip="Team Chat"
          />
        </div>
        <div className="absolute right-[8%] md:right-[12%] top-[36%] -translate-y-1/2">
          <Node
            ref={momentumRef}
            icon={<Kanban size={24} className="text-violet-400" />}
            delay={1.5}
            bg="bg-violet-500/10 border-violet-500/20"
            tooltip="Task Management"
          />
        </div>
        <div className="absolute right-[8%] md:right-[12%] top-[63%] -translate-y-1/2">
          <Node
            ref={velocityRef}
            icon={<Bell size={24} className="text-orange-400" />}
            delay={2.5}
            bg="bg-orange-500/10 border-orange-500/20"
            tooltip="Alerting Systems"
          />
        </div>
        <div className="absolute right-[8%] md:right-[12%] top-[90%] -translate-y-1/2">
          <Node
            ref={heatmapRef}
            icon={<LineChart size={24} className="text-rose-400" />}
            delay={3.5}
            bg="bg-rose-500/10 border-rose-500/20"
            tooltip="Analytics Platforms"
          />
        </div>

        {/* Animated Beams Ingestion (Left to Center) */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={commitRef}
          toRef={coreRef}
          curvature={-75}
          endYOffset={-10}
          pathColor="rgba(255,255,255,0.1)"
          gradientStartColor={gradientStartA}
          gradientStopColor={gradientStopA}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={prRef}
          toRef={coreRef}
          curvature={-25}
          endYOffset={-5}
          pathColor="rgba(255,255,255,0.1)"
          gradientStartColor={gradientStartA}
          gradientStopColor={gradientStopA}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={reviewRef}
          toRef={coreRef}
          curvature={25}
          endYOffset={5}
          pathColor="rgba(255,255,255,0.1)"
          gradientStartColor={gradientStartA}
          gradientStopColor={gradientStopA}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={languageRef}
          toRef={coreRef}
          curvature={75}
          endYOffset={10}
          pathColor="rgba(255,255,255,0.1)"
          gradientStartColor={gradientStartA}
          gradientStopColor={gradientStopA}
        />

        {/* Animated Beams Broadcast (Center to Right) */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={alertsRef}
          toRef={coreRef}
          curvature={-75}
          endYOffset={-10}
          reverse
          pathColor="rgba(255,255,255,0.1)"
          gradientStartColor={gradientStartA}
          gradientStopColor={gradientStopA}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={momentumRef}
          toRef={coreRef}
          curvature={-25}
          endYOffset={-5}
          reverse
          pathColor="rgba(255,255,255,0.1)"
          gradientStartColor={gradientStartA}
          gradientStopColor={gradientStopA}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={velocityRef}
          toRef={coreRef}
          curvature={25}
          endYOffset={5}
          reverse
          pathColor="rgba(255,255,255,0.1)"
          gradientStartColor={gradientStartA}
          gradientStopColor={gradientStopA}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={heatmapRef}
          toRef={coreRef}
          curvature={75}
          endYOffset={10}
          reverse
          pathColor="rgba(255,255,255,0.1)"
          gradientStartColor={gradientStartA}
          gradientStopColor={gradientStopA}
        />
      </div>
    </section>
  );
};
