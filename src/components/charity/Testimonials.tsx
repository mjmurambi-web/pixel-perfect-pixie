import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import { Star } from "lucide-react";

const logos = ["Imprintify", "Logique", "LOGIQUE", "Dexign"];

export const Logos = () => (
  <section className="bg-[#391d47] py-16">
    <div className="mx-auto max-w-[1320px] px-8">
      <p className="text-center text-white/70 text-[14px] tracking-wide">Our supporters worldwide</p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        {logos.map((l) => (
          <div key={l} className="flex justify-center text-white/70 text-[24px] font-semibold tracking-wide">
            {l}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Testimonials = () => (
  <section className="bg-[#f9edff] py-28">
    <div className="mx-auto max-w-[1320px] px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16">
      <div>
        <h2
          className="font-display text-[48px] leading-[1.05] font-bold text-[#181618]"
          style={{ fontFamily: '"Geist", system-ui, sans-serif' }}
        >
          Our impact,
          <br />
          in their words
        </h2>
        <p className="mt-6 text-[16px] text-[#575757] max-w-md leading-relaxed">
          Testimonials share stories of gratitude, transformation, and personal positive experiences.
        </p>
      </div>

      <div className="flex items-start gap-8">
        <div className="flex flex-col gap-5 pt-2">
          {[avatar2, avatar1, avatar3].map((a, i) => (
            <img
              key={i}
              src={a}
              alt=""
              loading="lazy"
              className={
                "h-16 w-16 rounded-full object-cover ring-4 ring-[#f9edff] " +
                (i === 1 ? "scale-110" : "opacity-70")
              }
            />
          ))}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1 text-[#ffd166] mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" stroke="none" />
            ))}
          </div>
          <p className="text-[22px] leading-[1.4] text-[#181618] font-medium">
            Volunteering with CharityFlow has been incredibly fulfilling, and witnessing the
            direct impact of their projects has reaffirmed my belief in collective compassion.
          </p>
          <div className="mt-6">
            <div className="text-[#181618] font-semibold">Jacqueline Miller</div>
            <div className="text-[#575757] text-sm">Scholarship Recipient</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
