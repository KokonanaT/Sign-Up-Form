import React from 'react';
import useForm from  "../Hooks/useForm";

const SignUp = () => {
  const { values, handleChange, handleSubmit } = useForm(submitForm);

  function submitForm() {
   
    console.log('Form submitted:', values);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-royal-purple">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
              value={values.name || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={values.email || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded"
              value={values.password || ''}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-royal-purple text-white p-2 rounded hover:bg-royal-purple-dark transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

