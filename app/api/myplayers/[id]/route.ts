import Player from "@/models/player";
import { connectToDB } from "@/lib/database";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB();

    const players = await Player.find({ userId: params.id });

    if (!players || players.length === 0) {
      return new Response(JSON.stringify({ error: "No players found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify(players), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching players:", error);
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
