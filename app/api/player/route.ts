import { connectToDB } from "@/lib/database";
import Player from "@/models/player";

export const POST = async (request: Request) => {
  try {
    const {
      userId,
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
    } = await request.json();

    await connectToDB();

    const newPlayer = new Player({
      userId,
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
    });

    // Save in database
    await newPlayer.save();

    //return response
    return new Response(JSON.stringify(newPlayer), { status: 201 });
  } catch (error) {
    console.error("Erreur lors de la création d'un joueur :", error);
    return new Response("Échec de la création du joueur", { status: 500 });
  }
};
