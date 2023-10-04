import connectDB from "@/libs/db";
import productModel from "@/models/productModel";
import testModel from "@/models/testModel";
import { NextResponse } from "next/server";




export async function DELETE( request){

    try{
        connectDB();
        
        const {searchParams} = new URL(request.url);
        const pId = searchParams.get("pId");

        const product = await productModel.findByIdAndDelete(pId)
        // const product = await testModel.findByIdAndDelete(pId)

        return NextResponse.json({success: true, msg: "Deleted Successfully"});

    } catch (error){

        console.log(error);
        return NextResponse.json({success: false, msg: "Error in Update Product"})
    }
}