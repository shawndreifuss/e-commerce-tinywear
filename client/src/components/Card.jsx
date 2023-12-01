import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../utils/queries.js'
import Auth from '../utils/auth.js'

const Card = () => {

const { loading, data } = useQuery(QUERY_ALL_PRODUCTS)
  
const products = data?.products || [];


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
  <>
    {loading ? (
    <div> loading... </div>
    ) : (
      <div className="lg:col-span-3">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map(products => (
                  <a key={products._id} href={`/product/${products._id}`} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={products.img}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">{products.name}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">{products.price}</p>
                    
                  </a>
              )) }
                   
              </div>
            </div>
        </div>
    </div>
  )}
  </>    
  )
}




export default Card