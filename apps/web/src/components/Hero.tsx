import { ArrowRight, Play, TrendingUp, Zap, Activity } from "lucide-react";
import { ThemeClasses } from "../app/theme";
import Link from "next/link";

const floatingCards = [
  {
    icon: <TrendingUp size={14} className="text-emerald-400" />,
    label: "Commit Streak",
    value: "47 days",
    sub: "+12% this month",
    color: "emerald",
    position: "top-[18%] md:-left-[10%] lg:-left-[15%]",
    delay: "0s",
  },
  {
    icon: <Activity size={14} className="text-violet-400" />,
    label: "PRs Merged",
    value: "128",
    sub: "Last 30 days",
    color: "violet",
    position: "top-[12%] md:-right-[8%] lg:-right-[12%]",
    delay: "0.4s",
  },
  {
    icon: <Zap size={14} className="text-amber-400" />,
    label: "Live Alerts",
    value: "3 new",
    sub: "Real-time feed",
    color: "amber",
    position: "bottom-[18%] md:-left-[5%] lg:-left-[8%]",
    delay: "0.8s",
  },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-zinc-600/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-fuchsia-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[80px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #a78bfa 1px, transparent 1px), linear-gradient(to bottom, #a78bfa 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 animate-slide-up delay-100 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-gray-300 tracking-wide">
            Live sync with GitHub — Zero config
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight max-w-5xl mb-6 animate-slide-up delay-200">
          Engineering momentum,{" "}
          <span className="relative">
            <span className={ThemeClasses.textGradient}>
              quantified in real-time
            </span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="4"
              viewBox="0 0 400 4"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 2 Q200 4 400 2"
                stroke="url(#uGrad)"
                strokeWidth="2"
                fill="none"
              />
              <defs>
                <linearGradient id="uGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop stopColor="currentColor" />
                  <stop offset="1" stopColor="currentColor" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-operon-muted max-w-2xl leading-relaxed mb-10 animate-slide-up delay-300">
          Operon taps directly into your GitHub metrics to transform isolated
          commits and pull requests into a dynamic, beautiful visualization of
          your daily velocity.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 animate-slide-up delay-400">
          <Link href="/connect" className={ThemeClasses.githubButton}>
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Connect GitHub — Free
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Dashboard preview */}
        <div className="relative w-full max-w-5xl animate-slide-up delay-500">
          {/* Floating cards */}
          {floatingCards.map((card) => (
            <div
              key={card.label}
              className={`absolute ${card.position} z-10 hidden sm:block animate-float`}
              style={{ animationDelay: card.delay }}
            >
              <div className="bg-[#13121e]/90 backdrop-blur border border-white/10 rounded-xl px-3 py-2 shadow-2xl min-w-[130px] scale-[0.85] origin-center">
                <div className="flex items-center gap-1.5 mb-1">
                  {card.icon}
                  <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
                    {card.label}
                  </span>
                </div>
                <div className="text-white font-bold text-base">
                  {card.value}
                </div>
                <div className="text-[10px] text-gray-500 font-medium opacity-80">
                  {card.sub}
                </div>
              </div>
            </div>
          ))}

          {/* Main dashboard frame */}
          <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-[0_0_40px_rgba(139,92,246,0.05)] bg-[#0d0c17] glass-panel-hover">
            {/* Browser chrome */}
            <div className="bg-[#13121e] border-b border-white/5 px-5 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
              </div>
              <div className="flex-1 bg-[#0a0a0f] rounded-md px-3 py-1 text-xs text-gray-500 text-center max-w-xs mx-auto">
                app.operon.dev/dashboard
              </div>
            </div>

            {/* Dashboard body */}
            <div className="p-6 grid grid-cols-3 gap-4">
              {/* Left col — stats */}
              <div className="col-span-2 space-y-4">
                {/* Heatmap */}
                <div className="bg-[#13121e] rounded-xl p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-gray-300">
                      Contribution Activity
                    </span>
                    <span className="text-xs text-gray-600">Last 12 weeks</span>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 12 }).map((_, week) => (
                      <div key={week} className="flex flex-col gap-1 flex-1">
                        {Array.from({ length: 7 }).map((_, day) => {
                          const intensity = Math.random();
                          const bg =
                            intensity > 0.8
                              ? "bg-violet-500"
                              : intensity > 0.6
                                ? "bg-violet-600/70"
                                : intensity > 0.4
                                  ? "bg-violet-800/60"
                                  : intensity > 0.2
                                    ? "bg-violet-900/50"
                                    : "bg-white/5";
                          return (
                            <div key={day} className={`h-4 rounded-sm ${bg}`} />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trend chart */}
                <div className="bg-[#13121e] rounded-xl p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-gray-300">
                      Weekly Momentum
                    </span>
                    <span className="text-xs text-emerald-400 font-medium">
                      +18% vs last month
                    </span>
                  </div>
                  <div className="flex items-end gap-1.5 h-16">
                    {[30, 55, 42, 70, 65, 88, 75, 92, 68, 85, 95, 100].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm bg-linear-to-t from-violet-700/80 to-fuchsia-500/60"
                          style={{ height: `${h}%` }}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Right col */}
              <div className="space-y-3">
                {[
                  {
                    label: "Streak",
                    value: "47d",
                    icon: "🔥",
                    color: "text-orange-400",
                  },
                  {
                    label: "Commits",
                    value: "1,248",
                    icon: "⚡",
                    color: "text-violet-400",
                  },
                  {
                    label: "PRs Open",
                    value: "12",
                    icon: "📂",
                    color: "text-blue-400",
                  },
                  {
                    label: "Reviews",
                    value: "34",
                    icon: "✅",
                    color: "text-emerald-400",
                  },
                ].map(({ label, value, color }) => (
                  <div
                    key={label}
                    className="bg-[#13121e] rounded-xl p-3 border border-white/5"
                  >
                    <div className="text-xs text-gray-500 mb-0.5">{label}</div>
                    <div className={`text-lg font-bold ${color}`}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Glow under */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-violet-600/10 blur-2xl rounded-full" />
        </div>
      </div>
    </section>
  );
};
