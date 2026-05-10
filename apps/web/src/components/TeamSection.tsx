"use client";
import React, { useRef, useState } from "react";
import { Users, TrendingUp, Shield, Eye } from "lucide-react";
import { ThemeClasses } from "../app/theme";

const teamMetrics = [
  {
    name: "Alex K.",
    role: "Lead Eng",
    commits: 142,
    prs: 23,
    streak: 31,
    avatar: "AK",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "Sarah M.",
    role: "Backend",
    commits: 98,
    prs: 18,
    streak: 22,
    avatar: "SM",
    color: "from-blue-500 to-violet-500",
  },
  {
    name: "Jordan T.",
    role: "Frontend",
    commits: 87,
    prs: 15,
    streak: 14,
    avatar: "JT",
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Priya R.",
    role: "Platform",
    commits: 64,
    prs: 11,
    streak: 8,
    avatar: "PR",
    color: "from-amber-500 to-orange-500",
  },
];

const benefits = [
  {
    icon: <TrendingUp size={16} />,
    title: "Quantify Impact",
    text: "See who is shipping consistently without micromanaging.",
  },
  {
    icon: <Eye size={16} />,
    title: "Instant Visibility",
    text: "Spot repositories gaining or losing momentum at a glance.",
  },
  {
    icon: <Shield size={16} />,
    title: "Health Check",
    text: "Catch burnout and blockers before they become expensive.",
  },
  {
    icon: <Users size={16} />,
    title: "Collective Success",
    text: "Give your team shared context to recognize great work.",
  },
];

export const TeamSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setRotation({
      x: -(y / rect.height) * 15, // max 7.5 deg
      y: (x / rect.width) * 15, // max 7.5 deg
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-600/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Interactive 3D Team Table */}
          <div
            className="relative order-2 lg:order-1 perspective-[1200px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={containerRef}
              className="bg-[#0d0c17]/60 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-200 ease-out transform-style-3d"
              style={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              }}
            >
              <div className="bg-[#13121e]/80 rounded-[1.5rem] overflow-hidden border border-white/5">
                <div className="bg-[#1a1928] border-b border-white/5 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center border border-violet-500/30">
                      <Users size={14} className="text-violet-400" />
                    </div>
                    <span className="text-sm font-bold text-white tracking-wide">
                      Developer Velocities
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium bg-white/5 px-3 py-1 rounded-full">
                    Last 30 days
                  </span>
                </div>

                <div className="px-6 py-4">
                  <div className="grid grid-cols-4 text-xs font-bold text-gray-500 mb-3 px-2 uppercase tracking-widest border-b border-white/5 pb-3">
                    <span className="col-span-1">Engineer</span>
                    <span className="text-center">Commits</span>
                    <span className="text-center">PRs Merged</span>
                    <span className="text-right">Streak</span>
                  </div>
                  <div className="space-y-1">
                    {teamMetrics.map(
                      (
                        { name, role, commits, prs, streak, avatar, color },
                        i,
                      ) => (
                        <div
                          key={name}
                          className="grid grid-cols-4 items-center py-3 hover:bg-white/5 rounded-xl transition-colors px-2 animate-slide-up cursor-pointer group"
                          style={{ animationDelay: `${300 + i * 100}ms` }}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-full bg-linear-to-br ${color} flex items-center justify-center text-white text-xs font-black shadow-lg group-hover:scale-110 transition-transform`}
                            >
                              {avatar}
                            </div>
                            <div>
                              <div className="text-sm font-bold text-white group-hover:text-operon-accent-glow transition-colors">
                                {name}
                              </div>
                              <div className="text-[10px] text-gray-500 font-semibold">
                                {role}
                              </div>
                            </div>
                          </div>
                          <div className="text-center text-sm font-bold text-gray-300 group-hover:text-white transition-colors">
                            {commits}
                          </div>
                          <div className="text-center text-sm font-bold text-gray-300 group-hover:text-white transition-colors">
                            {prs}
                          </div>
                          <div className="text-right text-sm font-bold text-emerald-400 group-hover:text-emerald-300">
                            {streak}{" "}
                            <span className="text-[10px] text-gray-500">
                              days
                            </span>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Depth Shadow Layer */}
            <div className="absolute -inset-4 bg-operon-accentDark/10 blur-3xl z-[-1] rounded-[3rem]" />
          </div>

          {/* Text Section */}
          <div className="order-1 lg:order-2">
            <div className={ThemeClasses.subHeadingWrap}>
              <span className={ThemeClasses.subHeadingText}>
                Shared Visibility
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Empower your team with a{" "}
              <span className={ThemeClasses.textGradient}>shared reality</span>
            </h2>

            <p className="text-gray-400 text-xl leading-relaxed mb-10">
              Operon generates a consolidated velocity view so engineering
              leaders instantly grasp who&apos;s shipping, where momentum is
              building, and where support is needed—saving hours of blind
              micro-management.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map(({ icon, title, text }, i) => (
                <div
                  key={title}
                  className="flex flex-col gap-3 animate-slide-up"
                  style={{ animationDelay: `${200 + i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 flex items-center justify-center shrink-0 text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1.5">{title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed max-w-[250px]">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
