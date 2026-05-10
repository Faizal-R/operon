"use client";

import { Toaster as Sonner, toast } from "sonner";
import { CheckCircle2, AlertCircle, Info, AlertTriangle } from "lucide-react";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#090314] group-[.toaster]:text-white group-[.toaster]:border-violet-500/20 group-[.toaster]:shadow-2xl overflow-hidden glass-panel font-sans",
          description: "group-[.toast]:text-zinc-400",
          actionButton:
            "group-[.toast]:bg-violet-600 group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-transparent group-[.toast]:border-violet-500/20 group-[.toast]:text-zinc-300",
          success:
            "group-[.toaster]:text-green-400 group-[.toaster]:border-green-500/30 group-[.toaster]:!bg-green-500/5",
          error:
            "group-[.toaster]:text-red-400 group-[.toaster]:border-red-500/30 group-[.toaster]:!bg-red-500/5",
          warning:
            "group-[.toaster]:text-amber-400 group-[.toaster]:border-amber-500/30 group-[.toaster]:!bg-amber-500/5",
          info: "group-[.toaster]:text-blue-400 group-[.toaster]:border-blue-500/30 group-[.toaster]:!bg-blue-500/5",
        },
      }}
      icons={{
        success: <CheckCircle2 className="h-5 w-5 text-green-400" />,
        info: <Info className="h-5 w-5 text-blue-400" />,
        warning: <AlertTriangle className="h-5 w-5 text-amber-400" />,
        error: <AlertCircle className="h-5 w-5 text-red-400" />,
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
