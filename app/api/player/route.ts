import { connectToDB } from "@/lib/database";
import Player from "@/models/player";
import { NextResponse } from "next/server";

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
    return new Response(JSON.stringify(newPlayer), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Error to create a player :", error);
    return new Response("Error to create a player", { status: 500 });
  }
};

export const GET = async () => {
  try {
    // Connect to DB
    await connectToDB();

    // Get the players
    const players = await Player.find({});

    return NextResponse.json(players, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Failed to fetch players:", error);
    return NextResponse.json(
      { error: "Failed to fetch players" },
      {
        status: 500,
      }
    );
  }
};
export const OPTIONS = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
};
