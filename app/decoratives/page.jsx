import React from 'react'
import Cards from '../../components/Cards'
import connectDB from '@/libs/db';


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

  const {products} = await getServerSideProps("decors")

  return (
    <div>
        <Cards title={"Decoratives"} items={products} />
    </div>
  )
}

export default Page