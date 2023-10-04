"use client"

import React, { useState } from 'react'
import { MdClose, MdPhotoCamera } from 'react-icons/md'

const EditProfile = ({userDet, setUserDet, setVisible}) => {

  const [edit, setEdit] = useState("shipping")
  const [details, setDetails] = useState(userDet)

  const handleChange = (e)=>{
    const {name, value} = e.target
    setDetails({...details, [name]: value})
  }

  const handleUpdate = async ()=>{
    console.log(details);

    const result = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/delivery?uId=${details.uId}`, {
      method: "PUT",
      body: JSON.stringify(details)
    })

    const res = await result.json();

    if(res.success){
      setUserDet(details)
      setVisible("editModeOff")
    }
  }

  console.log(details)


  return (
    <div className="min-h-screen absolute top-0 left-0 w-screen p-6 bg-black/10">
      <div className="w-[600px] relative min-h-[500px] bg-slate-50 rounded-lg mx-auto overflow-hidden flex flex-col sm:flex-row">

        <button 
        className='border absolute right-3 top-3 text-slate-800 p-1 rounded-full hover:bg-slate-200'
        onClick={()=>(setVisible("editModeOff"))}><MdClose size={"1.2em"}/></button>

        <div className="basis-[35%] bg-slate-50 h-full">
          <div className="bg-slate-100 w-full h-[200px] p-6 flex justify-center relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                className="h-full w-full object-cover object-center"
                // src="https://img.freepik.com/premium-photo/photo-businesswoman_889227-37077.jpg?w=740"
                src={details?.avatar}
                alt="" />
              <div className="text-slate-200 p-4 absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full bg-black/10">
                <MdPhotoCamera size={"1.8em"}/>
                <p className='text-center text-sm'>Click to change photo</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row sm:flex-col">
            <button onClick={()=>{setEdit("account")}} className={`w-full ${edit == "account" ? "border-l-4" : "border-l-0"} transition-all hover:bg-slate-100 border-blue-600 text-left py-3 px-4 font-semibold text-slate-700`}><span></span>Account Details</button>
            <button onClick={()=>{setEdit("shipping")}} className={`w-full ${edit == "shipping" ? "border-l-4" : "border-l-0"}  transition-all hover:bg-slate-100 border-blue-600 text-left py-3 px-4 font-semibold text-slate-700`}><span></span>Shipping Address</button>
          </div>

        </div>
        
        {
            edit == "account"
            ?
            <div className="basis-[65%] p-6 flex flex-col justify-between bg-slate-50">
            <h1 className="text-xl font-semibold mb-4 sm:mb-2">Account Details</h1>
              <div className="space-y-1">
                <p className="text-sm text-slate-400">First Name:*</p>
                <input 
                onChange={handleChange}
                name='fname'
                value={details?.name}
                className=" bg-slate-100 w-full outline-none px-2 py-1" type="text" />
              </div>
              {/* <div className="space-y-1">
                <p className="text-sm text-slate-400">Last Name:*</p>
                <input 
                onChange={handleChange}
                name='lname'
                value={details?.lname}
                className=" bg-slate-100 w-full outline-none px-2 py-1" type="text" />
              </div> */}
              <div className="space-y-1">
                <p className="text-sm text-slate-400">Email:*</p>
                <input 
                onChange={handleChange}
                name='email'
                value={details?.email}
                className=" bg-slate-100 w-full outline-none px-2 py-1" type="text" />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-slate-400">D.O.B. (Optional):</p>
                <input 
                onChange={handleChange}
                name='dob'
                value={details?.dob}
                className=" bg-slate-100 w-full outline-none px-2 py-1" 
                type="date" />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-slate-400">Gender (Optional):</p>
                <select name="gender"
                className=" bg-slate-100 w-full outline-none px-2 py-1 accent-slate-300 ">
                  <option value="Male">
                    Male</option>
                  <option value="Female">
                    Female</option>
                </select>
                {/* <input 
                onChange={handleChange}
                name='gender'
                value={details.gender}
                className=" bg-slate-100 w-full outline-none px-2 py-1" type="" /> */}
              </div>

              <button className="w-full sm:w-fit self-end px-3 py-1 rounded-sm shadow-md shadow-blue-600 bg-blue-500 hover:shadow-blue-700 text-slate-50">
                Update
              </button>

            </div>
            :
            <div className="basis-[65%] p-6 flex flex-col gap-2 justify-between bg-slate-50">
              <h1 className="text-xl font-semibold mb-4 sm:mb-0">Shipping Details</h1>
              <div className="space-y-1">
                <p className="text-sm text-slate-400">State:*</p>
                <input 
                onChange={handleChange}
                name='state'
                value={details?.state}
                className=" bg-slate-100 w-full outline-none px-2 py-1" type="text" />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-slate-400">City:*</p>
                <input 
                onChange={handleChange}
                name='city'
                value={details?.city}
                className=" bg-slate-100 w-full outline-none px-2 py-1" type="text" />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-slate-400">Address:*</p>
                <input 
                onChange={handleChange}
                name='address'
                value={details?.address}
                className=" bg-slate-100 w-full outline-none px-2 py-1" type="text" />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-slate-400">ZIP Code:</p>
                <input 
                onChange={handleChange}
                name='pincode'
                value={details?.pincode}
                className=" bg-slate-100 w-full outline-none px-2 py-1" type="text" />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-slate-400">Phone Number:</p>
                <input 
                onChange={handleChange}
                name='phone'
                value={details?.phone}
                className=" bg-slate-100 w-full outline-none px-2 py-1" type="text" />
              </div>

              <button 
              onClick={handleUpdate}
              className="w-full sm:w-fit self-end px-3 py-1 rounded-sm shadow-md shadow-blue-600 bg-blue-500 hover:shadow-blue-700 text-slate-50">
                Update
              </button>

            </div>
        }

      </div>


    </div>
  )
}

export default EditProfile