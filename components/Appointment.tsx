import React, { useState } from "react";

const AppointmentSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="appointment-area py-10 bg-white shadow-lg px-4 md:px-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* FAQ Section */}
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h3 className="text-2xl font-semibold mb-6">Have Some Questions?</h3>
            <div>
              {[
                {
                  id: 1,
                  question: "God male gathering them it female which green cattle?",
                  answer:
                    "Great day without sixth a lesser beginning. Their thing abundantly air moving saw fruitful lesser god. Sea abundantly blessed life set. Land. Lights divided man in deep in open upon.",
                },
                {
                  id: 2,
                  question: "Moving creepeth moved upon man grass two days?",
                  answer:
                    "Great day without sixth a lesser beginning. Their thing abundantly air moving saw fruitful lesser god. Sea abundantly blessed life set. Land. Lights divided man in deep in open upon.",
                },
                {
                  id: 3,
                  question: "God male gathering them it female which green cattle?",
                  answer:
                    "Great day without sixth a lesser beginning. Their thing abundantly air moving saw fruitful lesser god. Sea abundantly blessed life set. Land. Lights divided man in deep in open upon.",
                },
                {
                  id: 4,
                  question: "Saw isn't likeness beginning yielding land days she?",
                  answer:
                    "Great day without sixth a lesser beginning. Their thing abundantly air moving saw fruitful lesser god. Sea abundantly blessed life set. Land. Lights divided man in deep in open upon.",
                },
                {
                  id: 5,
                  question: "Saw isn't likeness beginning yielding land days she?",
                  answer:
                    "Great day without sixth a lesser beginning. Their thing abundantly air moving saw fruitful lesser god. Sea abundantly blessed life set. Land. Lights divided man in deep in open upon.",
                },
              ].map(({ id, question, answer }) => (
                <div key={id} className="border-b border-gray-200 mb-4">
                  <button
                    className="w-full text-left py-4 px-6 flex justify-between items-center text-gray-800 font-semibold focus:outline-none"
                    onClick={() => handleToggle(id)}
                  >
                    {question}
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeIndex === id ? "rotate-45" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 12h12M12 6v12"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-max-height duration-300 ${
                      activeIndex === id ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <div className="p-6 text-gray-600">{answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Appointment Form Section */}
          <div className="lg:w-1/2">
            <div className="bg-white p-6 md:p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Make an Appointment</h3>
              <form action="#" method="post">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    cols={20}
                    rows={7}
                    placeholder="Message"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className=" bg-blue-500 text-white py-4 px-2  hover:bg-blue-600 focus:outline-none"
                >
                  Make an Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
