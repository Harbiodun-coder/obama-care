import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className=" bg-[white] py-10 md:px-20">
      <div className="container mx-auto px-4">
        <div className="md:flex flex-wrap md:gap-8 ">
          <div className="flex-1 py-5">
            <h4 className="text-lg font-bold">Top Products</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="">Managed Website</a></li>
              <li><a href="#" className="">Manage Reputation</a></li>
              <li><a href="#" className="">Power Tools</a></li>
              <li><a href="#" className="">Marketing Service</a></li>
            </ul>
          </div>
          <div className="flex-1 py-5">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="">Jobs</a></li>
              <li><a href="#" className="">Brand Assets</a></li>
              <li><a href="#" className="">Investor Relations</a></li>
              <li><a href="#" className="">Terms of Service</a></li>
            </ul>
          </div>
          <div className="flex-1 py-5">
            <h4 className="text-lg font-bold">Features</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="">Jobs</a></li>
              <li><a href="#" className="">Brand Assets</a></li>
              <li><a href="#" className="">Investor Relations</a></li>
              <li><a href="#" className="">Terms of Service</a></li>
            </ul>
          </div>
          <div className="flex-1 py-5">
            <h4 className="text-lg font-bold">Resources</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="">Guides</a></li>
              <li><a href="#" className="">Research</a></li>
              <li><a href="#" className="">Experts</a></li>
              <li><a href="#" className="">Agencies</a></li>
            </ul>
          </div>
          <div className="flex-1 pt-5">
            <h4 className="text-lg font-bold">Newsletter</h4>
            <p className="mt-4 text-gray-600">You can trust us. We only send promo offers.</p>
            <div className="form-wrap mt-4">
              <form
                target="_blank"
                action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                method="get"
                className="flex"
              >
                <input
                  className="form-control flex-1 p-2 border border-gray-300 rounded-l"
                  name="EMAIL"
                  placeholder="Your Email Address"
                  onFocus={(e) => (e.target.placeholder = '')}
                  onBlur={(e) => (e.target.placeholder = 'Your Email Address')}
                  required
                  type="email"
                />
                <button className="p-2 w-[50px] bg-blue-500 text-white rounded-r items-center">
                <FaArrowRight />
                </button>
                <div style={{ position: 'absolute', left: '-5000px' }}>
                  <input
                    name="b_36c4fd991d266f23781ded980_aefe40901a"
                    value=""
                    type="text"
                  />
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[white] py-4">
      
      </div>
    </footer>
  );
};

export default Footer;
