"use client";
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { ThemeClasses } from "../app/theme";
import Link from "next/link";

export const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden bg-black/60 backdrop-blur-xl border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group transform-style-3d perspective-distant">
          {/* Animated Ambient Background Blur */}
          <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.08),transparent_60%)] group-hover:opacity-70 opacity-40 transition-opacity duration-700 pointer-events-none z-0" />

          {/* Interactive Flow Lines (SVG) */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity duration-1000">
            <svg
              className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 animate-[spin_60s_linear_infinite]"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.1"
            >
              <circle cx="50" cy="50" r="30" stroke="rgba(168,85,247,0.3)" />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="rgba(232,121,249,0.3)"
                strokeDasharray="2 4"
              />
              <circle cx="50" cy="50" r="50" stroke="rgba(168,85,247,0.2)" />
              <circle
                cx="50"
                cy="50"
                r="70"
                stroke="rgba(232,121,249,0.1)"
                strokeDasharray="1 6"
                className="animate-[spin_20s_linear_infinite_reverse]"
                origin="center"
              />
            </svg>
          </div>

          <div className="relative z-10 p-12 md:p-16 flex flex-col items-center text-center">
            {/* Pulsing Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 mb-8 shadow-[0_0_15px_rgba(232,121,249,0.08)] group-hover:scale-105 transition-transform duration-300">
              <Sparkles size={14} className="text-fuchsia-400" />
              <span className="text-xs font-bold text-fuchsia-300 tracking-wide uppercase">
                Unlock your momentum
              </span>
            </div>

            {/* Typography */}
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 max-w-2xl mx-auto tracking-tight drop-shadow-2xl">
              Ready to see exactly how <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-fuchsia-400 to-emerald-400 animate-gradient-shift">
                fast your team can ship?
              </span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10 font-medium">
              Join the data-driven engineering teams using Operon to visualize
              progress, prevent burnout, and celebrate every merge.
            </p>

            {/* Premium Button */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                href="/connect"
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-white font-bold text-sm hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_30px_rgba(168,85,247,0.15)] group"
              >
                <svg
                  className="w-[18px] h-[18px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Connect GitHub
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            <p className="text-xs text-white/30 font-semibold tracking-wider uppercase mt-8 border-t border-white/5 pt-8 w-full max-w-lg">
              Read-only GitHub OAuth · Setup takes 60 seconds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
