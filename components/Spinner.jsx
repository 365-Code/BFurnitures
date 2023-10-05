"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Spinner = () => {

    const [count, setCount] = useState(3);
    const router = useRouter()

    useEffect(()=>{

        const timeOut = setTimeout(()=>{
            if(!count){
                router.push('/')
            } else{
                setCount(count-1);
            }
        }, 1000)

        return ()=>(clearTimeout(timeOut))

    }, [count])
    

  return (
    <div className='flex flex-col gap-2 items-center py-6 text-3xl font-semibold'>
        <h3>Error 404. Page Not Found</h3>
        <div className='w-[40px] h-[40px] p-4 rounded-full border-black animate-spin border-2 border-t-0 border-l-0'  />
        <h2>Redirecting...</h2>
    </div>
  )
}

export default Spinner