import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PlayerForm from "@/components/PlayerForm";
export default function Home() {
  return (
    <div data-theme="elegant">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">
              Add New Player
            </h1>
            <PlayerForm />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
