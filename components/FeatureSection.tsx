import React from 'react';
import { TfiHeadphoneAlt, TfiHeartBroken, TfiLayers } from "react-icons/tfi";

const FeatureSection = () => {
  return (
    <section className="feature-section py-12" style={{ backgroundImage: "url(/pattern_bg.jpg)" }}>
      <div className="container mx-auto px-4">
        <div className="space-y-4 md:space-y-0 md:flex md:justify-between md:items-center md:gap-4 md:w-auto md:px-[40px]">
          <div className="">
            <div className="py-6 px-4 border border-gray-200 rounded-none text-center bg-white shadow-md relative z-20">
              <span className="text-4xl mb-4 inline-block text-blue-500">
                <TfiLayers />
              </span>
              <h3 className="text-2xl font-semibold mb-4">
                Primary Care
              </h3>
              <p className="text-gray-600 mb-4">
                An so vulgar to on points wanted rapture ous resolving continued household
              </p>
              <a className="text-blue-500 hover:underline" href="#">
                Learn More
              </a>
            </div>
          </div>
          <div className="">
            <div className="py-6 px-4 border border-gray-200 rounded-none text-center bg-white shadow-md relative z-20">
              <span className="text-4xl mb-4 inline-block text-blue-500">
                <TfiHeartBroken />
              </span>
              <h3 className="text-2xl font-semibold mb-4">
                Emergency Cases
              </h3>
              <p className="text-gray-600 mb-4">
                An so vulgar to on points wanted rapture ous resolving continued household
              </p>
              <a className="text-blue-500 hover:underline" href="#">
                Learn More
              </a>
            </div>
          </div>
          <div className="">
            <div className="py-6 px-4 border border-gray-200 rounded-none text-center bg-white shadow-md relative z-20">
              <span className="text-4xl mb-4 inline-block text-blue-500">
                <TfiHeadphoneAlt />
              </span>
              <h3 className="text-2xl font-semibold mb-4">
                Online Appointment
              </h3>
              <p className="text-gray-600 mb-4">
                An so vulgar to on points wanted rapture ous resolving continued household
              </p>
              <a className="text-blue-500 hover:underline" href="#">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
