import Cards from '@/components/Cards'
import connectDB from '@/libs/db';
import productItems from '@/utils/productItem'
import React from 'react'

async function getServerSideProps(category){

  try{

    connectDB();

    const res = await fetch(`/api/product/getproduct?category=${category}`, {
      cache: 'no-store',
    })

    const result = await res.json();

    const products = result.products

    return {
      products
    }
  } catch (err){
    console.log("error");
    return null
  }

}

const Page = async () => {

  const items = await getServerSideProps("tables")

  if(!items){
    return null;
  }

  const { products } = items

  return (
    <Cards title={"Tables"} items={products} />
  )
}

export default Page