"use client";
import React, {  useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import { paths } from "@/@libs/constants/paths";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const route = useRouter();
  const [checkToken, setCheckToken] = useState(true);
  const menuItems = [
    { href: paths.root, label: "Home" },
    { href: paths?.publicRoot?.about, label: "About" },
    // { href: "/services", label: "Services" },
    // { href: "/add-product", label: "Add Product" },
    // { href: "/product-out", label: "Display Product" },
    // { href: "/order", label: "Orders" },
    { href: paths?.publicRoot?.contact, label: "Contact" },
  ];
  const signOut = () => {
    setCheckToken(true);
    localStorage.removeItem("token");
    if (!localStorage.getItem("token")) {
      setCheckToken(false);
      route.push("/");
    }
  };

  return (
    <nav className=" shadow-md  w-full">
      <div className="container mx-auto bg-[#F8F8FC] px-4 sm:px-2 lg:px-8  fixed z-50 ">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo & Mobile Menu */}
          <div className="flex flex-row-reverse items-center gap-2">
            <Link href={paths?.root} className="flex items-center">
              <Image
                src={"/logo.png"}
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
          <div className="hidden lg:flex items-center md:gap-4 lg:gap-5 xl:gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-(--primary-color-700) transition font-semibold  py-1 rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right: Search & Auth */}
          <div className="flex items-center gap-1 md:gap-2">
            {!checkToken ? (
              <button
                onClick={signOut}
                className="bg-(--primary-color-700)  text-white px-4 py-2 rounded-md font-semibold hover:var(--hover-color) transition cursor-pointer"
              >
                Log Out
              </button>
            ) : (
              <>
                <Link
                  href={paths?.auth?.signUp}
                  className="text-green-800 bg-green-100 font-semibold px-2 md:px-3 py-2 rounded-md hover:bg-green-200 transition"
                >
                  Sign Up
                </Link>
                <Link
                  href={paths?.auth?.login}
                  className="bg-green-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-(--hover-color) transition"
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
                      className="block bg-green-100 text-[var(--primary-color-700)] font-semibold px-3 py-2 rounded-md hover:bg-green-200 transition"
                      onClick={() => setShow(false)}
                    >
                      Sign Up
                    </Link>
                    <Link
                      href="/logIn"
                      className="block bg-[var(--primary-color-700)] text-white px-4 py-2 rounded-md font-semibold hover:bg-[var(--hover-color)] transition"
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
