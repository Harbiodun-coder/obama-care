import React from 'react';
import { TfiHeadphoneAlt, TfiHeartBroken, TfiLayers } from "react-icons/tfi";

const FeatureSection = () => {
  return (
    <section className="feature-section py-12" style={{ backgroundImage: "url(/pattern_bg.jpg)" }}>
      <div className=" mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className=" text-center md:text-left p-6 bg-white shadow-md rounded-lg md:h-[200px]">
            <h3 className=" md:text-2xl font-semibold mb-4 md:flex md:items-center justify-center md:justify-start grid place-items-center">
              <span className=" text-4xl mr-2">
              <TfiLayers  className='text-[blue]'/>
              </span>
              Primary Care
            </h3>
            <p className="card-feature__subtitle text-gray-600">
              An so vulgar to on points wanted rapture ous resolving continued household
            </p>
          </div>
          <div className="card card-feature text-center md:text-left p-6 bg-white shadow-md rounded-lg">
            <h3 className=" md:text-2xl font-semibold mb-4 md:flex md:items-center justify-center md:justify-start grid place-items-center">
              <span className="card-feature__icon text-4xl mr-2">
              <TfiHeartBroken className='text-[blue]' />
              </span>
              Emergency Cases
            </h3>
            <p className=" text-gray-600">
              An so vulgar to on points wanted rapture ous resolving continued household
            </p>
          </div>
          <div className="card card-feature text-center md:text-left p-6 bg-white shadow-md rounded-lg">
            <h3 className=" md:text-2xl font-semibold mb-4 md:flex md:items-center justify-center md:justify-start grid place-items-center">
              <span className="card-feature__icon text-4xl mr-2">
              <TfiHeadphoneAlt  className='text-[blue]'/>
              </span>
              Online Appointment
            </h3>
            <p className="card-feature__subtitle text-gray-600">
              An so vulgar to on points wanted rapture ous resolving continued household
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
