"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import AuthSecondary from "../components/AuthSecondary";
import logo from "@/imgs/logo.png";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { api } from "../../../utils/Auth";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';
import Loader from "@/components/ui/loader";


const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [email,setUserEmail] = useState("");

  const FormSchema = z.object({
    otp: z.string().min(6, {
      message: "Your one-time password must be 6 characters.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      otp: otp,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("OTP Values", data);
    setLoading((state)=> {return !state});
    const email = localStorage.getItem('email')
    api('/auth/verify_email')
    .postExample({ otp: data.otp, email })
    .then((data) => {
      console.log('Success:', data);
      localStorage.removeItem('emailSentTime');
      localStorage.setItem('emailVerified', Date.now().toString());
      router.push('/register');
    })
    .catch((error) => console.error('Error:', error))
    .finally(()=>{setLoading((state)=> {return !state});});
    setOtp(data.otp);
  }

  useEffect(() => {
    // Check if emailSent and timestamp are present in localStorage
    const emailSentTime = localStorage.getItem("emailSentTime");
    
    if (emailSentTime) {
      const currentTime = Date.now();
      const timeElapsed = Math.floor((currentTime - parseInt(emailSentTime)) / 1000);

      // If less than 60 seconds have passed, start countdown
      if (timeElapsed < 60) {
        setTimeLeft(60 - timeElapsed);
      }
    }
  }, []);

  useEffect(() => {
    // Start a countdown when timeLeft is greater than 0
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  // Resend OTP logic
  const handleOTP = (e: any) => {
    e.preventDefault();
    setLoading((state)=> {return !state});
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    api('/auth/register')
      .postExample({ name, email, device_id: uuidv4() })
      .then((data) => {
        console.log('Success:', data);
        localStorage.setItem('emailSentTime', Date.now().toString());
        setTimeLeft(60); // Restart the timer
        // router.push('/otp-verification'); // Redirect to OTP verification page
      })
      .catch((error) => console.error('Error:', error))
      .finally(()=>{setLoading((state)=> {return !state});});
  };

  return (
    <div>
      {loading && <Loader />}
      <AuthSecondary logoImg={logo} heading={"Confirm your email"}>
        <p className="text-sm text-gray-400 text-center">
          Enter the code we sent to the email {email}
        </p>
        <div className="mt-10 ">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-7 "
            >
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup className="flex justify-center w-full">
                          {[1, 2, 3, 4, 5, 6].map((item, index) => (
                            <InputOTPSlot
                              key={index}
                              className="border-none bg-white/10 text-[#A6EC17] rounded-3xl  mr-2  px-11 py-7"
                              index={index}
                            />
                          ))}
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" variant="custom">
                Verify
              </Button>
            </form>
          </Form>
          <div className="mt-5">

            {timeLeft > 0 ? (

              <p className="text-[#A6EC17] text-center font-semibold text-sm">
                Code expires in {timeLeft} seconds
              </p>
              
            ) : (
              <>
              <p className="text-gray-400 text-center mb-2 text-sm">
              Dont you receive any code
            </p>
              <Link
                href={"#"}
                onClick={handleOTP}
                className="text-[#A6EC17] text-center font-semibold text-sm"
              >
                <p>Resend New Code</p>
              </Link>
              </>
            )}
          </div>
        </div>
      </AuthSecondary>
    </div>
  );
};

export default OtpVerification;
