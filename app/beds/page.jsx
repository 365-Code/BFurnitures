import React from 'react'
import Cards from '../../components/Cards'
import productItems from '../../utils/productItem'
import connectDB from '@/libs/db';


async function getServerSideProps(category){

  try{

    connectDB();

    const res = await fetch(`http://localhost:3000/api/product/getproduct/?category=${category}`, {
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
  }

}

const Page = async () => {

  const {products} = await getServerSideProps("beds")

  return (
    <div>
        <Cards title={"Beds"} items={products} />
    </div>
  )
}

export default Page