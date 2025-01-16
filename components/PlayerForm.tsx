"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PlayerFormProps {
  initialData?: {
    userId: string;
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
  };
}

export default function PlayerForm({ initialData }: PlayerFormProps) {
  const { user } = useKindeBrowserClient();
  const router = useRouter();
  const pathname = usePathname();
  const [isPlayerCreator, setIsPlayerCreator] = useState(false);
  const [formData, setFormData] = useState(
    initialData || {
      userId: user?.id,
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
    }
  );

  useEffect(() => {
    // Update UserId if it's available
    if (user?.id) {
      setFormData((prev) => ({ ...prev, userId: user.id }));

      const playerId = pathname.split("/").pop();

      if (playerId) {
        const fetchPlayerData = async () => {
          try {
            const response = await fetch(`/api/player/${playerId}`);
            if (!response.ok) {
              console.log("Unable to fetch player data");
            }
            const data = await response.json();

            // Vérify if the creator exist
            if (data.userId === user?.id) {
              setFormData(data); // Pre-fill fields if creator
              setIsPlayerCreator(true);
            }
          } catch (err) {
            console.error(err);
          }
        };

        fetchPlayerData();
      }
    }
  }, [user?.id, pathname]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const playerId = pathname.split("/").pop();
      const endpoint = isPlayerCreator
        ? `/api/player/${playerId}` // Modification if the creator exist
        : "/api/player"; // Creation if not

      const method = isPlayerCreator ? "PATCH" : "POST";

      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.log("Error to send data.");
      }

      const data = await response.json();
      console.log("Form submitted successfully:", data);

      // Redirection after success
      router.push(`/player/${data._id}`); // use ID of API
    } catch (error) {
      console.log("Error to send the form :", error);
      alert("Error, please to resend.");
    }
  };

  const handleDelete = async () => {
    const playerId = pathname.split("/").pop();
    if (!playerId) return alert("Player ID is missing.");
    if (!isPlayerCreator)
      return alert("You are not authorized to delete this player.");

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this player?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/player/${playerId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        console.log("Failed to delete player.");
      }

      alert("Player deleted successfully.");
      router.push("/"); // Redirection home page
    } catch (error) {
      console.log("Error deleting player:", error);
      alert("An error occurred while deleting the player.");
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          {isPlayerCreator ? "Edit Player" : "Add New Player"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="club">Club</Label>
              <Input
                id="club"
                name="club"
                value={formData.club}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position">Position</Label>
              <Select
                name="position"
                value={formData.position}
                onValueChange={handleSelectChange("position")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Forward">Forward</SelectItem>
                  <SelectItem value="Midfielder">Midfielder</SelectItem>
                  <SelectItem value="Defender">Defender</SelectItem>
                  <SelectItem value="Goalkeeper">Goalkeeper</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                required
                min="15"
                max="50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="goals">Career Goals</Label>
              <Input
                id="goals"
                name="goals"
                type="number"
                value={formData.goals}
                onChange={handleChange}
                required
                min="0"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="history">History</Label>
            <Textarea
              id="history"
              name="history"
              value={formData.history}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="career">Career Highlights</Label>
            <Textarea
              id="career"
              name="career"
              value={formData.career}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-4">
            <Button type="submit" className="w-full">
              {isPlayerCreator ? "Update Player" : "Add Player"}
            </Button>
            {isPlayerCreator && (
              <Button
                type="button"
                onClick={handleDelete}
                className="w-full bg-red-600 hover:bg-red-700 text-white"
              >
                Delete Player
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
