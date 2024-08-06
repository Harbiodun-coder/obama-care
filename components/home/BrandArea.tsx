import React from 'react';

const BrandsArea = () => {
  return (
    <section className="bg-gray-200 py-10" >
      <div className="container mx-auto px-10">
        <div className="flex justify-center">
          <div className="w-full lg:w-10/12">
            <div className="flex overflow-x-auto space-x-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="single-brand-item flex-shrink-0 p-4">
                  <img src={`/brand/${item}.png`} alt={`Brand ${item}`} className="w-32 h-16 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsArea;
