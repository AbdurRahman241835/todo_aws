import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Topic from "../../../modals/topic";

export async function GET() {
  try {
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({ data: topics }, { status: 200 });
  } catch (error) {
    console.log("error at get task list", error);
    return NextResponse.json({ error }, { status: 500 });

  }
}
