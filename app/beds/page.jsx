import React from 'react'
import Cards from '../../components/Cards'
import connectDB from '@/libs/db';
import productModel from '@/models/productModel';


async function getServerSideProps(){

  try{
    connectDB()

    const products = await productModel.find({category: "bed"})

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
    <div>
        <Cards title={"Beds"} items={products} />
    </div>
  )
}

export default Page