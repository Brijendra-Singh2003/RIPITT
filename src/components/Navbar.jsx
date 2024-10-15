import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";
import { cn, ScrollToTop } from "../lib/util";
import { links } from "../constants/links";

const NLinks = ({ name, href }) => (
  <NavLink
    key={href}
    className={({ isActive }) =>
      "p-2 hover:text-blue-700 hover:underline " +
      (isActive ? "text-blue-700" : "")
    }
    to={href}
    onClick={ScrollToTop}
  >
    <span>{name}</span>
  </NavLink>
);

function Navbar() {
  const [prevScrollPos, setprevScrollPos] = useState(0);
  const [top, setTop] = useState(0);
  const [open, setopen] = useState(false);
  const navRef = useRef();

  function toggle() {
    setopen((prevState) => !prevState);
    setTop(0);

    // if (document.body.style.overflowY === "hidden") {
    //   document.body.style.overflowY = "";
    // } else {
    //   document.body.style.overflowY = "hidden";
    // }
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
      // document.body.overflowY = "";
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
        <div className="container h-20 max-w-7xl flex items-center justify-between py-2 font-medium px-4 lg:px-16">
          <Link
            to="/"
            onClick={ScrollToTop}
            className="text-4xl flex items-center gap-2 sm:gap-4 pr-4 border-blue-600 rounded"
          >
            <img
              src="/assets/android-chrome-192x192.png"
              className="size-12 sm:size-14 p-1.5 bg-blue-600"
              alt="Logo."
            />
            <div className="-space-y-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-600">RIPITT</p>
              <p className="text-xs sm:text-sm">foundation</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-4">
            {links.map(NLinks)}
          </div>
          <div className="relative md:hidden flex place-items-center">
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
      </nav>
      <div
        className={cn(
          "fixed md:hidden z-10 border-t w-full top-20 bg-white h-screen overflow-y-scroll",
          open ? styles.open : styles.close
        )}
      >
        <ul className="w-full py-4 flex flex-col font-medium">
          {links.map((link) => (
              <NavLink
                key={link.href}
                className={({ isActive }) =>
                  "px-8 py-4 border-b text-lg transition " +
                  (isActive ? "text-blue-700" : "text-black")
                }
                to={link.href}
                onClick={() => {
                  ScrollToTop();
                  toggle();
                }}
              >
                <span>{link.name}</span>
              </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
