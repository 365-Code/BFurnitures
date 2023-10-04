import connectDB from "@/libs/db";
import productModel from "@/models/productModel";
import testModel from "@/models/testModel";
import { NextResponse } from "next/server"

export async function GET( request ){

    try{
        
        connectDB();

        const products = await productModel
                        .find({})
                        .sort({updatedAt: -1});

        const fetched = products.length;

        return NextResponse.json( {success: true, fetched, products, msg: "Products Fetched Successfully"});
    } catch (err){
        console.log(err)
        return NextResponse.json({success: false, msg: "Error Fetching Products"})
    }

}