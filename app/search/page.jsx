"use client"
import Loader from '@/components/Loader'
import ProductCard from '@/components/ProductCard'
import Skeleton from '@/components/Skeleton'
import { categories } from '@/utils/productItem'
import React, { useEffect, useRef, useState } from 'react'
import { BiSolidDownArrow, BiSearch } from 'react-icons/bi'
import { FaFilter } from 'react-icons/fa'
import { MdClose, MdFilter, MdFilter1 } from 'react-icons/md'
import { toast } from 'react-toastify'
// export async function getServerSideProps(page) {

//   const res = await fetch(`/api/product/getproduct/?page=${page}`, {
//     cache: 'no-store'
//   })

//   const {products} = await res.json()

//   return {
//     products
//   }

// }


const Page = () => {

  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({title: "Our Catalog", search: '', category: ''})
  const [loading, setLoading] = useState(true)
  const itm = Array(0,1,2,3,4,5,6,7,8,9)

  const loadProducts = async (page=1,search,category)=>{
      const res = await fetch(`/api/product/searchproduct/?page=${page}&search=${search}&category=${category}`, {
        cache: 'no-store'
    })
    const response = await res.json();
    return response;
  }

  useEffect(()=>{

    const getproduct = async (search, category)=>{
      setLoading(true);
      const result = await loadProducts(1,search, category);
      setLoading(false)
      setProducts(result.products);
      if(filter.search || filter.category)
        setFilter({...filter, title: `${result.fetched} ${result.msg}` })
    }

    const timeOut = setTimeout(()=>{
      getproduct(filter.search, filter.category);
    }, 1000)

    return ()=>(clearTimeout(timeOut))
  }, [filter.search, filter.category])

  // const loadMore = async (page)=>{
  //     setLoading(true);
  //     const items = await loadProducts(page, filter.search, filter.category);
  //     setProducts([...products, ...items]);
  //     setLoading(false)
  // }

  useEffect(()=>{

    const getproduct = async (page, search, category)=>{
      setLoading(true);
      const result = await loadProducts(page, search, category);

      setLoading(false)
      setProducts([...products, ...result.products]);
    }

    // const timeOut = setTimeout(()=>{
      getproduct(page, filter.search, filter.category);
    // }, 2000)

    // return ()=>(clearTimeout(timeOut))
  }, [page])


  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFilter({...filter, [name]: value})
  }




  return (

    <div className="flex">

      <div className="hidden sm:block basis-[30%] md:basis-[20%] p-5 space-y-4 bg-white/30 ">
        <h1 className="font-semibold text-xl text-slate-900">Categories</h1>
        <div className="flex flex-col h-screen gap-1">

          {
            categories?.map((category, index)=>{
              return (
                <label htmlFor={`category-${index}`} key={index}>
                  <div className={`${filter.category === category && "bg-gradient-to-r from-[#d1d1d1] to-[#b6b6b6]"} hover:bg-[#d1d1d1] transition-all rounded-l-lg flex items-center space-x-4 p-2 cursor-pointer`}>
                    <input checked={filter.category === category} type="radio" onChange={handleChange} value={category} name="category" id={`category-${index}`} className="h-4 w-4 accent-[#7079a8]" />
                    <span className="capitalize font-normal cursor-pointer">{category}</span>
                  </div>
                </label>
              )
            })
          }

          <div className='flex gap-2 mt-4'>
            {/* <button className='py-1 px-3 border text-[#ffffff] bg-blue-500 hover:bg-blue-600 flex gap-2 items-center'>Filter<FaFilter/> </button> */}
            <button onClick={()=>{setFilter( {title: "Our Catalog", search: '', category: ''})}} className='py-1 px-3 border text-[#ffffff] bg-red-500 hover:bg-red-600 flex gap-2 items-center'>Clear<MdClose/> </button>
          </div>

        </div>
      </div>


      <div className="basis-full sm:basis-[70%] md:basis-[80%] p-5 space-y-4">

        <div className='space-y-4'>

          <div className="rounded-r-full overflow-hidden flex items-center custom-outer-shadow outline-none px-4">
            <input
              autoComplete='true'
              name='search'
              onChange={handleChange}
              value={filter.search}
              className="p-2 border-b border-sky-500 bg-transparent outline-none font-semibold"
              type="search" />
            <span className="p-2">
              <BiSearch size={"1.3em"}/>
            </span>
          </div>

          <h1 className="text-center text-xl">{filter.title} </h1>
          <hr />
        </div>


        <div className="w-full grid gap-4 max-[570px]:grid-cols-1 max-[639px]:grid-cols-2 md:grid-cols-2 min-[1000px]:grid-cols-3 justify-items-center">
          {
            products?.map((item, index) => {
              return (
                <ProductCard key={index} item={item} />
              )
            })
          }
          {
            loading &&
            itm.map((item, index)=>(<Skeleton key={index}/>))
          }
        </div>

          { loading
          ? <Loader/>
          : <button 
            onClick={()=>{setPage(page+1)}}
            className='p-2 bg-slate-400 border rounded-sm text-slate-200 mx-auto flex gap-2 hover:bg-slate-600  items-center'> 
            Load More <BiSolidDownArrow/>
            </button>
          }
      </div>

    </div>
  )
}

export default Page