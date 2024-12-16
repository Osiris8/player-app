import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, MapPin, User } from "lucide-react";

interface PlayerCardProps {
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
}

export default function PlayerCard({
  name,
  imageUrl,
  club,
  country,
  position,
  age,
  publisher,
}: PlayerCardProps) {
  return (
    <div className="transition-all hover:shadow-lg">
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={name}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 hover:scale-105"
              />
            )}

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h2 className="text-xl font-bold text-white">{name}</h2>
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid gap-2 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Briefcase className="h-4 w-4" />
              <span>{club}</span>
            </div>
            <Badge variant="secondary" className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{position}</span>
            </Badge>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{country}</span>
          </div>
          <div className="text-sm font-medium text-muted-foreground">
            {age} years old
          </div>
        </CardContent>
        <CardFooter className="border-t bg-muted/50 p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={publisher.avatarUrl} alt={publisher.name} />
              <AvatarFallback>{publisher.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-bold">Published by</p>
              <p className="text-xs text-muted-foreground">{publisher.name}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
