import { verifyJwt } from "@/lib/jwt";
// import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const accessToken = request.headers.get("authorization");
  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: "No Authorization" }), {
      status: 403,
    });
  }

  const decoded = verifyJwt(accessToken!);
  // const data = await prisma.user.findUnique({
  where: {
    //     id: decoded?.id,
    //   },
    // });

    // return Response.json({ data });
    return Response.json("ok");
  }
}
