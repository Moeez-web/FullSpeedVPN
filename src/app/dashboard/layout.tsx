import Dashboard from "@/components/Dashboard";
import DashboardHeader from "@/components/Dashboard/Header/DashboardHeader";
import Sidebar from "@/components/Dashboard/Siderbar/Siderbar";
import { AuthProvider } from "@/context/authContext";

import React from "react";

const UserDashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
            <div className="flex h-dvh">
      <Sidebar />
      <div className="flex w-full flex-col">
        <DashboardHeader />
        {/* Body Starts  */}
        <div className="container mx-auto mt-8 px-9">
          {children}
        </div>

        {/* Body Ends  */}
      </div>
    </div>
    </AuthProvider>


  );
};

export default UserDashboard;
