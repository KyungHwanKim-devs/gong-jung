import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  const { filename } = params;

  const encodedFilename = encodeURIComponent(filename);

  console.log("encodedFilename", encodedFilename);

  try {
    const response = await fetch(
      `http://backend:3000/image/file/${encodedFilename}`,
      {
        method: "GET",
      }
    );

    if (response.ok) {
      const blob = await response.blob();
      return new NextResponse(blob, {
        headers: {
          "Content-Type":
            response.headers.get("Content-Type") || "application/octet-stream",
        },
      });
    } else {
      const errorText = await response.text();
      console.error("Error response from NestJS:", errorText);
      return new NextResponse("Failed to fetch image", { status: 500 });
    }
  } catch (error) {
    console.error("Error in Next.js API route:", error);
    return new NextResponse("Failed to process request", { status: 500 });
  }
}
