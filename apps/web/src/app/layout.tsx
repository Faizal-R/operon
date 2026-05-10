import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import { OperonTheme } from "./theme";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Operon | Developer Activity Intelligence",
  description:
    "Connect your GitHub and transform your engineering output into a living, visual record of your work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dynamicThemeCSS = `
    :root {
      --theme-color-bg: ${OperonTheme.colors.bg};
      --theme-color-bg-alt: ${OperonTheme.colors.bgAlt};
      --theme-color-accent: ${OperonTheme.colors.accent};
      --theme-color-accent-dark: ${OperonTheme.colors.accentDark};
      --theme-color-accent-glow: ${OperonTheme.colors.accentGlow};
      --theme-color-card: ${OperonTheme.colors.cardBody};
      --theme-color-card-hover: ${OperonTheme.colors.cardHover};
      --theme-color-border: ${OperonTheme.colors.border};
      --theme-color-border-bright: ${OperonTheme.colors.borderBright};
      --theme-color-text: ${OperonTheme.colors.text};
      --theme-color-muted: ${OperonTheme.colors.muted};
      --theme-color-github-bg: ${OperonTheme.colors.githubBg};
      
      --theme-bg-gradient: ${OperonTheme.gradients.bgRadial};
      --theme-button-gradient: ${OperonTheme.gradients.button};
      --theme-card-bg-gradient: ${OperonTheme.gradients.cardBg};
      --theme-glow-shadow: ${OperonTheme.shadows.glow};
      --theme-card-shadow: ${OperonTheme.shadows.card};
      --theme-glass-blur: blur(${OperonTheme.effects.glassBlur});
    }
  `;

  return (
    <html
      lang="en"
      className={cn("antialiased", inter.variable, "font-sans", geist.variable)}
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: dynamicThemeCSS }} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
