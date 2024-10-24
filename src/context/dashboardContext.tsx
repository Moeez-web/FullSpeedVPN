"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { api } from "@/utils/Auth";

// Interface for plan objects
interface IPlans {
  id: number;
  name: string;
  description: string;
  price: number;
}

// Interface for DashboardContext state
interface IDashboardContext {
  plans: IPlans[];
  setPlans: React.Dispatch<React.SetStateAction<IPlans[]>>;
  redeemPlans: IPlans[];
  setRedeemPlans: React.Dispatch<React.SetStateAction<IPlans[]>>;
}

// Create the context with a default value
export const DashboardContext = createContext<IDashboardContext | undefined>(undefined);

// Props interface for the DashboardProvider
interface DashboardProviderProps {
  children: ReactNode;
}

// DashboardProvider component
export function DashboardProvider({ children }: DashboardProviderProps) {
  const [plans, setPlans] = useState<IPlans[]>([]);
  const [redeemPlans, setRedeemPlans] = useState<IPlans[]>([]);

  // Fetch user packages (plans) from API
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api("/user_packages")
        .getExample(undefined, token)
        .then((resp) => {
          console.log("API Response:", resp);
          setPlans(resp.packages);
        })
        .catch((error) => {
          console.error("Error fetching plans:", error);
        });
    }
  }, []);

  return (
    <DashboardContext.Provider value={{ plans, setPlans, redeemPlans, setRedeemPlans }}>
      {children}
    </DashboardContext.Provider>
  );
}

// Custom hook to use the Dashboard context
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
