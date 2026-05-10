"use client";
import React, { useState, useCallback } from "react";
import {
  GitMerge,
  GitPullRequest,
  CheckCircle,
  AlertCircle,
  Clock,
  Volume2,
  VolumeX,
  Radio,
} from "lucide-react";
import { ThemeClasses } from "../app/theme";

const initialNotifications = [
  {
    id: "n1",
    icon: <GitMerge size={14} />,
    iconBg: "bg-emerald-500/20 text-emerald-400",
    title: "PR #247 merged",
    desc: "feat: add real-time notification layer",
    repo: "operon/core",
    time: "just now",
    dot: "bg-emerald-400",
    live: true,
  },
  {
    id: "n2",
    icon: <GitPullRequest size={14} />,
    iconBg: "bg-blue-500/20 text-blue-400",
    title: "Review requested",
    desc: "refactor: sync engine optimization",
    repo: "operon/engine",
    time: "2m ago",
    dot: "bg-blue-400",
    live: true,
  },
  {
    id: "n3",
    icon: <CheckCircle size={14} />,
    iconBg: "bg-violet-500/20 text-violet-400",
    title: "Build passed",
    desc: "main → production deploy complete",
    repo: "operon/app",
    time: "8m ago",
    dot: "bg-violet-400",
    live: false,
  },
];

export const LiveNotifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Synthetic Audio generation for a professional "glass chime" notification
  const playPopSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const AudioContext =
        window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContext();

      // Tone 1: Base (A5)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(880, ctx.currentTime);

      // Tone 2: Harmonic (E6)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(1318.51, ctx.currentTime);

      // Tone 3: Subtle attack sparkle (A6)
      const osc3 = ctx.createOscillator();
      const gain3 = ctx.createGain();
      osc3.connect(gain3);
      gain3.connect(ctx.destination);
      osc3.type = "triangle";
      osc3.frequency.setValueAtTime(1760, ctx.currentTime);

      // Apply sophisticated envelopes
      [gain1, gain2].forEach((g) => {
        g.gain.setValueAtTime(0, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.02);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      });

      // Short sparkle decay
      gain3.gain.setValueAtTime(0, ctx.currentTime);
      gain3.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.01);
      gain3.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

      [osc1, osc2, osc3].forEach((o) => {
        o.start();
        o.stop(ctx.currentTime + 0.45);
      });
    } catch (e) {
      console.log("Audio playback prevented by browser");
    }
  }, [soundEnabled]);

  const triggerLiveEvent = () => {
    playPopSound();

    // Add random new notification
    const randomItems = [
      {
        i: <AlertCircle size={14} />,
        bg: "bg-amber-500/20 text-amber-400",
        d: "bg-amber-400",
        t: "Vulnerability Detected",
        r: "operon/api",
        desc: "Critical dependency out of date",
      },
      {
        i: <GitMerge size={14} />,
        bg: "bg-emerald-500/20 text-emerald-400",
        d: "bg-emerald-400",
        t: "PR #891 Merged",
        r: "operon/core",
        desc: "Hotfix applied to engine logic",
      },
      {
        i: <GitPullRequest size={14} />,
        bg: "bg-fuchsia-500/20 text-fuchsia-400",
        d: "bg-fuchsia-400",
        t: "PR #102 Opened",
        r: "operon/frontend",
        desc: "UI Revamp for Dashboard",
      },
    ];

    const nextItem =
      randomItems[Math.floor(Math.random() * randomItems.length)];
    const newNotif = {
      icon: nextItem.i,
      iconBg: nextItem.bg,
      title: nextItem.t,
      desc: nextItem.desc,
      repo: nextItem.r,
      time: "Live",
      dot: nextItem.d,
      live: true,
      id: Math.random().toString(), // unique key
    };

    setNotifications((prev) => [newNotif, ...prev].slice(0, 4));
  };

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[400px] bg-operon-accent-dark/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text & Interactive Controller */}
          <div>
            <div className={ThemeClasses.subHeadingWrap}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className={ThemeClasses.subHeadingText}>
                Live WebSockets
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
              Never miss a{" "}
              <span className={ThemeClasses.textGradient}>signal</span> that
              matters
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Operon maintains a persistent WebSocket connection so alerts
              arrive the instant they happen. Try simulating an incoming
              WebSocket connection payload below.
            </p>

            <div className="flex items-center gap-4 bg-operon-bg-alt/50 border border-white/5 p-4 rounded-2xl w-max">
              <button
                onClick={triggerLiveEvent}
                className="flex items-center gap-2 bg-operon-accent hover:bg-operon-accent-glow text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(168,85,247,0.4)] active:scale-95"
              >
                <Radio size={16} className="animate-pulse" />
                Simulate Event
              </button>

              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 text-gray-300 transition-colors"
                title="Toggle Sound"
              >
                {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
              </button>
            </div>
          </div>

          {/* 3D Isometric Notification Feed Container */}
          <div className="relative perspective-[1500px]">
            <div className="bg-[#0d0c17]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-700 hover:rotate-x-[5deg] hover:-rotate-y-[8deg] transform-style-3d">
              {/* Header */}
              <div className="bg-[#13121e] border-b border-white/5 px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                  <span className="text-xs font-bold text-gray-300 tracking-wider">
                    SOCKET.IO FEED
                  </span>
                </div>
                <span className="text-xs text-operon-accent-glow font-bold animate-pulse">
                  CONNECTED
                </span>
              </div>

              {/* Feed items */}
              <div className="divide-y divide-white/5 relative min-h-[300px]">
                {notifications.map((notif, i) => (
                  <div
                    key={notif.id || notif.title}
                    className="px-6 py-5 flex items-start gap-4 hover:bg-white/[0.03] transition-colors animate-slide-up"
                    style={{
                      animationDelay: `${i * 100}ms`,
                      background: notif.live
                        ? "linear-gradient(90deg, rgba(139,92,246,0.08), transparent)"
                        : "",
                    }}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${notif.iconBg} flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      {notif.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-base font-bold text-white tracking-wide">
                          {notif.title}
                        </span>
                        {notif.time === "Live" && (
                          <span className="text-[10px] uppercase font-black text-white bg-emerald-500 px-2 py-0.5 rounded-full animate-bounce shadow-[0_0_10px_#10b981]">
                            New
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-400 truncate mb-1">
                        {notif.desc}
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${notif.dot} shadow-[0_0_5px_currentColor]`}
                        />
                        <span className="text-xs font-semibold text-gray-500">
                          {notif.repo}
                        </span>
                        <span className="text-gray-700">·</span>
                        <span className="text-xs text-gray-500">
                          {notif.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ambient glow casting from the 3D element */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-operon-accent/20 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
