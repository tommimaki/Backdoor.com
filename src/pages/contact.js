// pages/contact.tsx
import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <Layout>
      <div className="container min-h-screen mx-auto p-6">
        <h1 className="text-4xl mb-8">Contact Us</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2">
              Message:
            </label>
            <textarea
              id="message"
              rows={4}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
