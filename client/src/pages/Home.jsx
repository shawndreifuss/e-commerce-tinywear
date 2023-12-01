import Card from "../components/Card";
import { Fragment, useState } from 'react'
import {  Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon,  MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import '../App.css';

const sortOptions = [
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]


const Home = () => {

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
        </div>
      </div>

      <section aria-labelledby="products-heading" className="pb-24 pt-6">
       

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          {/* Filters */}
          <form className="hidden lg:block">
            <h3 className="sr-only">Categories</h3>
           
              <a href="/category/shirts">
              <Disclosure as="div" href="http://localhost:3000/category/shirts" className="border-b border-gray-200 py-6">
                {({ open }) => (
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button href='/category/"shirts"'className="shirts flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
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
              <Disclosure as="div" href="http://localhost:3000/category/pants" className="border-b border-gray-200 py-6">
                {({ open }) => (
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button href='/category/"655b0445c80d4cb8a138cc0a"'className="pants flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
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
            </a><a href="/category/onesies">
              <Disclosure as="div" href="http://localhost:3000/category/onesies" className="border-b border-gray-200 py-6">
                {({ open }) => (
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button href='/category/"onesies"'className="sets flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
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
          <Card /> 
          
        </div>
      </section>
    </main>
  </div>
</div>
)
}



export default Home;