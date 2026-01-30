"use client"



import { updateUserRole } from "@/actions/food"
import { useState } from "react"

export enum Role {
  CUSTOMER="CUSTOMER",
  PROVIDER="PROVIDER",

  ADMIN="ADMIN"
}

export default function OrderStatusDropdown({userId,currentRole}:{userId:string,currentRole:Role}) {
   const [role, setRole] = useState(currentRole)
  const [loading, setLoading] = useState(false)
  // const [status, setStatus] = useState<Role>(currentStatus)
  //  const [loading, setLoading] = useState(false)
  // console.log(orderId,status)

const onChange = async (newRole: Role) => {
    setRole(newRole)          // ✅ instant change
    setLoading(true)

    try {
      await updateUserRole(userId, newRole)
    } catch {
      setRole(currentRole)    // rollback if error
    } finally {
      setLoading(false)
    }
  }








  // const updateStatus = async (newStatus:Role) => {
  //   setLoading(true)
    
  // await updateOrderStatus(orderId, newStatus)
//   const res=  await fetch(`http://localhost:5000/api/users/${orderId}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//       body: JSON.stringify({ role:newStatus }),
//       cache:"no-store"
//     })
    
// const data= await res.json()
// console.log(data)
// setStatus(newStatus)
//     setLoading(false)
//   }

  return (
    <div className=" p-2  rounded-xl shadow-md">
      {/* <label className="block mb-2 font-semibold text-white">
        Update Order Status
      </label> */}

      <select
        value={role}
        onChange={(e) => onChange(e.target.value as Role)}
        className=" px-4 py-2 rounded-lg bg-amber-600 text-black font-bold
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {Object.values(Role).map((st) => (
          <option key={st} value={st}>
            {st}
          </option>
        ))}
      </select>

      <p className="mt-3 text-white font-semibold text-sm">
        Current status: <span className="font-bold">{role}</span>
      </p>
    </div>
  )
}
