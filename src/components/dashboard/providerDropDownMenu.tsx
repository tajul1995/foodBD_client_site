"use client"

import { updateorderstatus } from "@/actions/food"
import { OrderStatus } from "@/types/order.type"
import { useState } from "react"

export default function OrderDropdown({ orderId, currentstatus }:{orderId:string,currentstatus:OrderStatus}) {
  const [role, setRole] = useState(currentstatus)
  const [loading, setLoading] = useState(false)
console.log(role,currentstatus)
  const onChange = async (newRole:OrderStatus) => {
    setRole(newRole)          // ✅ instant change
    setLoading(true)

    try {
     const res=   await updateorderstatus(orderId, newRole)
    console.log(res)
    } catch {
      setRole(currentstatus)    // rollback if error
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className=" p-2  rounded-xl shadow-md">
          {/* <label className="block mb-2 font-semibold text-white">
            Update Order Status
          </label> */}
    
          <select
            value={role}
            onChange={(e) => onChange(e.target.value as OrderStatus)}
            className=" px-4 py-2 rounded-lg bg-amber-600 text-black font-bold
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {Object.values(OrderStatus).map((st) => (
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
//  PLACED
//   PREPARING
//   READY
//   DELIVERED
//   CANCELLED