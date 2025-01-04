import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const response = await fetch(`http://backend:3000/image/text-table/${id}`, {
      method: "GET",
    });

    if (response.ok) {
      const data = await response.json();
      return new NextResponse(JSON.stringify(data), { status: 200 });
    } else {
      const errorText = await response.text();
      console.error("Error response from NestJS:", errorText);
      return new NextResponse("Failed to fetch text table", { status: 500 });
    }
  } catch (error) {
    console.error("Error in Next.js API route:", error);
    return new NextResponse("Failed to process request", { status: 500 });
  }
}
