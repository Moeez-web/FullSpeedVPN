"use client";
import React, { useEffect, useState } from "react";
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

import AuthSecondary from "../components/AuthSecondary";

import logo from "@/imgs/logo.png";
import { api } from "@/utils/Auth";
import Loader from "@/components/ui/loader";
import { useRouter } from "next/navigation";

const ResetPw = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const formSchema = z.object({
    email: z.string().email({
      message: "Email must be valid.",
    }),
    otp: z.string().min(6,{
      message: "OTP must be 6 digit.",
    }),
    password: z.string().min(8, {
      message: "Email must be at least 8 characters.",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      otp: ""
    },
  });
  const { setValue } = form;
  useEffect(() => {
    const resetEmail = localStorage.getItem("resetEmail");
    if (resetEmail) setValue("email", resetEmail);
  }, [setValue]);

function resetPassword(value:any ){
  setLoading(true);
  api("/auth/reset_password")
    .postExample(value)
    .then((response: any) => {
      console.log(response);
      localStorage.clear();
      router.push('/sign-in')
    })
    .catch((error: any) => {
      console.error("Error fetching invite code:", error);
    })
    .finally(() => {
      setLoading(false);
    });
}
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    resetPassword(values);
    console.log(values);
  }

  return (
    <div>
       {loading && <Loader />}
      <AuthSecondary logoImg={logo} heading={"Reset your password"}>
        <p className="text-sm text-gray-400 text-center">
          Enter your strong new password setup
        </p>
        <div className="mt-10">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 px-10"
            >
              <FormField 
                
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Email</FormLabel>
                    <FormControl className="">
                      <Input
                      readOnly disabled={true}
                        className="border-none bg-white/10 rounded-2xl p-4"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="font-semibold" />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">OTP</FormLabel>
                    <FormControl className="">
                      <Input
                        className="border-none bg-white/10 rounded-2xl p-4"
                        type="text"
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
                    <FormLabel className="text-sm">New Password</FormLabel>
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

              <Button type="submit" variant="custom">
                Confirm
              </Button>{" "}
            </form>
          </Form>
        </div>
      </AuthSecondary>
    </div>
  );
};

export default ResetPw;
