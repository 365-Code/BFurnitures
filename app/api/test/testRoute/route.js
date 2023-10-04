import connectDB from "@/libs/db";
import deliveryModel from "@/models/deliveryModel";
import userModel from "@/models/userModel";
import { NextResponse } from "next/server"




export async function GET(request){

    try{
        connectDB();

        const {searchParams} = new URL(request.url);
        const uId = searchParams.get("uId")

        const shipping = await deliveryModel.findOne({uId})

        return NextResponse.json({success: true, msg: "Posted", shipping}, {status: 400})

        


    }catch(error){
        console.log(error)
        return NextResponse.json({success: false, msg: "Error in Delivery"}, {status: 500});
    }



}

export async function PUT(request){

    try{
        connectDB();

        const {searchParams} = new URL(request.url);
        const uId = searchParams.get("uId")

        const data = await request.json();

        console.log(data);

        console.log(uId);

        let shipping = await deliveryModel.findOne({uId})


        if(!shipping){
            shipping = await deliveryModel.create({...data, uId: uId});
            console.log("in create");
        } else{
            shipping = await deliveryModel.findByIdAndUpdate(shipping._id, data);
            console.log("in update");
        }

        console.log(shipping)

        return NextResponse.json({success: true, msg: "Posted", shipping}, {status: 200})

        


    }catch(error){
        console.log(error)
        return NextResponse.json({success: false, msg: "Error in Delivery"}, {status: 500});
    }

}