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

import Background from "../shared/Background";
import { FaUser } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import {  useAuthContext } from "@/context/authContext";
import { api } from "@/utils/Auth";
import Loader from "@/components/ui/loader";

interface UserDetails {
  account_type: string;
  current_points: string;
  data_limit_gb: string;
  name: string;
  email: string;
  role: string;
  created_at: string;
  remaining_data_gb: number;
  usage_consumed_gb: string;
  user_id: string;
}

interface CancelablePromise {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  promise: Promise<any>;
  cancel: () => void;
}

export default function Profile() {

  // const [userData, setUserData] = useState<UserDetails | null>(null);

  const [loading, setLoading] = useState(false);
  const { userData } = useAuthContext();

  const subscribedPromises = useRef<CancelablePromise[]>([]); // Correct type

  const formSchema = z.object({
    email: z.string().min(2, {
      message: "Email must be at least 2 characters.",
    }),
    pswrd: z.string().min(2, {
      message: "Password must be at least 2 characters.",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profileName: "",
      account_type: "",
      email: "",
      user_id: "",
      current_points: "",
    },
  });

  const { setValue } = form;

  useEffect(()=>{
    console.log(userData);
      setValue('profileName',userData?.name);
      setValue('email',userData?.email);
      setValue('user_id',userData?.user_id);
      setValue('current_points',userData?.current_points);
      setValue('account_type',userData?.account_type);
  },[userData])

  // useEffect(() => {
  //   setLoading((state)=>{ return !state });
  //   const token = localStorage.getItem('token');
  //   api('/user_details')
  //   .getExample(undefined, token )
  //   .then((response: any)=>{
  //     console.log(response);
  //     setValue('profileName',response.name);
  //     setValue('email',response.email);
  //     setValue('user_id',response.user_id);
  //     setValue('current_points',response.current_points);
  //     setValue('account_type',response.account_type);
  //     localStorage.setItem('user_id',response.user_id);
  //   })
  //   .catch(error=>console.error(error)
  //   ).finally(()=>
  //     setLoading((state)=>{ return !state})
  //   )
  // }, [setValue]);

  // if (loading) return <h2>Loading..!!</h2>;
  // if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="md:flex md:space-x-10">
      {loading && <Loader />}
      <Background
        width="md:w-1/4 w-full"
        height="pb-5"
        classess="justify-center"
      >
        <div className="space-y-5 ">
          <h2>Profile Picture</h2>
          <div className="flex items-center justify-center bg-slate-300 h-24 w-24 rounded-full">
            <FaUser className="text-[#4A439B] h-16 w-16" />
          </div>
        </div>
      </Background>
      <Background
        width="md:w-2/3 w-full "
        height="pb-5"
        classess="sm:mt-5 md:mt-0 pb-2 justify-center"
      >
        <Form {...form}>
          <form className="space-y-7 w-2/3">
            <FormField
              control={form.control}
              name="profileName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Profile Name</FormLabel>
                  <FormControl className="">
                    <Input
                      className="border-none bg-white/10  rounded-2xl p-4"
                      placeholder=""
                      disabled
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="font-semibold" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="account_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Account Type</FormLabel>
                  <FormControl className="">
                    <Input
                      className="border-none bg-white/10  rounded-2xl p-4"
                      placeholder=""
                      disabled
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="font-semibold" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Email</FormLabel>
                  <FormControl className="">
                    <Input
                      className="border-none bg-white/10  rounded-2xl p-4"
                      placeholder=""
                      disabled
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="font-semibold" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="user_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">User ID</FormLabel>
                  <FormControl className="">
                    <Input
                      className="border-none bg-white/10  rounded-2xl p-4"
                      placeholder=""
                      disabled
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="font-semibold" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="current_points"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Current Points</FormLabel>
                  <FormControl className="">
                    <Input
                      className="border-none bg-white/10  rounded-2xl p-4"
                      placeholder=""
                      disabled
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="font-semibold" />
                </FormItem>
              )}
            />
            <div className="md:flex md:space-x-5 md:space-y-0 sm:space-y-3 sm:pb-3">
              <Button
                type="button"
                variant="custom"
                className="p-5 relative top-2 border-[1px] "
              >
                Change Password
              </Button>{" "}
              <Button
                type="button"
                variant="customOutline"
                className="p-5 relative top-2 border-[1px] "
              >
                <p className="text-[#F7A809] ">Points Redemption</p>
              </Button>{" "}
            </div>
          </form>
        </Form>
      </Background>
    </div>
  );
}
