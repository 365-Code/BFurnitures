import AdminSideBar from '@/components/AdminSideBar'
import React from 'react'

const page = () => {
  return (
    <div className='flex'>
        <AdminSideBar active={"users"} />
        <div>
          users
        </div>
    </div>
  )
}

export default page