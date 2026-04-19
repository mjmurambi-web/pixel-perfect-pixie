import { CharityLogo } from "./Logo";
import { DonateButton } from "./DonateButton";
import { ChevronDown } from "lucide-react";

const links = ["Home", "About", "Causes", "Contact"];

export const Navbar = () => (
  <nav className="absolute inset-x-0 top-0 z-30">
    <div className="mx-auto flex max-w-[1320px] items-center justify-between px-8 py-6">
      <CharityLogo />
      <ul className="hidden md:flex items-center gap-10">
        {links.map((l, i) => (
          <li key={l}>
            <a
              href="#"
              className={
                "text-[15px] text-white/85 hover:text-white transition-colors " +
                (i === 0 ? "underline underline-offset-[6px] decoration-1" : "")
              }
            >
              {l}
            </a>
          </li>
        ))}
        <li>
          <button className="flex items-center gap-1 text-[15px] text-white/85 hover:text-white">
            Resources <ChevronDown size={14} />
          </button>
        </li>
      </ul>
      <DonateButton variant="yellow" />
    </div>
  </nav>
);
