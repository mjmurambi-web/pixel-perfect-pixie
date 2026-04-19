import { DonateButton } from "./DonateButton";
import globe from "@/assets/donation-globe-hands.jpg";

export const DonationCTA = () => (
  <section className="bg-[#f9edff] pb-28">
    <div className="mx-auto max-w-[1320px] px-8">
      <div
        className="relative overflow-hidden rounded-[28px] p-12 lg:p-16"
        style={{
          background: "linear-gradient(135deg, #d8b4d6 0%, #c89cc6 100%)",
        }}
      >
        <div className="relative z-10 max-w-xl">
          <h3
            className="font-display text-[44px] leading-[1.05] font-bold text-white"
            style={{ fontFamily: '"Geist", system-ui, sans-serif' }}
          >
            Your donation <span className="italic" style={{ color: "#ffd166" }}>helps</span>
            <br />those in need
          </h3>
          <p className="mt-5 text-white/90 text-[16px] leading-relaxed max-w-md">
            Your support provides hope, care, and essential resources to those
            who need it most.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <DonateButton variant="yellow" />
            <button className="pill h-12 px-7 bg-[#9a5999] text-white text-[15px] font-medium hover:brightness-110">
              Become a volunteer
            </button>
          </div>
        </div>

        <img
          src={globe}
          alt="Hands holding the Earth"
          className="absolute right-0 top-0 h-full w-[55%] object-cover object-left mix-blend-luminosity opacity-90 hidden md:block"
          loading="lazy"
        />
        <div
          className="absolute right-0 top-0 h-full w-[55%] hidden md:block"
          style={{
            background: "linear-gradient(90deg, rgba(216,180,214,1) 0%, rgba(216,180,214,0) 30%)",
          }}
        />
      </div>
    </div>
  </section>
);
