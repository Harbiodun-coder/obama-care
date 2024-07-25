import React from "react";
import Image from "next/image";

const TestimonialItem = () => {
  return (
    <div className="item">
      <div className="p-6 rounded-lg shadow-lg  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/sharp.png)" }}>
        <div className="testimonial_image mb-4">
          <Image
            src="/tes1.jpg"
            alt="Testimonial Image"
            width={150}
            height={150}
            className="rounded-full mx-auto"
          />
        </div>
        <div className="testi_item_content text-center">
          <p className="text-gray-700 mb-4">
            “ Saw kind fruitful itself in man. All in life good wherein beginning their he air That, the saw very years created for seed have without. Cant him fowl his can not ready for game”
          </p>
          <h4 className="text-lg font-semibold text-gray-900">
            - Dr. Suzanne Holroyd -
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
