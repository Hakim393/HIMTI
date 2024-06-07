import React from "react";
import { himti } from "../../../assets";

const Banner = () => {
  return (
    <div>
      <aside className="text-center bg-white py-10">
        <div className="container px-20 mx-auto">
          <div className="row justify-center">
            <div className="col-xl-8">
              <div className="text-black text-2xl md:text-4xl lg:text-5xl font-bold mb-4 font-poppins">
                "PERIODE 2023 / 2024"
              </div>
              <img
                src={himti}
                alt="..."
                style={{
                  height: "3rem",
                  display: "block",
                  margin: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Banner;
