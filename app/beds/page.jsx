import React from 'react'
import Cards from '../../components/Cards'
import productItems from '../../utils/productItem'
import connectDB from '@/libs/db';


async function getServerSideProps(category){

  try{

    connectDB();

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/product/getproduct?category=${category}`, {
      cache: 'no-store',
    })

    const result = await res.json();
    
    console.log(result)
    const products = result.products

    return {
      products
    }

  } catch (err){
    console.log("err");
    return null
  }

}

const Page = async () => {

  const items = await getServerSideProps("beds")

  if(!items){
    return null;
  }

  const { products } = items

  return (
    <div>
        <Cards title={"Beds"} items={products} />
    </div>
  )
}

export default Page