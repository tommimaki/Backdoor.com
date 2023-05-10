import React from "react";

export default function Seller() {
  return (
    <div className="bg-bg my-5 w-full py-2 px-6 flex justify-center gap-20 items-center ">
      <div className="flex items-center space-x-4">
        <img
          className="w-10 h-10 rounded-full"
          src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <div className="font-heading  text-lg">
          <div>Pekka Pouta</div>
          <div className="text-md font-text text-gray-500 ">Sales manager</div>
          <div className="text-md italic font-text text-gray-500 ">
            {" "}
            Phone: +1 (123) 456-7890{" "}
          </div>
        </div>
      </div>
      <div className="text-gray-700 text-lg font-text">
        Contact Pekka to get more information about buying an apartment.
      </div>
    </div>
  );
}
