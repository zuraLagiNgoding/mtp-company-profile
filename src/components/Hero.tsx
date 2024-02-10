import React from "react";

const Hero = () => {
  return (
    <div className="flex text-primary gap-4 min-h-screen items-center">
      <div className="flex flex-col gap-4 sm:basis-1/2 basis-3/4">
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold">Lorem Ipsum Dolor Sit Amet</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi
            nisi, vestibulum quis mauris vulputate.
          </p>
        </div>
        <div>
          <a
            className="bg-secondary rounded-lg px-4 py-2 font-semibold text-white text-sm"
            href=""
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
