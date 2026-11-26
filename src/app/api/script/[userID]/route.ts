import dbConnect from "@/lib/database";
import Script, { IScript } from "@/models/Script";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  await dbConnect();
  const { id } = await params;

  if (!id) return NextResponse.json({});

  const ownedScripts: IScript[] | null = await Script.find({});

  if (!ownedScripts) return NextResponse.json({});

  return NextResponse.json(ownedScripts);
}
