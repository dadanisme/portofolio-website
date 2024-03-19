import { encourageMe } from "@/services";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const ua = req.headers.get("user-agent");
  await encourageMe(ua);

  return NextResponse.json({ message: "Encouragement sent" });
}
