"use client";

import React from "react";

import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { api } from "@/utils/Auth";

import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/authContext";



const DashboardHeader = () => {
  const router = useRouter();
  const { userData } = useAuthContext();
  const authLogout = (event: any) => {
    const token = localStorage.getItem('token');
    api('/auth/logout')
    .postExample({},token)
    .then(response=>{
        localStorage.clear();
        router.push('/sign-in');
    })
    .catch(error=> console.error(error))
    
    
  };

  return (
    <>
      {/* header starts */}
      <div className="w-full border-s-[1px] border-s-gray-900 justify-between flex h-20 bg-[#FFF]/10 p-6 items-center">
        <div className=" text-white text-xl  font-bold ">
          <h2 className="">My Account</h2>
        </div>

        {/* right side */}

        <div className="flex items-center space-x-4">
          <IoIosNotificationsOutline className="h-6 w-6 text-gray-400" />
          <IoSettingsOutline className="h-6 w-6 text-gray-400" />
          <Separator orientation="vertical" className=" bg-[#FFF]/10 h-5" />
          {/* user details */}
          <span className="flex space-x-3 items-center ">
            <div className="flex items-center justify-center bg-slate-300 h-6 w-6 rounded-full">
              <FaUser className="text-[#4A439B]" />
            </div>
            <div className="text-white">
              <p>{userData?.name}</p>
              {/* <p className="text-sm text-gray-400">Advertiser</p> */}
            </div>
          </span>
          {/* user details ends */}
          <Separator orientation="vertical" className=" bg-[#FFF]/10 h-5" />
          <div className="flex space-x-1 ">
            <IoLogOut className="h-6 w-6 text-gray-400" />
            <Link
              href="/"
              onClick={authLogout }
              className="text-gray-400 hover:text-gray-500"
            >
              Log out
            </Link>
          </div>
        </div>
        {/* right side ends */}
      </div>
      {/* header ends  */}
    </>
  );
};

export default DashboardHeader;
