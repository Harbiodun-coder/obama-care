import React from "react";
import Image from "next/image";

const AboutArea = () => {
  return (
    <section
      className=" bg-cover min-h-screen bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url(/sharp.png)" }}
    >
      <div className="w-full md:px-4 flex justify-around gap-4">
        <Image
          src="/about1.png"
          width={700}
          height={1000}
          alt="Picture of the author"
          className="md:block hidden "
        />
        <div className=" px-2 md:text-left md:pt-[80px] py-0 ">
          <h4 className="md:text-3xl font-semibold mb-4">
            Second Abundantly
            <br />
            Move That Cattle Perform
            <br />
            Appen Land
          </h4>
          <h6 className=" text-gray-700 mb-4 text-[15px]">
            Give their their without moving were stars called so divide in
            female be moving night may fish him Give their their without be moving night may fish him own male created great. Give their
            <br />
            their without moving were. Stars called so divide female moving
            <br />
            night may fish him own male created great opportunity deal.
          </h6>
           
         
          <a className="link_one text-blue-500 hover:underline" href="#">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
