"use client"
import AdminSideBar from "@/components/AdminSideBar";
import React, { useEffect, useState } from "react";


// export async function getData(){

//   try{

//     connectDB();

//     const u = await userModel.find({}).select("name email");

    
//     const us = JSON.parse(JSON.stringify(u));
    
//     var users = [];

//     for (let index = 0; index < us.length; index++) {
//       const e = us[index];
//       const d = await deliveryModel.findOne({uId: e._id}).select("-uId");
//       const details = {name: e.name, email: e.email, ...(d)};
//       users = [details, ...users];
//     }
    
//     return {
//       users
//     }

//   }catch(err){
//     console.log(err)
//     return null
//   }
// }

const Page = () => {

  // const data = await getData()

  // if(!data){return null}

  // const {users} = data
  const [users, setUsers] = useState(null);

  useEffect(()=>{
    const getUsers = async ()=>{
        const result = await fetch('/api/user/getUsers');
        const res= await result.json();
        // console.log(res)
        if(res.success){
          setUsers(res.users)
        }

    }

    getUsers();

  }, [])

  return (
    <div className="flex">
      <AdminSideBar active={"users"} />
      <div className="w-full p-2 sm:p-6">
        <div>
          <h1 className="text-2xl font-bold">All Users</h1>
          <div className="my-2 space-y-4 text-sm font-semibold">

          <div className="flex font-bold gap-2 bg-[#fefefe] p-2">
            <p className="text-slate-400">sno</p>
            <div className="grid w-full grid-rows-4 gap-2 break-words text-left sm:grid-cols-4 sm:grid-rows-1">
              <p className="text-slate-400">Username</p>
              <p className="text-slate-400">Email</p>
              <p className="text-slate-400">Phone</p>
              <p className="text-slate-400">Address</p>
            </div>
          </div>

            {
              users?.map((u, i)=>{

                return (
                  <div key={i} className="hover:bg-slate-300 flex gap-2 rounded-lg bg-[#fefefe] p-2">
                    <p className="font-bold">{i+1}</p>
                    <div className="grid w-full grid-rows-4 gap-2 break-words text-left sm:grid-cols-4 sm:grid-rows-1">
                      <p>{u?.name}</p>
                      <p>{u?.email}</p>
                      <p>{u?.phone || "phone"}</p>
                      <p>{ u?.address ? `${u?.pincode} ${u?.address} ${u?.city} ${u?.state}` : "Pincode, Address, City, State"}</p>
                    </div>
                  </div>
                )

              })
            }

            <div className="hover:bg-slate-300 flex gap-2 rounded-lg bg-[#fefefe] p-2">
              <p className="font-bold">2</p>
              <div className="grid w-full grid-rows-4 gap-2 break-words text-left sm:grid-cols-4 sm:grid-rows-1">
                <p>Smitha Pearson</p>
                <p>SmithaPearson@email.com</p>
                <p>8978675645</p>
                <p>Chicago, Williams, kingsman 1987</p>
              </div>
            </div>

            <div className="hover:bg-slate-300 flex gap-2 rounded-lg bg-[#fefefe] p-2">
              <p className="font-bold">3</p>
              <div className="grid w-full grid-rows-4 gap-2 break-words text-left sm:grid-cols-4 sm:grid-rows-1">
                <p>John Doe</p>
                <p>JohnDoe@email.com</p>
                <p>8978675645</p>
                <p>Washington DC, lucamia, kingsman 1987</p>
              </div>
            </div>

            <div className="hover:bg-slate-300 flex gap-2 rounded-lg bg-[#fefefe] p-2">
              <p className="font-bold">4</p>
              <div className="grid w-full grid-rows-4 gap-2 break-words text-left sm:grid-cols-4 sm:grid-rows-1">
                <p>Jacob Andersan</p>
                <p>JacobAndersan@email.com</p>
                <p>8978675645</p>
                <p>New York, Manhattan, kingsman 1987</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
