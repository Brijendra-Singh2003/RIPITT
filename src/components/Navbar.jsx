import React, { useEffect, useRef, useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { RiBloggerLine, RiContactsLine } from "react-icons/ri";

function Navbar() {
  const [prevScrollPos, setprevScrollPos] = useState(0);
  const [top, setTop] = useState(0);
  const [open, setopen] = useState(false);
  const navRef = useRef();

  function toggle() {
    setopen((prevState) => !prevState);
    setTop(0);
  }

  useEffect(() => {
    window.onscroll = function () {
      const HEIGHT = navRef.current.clientHeight + 2;

      navRef.current.classList.remove("duration-300");
      let currentScrollPos = window.scrollY;

      if (navRef.current) {
        const newTop = top + prevScrollPos - currentScrollPos;
        if (newTop < -HEIGHT) {
          setTop(-HEIGHT);
        } else if (newTop > 0 || open) {
          setTop(0);
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
    };
  });

  return (
    <>
      <nav
        className="w-full bg-white z-20 flex flex-col justify-center items-center sticky border-b border-slate-400"
        id="nav"
        style={{ top }}
        ref={navRef}
      >
        <div className="max-w-7xl w-full flex justify-between font-semibold p-4 items-center">
          <a href="/" className="text-4xl font-bold">
            <img
              src="/assets/android-chrome-192x192.png"
              className="size-10"
              alt="Logo."
            />
          </a>
          <div className="bg-transparent flex items-center gap-8">
            <div className="sm:flex hidden gap-8 h-fit">
              <a
                className="hover:underline text-sm flex items-center gap-2"
                href="/#home"
              >
                <InfoOutlinedIcon size={24} />
                <span>About Us</span>
              </a>
              <a
                className="hover:underline text-sm flex items-center gap-2"
                href="/#skills"
              >
                <RiBloggerLine size={24} />
                <span>Blogs</span>
              </a>
              <a
                className="hover:underline text-sm flex items-center gap-2"
                href="#contact"
              >
                <RiContactsLine size={20} />
                Contact Us
              </a>
            </div>
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
                        "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out " +
                        (open ? "-rotate-45" : "-translate-y-1.5")
                      }
                    ></span>
                    <span
                      aria-hidden="true"
                      className={
                        "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out " +
                        (open ? "opacity-0" : "")
                      }
                    ></span>
                    <span
                      aria-hidden="true"
                      className={
                        "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out " +
                        (open ? "rotate-45" : "translate-y-1.5")
                      }
                    ></span>
                  </div>
                </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
