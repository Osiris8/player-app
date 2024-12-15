import Link from "next/link";
import PlayerCard from "./PlayerCard";
import Search from "./Search";
import cr7 from "@/public/images/christiano-ronaldo.webp";
import messi from "@/public/images/messi.webp";
import kb from "@/public/images/kilyan-mbappe.webp";
import sadio from "@/public/images/sadio.webp";
import vinicius from "@/public/images/vinicius.webp";
import jude from "@/public/images/jude.jpg";
import haaland from "@/public/images/haaland.jpg";
const players = [
  {
    name: "Lionel Messi",
    imageUrl: messi,
    club: "Inter Miami CF",
    country: "Argentina",
    position: "Forward",
    age: 36,
    publisher: {
      name: "John Doe",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Cristiano Ronaldo",
    imageUrl: cr7,
    club: "Al Nassr",
    country: "Portugal",
    position: "Forward",
    age: 38,
    publisher: {
      name: "Jane Smith",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Jude Belligham",
    imageUrl: jude,
    club: "Real Madrid",
    country: "England",
    position: "Midfielder",
    age: 24,
    publisher: {
      name: "Alex Johnson",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Kylian Mbappé",
    imageUrl: kb,
    club: "Paris Saint-Germain",
    country: "France",
    position: "Forward",
    age: 24,
    publisher: {
      name: "Alex Johnson",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Erling Haaland",
    imageUrl: haaland,
    club: "Manchester City",
    country: "Norway",
    position: "Forward",
    age: 23,
    publisher: {
      name: "Sarah Brown",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Sadio",
    imageUrl: sadio,
    club: "Al Nassr",
    country: "Senegal",
    position: "Forward",
    age: 32,
    publisher: {
      name: "Mike Wilson",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Vinicius",
    imageUrl: vinicius,
    club: "Real Madrid",
    country: "Brazil",
    position: "Forward",
    age: 31,
    publisher: {
      name: "Emily Davis",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
];
export default function Card() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Featured Players</h1>
      <div className="mb-6 max-w-md mx-auto">
        <Search />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player, index) => (
          <Link key={index} href="#" className="block hover:no-underline">
            <PlayerCard {...player} />
          </Link>
        ))}
      </div>
    </div>
  );
}
