import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const socialIcons = [
  { name: "Facebook", icon: <FaFacebook />, link: "#" },
  { name: "X", icon: "✖️", link: "#" },
  { name: "Instagram", icon: <BsInstagram />, link: "#" },
  { name: "LinkedIn", icon: <LiaLinkedin />, link: "#" },
];

const Footers = () => {
  return (
    <footer className="bg-[#f8f5f3] pt-12 px-5 xl:px-0 font-inherit text-[#222] text-base border-t border-[#eee]">
      <div className="grid grid-cols-1 md:grid-cols-4 justify-between  md:items-start max-w-[1440px] mx-auto  gap-8 md:gap-2 xl:gap-10">
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="list-none p-0 m-0 underline space-y-1">
            <li>
              <Link
                href="/"
                className="text-[#222] no-underline hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-[#222] no-underline hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className="text-[#222] no-underline hover:underline"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                href="contact"
                className="text-[#222] no-underline hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h3 className="font-semibold">Connect With Us</h3>
          <div className="text-[#444] text-[15px] mb-3">
            Follow us on social media for <br />
            the latest updates and events:
          </div>
          <div className="flex gap-4">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href={icon.link}
                aria-label={icon.name}
                className="flex items-center justify-center w-9 h-9 rounded-full border-[1.5px] border-[#e94f7c]  text-xl bg-white transition-colors duration-200 hover:bg-[#e94f7c] hover:text-white"
              >
                {icon.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Download Our App */}
        <div>
          <h3 className="font-semibold">Download Our App</h3>
          <div className="text-[#444] text-[15px] mb-3">
            Get the EventTap app for <br /> Android:
          </div>
          <Link
            href="#"
            className="inline-flex items-center border-[1.5px] border-[#e94f7c] rounded-3xl px-2 lg:px-5 py-1 lg:py-2 text-[#e94f7c] font-medium text-base no-underline gap-2 bg-white hover:bg-[#e94f7c] hover:text-white transition-colors duration-200"
          >
            <span className="inline-flex items-center text-sm lg:text-xl">
              <Image
                src={`/playstore.png`}
                alt="playstore icon"
                width={500}
                height={500}
                className="w-5 lg:w-7 h-5 lg:h-7"
              />
            </span>
            <span>Open Play store</span>
          </Link>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold">Contact Info</h3>
          <div className="text-[#444] text-[15px] mb-2">
            Email: support@eventtap.com
          </div>
          <div className="text-[#444] text-[15px]">
            Phone: +1 (555) 123-4567
          </div>
        </div>
      </div>
      <div className="text-center text-[#888] text-[15px] mt-12 mb-2">
        © 2025 EventTap. All rights reserved.
      </div>
    </footer>
  );
};

export default Footers;
