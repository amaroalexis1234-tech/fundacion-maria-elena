import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCta } from "@/components/ui/FloatingCta";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Impact } from "@/components/sections/Impact";
import { Programs } from "@/components/sections/Programs";
import { Stories } from "@/components/sections/Stories";
import { Gallery } from "@/components/sections/Gallery";
import { ActionCTA } from "@/components/sections/ActionCTA";
import { Press } from "@/components/sections/Press";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Impact />
        <Programs />
        <Stories />
        <Gallery />
        <ActionCTA />
        <Press />
        <Contact />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
