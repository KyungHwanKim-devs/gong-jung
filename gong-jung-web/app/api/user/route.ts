import { verifyJwt } from "@/lib/jwt";
// import prisma from "@/lib/prisma";
import { deleteUserS } from "@/service/user-service";
import * as bcrypt from "bcryptjs";

interface POSTRequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  // const body: POSTRequestBody = await request.json();

  // const user = await prisma.user.create({
  //   data: {
  //     name: body.name,
  //     email: body.email,
  //     password: await bcrypt.hash(body.password, 12),
  //   },
  // });

  // const { password, ...result } = user;
  return new Response(JSON.stringify("result"));
}

interface DELETERequestBody {
  reason?: string;
}

export async function DELETE(request: Request) {
  // const accessToken = request.headers.get("authorization");
  // const decoded = verifyJwt(accessToken!);

  // if (!accessToken || !verifyJwt(accessToken)) {
  //   return new Response(JSON.stringify({ error: "No Authorization" }), {
  //     status: 403,
  //   });
  // }

  // const userId = decoded?.id;
  // const userEmail = decoded?.email;
  // const body: DELETERequestBody = await request.json();

  // await deleteUserS(userId, userEmail, body.reason ?? null);

  return new Response();
}
