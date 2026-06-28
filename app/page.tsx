import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Features } from "./components/Features";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col bg-slate-950 font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Portfolio />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
