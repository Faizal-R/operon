"use client";
import React, { useEffect, useState } from "react";
import { Star, Globe, ShieldCheck, Activity } from "lucide-react";
import { ThemeClasses } from "../app/theme";

const NetworkGraph = () => (
  <div className="absolute right-0 top-0 w-1/3 h-full overflow-hidden opacity-20 pointer-events-none hidden lg:block">
    <div className="relative w-full h-full">
      <div className="absolute top-1/4 right-[20%] w-2 h-2 bg-operon-accent-glow rounded-full shadow-[0_0_10px_rgba(216,180,254,0.8)] animate-pulse" />
      <div className="absolute top-[60%] right-[10%] w-3 h-3 bg-fuchsia-400 rounded-full shadow-[0_0_15px_rgba(232,121,249,0.8)] animate-pulse delay-100" />
      <div className="absolute top-[40%] right-[30%] w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse delay-300" />
      <svg
        className="absolute inset-0 w-full h-full stroke-white/10"
        fill="none"
      >
        <path
          d="M 80% 25% L 90% 60% L 70% 40% Z"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="animate-pulse"
        />
      </svg>
    </div>
  </div>
);

export const Footer = () => {
  const [packets, setPackets] = useState(139420000);

  useEffect(() => {
    const interval = setInterval(() => {
      setPackets((prev) => prev + Math.floor(Math.random() * 50));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="mt-auto relative z-10 pt-24 overflow-hidden bg-[#05020a]">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-linear-to-r from-transparent via-fuchsia-500/80 to-transparent blur-[2px]" />

      <NetworkGraph />

      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        {/* Pre-footer live metric board */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl mb-16 group shadow-2xl">
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.15)] group-hover:scale-110 transition-transform duration-500">
              <Globe className="animate-[spin_10s_linear_infinite]" size={24} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-1 tracking-tight">
                Global Ingestion Sync Active
              </h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  All systems operational
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8 w-full md:w-auto">
            <div>
              <div className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-1">
                Packets Processed
              </div>
              <div className="text-2xl font-mono text-white font-bold tracking-tighter tabular-nums">
                {packets.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-1">
                Avg Latency
              </div>
              <div className="flex items-center gap-2">
                <Activity
                  size={16}
                  className="text-fuchsia-400 animate-pulse"
                />
                <span className="text-2xl font-mono text-fuchsia-400 font-bold tracking-tighter">
                  12ms
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
          {/* Logo Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer w-max">
              <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center p-2 shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_25px_rgba(217,70,239,0.7)] group-hover:rotate-12 transition-all duration-500">
                <Star className="text-white w-full h-full" strokeWidth={2.5} />
              </div>
              <span className="font-black text-2xl tracking-tight text-white group-hover:text-operon-accent-glow transition-colors">
                Operon
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm mb-8 leading-relaxed font-medium">
              Transforming scattered developer activity bounds into beautiful,
              actionable intelligence. Ship with incredible momentum.
            </p>
            <div className="flex gap-4">
              {[
                <path
                  key="1"
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />,
                <path
                  key="2"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                />,
                <path
                  key="3"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />,
              ].map((svgPath, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-violet-500/20 hover:border-violet-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:-translate-y-1 transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    {svgPath}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries({
            Product: [
              "Features",
              "How it works",
              "Live notifications",
              "Team velocity",
              "Pricing",
            ],
            Resources: [
              "Documentation",
              "API reference",
              "Changelog",
              "Blog",
              "Brand kit",
            ],
            Company: ["About", "Careers", "Press kit", "Contact", "Status"],
          }).map(([header, links]) => (
            <div key={header}>
              <h4 className="text-white tracking-widest text-xs font-black uppercase mb-6 drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
                {header}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-500 hover:text-fuchsia-400 hover:tracking-wide transition-all duration-300 inline-block custom-link"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Massive OPERON Text */}
      <div className="w-full overflow-hidden flex justify-center pointer-events-none select-none relative z-0 mt-8">
        <h1 className="text-[18vw] font-black leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white/10 to-transparent text-stroke hover:from-fuchsia-400/20 hover:to-fuchsia-600/5 transition-all duration-1000">
          OPERON
        </h1>
      </div>

      <div className="border-t border-white/10 py-6 px-6 flex flex-col sm:flex-row justify-between items-center bg-[#05020a] relative z-20">
        <p className="text-gray-500 text-xs font-semibold tracking-wide">
          © 2026 Operon Labs, AI. All rights reserved.
        </p>
        <div className="flex items-center gap-4 mt-4 sm:mt-0 text-xs font-bold text-gray-500 font-mono tracking-wider">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 group hover:border-emerald-500/30 transition-colors cursor-pointer">
            <ShieldCheck
              size={14}
              className="text-emerald-400 group-hover:scale-110 transition-transform"
            />
            <span>Encrypted Pipeline</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-white/20"></span>
          <span>v3.0.4</span>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .text-stroke {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.08);
        }
      `,
        }}
      />
    </footer>
  );
};
