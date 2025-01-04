export { default } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const response = NextResponse.next();

  const allowedOrigins = ["https://www.illustrious-xl.com"];

  if (allowedOrigins.includes(req.headers.get("origin") || "")) {
    response.headers.set(
      "Access-Control-Allow-Origin",
      req.headers.get("origin") || ""
    );
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Authorization, Content-Type"
    );
  }

  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": req.headers.get("origin") || "",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
      },
    });
  }

  return response;
}

export const config = {
  matcher: "/api/:path*",
};
