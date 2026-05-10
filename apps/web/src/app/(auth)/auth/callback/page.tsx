"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/lib/supabase";
import {
  CheckCircle2,
  Loader2,
  ShieldCheck,
  Zap,
  AlertCircle,
} from "lucide-react";

const loadingSteps = [
  { id: 0, text: "Handshaking with GitHub...", icon: Loader2 },
  { id: 1, text: "Verifying credentials...", icon: ShieldCheck },
  { id: 2, text: "Establishing secure session...", icon: Zap },
  { id: 3, text: "Redirecting...", icon: CheckCircle2 },
];

export default function AuthCallback() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];

    // Animate steps visually
    if (!error) {
      timeoutIds.push(setTimeout(() => setStep(1), 800));
      timeoutIds.push(setTimeout(() => setStep(2), 1800));
      timeoutIds.push(setTimeout(() => setStep(3), 3200));
    }

    return () => timeoutIds.forEach(clearTimeout);
  }, [error]);

  useEffect(() => {
    const processAuth = async () => {
      try {
        // Automatically check for session from URL hash or existing state
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error) throw error;
        if (!session)
          throw new Error("No secure session found. Please log in again.");

        // Sync session token with the backend
        const API_URL =
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000/api/v1";
        const res = await fetch(`${API_URL}/auth/github`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.access_token}`,
          },
        });

        if (!res.ok) throw new Error("Backend synchronization failed.");

        // Wait for animations, then navigate to dashboard
        setTimeout(() => router.push("/"), 3500);
      } catch (err: any) {
        setError(err.message || "An unexpected error occurred.");
        setTimeout(() => router.push("/connect"), 3500);
      }
    };

    processAuth();
  }, [router]);

  return (
    <main className="min-h-screen relative flex items-center justify-center bg-operon-bg overflow-hidden p-4">
      {/* Ambient background matching login page */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] bg-violet-600/10 blur-[150px] rounded-full animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-fuchsia-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03] z-0 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="callback-grid"
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
        <rect width="100%" height="100%" fill="url(#callback-grid)" />
      </svg>

      {/* Callback Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-[#0d0c17]/80 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_0_80px_rgba(139,92,246,0.15)] p-10 overflow-hidden text-center relative group">
          {/* Top glowing edge */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-linear-to-r from-transparent via-violet-500/50 to-transparent" />

          {error ? (
            <div className="flex flex-col items-center animate-slide-up space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-2 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                <AlertCircle className="text-red-500 w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-white tracking-tight">
                Authentication Failed
              </h2>
              <p className="text-gray-400 text-sm max-w-xs">{error}</p>
              <div className="w-full h-1 bg-white/5 rounded-full mt-6 overflow-hidden">
                <div
                  className="h-full bg-red-500/50 transition-all duration-[3000ms] ease-out"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center animate-slide-up">
              {/* Central Animated Logo/Icon */}
              <div className="relative w-28 h-28 mb-10 flex items-center justify-center">
                {/* Outer rotating ring */}
                <div
                  className="absolute inset-0 border-[3px] border-transparent border-t-violet-500/50 border-br-violet-500/20 rounded-full animate-spin"
                  style={{ animationDuration: "2s" }}
                />

                {/* Inner rotating ring (reverse) */}
                <div
                  className="absolute inset-3 border-[3px] border-transparent border-b-fuchsia-500/50 border-tl-fuchsia-500/20 rounded-full animate-spin"
                  style={{
                    animationDuration: "3s",
                    animationDirection: "reverse",
                  }}
                />

                {/* Core Icon */}
                <div className="w-14 h-14 bg-linear-to-tr from-violet-600 to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.6)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  <svg
                    className="w-7 h-7 text-white relative z-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="text-2xl font-black text-white tracking-tight mb-8">
                Securing Connection
              </h2>

              {/* Steps List */}
              <div className="w-full space-y-5 text-left max-w-[280px] mx-auto">
                {loadingSteps.map((s, i) => {
                  const Icon = s.icon;
                  const isActive = step === i;
                  const isDone = step > i;
                  return (
                    <div
                      key={s.id}
                      className={`flex items-center gap-4 transition-all duration-500 mt-2 ${
                        isDone
                          ? "text-white opacity-100"
                          : isActive
                            ? "text-violet-400 opacity-100 scale-[1.02] transform origin-left"
                            : "text-gray-600 opacity-40 translate-x-[-4px]"
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-500 ${isDone ? "bg-emerald-500/10" : isActive ? "bg-violet-500/10" : "bg-transparent"}`}
                      >
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : isActive ? (
                          <Icon
                            className={`w-4 h-4 ${i === 0 ? "animate-spin" : "animate-pulse"}`}
                          />
                        ) : (
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                        )}
                      </div>
                      <span className="text-sm font-semibold tracking-wide">
                        {s.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Progress Bar */}
              <div className="w-full max-w-[280px] mx-auto h-1.5 bg-white/5 rounded-full mt-10 overflow-hidden relative shadow-inner">
                <div
                  className="absolute top-0 left-0 h-full bg-linear-to-r from-violet-500 to-fuchsia-500 transition-all duration-700 ease-out"
                  style={{
                    width: `${Math.min(((step + 1) / loadingSteps.length) * 100, 100)}%`,
                  }}
                />
                {/* Glowing head of progress bar */}
                <div
                  className="absolute top-0 h-full w-8 bg-linear-to-r from-transparent to-white opacity-80 transition-all duration-700 ease-out"
                  style={{
                    left: `calc(${Math.min(((step + 1) / loadingSteps.length) * 100, 100)}% - 32px)`,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
