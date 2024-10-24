"use client";
import React, { useEffect, useState } from "react";
import OrderCard from "./OrderCard";

import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { api } from "@/utils/Auth";
import Loader from "@/components/ui/loader";

const OrderList = () => {
  // const [date, setDate] = useState<DateRange | undefined>({
  //   from: new Date(2022, 0, 20),
  //   to: addDays(new Date(2022, 0, 20), 20),
  // });
  const [loading, setLoading] = useState<boolean>(true);
  const [hitoryType, setHistoryType] = useState();
  const [purchased_packages, setPurchasePackages]  = useState([]);
  const [redeemed_packages, setRedeemedPackages] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    // setLoading(true);
    api("/user/order_histories")
      .getExample(undefined, token)
      .then((response: any) => {
        setPurchasePackages(response.order_history.purchased_packages);
        setRedeemedPackages(response.order_history.redeemed_packages);
        console.log("Response Referrals: ", purchased_packages);
      })
      .catch((error: any) => {
        console.error("Error fetching invite code:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const [orders, setOrders] = useState<any>([]);
  function handleValueChange(value: string){
    if(value == "purchase"){
      setOrders((value: any)=> {
        return purchased_packages?.map((item: any) => ({
          packageName: item.package_name,
          // price: item.price,
          pointsOrPrice: item.price+'/'+ (((item.package_duration_in_days/30).toFixed(0)) == "1" ? ((item.package_duration_in_days/30).toFixed(0)  + " month") :  ((item.package_duration_in_days/30).toFixed(0)  + " months")),
          orderType: "Purchase",
          status: "Success"
        }))
      } )
      // console.log(purchased_packages);
      
      // console.log(orders);
      
    }else if(value == "reedeem"){
      setOrders((value: any)=> {
        return redeemed_packages?.map((item: any) => ({
          packageName: item.package_name,
          // price: item.price,
          pointsOrPrice: (((item.package_duration_in_days/30).toFixed(0)) == "1" ? ((item.package_duration_in_days/30).toFixed(0)  + " month") :  ((item.package_duration_in_days/30).toFixed(0)  + " months")),
          orderType: "Reedeem",
          status: "Success"
        }))
      } )
  
    }
    
  }
  return (
    <div className="px-14 w-full ">
      { loading && <Loader /> }
      <div className="flex justify-between mb-4">
        {/* Date Range Picker */}
        {/* <div className={cn("grid gap-2 w-2/4 mr-3")}>
          <Popover>
            <PopoverTrigger
              className="bg-white/10 w-full rounded-full p-6"
              asChild
            >
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-full justify-start  text-left font-normal hover:bg-white/5",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div> */}

        {/* Select Type Purchase */}
        <Select onValueChange={handleValueChange}>
          <SelectTrigger className="w-2/4 bg-white/10 rounded-full p-6 hover:bg-white/5">
            <SelectValue placeholder="Type (Purchase/Redeem)" />
          </SelectTrigger>
          <SelectContent className="bg-gray-900">
            <SelectItem value="purchase">Purchase</SelectItem>
            <SelectItem value="reedeem">Reedeem</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7">
        {orders.map((order: any, index:any) => (
          <OrderCard
            key={index}
            packageName={order.packageName}
            pointsOrPrice={order.pointsOrPrice}
            orderType={order.orderType}
            status={order.status}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderList;
