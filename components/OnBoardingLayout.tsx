import React from 'react';

export default function OnBoardingLayout({ children }: { children: any }) {
  const imageSlider = [
    {
      id: 1,
      title: 'first image',
      url: '/carousel-1.jpg',
    },
    {
      id: 2,
      title: 'second image',
      url: '/carousel-2.jpg',
    },
    {
      id: 3,
      title: 'third image',
      url: '/team-1.jpg',
    },
  ];
  const [current, setCurrent] = React.useState(0);

  const bgImgStyle = {
    backgroundImage: `url(${imageSlider[current]?.url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%',
    transition: 'all 1s ease',
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prevCurrent) => (prevCurrent === imageSlider.length - 1 ? 0 : prevCurrent + 1));
    }, 3000);
    return () => clearTimeout(timer);
  }, [current, imageSlider.length]);

  return (
    <div className="flex h-screen p-6 overflow-hidden">
      <div className="hidden lg:flex lg:w-[35%] left-0 rounded-[24px]" style={bgImgStyle}>
        <div className="flex flex-col justify-between py-12 rounded-[24px] h-full w-full bg-[#393ECC]/20">
          <div className="z-[99] top-[48px] left-[42px] pl-10">
            <div className="">logo here</div>
          </div>
          <div className="bg-white/20 shadow-black/20 backdrop-blur-[20px] z-[99] rounded-xl bottom-[96px] p-10 mx-2">
            <h2 className="text-white text-2xl font-bold leading-[44px] mb-[16px]">
              The smarter way to access healthcare.
            </h2>
            <p className="text-white leading-[28px] text-medium font-normal">
              Experience healthcare the way it should be - convenient, efficient, and personal.
            </p>
            <div>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[65%] md:py-10 flex flex-col items-center">
        <div className="w-full max-w-[550px] md:h-[calc(100vh-64px)] xl:h-[calc(100vh-156px)] overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
