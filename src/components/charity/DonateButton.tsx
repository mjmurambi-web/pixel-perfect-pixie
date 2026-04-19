import { cn } from "@/lib/utils";

type Props = {
  variant?: "yellow" | "ink" | "purple" | "ghost";
  className?: string;
  children?: React.ReactNode;
};

export const DonateButton = ({ variant = "yellow", className, children = "Donate now" }: Props) => {
  const styles: Record<string, string> = {
    yellow: "bg-[#ffd166] text-[#181618] hover:brightness-95",
    ink: "bg-[#181618] text-white hover:bg-black",
    purple: "bg-[#9a5999] text-white hover:brightness-110",
    ghost: "bg-white/15 text-white hover:bg-white/25 backdrop-blur",
  };
  return (
    <button
      type="button"
      className={cn(
        "pill px-6 h-12 text-[15px] font-medium gap-2",
        styles[variant],
        className
      )}
    >
      <span>{children}</span>
      <span aria-hidden className="text-[#ff5c5c]">❤</span>
    </button>
  );
};
