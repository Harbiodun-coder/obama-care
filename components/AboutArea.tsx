import React from "react";
import Image from "next/image";

const AboutArea = () => {
  return (
    <section
      className="bg-cover  bg-center bg-no-repeat flex items-center  md:bg-[length:100%_100%]"
      style={{ backgroundImage: "url(/sharp.png)" }}
    >
      <div className="w-full px-4 flex flex-col md:flex-row justify-around items-center gap-4">
        <div className="hidden md:block">
          <Image
            src="/about1.png"
            width={500}
            height={700}
            alt="Picture of the author"
          />
        </div>
        <div className="text-left md:text-left pt-0 md:pt-[80px] px-4 md:px-0 max-w-md md:max-w-lg">
          <h4 className="text-xl md:text-3xl font-semibold mb-4">
            Second Abundantly Move That Cattle Perform Appen Land
          </h4>
          <h6 className="text-gray-700 mb-4 text-sm md:text-base">
            Give their without moving were stars called so divide in female be moving night may fish him own male created great. Give their without moving were. Stars called so divide female moving night may fish him own male created great opportunity deal.
          </h6>
          <a className="text-blue-500 hover:underline" href="#">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
