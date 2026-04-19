import { DonateButton } from "./DonateButton";

const floats = [
  { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=200&h=200&fit=crop&q=70", top: "8%", left: "12%", size: 70 },
  { src: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?w=200&h=200&fit=crop&q=70", top: "38%", left: "70%", size: 90 },
  { src: "https://images.unsplash.com/photo-1597393922315-a37d50a35db1?w=200&h=200&fit=crop&q=70", top: "62%", left: "82%", size: 80 },
  { src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&q=70", top: "65%", left: "18%", size: 90 },
  { src: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=200&h=200&fit=crop&q=70", top: "78%", left: "58%", size: 70 },
];

export const Impact = () => (
  <section className="bg-[#f9edff] pb-28">
    <div className="mx-auto max-w-[1320px] px-8">
      <h2
        className="font-display text-center text-[42px] md:text-[48px] leading-[1.1] font-bold text-[#181618] max-w-4xl mx-auto"
        style={{ fontFamily: '"Geist", system-ui, sans-serif' }}
      >
        Join our community and make a positive
        <br />
        change. Together, we&rsquo;ve impacted people over
      </h2>

      <div className="relative mt-10 h-[340px] flex items-center justify-center">
        {floats.map((f, i) => (
          <img
            key={i}
            src={f.src}
            alt=""
            loading="lazy"
            className="absolute rounded-full object-cover ring-4 ring-[#f9edff]"
            style={{ top: f.top, left: f.left, width: f.size, height: f.size }}
          />
        ))}
        <div
          className="font-display font-black tracking-tight text-center"
          style={{ fontFamily: '"Geist", system-ui, sans-serif', color: "#c89cc6", fontSize: "clamp(80px, 14vw, 200px)", lineHeight: 1 }}
        >
          155,856+
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <DonateButton variant="yellow" />
      </div>
    </div>
  </section>
);
