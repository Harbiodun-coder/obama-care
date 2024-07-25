
import React from "react";
import { FaTooth } from "react-icons/fa";
import { PiBrainLight } from "react-icons/pi";
import { SiPicardsurgeles } from "react-icons/si";

const ServiceArea = () => {
  return (
    <div className="service-area py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-around mb-8 flex-wrap md:py-[80px]">
          <div className="">
            <h3 className="text-3xl font-semibold mb-4">
              Awesome
              <br />
              Health Service
            </h3>
          </div>
          <div className="text-[14px]">
            <p className="text-gray-600">
              Land meat winged called subdue without very light in all
              <br /> years sea appear midst forth image him third there set.{" "}
              <br /> Land meat winged called subdue without very light in <br />
              all years sea appear.
            </p>
          </div>
        </div>
        <div className="md:flex md:justify-between md:items-center gap-4  md:w-auto ">
          <div className="">
            <div className="py-[40px] px-[35px] border border-gray-200 rounded-none text-center bg-white shadow-md relative z-20">
              <span className=" text-4xl mb-4 inline-block ">
              <PiBrainLight />
              </span>
              <h3 className=" text-2xl font-semibold mb-4">
                Neurology Service
              </h3>
              <p className=" text-gray-600 mb-4">
                Land meat winged called subdue without a very light in all years
                sea appear Lesser bring fly first land set female best perform.
              </p>
              <a
                className=" text-blue-500 hover:underline"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="">
            <div className="py-[40px] px-[35px] border border-gray-200 rounded-none text-center bg-white shadow-md relative z-20">
              <span className="card-service__icon text-4xl mb-4 inline-block">
              <FaTooth />
              </span>
              <h3 className=" text-2xl font-semibold mb-4">Dental Clinic</h3>
              <p className=" text-gray-600 mb-4">
                Land meat winged called subdue without a very light in all years
                sea appear Lesser bring fly first land set female best perform.
              </p>
              <a
                className="card-service__link text-blue-500 hover:underline"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="">
            <div className="py-[40px] px-[35px] border border-gray-200 rounded-none text-center bg-white shadow-md relative z-20">
              <span className="card-service__icon text-4xl mb-4 inline-block">
              <SiPicardsurgeles />
              </span>
              <h3 className="card-service__title text-2xl font-semibold mb-4">
                Plastic Surgery
              </h3>
              <p className="card-service__subtitle text-gray-600 mb-4">
                Land meat winged called subdue without a very light in all years
                sea appear Lesser bring fly first land set female best perform.
              </p>
              <a
                className="card-service__link text-blue-500 hover:underline"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
