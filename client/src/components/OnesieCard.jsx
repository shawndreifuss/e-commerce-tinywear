import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../utils/queries.js'
import '../App.css';

// sidebar
import { Fragment } from 'react'
import {  Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon,  MinusIcon, PlusIcon } from '@heroicons/react/20/solid'

const sortOptions = [
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]


const OnesieCard= () => {
 
const { loading, data } = useQuery(QUERY_ALL_PRODUCTS,
    {
        variables: { category: "onesies" },
    });
  
const products = data?.products || [];


const onesies = products.filter((onesies) => onesies.category == "onesies");
console.log(onesies)

// function filterProducts() {
//   if (!currentCategory) {
//     return state.products;
//   }

//   return state.products.filter(product => product.category._id === currentCategory);
// }

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
  <div className="bg-white">
  <div>
   

    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Products</h1>

        <div className="flex items-center">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              {/* <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Sort
                <ChevronDownIcon
                  className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </Menu.Button> */}
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <Menu.Item key={option.name}>
                      {({ active }) => (
                        <a
                          href={option.href}
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          {option.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          {/* <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
            <span className="sr-only">View grid</span>
            <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <span className="sr-only">Filters</span>
            <FunnelIcon className="h-5 w-5" aria-hidden="true" />
          </button> */}
        </div>
      </div>

      <section aria-labelledby="products-heading" className="pb-24 pt-6">
       

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          {/* Filters */}
          <form className="hidden lg:block">
            <h3 className="sr-only">Categories</h3>
           
            <a href="/">
              <Disclosure as="div" href="/" className="border-b border-gray-200 py-6">
                {({ open }) => (
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button href='/'className="all flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">All</span>
                        <span className="ml-6 flex items-center">
                          {open ? (
                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                )}
              </Disclosure>
            </a>
            <a href="/category/shirts">
              <Disclosure as="div" href="/category/shirts" className="border-b border-gray-200 py-6">
                {({ open }) => (
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button href='/category/shirts'className="shirts flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">Shirts</span>
                        <span className="ml-6 flex items-center">
                          {open ? (
                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                )}
              </Disclosure>
            </a>
<a href="/category/pants">
              <Disclosure as="div" href="/category/pants" className="border-b border-gray-200 py-6">
                {({ open }) => (
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button href='/category/"pants"'className="pants flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">Pants</span>
                        <span className="ml-6 flex items-center">
                          {open ? (
                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                )}
              </Disclosure>
            </a>
            <a href="/category/onesies">
              <Disclosure as="div" href="/category/pants" className="border-b border-gray-200 py-6">
                {({ open }) => (
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button href='/category/onesies'className="sets flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">Sets</span>
                        <span className="ml-6 flex items-center">
                          {open ? (
                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                )}
              </Disclosure>
            </a>
           
          </form>


          {/* Product grid */}
  
    {loading ? (
    <div> loading... </div>
    ) : (
      <div className="lg:col-span-3">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            
                {onesies.map(onesie => (
                  <a key={onesie._id} href={`/product/${onesie._id}`} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={onesie.img}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">{onesie.name}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">{onesie.price}</p>
                    
                  </a>
              )) }
                   
              </div>
            </div>
        </div>
    </div>
  )}
    </div>
      </section>
    </main>
  </div>
</div>

  )
}




export default OnesieCard
