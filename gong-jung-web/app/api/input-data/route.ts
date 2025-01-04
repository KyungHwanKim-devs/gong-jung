// import prisma from "@/lib/prisma";
import { verifyJwt } from "@/lib/jwt";
import fs from "fs";
import { NextRequest } from "next/server";
import path from "path";

type RequestData = {
  formData: Record<string, string>;
  imageBase64: string; // Base64로 전달된 이미지 데이터
  imageName: string; // 이미지 이름
};

export async function POST(request: NextRequest) {
  // const accessToken = request.headers.get("authorization");
  // console.log("accessToken", accessToken);

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
  //     name: true,
  //   },
  // });
  // if (!user) {
  //   return new Response(JSON.stringify({ error: "User Not Found" }), {
  //     status: 403,
  //   });
  // }
  try {
    const body: RequestData = await request.json(); // 요청 데이터를 파싱

    const { imageBase64, formData } = body;

    // 데이터베이스 저장
    // const result = await prisma.textTable.create({
    //   data: formData, // formData를 Prisma 스키마에 맞게 전달
    // });

    // if (!imageBase64) {
    //   throw new Error("imageData is missing");
    // }

    // const imageBuffer = Buffer.from(imageBase64, "base64");
    // const uploadRoot = path.join(process.cwd(), "public/uploads");
    // const imagePath = path.join(uploadRoot, `${result.id}-image.jpeg`);

    // await prisma.textTable.update({
    //   where: {
    //     id: result.id,
    //   },
    //   data: {
    //     imagePath: `/uploads/${result.id}-image.jpeg`,
    //   },
    // });

    // 폴더가 없으면 생성
    // if (!fs.existsSync(imageDir)) {
    //   fs.mkdirSync(imageDir, { recursive: true }); // 하위 폴더까지 생성
    // }

    // fs.writeFileSync(imagePath, new Uint8Array(imageBuffer));
    return new Response("Image saved successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to process request", { status: 500 });
  }
}

export async function GET(request: Request) {
  // const list = await prisma.textTable.findMany();

  // return Response.json(list);
  return Response.json("ok");
}
