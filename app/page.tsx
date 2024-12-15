import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import Card from "@/components/Card";

export default function Home() {
  return (
    <div data-theme="elegant">
      <Navbar />
      <Hero />

      <Card />
      <Footer />
    </div>
  );
}
