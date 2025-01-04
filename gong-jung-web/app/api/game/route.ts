// import prisma from "@/lib/prisma";
import { verifyJwt } from "@/lib/jwt";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  // const accessToken = request.headers.get("authorization");

  // if (!accessToken || !verifyJwt(accessToken)) {
  //   return new Response(JSON.stringify({ error: "No Authorization" }), {
  //     status: 403,
  //   });
  // }

  // const decoded = verifyJwt(accessToken!);
  // const user = await prisma.user.findUnique({
  //   where: {
  //     id: decoded?.id,
  //   },
  //   select: {
  //     id: true,
  //     email: true,
  //     name: true,
  //   },
  // });
  // if (!user) {
  //   return new Response(JSON.stringify({ error: "User Not Found" }), {
  //     status: 403,
  //   });
  // }

  // const searchParams = request.nextUrl.searchParams;
  // const gameId = searchParams.get("gameId");

  // if (gameId) {
  //   const chat = await prisma.game.findUnique({
  //     where: {
  //       id: Number(gameId),
  //     },
  //     select: {
  //       id: true,
  //       messages: {
  //         skip: 2,
  //       },
  //     },
  //   });
  //   return Response.json(chat);
  // }

  // const gameList = await prisma.game.findMany({
  //   where: {
  //     userId: user.id,
  //   },
  // });

  return Response.json("gameList");
}

export interface requestChatBody {
  episodeId: number;
}
export async function POST(request: NextRequest) {
  try {
    // const accessToken = request.headers.get("authorization");

    // if (!accessToken || !verifyJwt(accessToken)) {
    //   return new Response(JSON.stringify({ error: "No Authorization" }), {
    //     status: 403,
    //   });
    // }

    // const decoded = verifyJwt(accessToken!);
    // const user = await prisma.user.findUnique({
    //   where: {
    //     id: decoded?.id,
    //   },
    //   select: {
    //     id: true,
    //     email: true,
    //     name: true,
    //   },
    // });
    // if (!user) {
    //   return new Response(JSON.stringify({ error: "User Not Found" }), {
    //     status: 403,
    //   });
    // }
    // const body: requestChatBody = await request.json();
    // const episode = await prisma.episode.findUnique({
    //   where: {
    //     id: body.episodeId,
    //   },
    // });
    // if (!episode) {
    //   return new Response(JSON.stringify({ error: "Character Not Found" }), {
    //     status: 403,
    //   });
    // }

    // const game = await prisma.game.create({
    //   data: {
    //     user: {
    //       connect: {
    //         id: user.id,
    //       },
    //     },
    //     episode: {
    //       connect: {
    //         id: body.episodeId,
    //       },
    //     },
    //   },
    // });

    // await prisma.message.create({
    //   data: {
    //     content: episode.config,
    //     game: {
    //       connect: {
    //         id: game.id,
    //       },
    //     },
    //     senderEpisode: {
    //       connect: {
    //         id: episode.id,
    //       },
    //     },
    //   },
    // });
    // await prisma.message.create({
    //   data: {
    //     content: "system: [Start a new chat]",
    //     game: {
    //       connect: {
    //         id: game.id,
    //       },
    //     },
    //     senderEpisode: {
    //       connect: {
    //         id: episode.id,
    //       },
    //     },
    //   },
    // });
    // await prisma.message.create({
    //   data: {
    //     content: episode.firstMessage,
    //     game: {
    //       connect: {
    //         id: game.id,
    //       },
    //     },
    //     senderEpisode: {
    //       connect: {
    //         id: episode.id,
    //       },
    //     },
    //   },
    // });

    // const updatedGame = await prisma.game.findUnique({
    //   where: {
    //     id: game.id,
    //   },
    //   select: {
    //     id: true,
    //     messages: true,
    //   },
    // });
    return Response.json("updatedGame");
  } catch (error) {
    console.log("create game ERROR", error);
    return new Response(
      JSON.stringify({
        error: "game Creation Failed",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
