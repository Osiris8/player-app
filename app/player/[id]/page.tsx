"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlayerDetailCard } from "@/components/PlayerDetailCard";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
export default function Home() {
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [playerData, setPlayerData] = useState({
    name: "",
    imageUrl: "",
    club: "",
    country: "",
    position: "",
    age: 0,
    publisher: {
      name: "",
      avatarUrl: "",
    },
    description: "",
    history: "",
    career: "",
    goals: 0,
  });

  useEffect(() => {
    const playerId = `${pathname}`.split("/").pop();
    console.log(playerId);
    if (!playerId) return;

    const fetchPlayer = async () => {
      try {
        setLoading(true); // Démarrage du chargement
        const response = await fetch(`/api/player/${playerId}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch player data");
        }

        const data = await response.json();
        setPlayerData({
          name: data.name || "",
          imageUrl: data.imageUrl || "",
          club: data.club || "",
          country: data.country || "",
          position: data.position || "",
          age: data.age || 0,
          publisher: {
            name: data.publisher?.name || "",
            avatarUrl: data.publisher?.avatarUrl || "",
          },
          description: data.description || "",
          history: data.history || "",
          career: data.career || "",
          goals: data.goals || 0,
        });
        setError(null); // Réinitialiser les erreurs en cas de succès
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); // Fin du chargement
      }
    };

    fetchPlayer();
  }, [pathname]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div data-theme="elegant">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">
              Player Detail
            </h1>
            <div className="mb-6 flex justify-center">
              <Button asChild>
                <Link href="/player/add">Add New Player</Link>
              </Button>
            </div>
            <PlayerDetailCard {...playerData} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
