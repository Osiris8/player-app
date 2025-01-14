import Player from "@/models/player";
import { connectToDB } from "@/lib/database";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB();
    const id = params.id;

    const player = await Player.findOne({ _id: id });

    if (!player) {
      return new Response(JSON.stringify({ error: "Player not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify(player), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching player:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch player data" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB();

    const {
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

    // Chercher le joueur existant ou renvoyer une erreur
    const player = await Player.findById(params.id);

    if (!player) {
      return new Response(JSON.stringify({ error: "Player not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    // Update the data player field
    player.name = name || player.name;
    player.imageUrl = imageUrl || player.imageUrl;
    player.club = club || player.club;
    player.country = country || player.country;
    player.position = position || player.position;
    player.age = age !== undefined ? age : player.age;
    player.description = description || player.description;
    player.history = history || player.history;
    player.career = career || player.career;
    player.goals = goals !== undefined ? goals : player.goals;

    // Save the modifications
    await player.save();

    return new Response(JSON.stringify(player), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Failed to update player:", error);

    return new Response(JSON.stringify({ error: "Failed to update player" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
