"use client"
import Image from "next/image";
import thankyou from "../../../imgs/Thank_you_img.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RadioGroup } from "@radix-ui/react-radio-group";
import {  useSearchParams, useRouter } from "next/navigation";
// import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { api } from "@/utils/Auth";
import Loader from "@/components/ui/loader";

export default function ThankYou() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [loading, setLoading] = useState(false);


  
  useEffect(()=>{
    const paymentId = searchParams.get('paymentId');
    // const token = searchParams.get('token');
    const payerID = searchParams.get('PayerID');
    console.log(paymentId);
    console.log(payerID);
    
    const token = localStorage.getItem("token");
    api("user_packages/payment_success")
    .getExample({paymentId: paymentId, payerId: payerID},token)
    .then((response:any)=>{
      console.log(response);
      
    })
    .catch((error:any)=>{
      console.error(error);
      
    })
  },[])

  return (
    <div className="h-screen flex flex-col items-center justify-center relative px-4">
      {loading && <Loader />}
      {/* Wrapping the image inside a div for better control on responsiveness */}
      <div className="relative w-full max-w-[880px]">
        <Image
          src={thankyou}
          alt="thankyou"
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <div className="absolute flex flex-col items-center space-y-4 text-center">
        <h1 className="font-bold text-2xl sm:text-3xl">Payment Successful</h1>
        <p className="font-medium text-base sm:text-lg text-[rgba(249,249,250,0.5)]">
          Will come again
        </p>
        <div className="">
        <Link href={'/dashboard/purchase'}>
        <Button variant="customgreen" className="w-40 sm:w-48 mt-6 bg-[#09B651]" >
          Go back home
        </Button>
        </Link>

        </div>
      </div>
    </div>
  );
}
