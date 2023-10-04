import ProductPageCard from '@/components/ProductPageCard'
import React from 'react'

const page = ({params}) => {
    const {slug} = params
  return (
    <ProductPageCard slug={slug} />
  )
}

export default page