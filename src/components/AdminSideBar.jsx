import React, { Suspense } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { RiShoppingBag3Fill, RiDashboardFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";
import { cn, ScrollToTop } from "../lib/util";
import { BiLoaderAlt } from "react-icons/bi";

export default function AdminSideBar() {
  return (
    <div className="lg:grid grid-cols-5 xl:grid-cols-6 min-h-screen">
      <div className="bg-white w-full lg:px-4 lg:py-4 h-full border-r">
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
        {/* <h5 className="hidden lg:block text-lg p-2 font-bold">Dashboard</h5> */}
        <ul className="grid grid-cols-4 lg:flex lg:flex-col gap-1 py-2 lg:py-4 w-full lg:w-auto justify-around">
          <SidebarLink href="/admin/dashboard">
            <RiDashboardFill />
            <span className="text-xs lg:text-base">Dashboard</span>
          </SidebarLink>

          <SidebarLink href="/admin/events">
            <RiShoppingBag3Fill />
            <span className="text-xs lg:text-base">Events</span>
          </SidebarLink>

          <SidebarLink href="/admin/users">
            <IoIosPeople />
            <span className="text-xs lg:text-base">Users</span>
          </SidebarLink>

          <SidebarLink href="/admin/testimonials">
            <AiFillFileText />
            <span className="text-xs lg:text-base">Testimonials</span>
          </SidebarLink>
        </ul>
      </div>

      <main className="col-span-4 xl:col-span-5 min-h-screen flex flex-col">
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
          "flex lg:flex-row p-2 lg:border flex-col lg:gap-2 items-center lg:px-5 lg:py-3 rounded ",
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
