import React from "react";
import { stats, lineBusiness } from "../constants";
import photo from "../assets/photo1.png";
import { ArchiveBoxArrowDownIcon } from "@heroicons/react/24/solid";

const About = () => {
  return (
    <div className="flex flex-col text-primary gap-16 pt-20">
      <div className="flex gap-16 items-center justify-center">
        <div className="basis-1/2 md:flex justify-center hidden">
          <div className="transition-all duration-300 bg-[url('/src/assets/photo1.png')] w-[25rem] bg-cover bg-center bg-no-repeat square rounded-3xl hover:scale-110"></div>
        </div>
        <div className="md:basis-1/2 flex flex-col items-center gap-6">
          <h1 className="text-2xl font-bold border-b-4 border-b-secondary px-3 py-1">
            About Us
          </h1>
          <div className="transition-all duration-300 bg-[url('/src/assets/photo1.png')] w-[80%] bg-cover bg-center bg-no-repeat square rounded-3xl hover:scale-110 md:hidden block"></div>
          <p className="text-justify font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            auctor felis. Praesent eget nisi a ante tincidunt maximus. Duis
            fermentum ultrices dui, eu hendrerit enim molestie at. Fusce nunc
            elit, porttitor quis facilisis at.
          </p>
          <div className="flex gap-6 mt-4">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className="bg-primary text-white py-2 px-4 rounded-xl"
              >
                <h1 className="text-4xl font-semibold">{stat.value}</h1>
                <p className="text-lg font-semibold">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-2xl font-bold border-b-4 border-b-secondary px-3 py-1">
          Line Business
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-16 gap-y-10">
          {lineBusiness.map((line, index) => (
            <div
              id={line.name}
              className="flex sm:flex-row flex-col gap-8 bg-light-gray px-8 py-16 rounded-2xl items-center"
            >
              <div className="text-white bg-primary p-6 rounded-full">
                <line.icon className="w-16" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-center mb-2">
                  {line.name}
                </h1>
                <p className="text-justify font-medium">{line.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
