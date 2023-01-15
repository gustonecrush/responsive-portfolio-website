import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <div className="w-full">
      <div className="py-3 md:py-4 px-4 mx-auto flex flex-col space-y-6 md:max-w-3xl xl:max-w-7xl relative items-center">
        <h1 className="text-text font-[300] text-[24px] leading-[102%]">
          So, What are you waiting for?
        </h1>
        <Link href="/download-cv" className="hover:animate-pulse">
          <button className="font-regular bg-brand border-[1px] px-6 py-2 rounded-full leading-[160%] border-brand text-[#FFF]">
            Let's Start
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
