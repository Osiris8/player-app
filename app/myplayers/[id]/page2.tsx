"use client";
import PlayerCard from "@/components/PlayerCard";
import Search from "@/components/Search";
import { useState, useEffect } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
interface Player {
  _id: string;
  name: string;
  imageUrl: string;
  club: string;
  country: string;
  position: string;
  age: number;
}
export default function Card() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [players, setPlayers] = useState<Player[]>([]);
  const { user } = useKindeBrowserClient();
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const playerId = `${pathname}`.split("/").pop();
    if (!playerId) return;
    console.log(playerId);
    if (!user?.id) return;
    const fetchPlayers = async () => {
      try {
        if (playerId === user?.id) {
          const response = await fetch(`/api/myplayers/${playerId}`);
          if (!response) {
            router.push("/error");
          }

          const data = await response.json();
          console.log(data.player);
          setPlayers(data.player);
        } else {
          router.push("/error");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPlayers();
  }, [pathname, user?.id, router]);
  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8" id="players">
        <h1 className="text-3xl font-bold mb-8 text-center">My Players</h1>
        <div className="mb-6 max-w-md mx-auto">
          <Search setSearchQuery={setSearchQuery} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlayers.map((player, index) => (
            <Link key={player._id} href={`/player/detail/${player._id}`}>
              <PlayerCard key={index} {...player} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
