"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeClasses } from "../app/theme";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex justify-center py-6 px-4 pointer-events-none transition-all duration-500">
      <div
        className={`pointer-events-auto w-full max-w-5xl rounded-full flex items-center justify-between transition-all duration-500
          ${
            isScrolled
              ? "bg-[#0d0c17]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] px-6 py-3 hover:border-white/20"
              : "bg-transparent border border-transparent shadow-none px-2 py-4"
          }
        `}
      >
        {/* Logo / Brand */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-9 h-9 rounded-[10px] bg-zinc-900 border border-white/10 flex items-center justify-center p-2 shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:rotate-12 group-hover:bg-zinc-800">
            <svg
              className="w-full h-full text-white fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
            Operon
          </span>
        </div>

        {/* Interactive Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-white/50">
          <a
            href="#how-it-works"
            className="hover:text-white transition-colors"
          >
            Setup
          </a>
          <a href="#dashboard" className="hover:text-white transition-colors">
            Dashboard
          </a>
          <a
            href="#integrations"
            className="hover:text-white transition-colors"
          >
            Integrations
          </a>
          <a href="#team" className="hover:text-white transition-colors">
            Team
          </a>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/connect"
            className={`gap-2 px-5 py-2.5 h-auto text-xs font-bold border border-white/10 hover:border-white/30 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] inline-flex items-center justify-center`}
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Connect GitHub
          </Link>
        </div>
      </div>
    </nav>
  );
};
