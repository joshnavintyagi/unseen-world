import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const journey = await request.json();

    console.log("====================================");
    console.log("NEW UNSEEN WORLD JOURNEY ENQUIRY");
    console.log("====================================");
    console.log(journey);
    console.log("====================================");

    return NextResponse.json(
      {
        success: true,
        message: "Journey enquiry received successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Journey enquiry error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to process journey enquiry.",
      },
      {
        status: 500,
      }
    );
  }
}