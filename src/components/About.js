import Image from "next/image";
import React from "react";
import User from "../../public/user.png";
import BGSpiral from "../../public/bg_spiral.png";

function About() {
  return (
    <div className="w-full relative">
      <div className="py-3 md:py-4 px-4 mx-auto flex flex-col space-y-10 xl:space-y-0 xl:flex-row xl:justify-between md:max-w-3xl xl:max-w-7xl relative xl:space-x-6 xl:items-center">
        <h1 className="text-text text-5xl md:text-7xl font-[300] leading-[102%]">
          <span className="flex flex-row items-center">
            It's me{" "}
            <Image
              src={User}
              width={56}
              height={56}
              alt="Profile Picture"
              className="rounded-full ml-6"
            />{" "}
          </span>
          Farhan Augustiansyah
        </h1>

        <div className="flex flex-col space-y-6 text-text max-w-md">
          <p className="leading-[160%]">
            I like to code and keep it simple, try something new, and learn
            more. I think sharing knowledge is the best practice to improve my
            skills, and I try to do it.
          </p>
          <p className="leading-[160%]">
            I am currently the Chief Technology Officer at dSociety, a startup
            to help students prepare for their exams.
          </p>
        </div>
      </div>

      <Image
        src={BGSpiral}
        width={847.18}
        height={850.42}
        className="absolute rotate-180 top-0 left-0 -z-10 animate-pulse"
        alt="Decoration spiral background"
      />
    </div>
  );
}

export default About;
