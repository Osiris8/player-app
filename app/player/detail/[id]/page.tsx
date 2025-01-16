"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlayerDetailCard } from "@/components/PlayerDetailCard";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
export default function Home() {
  const pathname = usePathname();
  const { user } = useKindeBrowserClient();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPlayerCreator, setIsPlayerCreator] = useState(false);

  const [playerData, setPlayerData] = useState({
    id: "",
    name: "",
    imageUrl: "",
    club: "",
    country: "",
    position: "",
    age: 0,

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
        setLoading(true); // Loading
        const response = await fetch(`/api/players/${playerId}`);
        if (!response.ok) {
          const errorData = await response.json();
          console.log(errorData.error || "Failed to fetch player data");
        }

        const data = await response.json();
        console.log(data);
        setPlayerData({
          id: data._id,
          name: data.name || "",
          imageUrl: data.imageUrl || "",
          club: data.club || "",
          country: data.country || "",
          position: data.position || "",
          age: data.age || 0,

          description: data.description || "",
          history: data.history || "",
          career: data.career || "",
          goals: data.goals || 0,
        });
        setError(null);
        //Verify the creator of player
        const userId = user?.id;
        if ((data.userId = userId)) {
          console.log(data.userId);
          console.log(data._id);
          setIsPlayerCreator(true);
        } else {
          setIsPlayerCreator(false);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); // End to loading
      }
    };

    fetchPlayer();
  }, [pathname, user?.id]);

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
              {isPlayerCreator ? (
                <Button asChild>
                  <Link href={`/player/edit/${playerData.id}`}>
                    Edit Player
                  </Link>
                </Button>
              ) : (
                <Button asChild>
                  <Link href="/player/add">Add New Player</Link>
                </Button>
              )}
            </div>
            <PlayerDetailCard {...playerData} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
