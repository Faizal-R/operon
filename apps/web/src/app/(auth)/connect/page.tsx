"use client";

import { ArrowRight, Activity, GitPullRequest, GitMerge } from "lucide-react";

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.39-3.5 5 5 0 0 0-.13-3.4s-1.14-.36-3.73 1.4a12.8 12.8 0 0 0-6.8 0C5.14 1.22 4 1.58 4 1.58a5 5 0 0 0-.13 3.4A5.2 5.2 0 0 0 2.5 8.5c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
  </svg>
);
import { ThemeClasses } from "../../theme";
import Link from "next/link";
import supabase from "@/lib/supabase";

export default function ConnectPage() {
  const loginWithGitHub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    console.log(data);
    console.log(error);
  };
  return (
    <main className="min-h-screen relative flex items-center justify-center bg-operon-bg overflow-hidden p-4">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-violet-900/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* Subtle Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03] z-0 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="login-grid"
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
        <rect width="100%" height="100%" fill="url(#login-grid)" />
      </svg>

      <div className="relative z-10 w-full max-w-md animate-slide-up">
        {/* Floating background blobs for the card */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-800/5 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-fuchsia-800/5 blur-[80px] rounded-full pointer-events-none" />

        {/* Login Card */}
        <div className="bg-[#0d0c17]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] p-10 overflow-hidden relative group">
          <div className="absolute inset-0 bg-linear-to-b from-white/[0.02] to-transparent pointer-events-none" />

          <div className="relative">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-operon-github-bg flex items-center justify-center p-3 shadow-[0_0_30px_rgba(139,92,246,0.1)] border border-white/5 group-hover:border-violet-500/20 group-hover:scale-105 transition-all duration-500">
                <svg
                  className="w-full h-full text-white fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center mb-10">
              <h1 className="text-3xl font-black text-white mb-3 tracking-tight">
                Connect to Operon
              </h1>
              <p className="text-gray-400 text-sm leading-relaxed">
                Operon requires read-only access to your repositories to
                calculate momentum and broadcast live insights.
              </p>
            </div>

            {/* Pure GitHub Auth Button */}
            <button
              onClick={loginWithGitHub}
              className={`w-full ${ThemeClasses.githubButton}`}
            >
              <GithubIcon className="text-white" size={20} />
              <span className="font-bold text-white tracking-wide">
                Continue with GitHub
              </span>
              <ArrowRight
                className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all"
                size={16}
              />
            </button>

            {/* Security Trust Markers */}
            <div className="mt-10 pt-8 border-t border-white/5 space-y-4">
              <div className="flex items-center gap-3 text-xs text-gray-400 font-medium hover:text-gray-300 transition-colors">
                <Activity size={14} className="text-emerald-400" /> No source
                code is ever downloaded.
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-400 font-medium hover:text-gray-300 transition-colors">
                <GitPullRequest size={14} className="text-blue-400" /> We only
                read webhook metadata.
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-400 font-medium hover:text-gray-300 transition-colors">
                <GitMerge size={14} className="text-violet-500/50" /> Seamless
                setup completes in seconds.
              </div>
            </div>

            {/* Back link */}
            <div className="mt-10 text-center">
              <Link
                href="/"
                className="text-xs font-semibold text-gray-500 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
