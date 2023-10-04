"use client"
import { useAuth } from '@/context/AuthState'
import Link from 'next/link'
import React from 'react'
import { FaBox, FaBoxes, FaUsers } from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md'

const AdminSideBar = ({active}) => {

    const {auth} = useAuth();


  return (
    <div className='h-screen sm:w-[35%] md:w-[25%] bg-[#E7E7E7] p-6 space-y-4'>

        <div className='flex flex-col items-center gap-3'>

        <div className='w-[120px] h-[120px] overflow-hidden rounded-full bg-gradient-to-tr from-slate-200 via-sky-600 to-rose-500'>
            <img 
            className='object-cover object-center h-full w-full'
            // src="https://img.freepik.com/free-photo/view-3d-confident-businessman_23-2150709932.jpg" 
            src='https://img.freepik.com/free-photo/medium-shot-boy-relaxing-beach_23-2150753086.jpg'
            alt="" />
            
        </div>

        <div className='text-center'>
        <h2 className='text-lg font-semibold'>{auth.user.name}</h2>
        <p className='text-sm text-slate-400 font-semibold'>Admin</p>
        </div>
        </div>


        <div className='space-y-4'>
            <Link href={'/admin/dashboard'}
            className={` ${active == "dashboard" && "bg-gradient-to-r from-sky-600 to-cyan-400 text-slate-50"} hover:bg-cyan-500 hover:text-slate-50 rounded-xl flex items-center gap-4 px-4 py-3 transition-all`}>
                <MdSpaceDashboard size={"1.3em"}/>
                <span>Dashboard</span>
            </Link>

            <Link href={'/admin/users'}
            className={` ${active == "users" && "bg-gradient-to-r from-sky-600 to-cyan-400 text-slate-50"} hover:bg-cyan-500 hover:text-slate-50 rounded-xl flex items-center gap-4 px-4 py-3 transition-all`}>
                <FaUsers className='' size={"1.3em"}/>
                <span>Users</span>
            </Link>

            <Link href={'/admin/orders'}
            className={` ${active == "orders" && "bg-gradient-to-r from-sky-600 to-cyan-400 text-slate-50"} hover:bg-cyan-500 hover:text-slate-50 rounded-xl flex items-center gap-4 px-4 py-3 transition-all`}>
                <FaBoxes className='' size={"1.3em"}/>
                <span>Orders</span>
            </Link>

            <Link href={'/admin/products'}
            className={` ${active == "products" && "bg-gradient-to-r from-sky-600 to-cyan-400 text-slate-50"} hover:bg-cyan-500 hover:text-slate-50 rounded-xl flex items-center gap-4 px-4 py-3 transition-all`}>
                <FaBox className='' size={"1.3em"}/>
                <span>Products</span>
            </Link>

        </div>


    </div>
  )
}

export default AdminSideBar