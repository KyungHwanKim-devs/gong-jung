import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const response = await fetch("http://backend:3000/image", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      return new Response("Image saved successfully", { status: 200 });
    } else {
      const errorText = await response.text();
      console.error("Error response from NestJS:", errorText);
      return new Response("Failed to save image", { status: 500 });
    }
  } catch (error) {
    console.error("Error in Next.js API route:", error);
    return new Response("Failed to process request", { status: 500 });
  }
}
