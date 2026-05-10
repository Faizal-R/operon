"use client";
import React, { useEffect, useState } from "react";
import { GitPullRequest, Code2, Bell, Activity } from "lucide-react";

export const DashboardVisual = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="px-4 max-w-5xl mx-auto mt-24 relative z-10 perspective-1000">
      <div
        className={`glass-panel border-operon-border rounded-2xl p-2 transition-all duration-1000 transform ${mounted ? "translate-y-0 opacity-100 rotate-x-0" : "translate-y-20 opacity-0 rotate-x-12"} shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}
      >
        <div className="bg-[#0b0515]/80 backdrop-blur-xl rounded-xl border border-white/5 p-6 overflow-hidden relative">
          {/* Fake top bar */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="ml-4 h-6 w-48 bg-white/5 rounded pl-3 flex items-center">
              <div className="text-[10px] text-white/30 font-mono">
                operon-dashboard / @user
              </div>
            </div>
          </div>

          {/* Data Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stats */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Weekly Momentum
                  </h3>
                  <p className="text-sm text-white/50">
                    Tracking your core repositories
                  </p>
                </div>
                <div className="text-3xl font-black text-operon-accent-glow">
                  +24%
                </div>
              </div>
              {/* Fake Graph */}
              <div className="h-40 w-full relative flex items-end justify-between gap-2">
                {[30, 45, 20, 60, 85, 40, 70, 50, 90, 65, 80, 55, 75, 40].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="w-full bg-linear-to-t from-operon-accent/20 to-operon-accent-dark rounded-t-sm"
                      style={{ height: `${h}%`, opacity: 0.7 + i * 0.02 }}
                    ></div>
                  ),
                )}
                {/* Glowing animated line over the bars */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,80 Q20,60 40,90 T80,40 T120,60 T160,20 T200,60 T240,40 T280,30"
                    className="stroke-operon-accent-glow stroke-3 fill-none drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                  <div className="text-white/40 text-xs mb-2">Commits</div>
                  <div className="text-2xl font-bold">142</div>
                </div>
                <div className="bg-operon-accent/10 rounded-lg p-4 border border-operon-accent/20">
                  <div className="text-operon-accent-glow text-xs mb-2">
                    PRs Merged
                  </div>
                  <div className="text-2xl font-bold text-white">18</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                  <div className="text-white/40 text-xs mb-2">Code Reviews</div>
                  <div className="text-2xl font-bold">34</div>
                </div>
              </div>
            </div>

            {/* Live Activity Feed */}
            <div className="bg-white/5 border border-white/5 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <h3 className="font-semibold text-sm">Live Feed</h3>
              </div>

              <div className="space-y-5">
                {[
                  {
                    icon: GitPullRequest,
                    user: "alex",
                    action: "merged PR #42",
                    repo: "core-engine",
                    time: "2 min ago",
                    color: "text-operon-accent-glow",
                  },
                  {
                    icon: Code2,
                    user: "sarah",
                    action: "pushed 4 commits",
                    repo: "frontend-v2",
                    time: "15 min ago",
                    color: "text-blue-400",
                  },
                  {
                    icon: Bell,
                    user: "david",
                    action: "requested review",
                    repo: "api-gateway",
                    time: "1 hour ago",
                    color: "text-amber-400",
                  },
                  {
                    icon: Activity,
                    user: "you",
                    action: "resolved issue #89",
                    repo: "core-engine",
                    time: "3 hours ago",
                    color: "text-green-400",
                  },
                ].map((act, i) => (
                  <div key={i} className="flex gap-3">
                    <div className={`mt-0.5 ${act.color}`}>
                      <act.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm text-white/80">
                        <span className="font-medium text-white">
                          {act.user}
                        </span>{" "}
                        {act.action} in{" "}
                        <span className="text-white/60 font-mono text-xs">
                          {act.repo}
                        </span>
                      </div>
                      <div className="text-xs text-white/30 mt-1">
                        {act.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
