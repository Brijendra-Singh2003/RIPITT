import React, { Suspense } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { RiShoppingBag3Fill, RiDashboardFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";
import { cn, ScrollToTop } from "../lib/util";
import { BiLoaderAlt } from "react-icons/bi";

export default function AdminSideBar() {
  return (
    <div className="md:flex min-h-screen">
      <div className="bg-white w-full md:min-w-64 md:w-64 md:px-4 md:py-4 md:min-h-screen h-full border">
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
            <p className="text-2xl sm:text-3xl font-extrabold text-blue-600">
              RIPITT
            </p>
            <p className="text-xs sm:text-sm">foundation</p>
          </div>
        </Link>

        {/* DASHBOARD */}
        {/* <h5 className="hidden md:block text-lg p-2 font-bold">Dashboard</h5> */}
        <ul className="grid grid-cols-4 md:flex md:flex-col gap-1 py-2 md:py-4 w-full md:w-auto justify-around">
          <SidebarLink href="/admin/dashboard">
            <RiDashboardFill />
            <span className="text-xs md:text-base">Dashboard</span>
          </SidebarLink>

          <SidebarLink href="/admin/events">
            <RiShoppingBag3Fill />
            <span className="text-xs md:text-base">Events</span>
          </SidebarLink>

          <SidebarLink href="/admin/projects">
            <IoIosPeople />
            <span className="text-xs md:text-base">Projects</span>
          </SidebarLink>

          <SidebarLink href="/admin/testimonials">
            <AiFillFileText />
            <span className="text-xs md:text-base">Testimonials</span>
          </SidebarLink>
        </ul>
      </div>

      <main className="flex-grow min-h-screen flex flex-col">
        <Suspense
          fallback={
            <BiLoaderAlt size={64} className="animate-spin mx-auto mt-24" />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

const SidebarLink = ({ href, children }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          "flex md:flex-row p-2 md:border flex-col md:gap-2 items-center md:px-5 md:py-3 rounded ",
          isActive
            ? "text-blue-700 bg-blue-50 border-blue-700/50"
            : "text-muted-foreground hover:text-blue-700 hover:bg-blue-50"
        )
      }
      to={href}
    >
      {children}
    </NavLink>
  );
};
