import { Dialog, Transition } from '@headlessui/react';
import { format } from 'date-fns';
import React, {Fragment} from 'react';

const OrderDetails = ({isOpen, closeModal, order}) => {
    const {serviceName, phone, customer, price, address, paid, transactionId } = order;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto w-5/12 mx-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center w-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-132 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {serviceName}
                  </Dialog.Title>
                  <div className="my-4">
                    <p className="text-sm text-gray-500">
                    Customer: {customer}
                    </p>
                    <p className="text-sm text-gray-500">
                    address: {address}
                    </p>
                    <p className="text-sm text-gray-500">
                    Phone: {phone}
                    </p>
                  </div>
                  <hr/>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    Price: ${price}
                    </p>
                    <p className="text-sm text-gray-500">
                    Date: {format(new Date(order.paidAt), "dd-MM-yyyy")}, {format(new Date(order.paidAt), "p")}
                    </p>
                    <p className="text-sm text-gray-500">
                    TransactionId: {transactionId}
                    </p>
                    <p className="text-sm text-gray-500">
                    Status: {paid === true ? "Paid" : "Unpaid"}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 print:hidden"
                      onClick={closeModal}
                    >
                      close
                    </button>
                    <button
                    onClick={()=> window.print()}
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 print:hidden"
                    >
                      Print
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
};

export default OrderDetails;