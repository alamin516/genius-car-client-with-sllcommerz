import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleDelete }) => {
    const { _id, serviceName, phone, customer, price, service, paid } = order;
    const [orderService, setOrderService] = useState({})
    console.log(order)

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [service])

    

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                orderService?.img && 
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>Purple</td>
            <td>
                <span className="text-green-600 font-bold">{paid && "Paid"}</span>
            </td>
            <td>
                <button className='bg-orange-600 px-3 py-1 rounded-lg text-white hover:bg-gray-300'>details</button>
            </td>
        </tr>
    );
};

export default OrderRow;