import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";

export default function Home() {
  return (
    <div data-theme="elegant">
      <Navbar />
      <Hero />
      <Search />
      <Card />
      <Footer />
    </div>
  );
}
