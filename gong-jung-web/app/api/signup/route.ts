import { signUpUser } from "@/service/user-service";
import { SignUpRequestBody } from "@/types/auth/auth";

export async function POST(request: Request) {
  const body: SignUpRequestBody = await request.json();
  console.log("body", body);

  const signupRes = await signUpUser(body.userEmail, body.password);

  return new Response(JSON.stringify(signupRes), {
    status: signupRes.status,
  });
}
