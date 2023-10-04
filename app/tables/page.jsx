import Cards from '@/components/Cards'
import connectDB from '@/libs/db';
import productItems from '@/utils/productItem'
import React from 'react'

async function getServerSideProps(category){

  try{

    connectDB();

    const res = await fetch(`http://localhost:3000/api/product/getproduct/?category=${category}`, {
      cache: 'no-store',
    })

    const result = await res.json();

    const products = result.products

    return {
      products
    }
  } catch (err){
    console.log("error");
  }

}

const Page = async () => {

  const {products} = await getServerSideProps("tables")


  return (
    <Cards title={"Tables"} items={products} />
  )
}

export default Page