import Image from "next/image";
import { GithubIcon, InstagramIcon, TiktokIcon, YoutubeIcon } from "public";
import Link from "next/link";
import { OpenBookIcon, SubtasksIcon } from "public";
import React from "react";

const socials = [
  { href: "/", text: "github", icon: GithubIcon },
  { href: "/", text: "instagram", icon: InstagramIcon },
  { href: "/", text: "tiktok", icon: TiktokIcon },
  { href: "/", text: "youtube", icon: YoutubeIcon },
];

const texts = [
  { text: "Let's learn", icon: OpenBookIcon },
  { text: "to code", icon: SubtasksIcon },
  { text: "an application" },
];

function Hero() {
  return (
    <div className="w-full mt-20 z-100">
      <div className="py-3 md:py-4 px-4 mx-auto flex xl:flex-row relative md:flex-col flex-col justify-between md:max-w-3xl xl:max-w-7xl xl:items-center space-y-8">
        {/* Hero Heading */}
        <ul className="">
          {texts.map((item, index) => (
            <li
              className="text-7xl text-text flex flex-row leading-[102%] font-[300]"
              key={index}
            >
              {item.text}{" "}
              {item?.icon && <Image src={item?.icon} width={56} height={56} />}
            </li>
          ))}
        </ul>

        <div className="flex flex-col w-96 space-y-8">
          <p className="text-base leading-[160%]">
            with me <span className="text-brand">farhan agustiansyah</span>, a
            software developer who loves to share how to code in many programing
            languages and multi platforms.
          </p>

          <div className="flex flex-row space-x-6 items-center">
            <Link href="/download-cv">
              <button className="font-regular bg-brand border-[1px] px-6 py-2 rounded-full leading-[160%] border-brand text-[#FFF]">
                Start Learn
              </button>
            </Link>

            {/* Section Socials Media */}
            <ul className="flex space-x-8 md:absolute md:right-0 md:px-4 md:bottom-0 xl:hidden md:flex-col md:space-y-6 md:space-x-0">
              {socials.map((social, index) => (
                <li key={index} className="">
                  <Link href={social.href}>
                    <Image
                      src={social.icon}
                      alt={social.text}
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
