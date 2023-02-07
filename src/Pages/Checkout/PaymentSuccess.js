import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation()

  const query = new URLSearchParams(location.search)

  const transactionId = query.get("transactionId")

  const [order, setOrder] = useState({})
  useEffect(() => {
    fetch(`http://localhost:5000/order/by-transactionId/${transactionId}`)
      .then(res => res.json())
      .then(data => setOrder(data))
  }, [transactionId])


  if (!order?._id) {
    return (
      <div>
        No order found
      </div>
    )
  }

  return (
    <div className="py-10">
      <h2 className="text-4xl font-semobold text-center text-green-600">Congrats! Successfully Paid.</h2>
      <h2 className="text-2xl font-semobold text-center text-green-600 my-4">Your Order Summary</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="w-full">
            <tr>
              <th className="w-1/2">Details</th>
              <th className="w-1/2">Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div><span className="font-bold">Service Name:</span> {order.serviceName}</div>
                <div><span className="font-bold">Customer:</span> {order.customer}</div>
                <div><span className="font-bold">Email:</span> {order.email}</div>
                <div><span className="font-bold">Address:</span> {order.address}</div>
                <div><span className="font-bold">Phone:</span> {order.phone}</div>

              </td>
              <td>
                <div><span className="font-bold">TransactionId:</span> {transactionId}</div>
                <div><span className="font-bold">Price:</span> {order.currency === 'USD' && '$'}{order.price}{order.currency === 'BDT' && '৳'}</div>
                <div><span className="font-bold">Date:</span> {(order.paidAt)}</div>
               <div><span className="font-bold">Status:</span><span className="text-green-600"> {order.paid && 'Paid'}</span></div>
              </td>
            </tr>
          </tbody>
        </table>

        <button className="btn btn-primary ml-auto mt-5 block print:hidden" onClick={() => window.print()}>Print</button>
      </div>
    </div>
  );
};

export default PaymentSuccess;