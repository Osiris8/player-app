"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import PlayerCard from "@/components/PlayerCard";
import Search from "@/components/Search";
import { useState, useEffect } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";

interface Player {
  _id: string;
  name: string;
  imageUrl: string;
  club: string;
  country: string;
  position: string;
  age: number;
}
export default function Home() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { user } = useKindeBrowserClient();
  const router = useRouter();
  useEffect(() => {
    if (!user?.id) return; // not fetch if user?.id is unavailable

    const fetchPlayers = async () => {
      try {
        const response = await fetch(`/api/player/${user?.id}`);
        if (!response.ok) {
          console.log("Failed to fetch players");
          router.push("/error");
          return;
        }

        const data = await response.json();
        console.log("API response: ", data);

        if (Array.isArray(data)) {
          setPlayers(data);
        } else if (data && typeof data === "object") {
          setPlayers([]);
          console.error("Unexpected data format: Object instead of Array");
        } else {
          console.error("Unexpected data format: ", data);
          router.push("/error");
        }
      } catch (error) {
        console.error(error);
        router.push("/error");
      }
    };

    fetchPlayers();
  }, [user?.id, router]);
  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div data-theme="elegant">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Featured Players
        </h1>
        <div className="mb-6 max-w-md mx-auto">
          <Search setSearchQuery={setSearchQuery} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlayers.map((player) =>
            player._id ? (
              <Link
                key={player._id}
                href={`/player/detail/${player._id}`}
                className="block hover:no-underline"
              >
                <PlayerCard {...player} />
              </Link>
            ) : null
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
