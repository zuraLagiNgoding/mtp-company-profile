import React, { MouseEventHandler, useRef } from "react";
import { customers } from "../constants";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const Customers = () => {
  // start-function drag & scroll
  const ref = useRef<HTMLDivElement>(null);
  const chevronLeft = useRef<HTMLDivElement>(null);
  const chevronRight = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    if (ref.current !== null) {
      setIsMouseDown(true);
      setStartX(e.pageX - ref.current.offsetLeft);
      setScrollLeft(ref.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    if (ref.current !== null) {
      const x = e.pageX - ref.current.offsetLeft;
      const walk = (x - startX) * 1;
      ref.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleToStart = () => {
    if (
      ref.current !== null &&
      chevronLeft.current !== null &&
      chevronRight.current !== null
    ) {
      ref.current.scrollLeft = 0;
      chevronLeft.current.classList.remove("!flex");
      chevronRight.current.classList.remove("!hidden");
    }
  };

  const handleToEnd = () => {
    if (
      ref.current !== null &&
      chevronLeft.current !== null &&
      chevronRight.current !== null
    ) {
      ref.current.scrollLeft = 999;
      chevronRight.current.classList.add("!hidden");
      chevronLeft.current.classList.add("!flex");
    }
  };
  // end-function drag & scroll

  return (
    <div className="flex flex-col items-center gap-16 w-full relative">
      <span className="anchor" id="customers"></span>
      <h1 className="text-2xl font-bold border-b-4 border-b-secondary px-3 py-1">
        Our Customers
      </h1>
      <div className="w-full relative">
        <div
          ref={chevronLeft}
          className={clsx(
            "w-[100px] h-full absolute justify-center items-center transition-transform hover:scale-110 scale-105 hidden bg-gradient-to-l from-transparent via-transparent to-gray-500 opacity-75 cursor-pointer rounded-lg",
            ref.current !== null
              ? ref.current.scrollLeft > 100 && "!flex"
              : null
          )}
          onClick={handleToStart}
        >
          <ChevronLeftIcon className="w-16" />
        </div>
        <div
          ref={chevronRight}
          className={clsx(
            "w-[100px] h-full absolute justify-center items-center transition-transform hover:scale-110 scale-105 right-0 sm:flex hidden bg-gradient-to-r from-transparent via-transparent to-gray-500 opacity-75 cursor-pointer rounded-lg",
            ref.current !== null
              ? ref.current.scrollLeft > 800 && "!hidden"
              : null
          )}
          onClick={handleToEnd}
        >
          <ChevronRightIcon className="w-16" />
        </div>
        <div
          ref={ref}
          className="flex flex-col sm:flex-row gap-16 items-center w-full overflow-x-auto no-scrollbar"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {customers.map((customer, index) => (
            <img
              draggable={false}
              className="md:min-w-[150px] min-w-[100px] select-none "
              src={customer.logo}
              alt={customer.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;
