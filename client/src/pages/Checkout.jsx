import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Auth from '../utils/auth'
import React from 'react'
import axios from 'axios'
import Stripe from "react-stripe-checkout"
import '../App.css';


const Checkout = () => {

    const handleToken = (totalAmount, token) => {
    try {
      axios.post("http://localhost:3001/api/stripe/pay", {
        token: token.id,
        amount: totalAmount
      });
    } catch (error) {
      console.log(error)
    }
  }
   
  const tokenHandler = (token) => {
    handleToken(100,token)
}

  const [open, setOpen] = useState(true)

  // Total price
  var cartContent = JSON.parse(localStorage.getItem("savedCart"));
  console.log(cartContent);
  let totalPrice = 0;
  for ( const product of cartContent ) {
    totalPrice += product.price
  }

  var fixedNum = totalPrice.toFixed(2);
 
  // const deleteHandler = (e) => {
  //   e.preventDefault()
  //   const item = e.target
  // }

  return (
    <div className="flex min-h-full flex-1 lg:px-8 py-80 mb-44">
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping Cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                        <a href="/">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                          </a>
                        </div>

                      </div>


                      <div className="mt-8"> 
                  
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                         {cartContent.map((cartContent) => ( 
                            <li className="flex py-6">
                                <div className="h-30 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={cartContent.img}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a>{cartContent.name}</a>
                                      </h3>
                                      <p className="ml-4">${cartContent.price}</p>
                                    </div>
                                  
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty: 1 </p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li> 
                           ))}   
                         </ul>
                        </div> 
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${fixedNum}</p>
                        {/* <p>${cartContent.price}</p> */}
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        {Auth.loggedIn() ? (   
                         <Stripe 
                           stripeKey='pk_test_51OCV4QCQg4jIgzVLeawWDTcJ9Ou3zt0wnGOox7ilt08BgACMZvtaDed0UWHiCNPllVpVxEntKFZYmFbIu1wUcrPz00fFKkMPJR'
                           token={tokenHandler}
                           amount={cartContent.price}/>
                        ) : (
                          <a
                          href="/signin"
                          className="flex items-center justify-center rounded-md border border-transparent bg-cyan-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-700"
                        >
                          Checkout

                        </a>
                        )}
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                              <a href="/">
                          <button
                            type="button"
                            className="font-medium text-cyan-900 hover:text-cyan-700"
                            onClick={() => setOpen(false)}
                          >
                             Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </div>
  )
}

export default Checkout;