import React from "react";
import { offer } from "../data/Data";

const Offer = () => {
  return (
    <div className="mt-10">
      <div className="w-10/12 m-auto">
        <div>
          {offer.map((data, key) => (
            <div key={key}>
              <div className="relative">
                <div className="craft-img rounded-3xl">
                  <img
                    src={data.customer_img}
                    alt="img"
                    className="w-full rounded-3xl"
                  />
                </div>
                <div>
                  <p className="bg-white p-4 text-xl absolute title -top-1">
                    {data.title}
                  </p>
                  <h1 className="bg-white p-6 text-2xl absolute subtitle ">
                    {data.subtitle}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
