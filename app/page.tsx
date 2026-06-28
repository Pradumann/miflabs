import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Features } from "./components/Features";
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
