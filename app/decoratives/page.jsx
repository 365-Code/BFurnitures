import React from 'react'
import Cards from '../../components/Cards'
import connectDB from '@/libs/db';


async function getServerSideProps(category){

  try{
    connectDB()

    const products = await productModel.find({category: "decors"})

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
        <Cards title={"Decoratives"} items={products} />
    </div>
  )
}

export default Page