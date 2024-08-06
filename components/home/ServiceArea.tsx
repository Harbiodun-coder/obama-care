import React from "react";
import { FaTooth } from "react-icons/fa";
import { PiBrainLight } from "react-icons/pi";
import { SiPicardsurgeles } from "react-icons/si";

const ServiceArea = () => {
  return (
    <div className="service-area py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between md:flex-wrap md:justify-around md:whitespace-normal mb-8 flex-wrap md:py-[50px]">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h3 className="text-3xl font-semibold mb-4">
              Awesome
              <br /> Health Service
            </h3>
          </div>
          <div className="text-[14px] md:w-[37%]">
            <p className="text-gray-600">
              Land meat winged called subdue without very light in all years sea
              appear midst forth image him third there set. Land meat winged called subdue without very light in all years sea appear.
              
            </p>
          </div>
        </div>

        <div className="space-y-4 md:space-y-0 md:flex md:justify-between md:items-center md:gap-4 md:w-auto">
          <div className="">
            <div className="py-[40px] px-[35px] border border-gray-200 rounded-none text-center bg-white shadow-md relative z-20">
              <span className="text-4xl mb-4 inline-block">
                <PiBrainLight />
              </span>
              <h3 className="text-2xl font-semibold mb-4">Neurology Service</h3>
              <p className="text-gray-600 mb-4">
                Land meat winged called subdue without a very light in all years
                sea appear Lesser bring fly first land set female best perform.
              </p>
              <a className="text-blue-500 hover:underline" href="#">
                Learn More
              </a>
            </div>
          </div>
          <div className="">
            <div className="py-[40px] px-[35px] border border-gray-200 rounded-none text-center bg-white shadow-md relative z-20">
              <span className="text-4xl mb-4 inline-block">
                <FaTooth />
              </span>
              <h3 className="text-2xl font-semibold mb-4">Dental Clinic</h3>
              <p className="text-gray-600 mb-4">
                Land meat winged called subdue without a very light in all years
                sea appear Lesser bring fly first land set female best perform.
              </p>
              <a className="text-blue-500 hover:underline" href="#">
                Learn More
              </a>
            </div>
          </div>
          <div className="">
            <div className="py-[40px] px-[35px] border border-gray-200 rounded-none text-center bg-white shadow-md relative z-20">
              <span className="text-4xl mb-4 inline-block">
                <SiPicardsurgeles />
              </span>
              <h3 className="text-2xl font-semibold mb-4">Plastic Surgery</h3>
              <p className="text-gray-600 mb-4">
                Land meat winged called subdue without a very light in all years
                sea appear Lesser bring fly first land set female best perform.
              </p>
              <a className="text-blue-500 hover:underline" href="#">
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
