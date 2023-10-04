import AdminSideBar from '@/components/AdminSideBar'
import React from 'react'

const page = () => {
  return (
    <div className='flex'>
        <AdminSideBar active={"orders"} />
        <div>
          Orders
        </div>
    </div>
  )
}

export default page