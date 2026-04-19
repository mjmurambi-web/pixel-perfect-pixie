import { Navbar } from "@/components/charity/Navbar";
import { Hero } from "@/components/charity/Hero";
import { Mission } from "@/components/charity/Mission";
import { DonationCTA } from "@/components/charity/DonationCTA";
import { Support } from "@/components/charity/Support";
import { Programs } from "@/components/charity/Programs";
import { Causes } from "@/components/charity/Causes";
import { Impact } from "@/components/charity/Impact";
import { Logos, Testimonials } from "@/components/charity/Testimonials";
import { Events } from "@/components/charity/Events";
import { Footer } from "@/components/charity/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-[#f9edff]">
      <Navbar />
      <Hero />
      <Mission />
      <DonationCTA />
      <Support />
      <Programs />
      <Causes />
      <Impact />
      <Logos />
      <Testimonials />
      <Events />
      <Footer />
    </main>
  );
};

export default Index;
