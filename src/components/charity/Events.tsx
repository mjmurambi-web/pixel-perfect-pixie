import { Calendar, ArrowRight } from "lucide-react";
import cleanup from "@/assets/event-cleanup.jpg";
import nature from "@/assets/event-nature.jpg";
import run from "@/assets/event-run.jpg";

const events = [
  { img: cleanup, title: "Participate in our community clean-up day event together", date: "Feb 10, 2026" },
  { img: nature, title: "Celebrate nature and foster environmental consciousness", date: "Feb 6, 2026" },
  { img: run, title: "Heartwarming charity fun run to support charity Initiatives", date: "Feb 2, 2026" },
];

export const Events = () => (
  <section className="bg-[#f9edff] pb-32">
    <div className="mx-auto max-w-[1320px] px-8">
      <div className="flex items-center justify-between gap-6 flex-wrap">
        <h2
          className="font-display text-[48px] leading-[1.05] font-bold text-[#181618]"
          style={{ fontFamily: '"Geist", system-ui, sans-serif' }}
        >
          Recent events
        </h2>
        <button className="pill h-12 px-7 bg-[#391d47] text-white text-[15px] font-medium hover:brightness-110">
          Explore all events
        </button>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((e) => (
          <article key={e.title} className="rounded-[22px] bg-white p-5 shadow-[0_4px_24px_rgba(154,89,153,0.08)]">
            <div className="rounded-[16px] overflow-hidden">
              <img src={e.img} alt={e.title} className="h-[260px] w-full object-cover" loading="lazy" />
            </div>
            <h3 className="mt-5 text-[19px] font-semibold text-[#181618] leading-snug min-h-[56px]">
              {e.title}
            </h3>
            <div className="mt-6 pt-5 border-t border-[#181618]/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#575757] text-sm">
                <Calendar size={16} />
                {e.date}
              </div>
              <a href="#" className="flex items-center gap-1 text-[#181618] text-sm font-medium hover:gap-2 transition-all">
                View event <ArrowRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
