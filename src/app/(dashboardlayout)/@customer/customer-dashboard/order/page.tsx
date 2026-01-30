

const OrderePage =async () => {
    const res= await fetch("http://localhost:5000/api/orders/order",{cache:"no-store"})
    const data=res.json()
    console.log(data)
  return (
    <div>
      <h2>this is order page</h2>
    </div>
  )
}

export default OrderePage
