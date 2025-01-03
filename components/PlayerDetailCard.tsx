import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, MapPin, User, Trophy } from "lucide-react";

interface PlayerDetailProps {
  name: string;
  imageUrl: StaticImageData | string;
  club: string;
  country: string;
  position: string;
  age: number;
  publisher: {
    name: string;
    avatarUrl: string;
  };
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
  publisher,
  description,
  history,
  career,
  goals,
}: PlayerDetailProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            priority
          />
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-muted-foreground" />
            <span>{position}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Age:</span>
            <span>{age} years</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-muted-foreground" />
            <span>{goals} career goals</span>
          </div>
        </div>

        <div className="mb-6">
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

        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold mb-4">Published by</h2>
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={publisher.avatarUrl} alt={publisher.name} />
              <AvatarFallback>{publisher.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{publisher.name}</p>
              <p className="text-sm text-muted-foreground">Football Analyst</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
