import { CharityLogo } from "./Logo";
import { DonateButton } from "./DonateButton";
import { MapPin, Phone, Mail } from "lucide-react";

const cols = [
  ["Home", "About", "Causes", "Cause Detail (Static)", "Volunteers", "Events", "Contact"],
  ["Become a Volunteer", "Gallery", "FAQs", "Blog", "Privacy Policy", "Error 404"],
];

export const Footer = () => (
  <footer className="bg-[#181618] text-white">
    <div className="mx-auto max-w-[1320px] px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr] gap-12">
        <div>
          <CharityLogo color="#ffffff" />
          <ul className="mt-10 space-y-4 text-white/80 text-[15px]">
            <li className="flex items-center gap-3"><MapPin size={16} className="text-[#ffd166]" />2002 Horton Ford Rd, Eidson, TN, 37731</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-[#ffd166]" />+1 202 555 0147</li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-[#ffd166]" />support@yourbrand.com</li>
          </ul>
        </div>

        {cols.map((col, i) => (
          <div key={i}>
            {i === 0 && <div className="text-white/50 text-sm mb-5">Page links</div>}
            {i === 1 && <div className="text-white/50 text-sm mb-5">&nbsp;</div>}
            <ul className="space-y-4">
              {col.map((l, j) => (
                <li key={l}>
                  <a
                    href="#"
                    className={
                      "text-[15px] hover:text-white transition-colors " +
                      (i === 0 && j === 0 ? "text-[#9a5999]" : "text-white/70")
                    }
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="rounded-[22px] bg-[#9a5999] p-8 self-start">
          <h3
            className="font-display text-[28px] leading-[1.15] font-bold text-white"
            style={{ fontFamily: '"Geist", system-ui, sans-serif' }}
          >
            Join us today
            <br />
            and be a part of
            <br />
            a beautiful world!
          </h3>
          <div className="mt-8">
            <DonateButton variant="yellow" />
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/10 text-white/50 text-sm flex justify-between">
        <span>Designed by Webestica, Powered by Framer</span>
        <span>© CharityFlow 2026</span>
      </div>
    </div>
  </footer>
);
