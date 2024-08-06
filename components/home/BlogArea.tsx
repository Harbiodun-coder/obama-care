import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";

const BlogArea = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="area-heading mb-8 flex flex-col md:flex-row md:py-10 md:px-[50px]">
          <div className="md:w-5/12 mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold">
              Get Every
              <br />
              Single Update Here
            </h3>
          </div>
          <div className="md:w-[40%]">
            <p className="text-gray-600">
              Land meat winged called subdue without very light in all years sea
              appear midst forth image him third there set. Land meat winged
              called subdue without very light in all years sea appear
            </p>
          </div>
        </div>

        <div className="flex flex-wrap mx-[-16px] md:px-10">
          {[1, 2, 3].map((item) => (
            <div key={item} className="w-full px-4 mb-8 sm:w-1/2 lg:w-1/3">
              <div className="single-blog bg-white  overflow-hidden flex flex-col">
                <div className="thumb flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src={`/blog/${item}.jpg`}
                    alt="Blog Image"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap space-x-2 mb-4">
                    <a href="#">Medical, </a>
                    <a href="#">Dental, </a>
                    <a href="#">Health</a>
                  </div>
                  <a href="#" className="block mb-4">
                    <h4 className="text-xl  text-gray-800">
                    Hath is gathering from hath greate gan
                    man lights evening man.
                    </h4>
                  </a>
                  <div className="meta-bottom flex space-x-4 text-gray-600">
                    <a href="#" className="flex items-center gap-2">
                    <GoCommentDiscussion />
                    <div className="">08 comment</div> 
                    </a>
                    <a href="#" className="flex items-center gap-2">
                    <FaRegHeart />
                    <div className=""> 0 like</div>
                    </a>
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

export default BlogArea;
