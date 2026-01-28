"use client"

import { useState } from "react"
import { CreditCard, MapPin } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { toast } from "sonner"
import { env } from "@/env"
import { authClient } from "@/lib/auth-client"

type OrderPrice = {
  price: number
}

export default function OrderConfirmForm({ price }: OrderPrice) {
  const [address, setAddress] = useState("")
  const [loading, setLoading] = useState(false)

  const session = authClient.useSession()
  console.log("Session:", session)

   const NEXT_PUBLIC_ORDER=env.NEXT_PUBLIC_ORDER

  const handlePayment = async () => {
    if (!address.trim()) {
      toast.error("Please enter a delivery address!")
      return
    }

    setLoading(true)

    try {
      const res = await fetch(NEXT_PUBLIC_ORDER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          address,
          totalAmount:price,
        //  customerId: session?.user?.id,
        }),
      })

    //   if (!res.ok) {
    //     throw new Error("Failed to place order")
    //   }

      const data = await res.json()
      console.log("Order response:", data)

      setAddress("")
      toast.success("Order Confirmed!", {
        description: "Payment successful. Your food is being prepared!",
      })
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-4">
      <div className="space-y-4 flex flex-col gap-4 md:p-4 lg:p-6">
        {/* Address */}
        <div className="space-y-1">
          <label className="text-sm font-medium flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Delivery Address
          </label>
          <Input
            placeholder="House, Road, Area, City"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* Price */}
        <p className="text-2xl font-bold text-amber-700">
          Total Amount: <span className="text-amber-600">tk {price}</span>
        </p>

        {/* Payment Button */}
        <Button
          onClick={handlePayment}
          disabled={loading}
          className="w-full flex items-center gap-2"
        >
          <CreditCard className="h-4 w-4" />
          {loading ? "Processing..." : "Confirm Payment"}
        </Button>
      </div>
    </div>
  )
}
