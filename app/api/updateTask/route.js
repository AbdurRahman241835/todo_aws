import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Topic from "../../../modals/topic";


export async function PUT(request) {
  try {
    const { id, completed } = await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate( id, { $set: { completed } });
    return NextResponse.json({ message: "Topic updated" }, { status: 201 });
    
  } catch (error) {
    console.log("erorr,,,", error);
    return NextResponse.json({error},{status:500})
    
  }
}