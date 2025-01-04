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
  // const episodeId = searchParams.get("episodeId");

  // if (episodeId) {
  //   const episode = await prisma.episode.findUnique({
  //     where: {
  //       id: Number(episodeId),
  //     },
  //     select: {
  //       id: true,
  //       firstMessage: true,
  //     },
  //   });
  //   return Response.json(episode);
  // }

  // const episodeList = await prisma.episode.findMany({});

  // return Response.json(episodeList);
  return Response.json("ok");
}
