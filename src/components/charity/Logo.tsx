type Props = { color?: string; iconColor?: string; className?: string };

export const CharityLogo = ({ color = "#ffffff", iconColor = "#ffd166", className }: Props) => (
  <div className={"flex items-center gap-2 " + (className ?? "")}>
    {/* Star burst icon */}
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <path
        d="M17 1.5l3.4 8.7 9.3.6-7.2 5.9 2.4 9-7.9-5-7.9 5 2.4-9-7.2-5.9 9.3-.6L17 1.5z"
        fill={iconColor}
      />
      <circle cx="17" cy="17" r="3" fill={color === "#ffffff" ? "#ffffff" : color} />
    </svg>
    <span
      className="font-display text-[26px] font-bold leading-none italic"
      style={{ color, fontFamily: '"Geist", "Geist Placeholder", system-ui, sans-serif' }}
    >
      CharityFlow
    </span>
  </div>
);
