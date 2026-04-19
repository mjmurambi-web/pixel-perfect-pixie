import { DonateButton } from "./DonateButton";
import heroChildren from "@/assets/hero-children-bowl.jpg";
import heroBox from "@/assets/hero-donation-box.png";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#391d47] text-white">
      {/* Subtle background curve */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          background:
            "radial-gradient(900px 500px at 90% 10%, rgba(154,89,153,0.55), transparent 60%), radial-gradient(700px 500px at 5% 100%, rgba(255,209,102,0.10), transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 gap-10 px-8 pb-28 pt-40 lg:grid-cols-2">
        {/* Left: copy */}
        <div className="max-w-xl">
          <h1
            className="font-display text-[68px] leading-[1.02] font-bold tracking-tight"
            style={{ fontFamily: '"Geist", system-ui, sans-serif' }}
          >
            Help us <span style={{ color: "#ffd166" }}>build</span>
            <br />
            hope and homes
          </h1>
          <p className="mt-7 text-[17px] text-white/75 max-w-md leading-relaxed">
            Join our mission to provide essential support and resources to
            underprivileged communities around the world.
          </p>

          <button className="mt-10 pill h-12 px-7 bg-white/15 text-white text-[15px] font-medium hover:bg-white/25 backdrop-blur">
            View causes
          </button>

          {/* Trust row */}
          <div className="mt-24 flex items-center gap-5">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&q=70",
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&h=120&fit=crop&q=70",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=70",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&q=70",
              ].map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-[#391d47] object-cover"
                  loading="lazy"
                />
              ))}
              <div className="h-10 w-10 rounded-full border-2 border-[#391d47] bg-white text-[#181618] text-[11px] font-bold flex items-center justify-center">
                YOU?
              </div>
            </div>
            <div className="text-sm">
              <div className="text-[#ffd166] tracking-wider">★★★★★</div>
              <div className="text-white/80 mt-1">Trusted by 200+ donors</div>
            </div>
          </div>
        </div>

        {/* Right: cards/imagery */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-5">
            {/* Stat card 89% */}
            <div className="relative col-span-1 row-span-1 rounded-[22px] overflow-hidden h-[180px] bg-[#9a5999]/30">
              <img
                src={heroChildren}
                alt="Hands joined"
                className="absolute inset-0 h-full w-full object-cover opacity-60"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#9a5999]/60 to-[#391d47]/80" />
              <div className="relative h-full p-6 flex flex-col justify-end">
                <div className="font-display text-[40px] font-bold leading-none">89%</div>
                <div className="text-white/85 text-sm mt-1">Community impact score</div>
              </div>
            </div>

            {/* Photo top-right (donation box illustration) */}
            <div className="row-span-2 relative">
              <img
                src={heroBox}
                alt="Donation box"
                className="absolute -top-10 -right-10 h-[420px] w-auto object-contain drop-shadow-2xl"
              />
              {/* Stat card 5,000+ tucked under */}
              <div className="absolute bottom-0 right-0 w-[300px] rounded-[22px] p-6 text-white"
                   style={{ background: "linear-gradient(160deg, #9a5999 0%, #5a2c66 100%)" }}>
                <div className="font-display text-[40px] font-bold leading-none">5,000+</div>
                <div className="text-white/85 text-sm mt-1">Monthly Contributions Received</div>
              </div>
            </div>

            {/* Photo bottom-left (children with bowl) */}
            <div className="relative h-[280px] rounded-[22px] overflow-hidden">
              <img
                src={heroChildren}
                alt="Children smiling"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Yellow CTA banner */}
          <div className="mt-6 flex items-center gap-4 rounded-[22px] bg-[#ffd166] p-4 pr-3">
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-[#ff5c5c]">❤</div>
            <p className="flex-1 text-[15px] text-[#181618] leading-snug">
              Every donation provides food, shelter,<br />
              and life-changing community support.
            </p>
            <DonateButton variant="ink" />
          </div>
        </div>
      </div>
    </section>
  );
};
