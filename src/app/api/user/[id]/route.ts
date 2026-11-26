// app/api/users/route.js
import dbConnect from "@/lib/database";
import User, { IUser } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  await dbConnect();
  const { id } = await params;

  if (!id) return NextResponse.json({});

  const user: IUser | null = await User.where({
    _id: id,
  }).findOne({});

  if (!user) return NextResponse.json({});

  return NextResponse.json(user);
}
