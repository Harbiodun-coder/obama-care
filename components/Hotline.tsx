import React from 'react';

const Hotline = () => {
  return (
    <section className="hotline-area text-center py-10 bg-[blue]  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/footer.jpg)" }}>
      <div className="container mx-auto px-4" >
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[white]">
              Emergency Hotline
            </h2>
            <span className="block text-lg md:text-xl font-semibold text-blue-600 mb-4">
              (+01) – 256 567 550
            </span>
            <p className="pt-3 text-[white]">
              We provide 24/7 customer support. Please feel free to contact us <br />for emergency cases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotline;
