"use client";
import React, { useState } from "react";
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

const ForgotPw = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const formSchema = z.object({
    email: z.string().email({
      message: "Email must be valid.",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function forgotPassword(value: any){
      setLoading(true);
    
      api("/auth/forgot_password")
        .postExample(value)
        .then((response: any) => {
          console.log(response);
          localStorage.setItem('resetEmail', value.email);
          router.push('/reset-password')
        })
        .catch((error: any) => {
          console.error("Error fetching invite code:", error);
        })
        .finally(() => {
          setLoading(false);
        });
  }

  // 2. Define a submit handler.
  function onSubmit(value: z.infer<typeof formSchema>) {
    console.log(value);

    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    forgotPassword(value)
  }

  return (
    <div>
      {loading && <Loader />}
      <AuthSecondary logoImg={logo} heading={"Enter your email address."}>
        <p className="text-sm text-gray-400 text-center">
          Lorem ipsum dolor sit amet consectetur adipiscing elit non, habitant
          himenaeos fermentum eleifend.
        </p>
        <div className="mt-10">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-9 px-10"
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
                        placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="font-semibold" />
                  </FormItem>
                )}
              />
              <Button type="submit" variant="custom">
                Send
              </Button>{" "}
            </form>
          </Form>
        </div>
      </AuthSecondary>
    </div>
  );
};

export default ForgotPw;
