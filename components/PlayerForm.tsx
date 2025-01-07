"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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

export function PlayerForm({ initialData }: PlayerFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState(
    initialData || {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    // Redirect to the player's detail page (you'd use the actual ID in a real app)
    router.push("/players/1");
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          {initialData ? "Edit Player" : "Add New Player"}
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
          <Button type="submit" className="w-full">
            {initialData ? "Update Player" : "Add Player"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
