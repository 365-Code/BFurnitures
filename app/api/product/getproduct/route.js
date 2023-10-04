import connectDB from "@/libs/db";
import productModel from "@/models/productModel";
import testModel from "@/models/testModel";
import { NextResponse } from "next/server"

export async function GET( request ){

    try{
        
        connectDB();

        const {searchParams} = new URL(request.url)

        const category = searchParams.get('category')
        const page = searchParams.get('page')


        let products = []
        const lmt = 19;
        const pages = ( (page-1) >=0 ? (page-1)*lmt : 0 )

        if(category){
            console.log("%cin category", "color: magenta")
            products = await productModel
                            .find({category})
                            .skip(pages)
                            .limit(lmt)
                            .sort({updatedAt: -1});
        } else{
            if(page){
                products = await productModel
                                .find()
                                .skip( pages )
                                .limit(lmt)
                                .sort({updatedAt: -1});
            } else{
                products = await productModel
                                .find()
                                .sort({updatedAt: -1});
            }
        }

        const fetched = products.length;

        console.log(`%csuccess: true, ${fetched}, ${products}, msg: "Products Fetched Successfully"`, "color: magenta");

        return NextResponse.json( {success: true, fetched, products, msg: "Products Fetched Successfully"});
    } catch (err){
        console.log(err)
        return NextResponse.json({success: false, msg: "Error Fetching Products"})
    }

}