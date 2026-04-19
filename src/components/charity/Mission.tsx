import volunteers from "@/assets/about-volunteers.jpg";

export const Mission = () => (
  <section className="bg-[#f9edff] py-28">
    <div className="mx-auto max-w-[1100px] px-8">
      <h2
        className="font-display text-center text-[44px] md:text-[52px] leading-[1.1] font-bold text-[#181618] max-w-3xl mx-auto"
        style={{ fontFamily: '"Geist", system-ui, sans-serif' }}
      >
        Embracing discomfort to drive
        <br />
        meaningful change and a brighter future.
      </h2>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <img
          src={volunteers}
          alt="Diverse group of volunteers stacking hands"
          className="rounded-[22px] w-full h-[520px] object-cover"
          loading="lazy"
        />

        <div className="lg:pt-6">
          <p className="text-[17px] text-[#181618]/80 leading-relaxed">
            At CharityFlow, our mission is simple: to make a positive impact
            where it&rsquo;s needed most. Founded in 2008, we provide essential
            medical and humanitarian support to vulnerable communities.
          </p>

          <div className="mt-16 grid grid-cols-2 gap-10">
            <div>
              <div
                className="font-display text-[64px] leading-none font-bold text-[#181618]"
                style={{ fontFamily: '"Geist", system-ui, sans-serif' }}
              >
                140<span className="text-[#9a5999]">+</span>
              </div>
              <div className="mt-3 text-[#575757]">Volunteers joined this month</div>
            </div>
            <div>
              <div
                className="font-display text-[64px] leading-none font-bold text-[#181618]"
                style={{ fontFamily: '"Geist", system-ui, sans-serif' }}
              >
                20<span className="text-[#9a5999]">K</span>
              </div>
              <div className="mt-3 text-[#575757]">People impacted this month.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
