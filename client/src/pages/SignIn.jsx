import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const SignIn = () => {
  const [formState, setFormState] = useState({ email: '', password: ''});
  const [login, {error, data}] = useMutation(LOGIN_USER);

  // Update state for login and signup changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
    // Handle submit form 
    const handleFormSubmit = async (event) => {
      event.preventDefault()
    console.log(formState)
  try {
    const {data} = await login({
      variables: { ...formState },
    });

    // Auth token
    Auth.login(data.login.token);
  } catch(e) {
    console.log(e)
  }   
  // Clearing values on form
  setFormState({
    email: '',
    password: '',
  
  });
  document.location = '/'
}; 
    return (
      <>
        
        {/* sign in */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-20 mb-64">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
           
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account.
            </h2>
          </div>
          
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {data ? (
              <p>
                Success! {' '}
                <Link to="/">Go to homepage.</Link>
              </p>
            ) : (
            <form className="space-y-6" onSubmit={handleFormSubmit} >
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-cyan-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign In
                </button>
              </div>

              <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <a href="/signup" className="font-semibold leading-6 text-cyan-900 hover:text-cyan-700">
              Click here to Sign Up. 
            </a>
          </p>

            </form>
            )}
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </>
    )
  }
  

  export default SignIn;
