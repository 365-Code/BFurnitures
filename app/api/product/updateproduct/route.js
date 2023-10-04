import connectDB from "@/libs/db";
import productModel from "@/models/productModel";
import { NextResponse } from "next/server";
import slugify from "slugify";

import {v2 as cloudinary} from 'cloudinary'
import {writeFile} from 'fs/promises'
import fs from 'fs'
import testModel from "@/models/testModel";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})



export async function PUT( request){

    try{
        connectDB();

        const {searchParams} = new URL(request.url);
        const id = searchParams.get("id");

        
        const formData = await request.formData()

        const title = formData.get("title");
        const price = formData.get("price");
        const width = formData.get("width");
        const description = formData.get("description");
        const height = formData.get("height");
        const tag = formData.get("tag");
        const stock = formData.get("stock");
        const category = formData.get("category");
        
        const slug = slugify(title.toLowerCase(), "-");

        // await productModel.create(newData);

        const file = formData.get('image')
        let image = ''
        if(file){
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes)
            const path = `./public/uploads/${file.name}`
            await writeFile(path, buffer)
            
            const result = await cloudinary.uploader.upload(path, {upload_preset: "bfurn_preset"}, (err, result)=>{
                if(err){
                    console.log(err)
                }
            })
            
            fs.unlink(path, (err)=>{
                if(err){
                    console.log(err)
                }
            })
            image = result.secure_url
        }
            


        let product = {title, slug, price, description, stock, width, height, tag, category }

        if(file){
            product.image = image
        }


        // const product = await productModel.findByIdAndUpdate(id, {$set: {...data} })
        product = await productModel.findById(id);
        
        // await testModel.findByIdAndUpdate(id, {$set: {...product} })
        // product = await testModel.findById(id);

        return NextResponse.json({success: true, msg: "Updated Successfully", product })

    } catch (error){

        console.log(error);
        return NextResponse.json({success: false, msg: "Error in Update Product"})
    }
}