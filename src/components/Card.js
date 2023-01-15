import Image from "next/image";
import { AndroidIcon, BootstrapIcon, FlutterIcon, TailwindIcon } from "public";
import React from "react";
import Collaborators from "../../public/collaborators.png";

function Card({ project }) {
  const techIcon = (name) => {
    if (name == "flutter") {
      return FlutterIcon;
    } else if (name == "android") {
      return AndroidIcon;
    } else if (name == "tailwind") {
      return TailwindIcon;
    } else {
      return BootstrapIcon;
    }
  };

  return (
    <div className="border-[#E5E5E5] border-dashed border-[1px] px-4 py-4 rounded-[32px] relative cursor-pointer hover:bg-brand group hover:border-0 ease-out duration-700">
      <div className="relative">
        <Image
          src={`/thumbnails/${project.thumbnail}`}
          width={360}
          height={245.3}
          className="w-full md:w-[360px] md:h-{245.3} object-cover rounded-[16.6px]"
          alt={project.name}
        />
        <div className="flex flex-row px-4 py-4 space-x-3 absolute right-0 top-0">
          {project?.techs?.map((tech, index) => (
            <Image
              src={techIcon(tech?.name)}
              width={30}
              height={30}
              alt={tech?.name + " icon"}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center pt-4 pb-2 px-4">
        <div>
          <h1 className="text-text group-hover:text-[#fff] font-medium text-2xl">
            {project.name}
          </h1>
          <p className="text-text group-hover:text-[#fff] font-normal text-[14px]">
            {project.smallDesc}
          </p>
        </div>
        <Image
          src={Collaborators}
          alt={"collaborators"}
          className="object-cover w-28"
        />
      </div>
    </div>
  );
}

export default Card;
