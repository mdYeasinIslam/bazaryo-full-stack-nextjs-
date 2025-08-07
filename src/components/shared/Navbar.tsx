'use client'
import React, { useState } from "react";
import logo from "../../../public/logo.png";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { BiSearchAlt2 } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const user = { email: "h@gamil.com" };

    const menuItems = [
        { href: "/home", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/product-In", label: "Add Product" },
        { href: "/product-out", label: "Display Product" },
        { href: "/order", label: "Orders" },
        { href: "/contact", label: "Contact" },
    ];

    const signOut = () => {
        // handle sign out
    };

    return (
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo & Mobile Menu */}
            <div className="flex flex-row-reverse items-center gap-2">
              <Link href="/" className="flex items-center">
                <Image
                  src={logo}
                  alt="shop logo"
                  width={500}
                  height={500}
                  className="w-8 h-8"
                />

                {/* <img src={logo} alt="Logo" className="h-10 w-10" /> */}
                <span className="ml-2 text-xl font-bold text-green-700 duration-300 hover:text-green-900">
                  Bazaryo
                </span>
              </Link>
              {/* Mobile menu button */}
              <button
                onClick={() => setShow(!show)}
                className=" lg:hidden text-2xl text-gray-700 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {show ? <RxCross2 /> : <AiOutlineMenuUnfold />}
              </button>
            </div>

            {/* Center: Menu (Desktop) */}
            <div className="hidden lg:flex items-center md:gap-4 lg:gap-5 xl:gap-5">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-[var(--primary-color)] transition font-medium  py-1 rounded-md"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right: Search & Auth */}
            <div className="flex items-center gap-1 md:gap-2">
              <BiSearchAlt2 className="w-6 h-6 text-slate-800 hover:text-[var(--primary-color)] cursor-pointer" />
              {!user?.email ? (
                <Link
                  href="/logIn"
                  onClick={signOut}
                  className="bg-[var(--primary-color)]  text-white px-4 py-2 rounded-md font-semibold hover:bg-[var(--hover-color)] transition"
                >
                  Log Out
                </Link>
              ) : (
                <>
                  <Link
                    href="/signUp"
                    className="text-green-800 bg-green-100 font-semibold px-2 md:px-3 py-2 rounded-md hover:bg-green-200 transition"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/logIn"
                    className="bg-green-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-[var(--hover-color)] transition"
                  >
                    Log In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {show && (
          <div className="lg:hidden bg-white shadow-md absolute top-16 left-0 w-full z-40">
            <ul className="flex flex-col space-y-2 px-6 py-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-gray-700 hover:text-blue-600 font-medium px-2 py-2 rounded-md transition"
                    onClick={() => setShow(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {/* <li className="mt-2">
                {!user?.email ? (
                  <Link
                    href="/logIn"
                    onClick={() => {
                      signOut();
                      setShow(false);
                    }}
                    className="block  text-black px-4 py-2 rounded-md font-semibold  transition"
                  >
                    Log Out
                  </Link>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="/signUp"
                      className="block bg-green-100 text-[var(--primary-color)] font-semibold px-3 py-2 rounded-md hover:bg-green-200 transition"
                      onClick={() => setShow(false)}
                    >
                      Sign Up
                    </Link>
                    <Link
                      href="/logIn"
                      className="block bg-[var(--primary-color)] text-white px-4 py-2 rounded-md font-semibold hover:bg-[var(--hover-color)] transition"
                      onClick={() => setShow(false)}
                    >
                      Log In
                    </Link>
                  </div>
                )}
              </li> */}
            </ul>
          </div>
        )}
      </nav>
    );
};

export default Navbar;
