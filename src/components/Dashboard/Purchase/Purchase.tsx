"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
//import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";

import { useEffect, useState } from "react";
import Background from "../shared/Background";

import ad from "@/imgs/icons/ad.png";
import cloud from "@/imgs/icons/cloud_data.png";
import power from "@/imgs/icons/power.png";
import verified from "@/imgs/icons/verified.png";
import star from "@/imgs/icons/star.png";

import Image from "next/image";
import SingleLoader from "@/components/ui/singleLoader";
import { api } from "@/utils/Auth";
import {useDashboard } from "../../../context/dashboardContext"
import { Button } from "@/components/ui/button";
import { FaArrowCircleRight, FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Loader from "@/components/ui/loader";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { RadioGroup } from "@radix-ui/react-radio-group";
import toast from "react-hot-toast";

interface IPlans{
  id: number,
  name: string,
  description: string,
  price: number
}

export default function Purchase() {
  const router = useRouter();
  
  const [loading, setLoading] = useState(false);
  const { plans, setPlans, redeemPlans, setRedeemPlans } = useDashboard();
  const [selectedPlan, setSelectedPlan] = useState<number>();
  const [selectedReward, setSelectedRewards] = useState<number>();
  const [planLoader, setPlanLoader] = useState<boolean>(false);
  const [tabState, setTabState] = useState('plan-purchase');

  console.log('selectedPlan', selectedPlan);
  console.log('setSelectedRewards', selectedReward);

  
  // useEffect(() => {
  //   setPlanLoader((state: any)=> {return !state})
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     api('/user_packages')
  //       .getExample(undefined, token)
  //       .then((resp) => {
  //         console.log('API Response:', resp);
  //         setPlans(resp.packages);
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching plans:', error);
  //       })
  //       .finally(()=> setPlanLoader((state: any)=> {return !state}));
  //   }
  // }, []);

  function handleRedeemPointPurchase(){
    setTabState('points-redeem');
    setPlanLoader((state: any)=> {return !state})
    const token = localStorage.getItem('token');
    if (token) {
      api('/user/redeemable_packages')
        .getExample(undefined, token)
        .then((resp) => {
          console.log('API Response:', resp);
          setRedeemPlans(resp.packages);
        })
        .catch((error) => {
          console.error('Error fetching plans:', error);
        })
        .finally(()=> setPlanLoader((state: any)=> {return !state}));
      }
  }

  function handleRedeemPakage(planId: number | undefined){
    setLoading((state)=>{return !state})
    const token = localStorage.getItem('token');
    api(`user/redeemable_packages/${planId}/redeem`)
    .postExample(undefined, token)
    .then((response: any)=>{console.log(response);
    })
    .catch((error:any)=>{console.error(error);
    })
    .finally(()=>{setLoading((state)=>{return !state})})
  }
  // const FormSchema = z.object({
  //   type: z.enum(["all", "mentions", "none"], {
  //     required_error: "You need to select a notification type.",
  //   }),
  // });

  // const form = useForm<z.infer<typeof FormSchema>>({
  //   resolver: zodResolver(FormSchema),
  // });

  // function onSubmit(data: z.infer<typeof FormSchema>) {
  //   console.log({
  //     title: "You submitted the following values:",
  //     description: (
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //       </pre>
  //     ),
  //   });
  // }
  function handlePurchase(){
    if(tabState == 'plan-purchase' && !selectedPlan){
      toast.error("Please, Select the plan first to proceed")
    }else if(tabState == 'plan-purchase' && selectedPlan){
      router.push(`purchase/confirmation-payment/${selectedPlan}`)
    }else if(tabState == 'points-redeem' && selectedReward){
      handleRedeemPakage(selectedReward)
    }else if(tabState == 'points-redeem' && !selectedReward){
      toast.error("Please, Select the plan first to proceed")
    }
  }

  return (
    <div className="flex justify-center h-full relative ">
     {loading && <Loader />}
      <Background
        width="md:w-2/3 w-full "
        height=""
        classess="p-6 md:p-10 w-full max-w-2xl mb-3 "
      >
        {/* <RadioGroup>
        <RadioGroupItem value="Hello">
        </RadioGroupItem>
        </RadioGroup> */}

        <Tabs defaultValue="plan-purchase" className="w-full ">
          <TabsList className="bg-[#FFFFFF]/5 rounded-full py-8 flex justify-center">
            <TabsTrigger value="plan-purchase" onClick={()=>setTabState('plan-purchase')} className="w-1/2 ">
              <span className=" font-medium">Plan Purchase</span>
            </TabsTrigger>
            <TabsTrigger value="points-redeem" onClick={handleRedeemPointPurchase} className="w-1/2">
              <span className=" font-medium">Points Redeem</span>
            </TabsTrigger>
          </TabsList>

          {/* Plan Purchase Content */}
          <TabsContent value="plan-purchase">
            <div className="py-5 space-y-4 text-white">
              <div className="grid grid-cols-2 gap-4 gap-x-10 gap-y-5 ">
                <div className=" border-r-[1px]  border-white/10  ">
                  <p className="flex items-center ">
                    <span className="mr-2 w-6 h-6">
                      <Image src={ad} alt="ad" className="" />{" "}
                    </span>
                    No Ads
                  </p>
                  <p className="text-gray-400 text-sm">
                    Worem ipsum dolor sit amet, consectetur ad
                  </p>
                </div>

                <div>
                  <p className="flex items-center">
                    <span className="mr-2 w-6 h-6">
                      <Image src={power} alt="ad" className="" />{" "}
                    </span>
                    Fast
                  </p>
                  <p className="text-gray-400 text-sm">
                    Worem ipsum dolor sit amet, consectetur ad
                  </p>
                </div>
                <div className="border-r-[1px]  border-white/10">
                  <p className="flex items-center">
                    <span className="mr-2 w-6 h-6">
                      <Image src={cloud} alt="ad" className="" />{" "}
                    </span>
                    All Servers
                  </p>
                  <p className="text-gray-400">
                    Worem ipsum dolor sit amet, consectetur ad
                  </p>
                </div>
                <div>
                  <p className="flex items-center">
                    <span className="mr-2 w-6 h-6">
                      <Image src={verified} alt="ad" className="" />{" "}
                    </span>
                    Secure
                  </p>
                  <p className="text-gray-400">
                    Worem ipsum dolor sit amet, consectetur ad
                  </p>
                </div>
              </div>

              {/* Pricing Cards */}
              <div className="space-y-5 ">
              {planLoader ? (
  <SingleLoader />
) : (
  plans.map((plan: any) => (
    <div
      key={plan.id}
      className={`flex justify-between bg-[#FFFFFF]/5 cursor-pointer items-center p-4 border rounded-xl ${
        selectedPlan === plan.id ? "border-[#F7A809]" : ""
      }`}
      onClick={() => setSelectedPlan(plan.id)}
    >
      <div className="w-2/3">
        <p className="font-semibold">{plan.name}</p>
        <p className="text-gray-400 text-sm">{plan.description}</p>
      </div>
      <div>
        <p className="text-lg font-semibold">{plan.price}</p>
        <p className="text-xs">/Month</p>
      </div>
      <div>
      <RadioGroup   >
        <RadioGroupItem checked={plan.id === selectedPlan} value={plan.id} onClick={()=>setSelectedPlan((value)=>{return plan.id})} ></RadioGroupItem>
      </RadioGroup>
      </div>


      {/* <Button variant="custom" size="icon" onClick={()=>router.push(`purchase/confirmation-payment/${plan.id}`)}>
        <FaArrowCircleRight  />
      </Button> */}
    </div>
  ))
)}


              </div>
            </div>
          </TabsContent>

          {/* Points Redeem Content */}
          <TabsContent value="points-redeem">
            <div className="py-6 text-white space-y-3">
              <h2 className="text-center text-3xl  ">You have 1200 points</h2>
              <p className="text-center text-sm text-gray-400">
                Redeem your points for rewards!
              </p>
            </div>
            {/* <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6"
              >
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Notify me about...</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                className="radio-checked:bg-blue-600 radio-checked:border-blue-600"
                                value="all"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              All new messages
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="mentions" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Direct messages and mentions
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="none" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Nothing
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form> */}
            {/* Rewards Cards */}
            <div className="space-y-5 ">
  {planLoader ? (
    <SingleLoader />
  ) : (
    redeemPlans.map((plan: any) => (
      <div
        key={plan.id}
        className={`flex justify-between bg-[#FFFFFF]/5 cursor-pointer items-center p-4 border rounded-xl ${
          selectedReward === plan.id ? "border-[#F7A809]" : ""
        }`}
        onClick={() => setSelectedRewards(plan.id)}
      >
        <div className="w-2/3">
          <p className="font-semibold">{plan.name}</p>
          <p className="text-gray-400 text-sm">{plan.description}</p>
        </div>
        <div>
          <span className="flex items-center">
            <span className="relative right-2">
              <Image src={star} alt="star" />
            </span>
            <p className="text-sm font-semibold">{plan.points?? 700}</p>
          </span>
          <p className="text-xs relative left-2">/Points</p>
        </div>
        <div className="items-center">
        <RadioGroup   >
        <RadioGroupItem checked={plan.id === selectedReward} value={plan.id} onClick={()=>setSelectedPlan((value)=>{return plan.id})} ></RadioGroupItem>
      </RadioGroup>
        </div>
        {/* <Button variant="custom" size="icon" onClick={()=>handleRedeemPakage(plan.id)}>
        <FaArrowCircleRight  />
      </Button> */}
      </div>
    ))
  )}
</div>

          </TabsContent>
        </Tabs>
        <div className="absolute">
        <div className="fixed bottom-0 left-20 w-full backdrop-blur-md">
      <div className="flex justify-center p-4">
    <Button variant={'custom'} className="w-25" onClick={handlePurchase}>
      {tabState == 'plan-purchase' ? 'Proceed to Checkout' : 'Redeem Now'}
    </Button>
  </div>
</div>
        </div>

      </Background>
    </div>
  );
}
