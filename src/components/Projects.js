import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "./Card";

const projects = [
  {
    id: 1,
    name: "Bookies",
    smallDesc: "Read digital book app",
    techs: [
      { id: 1, name: "flutter" },
      { id: 2, name: "tailwind" },
    ],
    collaborators: [],
    thumbnail: "thumbnail1.png",
  },
  {
    id: 2,
    name: "BWalet",
    smallDesc: "Business wallet",
    techs: [
      { id: 1, name: "bootstrap" },
      { id: 2, name: "android" },
    ],
    collaborators: [],
    thumbnail: "thumbnail2.png",
  },
  {
    id: 3,
    name: "Gojek",
    smallDesc: "Home screen gojek apps",
    techs: [
      { id: 1, name: "flutter" },
      { id: 2, name: "android" },
    ],
    collaborators: [],
    thumbnail: "thumbnail3.png",
  },
  {
    id: 4,
    name: "Bookies",
    smallDesc: "Read digigal book app",
    techs: [
      { id: 1, name: "flutter" },
      { id: 2, name: "tailwind" },
    ],
    collaborators: [],
    thumbnail: "thumbnail4.png",
  },
  {
    id: 5,
    name: "Bookies",
    smallDesc: "Business wallet",
    techs: [
      { id: 1, name: "bootstrap" },
      { id: 2, name: "android" },
    ],
    collaborators: [],
    thumbnail: "thumbnail5.png",
  },
  {
    id: 6,
    name: "Bookies",
    smallDesc: "Home screen gojek apps",
    techs: [
      { id: 1, name: "flutter" },
      { id: 2, name: "android" },
    ],
    collaborators: [],
    thumbnail: "thumbnail6.png",
  },
];

function Projects() {
  return (
    <div className="w-full flex flex-col items-center space-y-8">
      <div className="py-3 md:py-4 px-4 mx-auto grid grid-cols-1 gap-9 md:grid-cols-2 xl:grid-cols-3 auto-rows-auto md:max-w-3xl xl:max-w-7xl relative">
        {projects.map((project, index) => (
          <Card project={project} />
        ))}
      </div>

      <Link href="/download-cv">
        <button className="text-text hover:bg-brand hover:text-[#FFF] transition-all font-regular border-[1px] px-6 py-2 rounded-full leading-[160%] border-brand">
          Load More
        </button>
      </Link>
    </div>
  );
}

export default Projects;
