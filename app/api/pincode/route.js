import { NextRequest, NextResponse } from "next/server"

export async function GET( request ) {

  return NextResponse.json([123123,123123,123123])
    // Handle any other HTTP method
  }


  export async function POST( req, res ) {

    console.log(NextRequest)
    console.log("Working")
  
    return NextResponse.json([123123,123123,123123])
      // Handle any other HTTP method
    }