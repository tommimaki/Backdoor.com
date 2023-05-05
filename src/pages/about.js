/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";
import WhyUs from "../components/WhyUs";

const About = () => {
  return (
    <Layout>
      <div className="pt-28">
        <Head>
          <title>About Us - Backdoor Homes</title>
        </Head>
        <div className="p-4 sm:p-8 lg:p-12">
          <h1 className="text-3xl font-bold font-heading mb-4">
            Backdoor Homes - A New Era of Modern Living
          </h1>
          <p className="mb-4 font-text">
            Welcome to Backdoor Homes, where we blend contemporary design with
            everyday practicality to create the perfect living space for you and
            your family. Our architects and designers have carefully crafted
            each home with a focus on innovative layouts, energy efficiency, and
            sustainable materials. Our commitment to excellence ensures that
            every Backdoor Home is built to the highest standards, providing you
            with a living space that is both stylish and functional.
          </p>
          <p className="mb-4 font-text">
            At Backdoor Homes, we understand that a house is more than just a
            building; it's a place where memories are made and dreams are
            realized. That's why we're dedicated to creating communities that
            foster connection, well-being, and a sense of belonging. Our
            neighborhoods are thoughtfully designed with amenities such as
            parks, walking trails, and community centers, ensuring that you have
            everything you need to live your best life.
          </p>
          <p className="font-text">
            Choose a Backdoor Home, and experience a new standard of modern
            living that combines style, comfort, and sustainability. Welcome to
            the future of homebuilding - welcome to Backdoor Homes.
          </p>
        </div>
      </div>
      <WhyUs />
      <Newsletter />
    </Layout>
  );
};

export default About;
