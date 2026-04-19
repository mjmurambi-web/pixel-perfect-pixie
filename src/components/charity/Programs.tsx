import { useState } from "react";
import { GraduationCap, Heart, Rocket, Zap, ChevronDown } from "lucide-react";
import globe from "@/assets/mission-globe.jpg";

const programs = [
  {
    icon: GraduationCap,
    title: "Education and training program",
    body: "Our Education and Training Program is designed to equip individuals with the knowledge, skills, and opportunities they need to thrive.",
  },
  { icon: Heart, title: "Promoting wellness and security", body: "Comprehensive wellness initiatives that protect and uplift the communities we serve." },
  { icon: Rocket, title: "Responding swiftly to disasters", body: "Rapid emergency response, supplies and shelter for affected communities." },
  { icon: Zap, title: "Brighter tomorrow", body: "Long-term sustainable initiatives empowering future generations." },
];

export const Programs = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-[#391d47] text-white py-28">
      <div className="mx-auto max-w-[1320px] px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2
            className="font-display text-[52px] leading-[1.05] font-bold"
            style={{ fontFamily: '"Geist", system-ui, sans-serif' }}
          >
            The mission of
            <br />
            our organization
          </h2>
          <p className="mt-6 text-white/75 text-[16px]">
            Explore our diverse range of programs and initiatives aimed at fostering positive change worldwide.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            {programs.map((p, i) => {
              const isOpen = open === i;
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={
                    "rounded-[18px] border border-white/10 overflow-hidden transition-colors " +
                    (isOpen ? "bg-white/[0.06]" : "bg-transparent")
                  }
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="flex items-center gap-4">
                      <Icon size={20} className="text-[#ffd166]" />
                      <span className="text-[17px] font-medium">{p.title}</span>
                    </span>
                    <ChevronDown
                      size={18}
                      className={"text-white/60 transition-transform " + (isOpen ? "rotate-180" : "")}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 -mt-1 text-white/75 text-[15px] leading-relaxed">
                      {p.body}
                    </div>
                  )}
                </div>
              );
            })}

            <button className="mt-6 pill h-12 px-7 bg-white/15 text-white text-[15px] font-medium hover:bg-white/25">
              Join our mission
            </button>
          </div>

          <div className="relative flex items-center justify-center">
            <img src={globe} alt="Globe" className="w-full max-w-[520px]" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};
