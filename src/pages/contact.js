// pages/contact.tsx
import React from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import Newsletter from "../components/Misc/Newsletter";
const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <Layout>
      <Head>
        <title> Contact Us!</title>
      </Head>
      <div className="container pt-28 min-h-screen mx-auto p-6">
        <h1 className="sm:text-4xl text-2xl font-heading mb-8">Contact Us</h1>

        <div>
          <h2 className="font-text">
            {" "}
            If you have questions about aquiring properties or want to ask us
            about anything else, dont hesitate to be in touch!
            <br></br>
            <h3>
              {" "}
              <br></br>
              <b>We are here for you!</b>
            </h3>
            <br></br>
          </h2>
        </div>
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
            <button type="submit" className="orangeButton">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Newsletter />
    </Layout>
  );
};

export default Contact;
