import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Topic from "../../../modals/topic";

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
  } catch (error) {
    console.log("erorr,,,", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
