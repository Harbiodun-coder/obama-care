import React from 'react';

const Banner = () => {
  return (
    <section className=" flex md:pt-[20%] md:pl-20 pt-[80%] pl-10 ">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <h1 className="md:text-4xl md:font-bold font-semibold">
              Making Health
              <br />
              Care Better Together
            </h1>
            <p className="md:mt-4 md:text-gray-600 md:text-xl text-sm pt-2">
            Get access to a wider network of specialists, 
            <br />
            even if they aren't located nearby. 
            <br />
            Receive expert advice and treatment plans without
            <br />
             the hassle of long-distance travel.
            </p>
            <div className="mt-6">
              <a href="/onboarding" className=" bg-[blue] text-white p-4 rounded mr-4 ">
                Get Started
              </a>
              <a href="" className=" bg-gray-200 text-gray-800 p-4 rounded">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
