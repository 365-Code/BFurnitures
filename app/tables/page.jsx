import Cards from '@/components/Cards'
import connectDB from '@/libs/db';
import React from 'react'

async function getServerSideProps(){
  try{
    connectDB()

    const products = await productModel.find({category: "tables"})

    return {
      products
    }

  } catch (err){
    console.log(err);
    return null
  }

}

const Page = async () => {

  const items = await getServerSideProps()

  if(!items){
    return null;
  }

  const { products } = JSON.parse(JSON.stringify(items))


  return (
    <Cards title={"Tables"} items={products} />
  )
}

export default Page