import { HandCoins, HeartHandshake, Handshake, Clock4 } from "lucide-react";

const items = [
  {
    icon: HandCoins,
    title: "Financial contributions",
    body: "With your support, we can fund vital programs, expand our reach, and make a tangible difference.",
  },
  {
    icon: HeartHandshake,
    title: "Volunteer with us",
    body: "Whether it's mentoring, organizing events, or offering your expertise, every contribution counts.",
  },
  {
    icon: Handshake,
    title: "Impactful partnerships",
    body: "We strive to educate, inform, and ignite action on pressing issues, inspiring change, and empowering communities worldwide.",
  },
  {
    icon: Clock4,
    title: "Devote your time",
    body: "Volunteering with us offers a chance to contribute meaningfully to our mission, enriching lives.",
  },
];

export const Support = () => (
  <section className="bg-[#f9edff] pb-32">
    <div className="mx-auto max-w-[1320px] px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16">
      <div className="lg:sticky lg:top-24 self-start">
        <h2
          className="font-display text-[48px] leading-[1.05] font-bold text-[#181618]"
          style={{ fontFamily: '"Geist", system-ui, sans-serif' }}
        >
          How can you truly
          <br />
          support our cause?
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="rounded-[22px] bg-white p-7 shadow-[0_4px_24px_rgba(154,89,153,0.08)]"
          >
            <div className="h-12 w-12 rounded-full bg-[#ffd166] flex items-center justify-center text-[#181618]">
              <Icon size={22} />
            </div>
            <h3 className="mt-16 text-[20px] font-semibold text-[#391d47]">{title}</h3>
            <p className="mt-3 text-[15px] text-[#575757] leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
