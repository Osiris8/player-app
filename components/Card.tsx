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
import salah from "@/public/images/salah.jpg";
import wirtz from "@/public/images/wirtz.jpg";
import kane from "@/public/images/kane.jpeg";
import osimhen from "@/public/images/osimhen.jpg";
import dybala from "@/public/images/dybala.jpg";
import theo from "@/public/images/theo.jpg";
import leao from "@/public/images/leao.jpg";
import raphinha from "@/public/images/raphina.jpg";
import yamal from "@/public/images/yamal.jpg";
import valverde from "@/public/images/valverde.webp";
import griezmann from "@/public/images/griezman.jpg";
import pedri from "@/public/images/pedri.jpg";
import debruyne from "@/public/images/debruyne.jpg";
import saka from "@/public/images/saka.jpg";
import musiala from "@/public/images/musiala.jpg";
import lewandowski from "@/public/images/lewandowski.jpg";
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
    name: "Sadio Mané",
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
    name: "Vinicius Junior",
    imageUrl: vinicius,
    club: "Real Madrid",
    country: "Brazil",
    position: "Forward",
    age: 23,
    publisher: {
      name: "Emily Davis",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Mohamed Salah",
    imageUrl: salah,
    club: "Liverpool",
    country: "Egypt",
    position: "Forward",
    age: 31,
    publisher: {
      name: "Chris Green",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Florian Wirtz",
    imageUrl: wirtz,
    club: "Bayer Leverkusen",
    country: "Germany",
    position: "Midfielder",
    age: 20,
    publisher: {
      name: "Anna Scott",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Harry Kane",
    imageUrl: kane,
    club: "Bayern Munich",
    country: "England",
    position: "Forward",
    age: 30,
    publisher: {
      name: "Mark Adams",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Victor Osimhen",
    imageUrl: osimhen,
    club: "Napoli",
    country: "Nigeria",
    position: "Forward",
    age: 24,
    publisher: {
      name: "Laura White",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Paulo Dybala",
    imageUrl: dybala,
    club: "AS Roma",
    country: "Argentina",
    position: "Forward",
    age: 29,
    publisher: {
      name: "Emma Brown",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Theo Hernandez",
    imageUrl: theo,
    club: "AC Milan",
    country: "France",
    position: "Defender",
    age: 26,
    publisher: {
      name: "James Black",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Raphael Leão",
    imageUrl: leao,
    club: "AC Milan",
    country: "Portugal",
    position: "Forward",
    age: 24,
    publisher: {
      name: "Sophia Miller",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Raphinha",
    imageUrl: raphinha,
    club: "FC Barcelona",
    country: "Brazil",
    position: "Forward",
    age: 27,
    publisher: {
      name: "Liam Carter",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Lamine Yamal",
    imageUrl: yamal,
    club: "FC Barcelona",
    country: "Spain",
    position: "Forward",
    age: 16,
    publisher: {
      name: "Isabella Garcia",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Fede Valverde",
    imageUrl: valverde,
    club: "Real Madrid",
    country: "Uruguay",
    position: "Midfielder",
    age: 25,
    publisher: {
      name: "Ethan Moore",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Antoine Griezmann",
    imageUrl: griezmann,
    club: "Atlético Madrid",
    country: "France",
    position: "Forward",
    age: 32,
    publisher: {
      name: "Amelia Walker",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Pedri",
    imageUrl: pedri,
    club: "FC Barcelona",
    country: "Spain",
    position: "Midfielder",
    age: 21,
    publisher: {
      name: "Mason Wilson",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Kevin De Bruyne",
    imageUrl: debruyne,
    club: "Manchester City",
    country: "Belgium",
    position: "Midfielder",
    age: 32,
    publisher: {
      name: "Olivia Harris",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Bukayo Saka",
    imageUrl: saka,
    club: "Arsenal",
    country: "England",
    position: "Forward",
    age: 22,
    publisher: {
      name: "Benjamin Lewis",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Jamal Musiala",
    imageUrl: musiala,
    club: "Bayern Munich",
    country: "Germany",
    position: "Midfielder",
    age: 20,
    publisher: {
      name: "Charlotte Hall",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Lewandowski",
    imageUrl: lewandowski,
    club: "FC Barcelona",
    country: "Poland",
    position: "Forward",
    age: 36,
    publisher: {
      name: "Charlotte Hall",
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
