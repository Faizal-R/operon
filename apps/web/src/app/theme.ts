export const OperonTheme = {
  colors: {
    // Extreme Dark Violet Palette
    bg: "#090314",
    bgAlt: "#14062a",
    accent: "#a855f7",
    accentDark: "#7e22ce",
    accentGlow: "#d8b4fe",
    githubBg: "#0f0a1a",

    // UI Elements
    cardBody: "rgba(255, 255, 255, 0.02)",
    cardHover: "rgba(255, 255, 255, 0.04)",
    border: "rgba(168, 85, 247, 0.20)",
    borderBright: "rgba(168, 85, 247, 0.5)",

    // Typography
    text: "#ffffff",
    muted: "#a1a1aa",
  },
  gradients: {
    bgRadial: "radial-gradient(ellipse at 50% -20%, #290a4d 0%, #090314 80%)",
    button: "linear-gradient(135deg, #7e22ce 0%, #a855f7 100%)",
    cardBg:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
  },
  shadows: {
    glow: "0 4px 20px rgba(107, 33, 168, 0.3)",
    card: "0 8px 32px 0 rgba(0, 0, 0, 0.6)",
  },
  effects: {
    glassBlur: "16px",
  },
};

// Exporting dynamic compound classes to be consumed directly by components
export const ThemeClasses = {
  glassPanel:
    "relative overflow-hidden rounded-2xl border border-operon-border bg-operon-bg-alt shadow-2xl backdrop-blur-xl",
  glassPanelHover:
    "transition-all duration-300 hover:-translate-y-1 hover:border-operon-border-bright hover:shadow-[0_12px_30px_-10px_rgba(168,85,247,0.3)]",
  primaryButton:
    "group flex items-center gap-3 px-8 py-4 rounded-xl bg-(image:--theme-button-gradient) text-white font-bold text-sm shadow-[0_4px_15px_rgba(107,33,168,0.2)] hover:shadow-[0_8px_25px_rgba(168,85,247,0.3)] hover:scale-105 transition-all duration-300",
  githubButton:
    "group flex items-center gap-3 px-8 py-4 rounded-xl bg-operon-github-bg border border-white/5 hover:border-violet-500/20 text-white font-bold text-sm shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
  textGradient:
    "bg-linear-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent",
  subHeadingWrap:
    "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-operon-border bg-operon-bg-alt mb-5",
  subHeadingText:
    "text-xs font-medium text-operon-accent-glow tracking-wide uppercase",
};
