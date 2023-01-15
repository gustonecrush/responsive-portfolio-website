import Image from "next/image";
import Link from "next/link";
import React from "react";
import User from "../../public/user.png";
import Menu from "../../public/menu.svg";
import { GithubIcon, InstagramIcon, TiktokIcon, YoutubeIcon } from "public";

const menus = [
  { href: "/", text: "home" },
  { href: "/about", text: "about" },
  { href: "/contact", text: "contact" },
];

const socials = [
  { href: "/", text: "github", icon: GithubIcon },
  { href: "/", text: "instagram", icon: InstagramIcon },
  { href: "/", text: "tiktok", icon: TiktokIcon },
  { href: "/", text: "youtube", icon: YoutubeIcon },
];

function Header() {
  return (
    <header className="w-full bg-[#FFF] fixed z-50">
      <div className="py-3 md:py-4 px-4 mx-auto flex flex-row justify-between md:max-w-3xl xl:max-w-7xl items-center">
        {/* Header Menu Section */}
        <div className="flex flex-row justify-between items-center space-x-6">
          {/* Profile Section */}
          <div>
            <Link
              href="/"
              className="flex flex-row items-center py-2 md:px-3 space-x-2 md:space-x-4"
            >
              {/* Profile Picture */}
              <Image
                src={User}
                width={50}
                height={50}
                alt={"User Profile Picture"}
                className="md:w-[40px] md:h-[40px] object-cover rounded-full"
              />

              {/* Name */}
              <span className="font-semibold leading-[160%] text-text">
                it's me
              </span>
            </Link>
          </div>

          {/* Menu Section */}
          <nav className="hidden md:flex">
            <ul className="flex flex-row justify-evenly space-x-2 transition-all duration-1000">
              {menus.map((menu, index) => (
                <li className="text-text py-2 px-3 group font-regular" key={index}>
                  <Link href={menu.href} className="group-hover:text-brand">{menu.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Social Media and CV Section */}
        <div className="flex flex-row items-center space-x-6">
          {/* Section Socials Media */}
          <ul className="hidden xl:flex xl:flex-row xl:space-x-6">
            {socials.map((social, index) => (
              <li key={index} className="hover:animate-bounce p-2">
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

          {/* Section Download CV */}
          <div className="flex flex-row items-center space-x-3">
            <Link href="/download-cv">
              <button className="text-text hover:bg-brand hover:text-[#FFF] transition-all font-regular border-[1px] px-6 py-2 rounded-full leading-[160%] border-brand">
                Download CV
              </button>
            </Link>

            <Image
              src={Menu}
              alt={"Menu"}
              className="md:hidden cursor-pointer hover:animate-pulse"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
