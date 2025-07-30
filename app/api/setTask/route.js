import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Topic from "../../../modals/topic";


export async function POST(request) {
  try {
    const { title } = await request.json();    
    await connectMongoDB();
    await Topic.create({ title, completed : false });
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
    
  } catch (error) {
    console.log("erorr,,,", error);
    return NextResponse.json({error},{status:500})
    
  }
}