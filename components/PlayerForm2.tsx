"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
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
    goals: string;
  };
}
import { useEdgeStore } from "@/lib/edgestore";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
export default function PlayerForm({ initialData }: PlayerFormProps) {
  const { user } = useKindeBrowserClient();
  console.log(user);
  const [file, setFile] = useState<File | null>(null);
  const { edgestore } = useEdgeStore();
  const router = useRouter();
  const [formData, setFormData] = useState(
    initialData || {
      userId: "",
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
    if (user?.id) {
      setFormData((prev) => ({ ...prev, userId: user.id }));
      console.log(formData);
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const selectedFile = (e.target as HTMLInputElement).files?.[0];
      if (selectedFile) {
        setFile(selectedFile);
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let imageUrl = formData.imageUrl;

      if (file) {
        const uploadResponse = await edgestore.publicFiles.upload({
          file,
          onProgressChange: (progress) => {
            // you can use this to show a progress bar
            console.log(progress);
          },
        });
        imageUrl = uploadResponse.url;

        setFormData((prev) => ({ ...prev, imageUrl }));
      }
      const response = await fetch("/api/player", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, imageUrl }),
      });
      if (!response.ok) {
        console.log("Error to send Data");
        console.log(formData);
        return;
      }

      const data = await response.json();
      console.log("Form submitted successfully", data);
      router.push(`/player/detail/${data._id}`);
    } catch (error) {
      console.log("Error to send the form", error);
      alert("Error, please connect yourself");
    }
  };
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Add New Player</CardTitle>
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
              <Label htmlFor="imageUrl">ImageUrl</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
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
                  <SelectItem value="GoalKeeper">GoalKeeper</SelectItem>
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
          <div className="space-4">
            <Button type="submit" className="w-full">
              {" "}
              Add Player
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
