import React, { useEffect, useRef, useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { RiBloggerLine, RiContactsLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { quickLinks } from "./Footer";

import styles from "./Navbar.module.css";
import { cn } from "../lib/util";

function Navbar() {
  const [prevScrollPos, setprevScrollPos] = useState(0);
  const [top, setTop] = useState(0);
  const [open, setopen] = useState(false);
  const navRef = useRef();

  function toggle() {
    setopen((prevState) => !prevState);
    setTop(0);

    if (document.body.style.overflowY === "hidden") {
      document.body.style.overflowY = "";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }

  useEffect(() => {
    window.onscroll = function () {
      const HEIGHT = navRef.current.clientHeight + 2;

      navRef.current.classList.remove("duration-300");
      let currentScrollPos = window.scrollY;

      if (navRef.current) {
        const newTop = top + prevScrollPos - currentScrollPos;
        if (open || newTop > 0) {
          setTop(0);
        } else if (newTop < -HEIGHT) {
          setTop(-HEIGHT);
        } else {
          setTop(newTop);
        }
      }

      setprevScrollPos(currentScrollPos);
    };

    window.onscrollend = () => {
      const HEIGHT = navRef.current.clientHeight + 2;

      navRef.current.classList.add("duration-300");

      if (top < -HEIGHT / 2 && window.scrollY > HEIGHT) {
        setTop(-HEIGHT);
      } else {
        setTop(0);
      }
    };

    return () => {
      window.onscroll = null;
      window.onscrollend = null;
      document.body.overflowY = "";
    };
  });

  return (
    <>
      <nav
        className="w-full bg-white z-20 flex flex-col justify-center items-center sticky shadow"
        id="nav"
        style={{ top }}
        ref={navRef}
      >
        <div className="w-full max-w-7xl flex justify-between font-semibold px-4 xl:px-16">
          <a href="/" className="text-4xl flex gap-4 font-bold p-4">
            <img
              src="/assets/android-chrome-192x192.png"
              className="size-12 bg-black"
              alt="Logo."
            />
            <div className="-space-y-2">
              <p className="text-3xl text-blue-700">RIPITT</p>
              <p className="text-sm">foundation</p>
            </div>
          </a>
          <div
            className="flex items-center font-mono gap-4 xl:gap-8"
            style={{ letterSpacing: 2 }}
          >
            <NavLink
              className={({ isActive }) =>
                "p-0.5 hidden sm:flex items-center gap-2 border-y-4 border-transparent transition hover:text-blue-700 hover:border-b-blue-500 " +
                (isActive ? "text-blue-700" : "")
              }
              to="/about"
            >
              <InfoOutlinedIcon size={24} />
              <span>ABOUT</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "p-0.5 hidden sm:flex items-center gap-2 border-y-4 border-transparent transition hover:text-blue-700 hover:border-b-blue-500 " +
                (isActive ? "text-blue-700" : "")
              }
              to="/blog"
            >
              <RiBloggerLine size={24} />
              <span>BLOGS</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "p-0.5 hidden sm:flex items-center gap-2 border-y-4 border-transparent transition hover:text-blue-700 hover:border-b-blue-500 " +
                (isActive ? "text-blue-700" : "")
              }
              to="/contact"
            >
              <RiContactsLine size={20} />
              <span>CONTACT</span>
            </NavLink>
            <div className="relative flex place-items-center sm:max-w-xl mx-auto">
              <button
                className="text-black w-10 h-10 relative focus:outline-none bg-transparent"
                onClick={toggle}
              >
                <span className="sr-only">Open main menu</span>
                <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span
                    aria-hidden="true"
                    className={
                      "block absolute h-0.5 w-5 bg-current transform transition ease-in-out " +
                      (open ? "-rotate-45" : "-translate-y-1.5")
                    }
                  ></span>
                  <span
                    aria-hidden="true"
                    className={
                      "block absolute h-0.5 w-5 bg-current transform transition ease-in-out " +
                      (open ? "opacity-0" : "")
                    }
                  ></span>
                  <span
                    aria-hidden="true"
                    className={
                      "block absolute h-0.5 w-5 bg-current transform transition ease-in-out " +
                      (open ? "rotate-45" : "translate-y-1.5")
                    }
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={cn(
          "fixed z-10 border-t w-full top-20 bg-white h-screen overflow-y-scroll",
          open ? styles.open : styles.close
        )}
      >
        <ul className="pt-8 sm:pt-16 px-8 sm:px-16 w-full max-w-7xl font-semibold mx-auto">
          {quickLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.href} onClick={toggle}>
                {({ isActive }) => (
                  <span
                    className={cn(
                      "text-xl space-x-4 py-2 md:py-4 sm:px-8 sm:text-3xl hover:text-blue-600 hover:underline flex items-center group",
                      isActive ? "text-blue-600 underline" : ""
                    )}
                  >
                    <InfoOutlinedIcon />
                    <span>{link.name}</span>
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
