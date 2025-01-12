import { Schema, model, models, Model } from "mongoose";

// Interface for player
interface PlayerProps {
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
}

// Définition of schema Mongoose
const PlayerSchema = new Schema<PlayerProps>(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    imageUrl: { type: String, required: false },
    club: { type: String, required: true },
    country: { type: String, required: true },
    position: { type: String, required: true },
    age: { type: Number, required: true, min: 0 },
    description: { type: String, required: false },
    history: { type: String, required: false },
    career: { type: String, required: false },
    goals: { type: Number, required: true, min: 0 },
  },
  {
    timestamps: true, // Add automatically createdAt and updatedAt
  }
);

// Création du modèle
const Player: Model<PlayerProps> =
  models.Player || model("Player", PlayerSchema);

export default Player;
