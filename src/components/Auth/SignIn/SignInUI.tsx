/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "../../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { v4 as uuidv4 } from 'uuid';
import Link from "next/link";

import React, { useState } from "react";
import AuthPrimary from "../components/AuthPrimary";
import mobileImg from "@/imgs/mobile.png";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {api, setUserData} from "../../../utils/Auth";
import { useRouter } from "next/navigation";
import Loader from "@/components/ui/loader";

const SignInUI = ({}) => {


  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const formSchema = z.object({
    email: z.string().email({
      message: "Email must be valid.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(state => {return !state});
    const device_id = uuidv4();
    api("/auth/login")
    .postExample({...values, device_id: device_id})
    .then((response=>{
      setUserData({...response, email: values.email});
      router.push('/dashboard');
    }))
    .catch((error)=>{
      console.error(error);
    })
    .finally(()=>{setLoading(state => {return !state});})
  }

  // if (isLoginLoading) return <h2>Loading..!!</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      {loading && <Loader />}
        <AuthPrimary leftImg={mobileImg} heading={"Sign In"}>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 px-16"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Email</FormLabel>
                    <FormControl className="">
                      <Input
                        className="border-none bg-white/10  rounded-2xl p-4"
                        placeholder="mvpuxdesign@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="font-semibold" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Password</FormLabel>
                    <FormControl className="">
                      <Input
                        className="border-none bg-white/10 rounded-2xl p-4"
                        type="password"
                        {...field}
                      />

                    </FormControl>
                    <FormMessage className="font-semibold" />
                  </FormItem>
                )}
              />
              <Link href="/forgot-password" className="inline-block w-full text-sm text-[#E48920] text-right">
                Forget Password?
              </Link>
              <Button type="submit" variant="custom">
                Sign In
              </Button>{" "}
              <div className="flex items-center">
                <hr className="border-t-2 w-[50%]  border-gray-400 " />
                <p className="text-sm text-[#616161] px-1 leading-3	">Or</p>
                <hr className="border-t-2 w-[50%]  border-gray-400 " />
              </div>
              <div className="space-y-2 sm:space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-none bg-white/10 hover:bg-white/30 rounded-xl sm:rounded-2xl p-3 sm:p-4"
                >
                  <FaFacebook className="mr-2 bg-blue-700   " />
                  <p className="text-gray-400">Continue with Facebook</p>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-none text-gray-400 bg-white/10 hover:bg-white/30 rounded-xl sm:rounded-2xl p-3 sm:p-4"
                >
                  <FcGoogle className="mr-2" />
                  <p className="text-gray-400">Continue with Google</p>
                </Button>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm text-center">
                Already have an account?{" "}
                <Link href="/register" className="text-white font-semibold">
                  Sign Up
                </Link>
              </p>
            </form>
          </Form>
        </AuthPrimary>
    </div>
  );
};

export default SignInUI;
