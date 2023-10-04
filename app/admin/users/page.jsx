import AdminSideBar from '@/components/AdminSideBar'
import React from 'react'

const Page = () => {
  return (
    <div className='flex'>
        <AdminSideBar active={"users"} />
        <div>
          users
        </div>
    </div>
  )
}

export default Page