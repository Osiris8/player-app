import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Briefcase, MapPin, User, Trophy, Calendar } from "lucide-react";

interface PlayerDetailProps {
  name: string;
  imageUrl: string;
  club: string;
  country: string;
  position: string;
  age: number;
  description: string;
  history: string;
  career: string;
  goals: number;
}

export function PlayerDetailCard({
  name,
  imageUrl,
  club,
  country,
  position,
  age,

  description,
  history,
  career,
  goals,
}: PlayerDetailProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-64 md:h-96 w-full">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={name}
              layout="fill"
              objectFit="cover"
              priority
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{name}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Briefcase className="h-4 w-4" />
              <span>{club}</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{country}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <User className="h-5 w-5 text-muted-foreground" />
          <span>{position}</span>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <span>{age} years</span>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Trophy className="h-5 w-5 text-muted-foreground" />
          <span>{goals} career goals</span>
        </div>

        <div className="mb-6 mt-4">
          <h2 className="text-xl font-semibold mb-2">About {name}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">History</h2>
          <p className="text-muted-foreground">{history}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Career Highlights</h2>
          <p className="text-muted-foreground">{career}</p>
        </div>
      </CardContent>
    </Card>
  );
}
