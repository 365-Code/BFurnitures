import React from 'react'
import Cards from '../../components/Cards'
import connectDB from '@/libs/db';


async function getServerSideProps(category){

  try{

    connectDB();

    const res = await fetch(`/api/product/getproduct/?category=${category}`, {
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

  const items = await getServerSideProps("decors")

  if(!items){
    return null;
  }

  const { products } = items

  return (
    <div>
        <Cards title={"Decoratives"} items={products} />
    </div>
  )
}

export default Page