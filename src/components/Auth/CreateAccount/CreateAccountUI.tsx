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
import { v4 as uuidv4 } from 'uuid';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import securityImg from "@/imgs/security.png";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import AuthPrimary from "../components/AuthPrimary";
import {api} from "../../../utils/Auth";
import { useRouter } from 'next/navigation';import { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
import Loader from "@/components/ui/loader";


// Initialize useNavigate

const CreateAccountUI = () => {
  const router = useRouter(); 
  const [timeLeft, setTimeLeft] = useState(0);
  const [loading, setLoading] = useState(false);
  const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Email must be a valid email address.",
    }),
    pswrd: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    confirmPswrd: z.string().min(8, {
        message: "Confirm Password must be at least 8 characters.",
    }),
}).refine(data => data.pswrd === data.confirmPswrd, {
    message: "Passwords must match.",
    path: ["confirmPswrd"], // Path where the error should be attached
});

// Initialize the form with useForm
const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name: "",
        email: "",
        pswrd: "",
        confirmPswrd: "",
    },
});
const { setValue, formState: { errors }, handleSubmit } = form;

useEffect(() => {
  const storedName = localStorage.getItem('name');
  const storedEmail = localStorage.getItem('email');

  if (storedName) setValue('name', storedName);
  if (storedEmail) setValue('email', storedEmail);
}, [setValue]); // Run only once when the component mounts

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setLoading((state)=> {return !state});
    console.log(values);
    const data = {email: values.email, name: values.name, password:values.pswrd, password_confirmation: values.confirmPswrd , device_id: localStorage.getItem('device_id')  }
    api('/auth/complete_registration').postExample(data)
    .then((data:any) => {
      formReset();
      console.log('Success:', data);
    })
    .catch((error:any) => console.error('Error:', error))
    .finally(()=>{setLoading((state)=> {return !state});});
  }

  useEffect(() => {
    // Check if emailSent and timestamp are present in localStorage
    const emailVerifiedTime = localStorage.getItem("emailVerified");
    
    if (emailVerifiedTime) {
      const currentTime = Date.now();
      const timeElapsed = Math.floor((currentTime - parseInt(emailVerifiedTime)) / 1000);

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
        setTimeLeft((prev: any) => {
          if (prev <= 1) {
            formReset();
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft]);
  
  function formReset(){
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('device_id');
    form.reset({
      name: "",
      email: "",
      pswrd: "",
      confirmPswrd: ""
    });
  }

  function handleOTP(e: any){
    e.preventDefault();
    setLoading((state)=> {return !state});
    const formValues = form.getValues();
    const { name, email } = formValues;
    const uuid = uuidv4();
  if(name && email){
  api('/auth/register').postExample({name, email, device_id: uuid })
  .then((data:any) => {
    console.log('Success:', data);
    localStorage.setItem('email', email);
    localStorage.setItem('name', name);
    localStorage.setItem('device_id', uuid);
    localStorage.setItem('emailSentTime',Date.now().toString());
    router.push('/otp-verification');
  }).catch((error:any)=> console.error(error))
  .finally(()=>{
    setLoading((state)=> {return !state});
  });
  }

    
  }

  return (
    <div>
      {loading && <Loader />}
      <AuthPrimary leftImg={securityImg} heading={"Create An Account"}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Name</FormLabel>
                  <FormControl className="">
                    <Input
                      disabled={timeLeft > 0}
                      className="border-none bg-white/10 rounded-2xl p-4"
                      placeholder="Enter your name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="font-semibold text-xs" />
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
                      disabled={timeLeft > 0 ? true: false}
                      className="border-none bg-white/10  rounded-2xl p-4"
                      placeholder="mvpuxdesign@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="font-semibold text-xs" />
                </FormItem>
              )}
            />
            {timeLeft > 0 ? <p className="text-sm text-[#E48920]">Verification done in {timeLeft}</p>:
                        <Link href={"/otp-verification"} onClick={handleOTP} className="text-sm text-[#E48920]">
                        Send OTP
                      </Link>
            }

            <FormField
              control={form.control}
              name="pswrd"
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
                  <FormMessage className="font-semibold text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPswrd"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Confirm Password</FormLabel>
                  <FormControl className="">
                    <Input
                      className="border-none bg-white/10 rounded-2xl p-4"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="font-semibold text-xs" />
                </FormItem>
              )}
            />
            <Button type="submit" variant="custom">
              Sign Up
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
              <Link href="/sign-in" className="text-white font-semibold">
                Sign In
              </Link>
            </p>
          </form>
        </Form>
      </AuthPrimary>
    </div>
  );
};

export default CreateAccountUI;
