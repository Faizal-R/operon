import React from "react";
import { Bell, Workflow, Users } from "lucide-react";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="glass-panel p-8 rounded-2xl hover:bg-operon-bg-alt/80 transition-all group overflow-hidden relative">
    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
      <div className="w-32 h-32 bg-operon-accent rounded-full blur-[50px]"></div>
    </div>
    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:border-operon-accent/50 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
      {description}
    </p>
  </div>
);

export const Features = () => {
  return (
    <section
      className="py-32 px-4 max-w-6xl mx-auto relative z-10"
      id="features"
    >
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Built for those who ship.
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          Every metric is calculated automatically in the background through a
          scheduled sync engine. Your dashboard is always current.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Bell className="w-6 h-6 text-operon-accent-glow" />}
          title="Real-Time Notification Layer"
          description="Never miss a meaningful moment. Alerts for merged PRs and build statuses are pushed live over WebSocket—no refreshing, no polling."
        />
        <FeatureCard
          icon={<Workflow className="w-6 h-6 text-operon-accent-glow" />}
          title="Automatic Insights"
          description="Operon surfaces patterns: days you're most productive, repos that have gone stale, and languages you're actively growing in."
        />
        <FeatureCard
          icon={<Users className="w-6 h-6 text-operon-accent-glow" />}
          title="Team Velocity"
          description="A shared view of team health across every repository. Give teams the context they need to support each other and catch burnout early."
        />
      </div>
    </section>
  );
};
