import{ useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';

import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';

import { idbPromise } from '../../utils/helpers';

function CategoryMenu({}) {

  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      });
      categoryData.categories.forEach(category => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then(categories => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = id => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map(item => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;




<form className="mt-4 border-t border-gray-200">
<h3 className="sr-only">Categories</h3>
<ul role="list" className="px-2 py-3 font-medium text-gray-900">
  {categories.map((item) => (
    <li key={category.name}>
      <a href={category.href} className="block px-2 py-3">
        {category.name}
      </a>
    </li>
  ))}
</ul>

{filters.map((section) => (
  <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
    {({ open }) => (
      <>
        <h3 className="-mx-2 -my-3 flow-root">
          <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
            <span className="font-medium text-gray-900">{section.name}</span>
            <span className="ml-6 flex items-center">
              {open ? (
                <MinusIcon className="h-5 w-5" aria-hidden="true" />
              ) : (
                <PlusIcon className="h-5 w-5" aria-hidden="true" />
              )}
            </span>
          </Disclosure.Button>
        </h3>
        <Disclosure.Panel className="pt-6">
          <div className="space-y-6">
            {section.options.map((option, optionIdx) => (
              <div key={option.value} className="flex items-center">
                <input
                  id={`filter-mobile-${section.id}-${optionIdx}`}
                  name={`${section.id}[]`}
                  defaultValue={option.value}
                  type="checkbox"
                  defaultChecked={option.checked}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                  className="ml-3 min-w-0 flex-1 text-gray-500"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
))}
</form>
</Dialog.Panel>
</Transition.Child>
</div>
</Dialog>
</Transition.Root>

