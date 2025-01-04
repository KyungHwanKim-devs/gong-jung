import { verifyJwt } from "@/lib/jwt";
import { createInquiryS } from "@/service/common-service";

export async function POST(request: Request) {
  const accessToken = request.headers.get("authorization");
  const decoded = verifyJwt(accessToken!);

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: "No Authorization" }), {
      status: 403,
    });
  }

  const userId = decoded?.id;
  const email = decoded?.email;

  const body: { inquiry: string } = await request.json();

  const createInquiry = await createInquiryS({
    userId,
    email,
    inquiry: body.inquiry,
  });

  return new Response(JSON.stringify(createInquiry), {
    status: 201,
  });
}
