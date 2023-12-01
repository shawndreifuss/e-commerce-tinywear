import React from 'react'
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import Auth from '../utils/auth'
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom'
import { QUERY_PRODUCT } from '../utils/queries.js'
import '../App.css';


const SingleProduct = () => {
  const { productId } = useParams();

const { loading, data } = useQuery(QUERY_PRODUCT, {
  variables: { productId: productId },
 
} 
);

const product = data?.product || {};



// Putting cart in local storage
const addToCart = (e) => {
  e.preventDefault()

    const saveToCart = {
      price: product.price,
      size: classe.sizes[2].name,
      img: product.img,
      name: product.name
    }
    var savedCart = JSON.parse(localStorage.getItem("savedCart"));
    console.log(savedCart)
      if (savedCart == null) {
    const savedCart = [];
    savedCart.push(saveToCart);

      localStorage.setItem("savedCart", JSON.stringify(savedCart));

      } else {
        savedCart.push(saveToCart);
        localStorage.setItem("savedCart", JSON.stringify(savedCart));
      }
  }
  

// For reviews
const reviews = { href: '#', average: 4, totalCount: 117 }
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// For sizes
const classe = {
  sizes: [
    { name: 'T2', inStock: true },
    { name: 'T3', inStock: true },
    { name: 'T4', inStock: true },
  ],
}
const [selectedSize, setSelectedSize] = useState(classe.sizes[2])

if(loading) {
  return <div>Loading...
    <div class="loader">
      <span class="loader__element"></span>
      <span class="loader__element"></span>
      <span class="loader__element"></span>
    </div>

  </div>
}
  return (
   
    <>
    <div className="bg-white">
        <div className="pt-6">
        {/* Product Image */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 overflow-hidden lg:block pb-5">
            <img
              src={product.img}
              className="h-full w-full object-cover object-center rounded-lg"
            /> 
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
        {/* Product Name */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>
          {/* Product Description */}
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>
            
          {/* Price */}
          {/* grey line */}
          <hr className="h-px my-8 bg-gray-200 border-1 dark:bg-gray"></hr>
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className=" mt-6 text-3xl tracking-tight text-gray-900">${product.price}</p>
            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                     )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a className="ml-3 text-sm font-medium text-cyan-700">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="https://res.cloudinary.com/deqzppd4t/image/upload/v1700352654/Screenshot_2023-11-18_at_4.10.56_PM_ireplp.png" target="_blank" className="text-sm font-medium text-cyan-700 hover:text-cyan-600">
                    Size Guide
                  </a>
                </div>

                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {classe.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              {Auth.loggedIn() ? (
                <>
                   
                   
              <a href={product.payBtn}
                type="click"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-900 px-8 py-3 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-offset-2"
              >
                Checkout
              </a>
              <a 
                // href={product.payBtn}
                type="click"
                className="mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-900 px-8 py-3 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-offset-2"
              >
                Add To Cart
              </a>
              </>
              ) : (
                <>
                <a href='/signin'
                type="click"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-900 px-8 py-3 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-offset-2"
              >
                Checkout
              </a>
              <a href='/signin' type="click"
                className="addToCart mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-900 px-8 py-3 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-offset-2"
                onClick={addToCart}
              >
                Add To Cart
              </a>
              </>
              )}
            </form>
          </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
      </>   
  )
}


export default SingleProduct;