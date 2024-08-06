import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaPhone, FaSkype, FaTwitter } from "react-icons/fa";

const TeamArea = () => {
  return (
    <section className="team-area py-16">
      <div className="container mx-auto px-4">
        <div className="md:flex justify-around mb-12">
          <div className="">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Obama-care
              <br />
              Experience Doctors
            </h3>
          </div>
          <div className="col-md-7 col-xl-8">
            <p className="text-gray-600 sm:whitespace-nowrap text-[10px] md:whitespace-normal md:text-[15px]">
              Land meat winged called subdue without very light  in all years sea
              <br />
              appear midst forth image him third there set. Land meat winged
              called 
              <br />subdue without very light in  all years sea appear
            </p>
          </div>
        </div>

        <div className=" flex flex-wrap gap-2 justify-around">
          {[
            {
              name: "Dr Adam Brain",
              title: "Cardiologist",
              image: "/team/1.jpg",
              phone: "+7 235 365 2365",
            },
            {
              name: "Dr Blian Judge",
              title: "Cardiologist",
              image: "/team/2.jpg",
              phone: "+7 235 365 2365",
            },
            {
              name: "Dr Blian Judge",
              title: "Cardiologist",
              image: "/team/3.jpg",
              phone: "+7 235 365 2365",
            },
          ].map((doctor, index) => (
            <div key={index} className=" mb-8">
              <div className="card shadow-lg">
                <Image
                  className="rounded-t-lg"
                  src={doctor.image}
                  alt={doctor.name}
                  width={400}
                  height={400}
                />
                <div className="text-center p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    <a href="#">{doctor.name}</a>
                  </h3>
                  <p className="text-gray-700 mb-4">{doctor.title}</p>
                  <div className="team-footer flex justify-between items-center">
                    <a className="dn_btn text-blue-500" href="#">
                    <FaPhone />
                      {doctor.phone}
                    </a>
                    <ul className="flex space-x-2">
                      <li>
                        <a href="#" className="text-blue-500">
                        <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-500">
                        <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-500">
                        <FaInstagram />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-500">
                        <FaSkype />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamArea;
