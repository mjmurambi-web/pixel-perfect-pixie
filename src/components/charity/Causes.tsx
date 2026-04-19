import { DonateButton } from "./DonateButton";
import poverty from "@/assets/cause-poverty.jpg";
import meals from "@/assets/cause-meals.jpg";
import medicine from "@/assets/cause-medicine.jpg";

const causes = [
  {
    img: poverty,
    title: "Help children raise out of poverty",
    desc: "Empower children to break the cycle of poverty with education, support.",
    pct: 60,
    goal: "$28,000",
    raised: "$16,800",
  },
  {
    img: meals,
    title: "Feed healthy meals to rural children",
    desc: "Help us deliver nutritious, balanced meals to children in remote rural areas.",
    pct: 80,
    goal: "$40,000",
    raised: "$32,000",
  },
  {
    img: medicine,
    title: "Access to medicine and research support",
    desc: "Support our mission to enhance equitable healthcare access and sustainable funding.",
    pct: 50,
    goal: "$50,000",
    raised: "$25,000",
  },
];

export const Causes = () => (
  <section className="bg-[#f9edff] py-28">
    <div className="mx-auto max-w-[1320px] px-8">
      <div className="flex items-end justify-between gap-8 flex-wrap">
        <h2
          className="font-display text-[48px] leading-[1.05] font-bold text-[#181618]"
          style={{ fontFamily: '"Geist", system-ui, sans-serif' }}
        >
          Engage with our
          <br />
          ongoing causes
        </h2>
        <button className="pill h-12 px-7 bg-[#391d47] text-white text-[15px] font-medium hover:brightness-110">
          View all causes
        </button>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {causes.map((c) => (
          <article key={c.title} className="rounded-[22px] bg-white p-5 shadow-[0_4px_24px_rgba(154,89,153,0.08)]">
            <div className="rounded-[16px] overflow-hidden">
              <img src={c.img} alt={c.title} className="h-[260px] w-full object-cover" loading="lazy" />
            </div>
            <h3 className="mt-5 text-[20px] font-semibold text-[#181618]">{c.title}</h3>
            <p className="mt-2 text-[14px] text-[#575757] leading-relaxed">{c.desc}</p>

            <div className="mt-6">
              <div className="flex items-center justify-between text-[13px] text-[#181618]">
                <span>Funding progress</span>
                <span className="font-semibold">{c.pct}%</span>
              </div>
              <div className="progress-track mt-2">
                <div className="progress-fill" style={{ width: `${c.pct}%` }} />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <div className="text-[12px] text-[#575757]">Goal</div>
                <div className="text-[16px] font-semibold text-[#181618]">{c.goal}</div>
              </div>
              <div className="text-right">
                <div className="text-[12px] text-[#575757]">Raised money</div>
                <div className="text-[16px] font-semibold text-[#9a5999]">{c.raised}</div>
              </div>
            </div>

            <div className="mt-5">
              <DonateButton variant="yellow" className="w-full" />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
