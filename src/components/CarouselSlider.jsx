import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LuCircle, LuCircleDot } from "react-icons/lu";

const CarouselSlider = ({ sliders }) => {
  const [index, setIndex] = useState(0);
  const [mouseEnter, setMouseenter] = useState(false);

  const next = useCallback(() => {
    setIndex((index) => {
      if (index === sliders.length - 1) return 0;
      else return index + 1;
    });
  }, [sliders.length]);

  const prev = () => {
    setIndex((index) => {
      if (index === 0) return sliders.length - 1;
      else return index - 1;
    });
  };

  const arrow =
    "z-40 absolute top-1/2 -translate-y-1/2 flex items-center justify-center h-8 w-8 bg-black bg-opacity-50 rounded-full text-white opacity-50 hover:bg-opacity-50 group-hover:opacity-100 hover:scale-110 transition-all duration-100";

  const dots =
    "stroke-white fill-[rgba(0,0,0,.5)] opacity-50 group-hover:opacity-100 hover:scale-110 focus-visible:scale-110 transition-all duraiton-100";

  useEffect(() => {
    if (!mouseEnter) {
      const move = setInterval(() => {
        next();
      }, [7000]);
      return () => clearInterval(move);
    }
  }, [next, mouseEnter]);

  return (
    <div
      onMouseEnter={() => setMouseenter(true)}
      onMouseLeave={() => setMouseenter(false)}
      className="w-full h-full relative group"
    >
      <div className="w-full h-full flex">
        {sliders.map((sld, i) => (
          <div key={i} className="w-full h-full flex-grow-0 flex-shrink-0">
            <img
              src={sld?.img}
              alt={sld?.title}
              style={{ translate: `${-100 * index}%` }}
              className={`z-40 object-cover w-full h-full ease-in-out duration-500`}
            />
            <div
              style={{ textShadow: "1px 0 black" }}
              className={`z-40 bottom-8 sm:bottom-12 left-12 sm:left-16 right-10 absolute text-white capitalize ${
                i === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              } transition-all duration-300`}
            >
              <div className="text-base sm:text-2xl lg:text-3xl mb-0 sm:mb-5">{i === index ? sld?.title : ""}</div>
              <div>{i === index ? sld?.content : ""}</div>
            </div>
            {i === index ? sld?.content : ""}
            <div className="z-40 cursor-pointer absolute top-2 left-2 text-white bg-black bg-opacity-50 text-xs rounded px-1 opacity-20">
              {index + 1} -{sliders.length}
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => prev()} className={`${arrow} left-3 sm:left-6`}>
        <FaChevronLeft />
      </button>
      <button onClick={() => next()} className={`${arrow} right-3 sm:right-6`}>
        <FaChevronRight />
      </button>
      <div className="z-40 absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
        {sliders.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)}>
            {i === index ? <LuCircleDot className={`${dots}`} /> : <LuCircle className={`${dots}`} />}
          </button>
        ))}
      </div>
    </div>
  );
};
CarouselSlider.propTypes;

export default CarouselSlider;
