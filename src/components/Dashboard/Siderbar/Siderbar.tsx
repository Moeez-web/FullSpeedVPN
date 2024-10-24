"use client";
import { FaUser } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { BsCartCheckFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { BiSolidMessageDots } from "react-icons/bi";

import logo from "@/imgs/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [sidebarHeight, setSidebarHeight] = useState(0);
  const currentPath = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const dynamicHeight = Math.max(
        window.innerHeight,
        window.scrollY + window.innerHeight
      );
      setSidebarHeight(dynamicHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      style={{ height: `${sidebarHeight < 1200 ? "1400" : sidebarHeight}px` }}
      className="bg-[#FFF]/10
       w-64   text-gray-300 p-6"
    >
      <div className="mb-9 ">
        <Link href="/">
          <Image src={logo} width={190} alt="logo" />{" "}
        </Link>
      </div>
      <nav>
        <ul className="space-y-6">
          <li className="flex items-center ml-3 ">
            <h2>Menu</h2>
          </li>
          <li
            className={`${
              currentPath === "/dashboard" && "bg-white/10"
            } flex items-center space-x-2 hover:bg-white/10 px-2 py-3 rounded-xl cursor-pointer`}
          >
            <FaUser className="h-6 w-6" />
            <Link href="/dashboard">My Profile</Link>
          </li>
          <li
            className={`${
              (currentPath === "/dashboard/purchase" ||  currentPath.startsWith("/dashboard/purchase/confirmation-payment]") || currentPath.startsWith("/dashboard/purchase/payment-failed")) && "bg-white/10"
            } flex items-center space-x-2 hover:bg-white/10 px-2 py-3 rounded-xl cursor-pointer`}
          >
            <HiShoppingBag className="h-6 w-6" />
            <Link href="/dashboard/purchase">Purchase</Link>
          </li>
          <li
            className={`${
              currentPath === "/dashboard/order" && "bg-white/10"
            } flex items-center space-x-2 hover:bg-white/10 px-2 py-3 rounded-xl cursor-pointer`}
          >
            <BsCartCheckFill className="h-6 w-6" />
            <Link href="/dashboard/order">My Order</Link>
          </li>
          <li
            className={`${
              currentPath === "/dashboard/invitation" && "bg-white/10"
            } flex items-center space-x-2 hover:bg-white/10 px-2 py-3 rounded-xl cursor-pointer`}
          >
            <FaUserFriends className="h-6 w-6" />
            <Link href="/dashboard/invitation">Friend Invitation</Link>
          </li>
          <li
            className={`${
              currentPath === "/dashboard/feedback" && "bg-white/10"
            } flex items-center space-x-2 hover:bg-white/10 px-2 py-3 rounded-xl cursor-pointer`}
          >
            <BiSolidMessageDots className="h-6 w-6" />
            <Link href="/dashboard/feedback">Support</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
