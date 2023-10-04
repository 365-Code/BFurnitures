import AdminSideBar from '@/components/AdminSideBar'
import React from 'react'

const Page = () => {
  return (
    <div className='flex'>
        <AdminSideBar active={"orders"} />
        <div>
          Orders
        </div>
    </div>
  )
}

export default Page