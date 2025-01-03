import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PlayerDetailCard } from "@/components/PlayerDetailCard";
import messi from "@/public/images/messi.webp";
const playerData = {
  id: "1",
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
  description:
    "Lionel Messi is widely regarded as one of the greatest football players of all time. Known for his exceptional dribbling skills, vision, and goal-scoring ability, Messi has consistently performed at the highest level throughout his career.",
  history:
    "Born in Rosario, Argentina, Messi joined Barcelona's youth academy at the age of 13. He made his first-team debut at 17 and quickly established himself as one of the world's best players.",
  career:
    "Messi spent the majority of his career at Barcelona, where he won numerous titles including 10 La Liga titles and 4 UEFA Champions League trophies. He later moved to Paris Saint-Germain before joining Inter Miami CF in Major League Soccer.",
  goals: 672,
};
export default function Home() {
  return (
    <div data-theme="elegant">
      <Navbar />
      <PlayerDetailCard {...playerData} />
      <Footer />
    </div>
  );
}
