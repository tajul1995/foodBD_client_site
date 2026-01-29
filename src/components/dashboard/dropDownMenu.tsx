"use client"

import { useState } from "react"

enum OrderStatus {
  PLACED = "PLACED",
  PREPARING = "PREPARING",
  READY = "READY",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

export default function OrderStatusDropdown({orderId,currentStatus}:{orderId:string,currentStatus:OrderStatus}) {
  const [status, setStatus] = useState<OrderStatus>(currentStatus)
  console.log("order",status)

  return (
    <div className=" p-2  rounded-xl shadow-md">
      {/* <label className="block mb-2 font-semibold text-white">
        Update Order Status
      </label> */}

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as OrderStatus)}
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
        Current status: <span className="font-bold">{status}</span>
      </p>
    </div>
  )
}
