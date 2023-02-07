import React, { useEffect, useState } from 'react';
import OrderDetails from '../../components/Modal/OrderDetails';

const OrderRow = ({ order, handleDelete }) => {
    const { _id, serviceName, phone, customer, price, service, paid } = order;
    const [orderService, setOrderService] = useState({})
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    useEffect(() => {
        fetch(`https://sllcommerz.vercel.app/services/${service}`)
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
            <td>
                <span className="text-green-600 font-bold">{paid && "Paid"}</span>
            </td>
            <td>
                <button
                    type="button"
                    onClick={openModal}
                    className='bg-orange-600 px-3 py-1 rounded-lg text-white hover:bg-gray-300'>details</button>
            </td>
            <OrderDetails
                isOpen={isOpen}
                closeModal={closeModal}
                order={order}
            ></OrderDetails>
        </tr>
    );
};

export default OrderRow;