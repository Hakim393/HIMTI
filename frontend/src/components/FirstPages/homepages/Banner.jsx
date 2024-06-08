import React from "react";
import { himti } from "../../../assets";

const Banner = () => {
  return (
    <div>
      <aside className="text-center bg-white py-10">
        <div className="container px-20 mx-auto">
          <div className="row justify-center">
            <div className="col-xl-8">
              <div className="text-[#0061FF] md:text-5xl lg:text-5xl mb-4 p-4 font-poppins">
               <h1>BIRU BIRU SATU ! 💪</h1>
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
