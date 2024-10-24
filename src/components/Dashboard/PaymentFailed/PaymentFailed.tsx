"use client"
import Background from "../shared/Background";
import paymentFailedIcon from "../../../imgs/paymentFailedIcon.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useDashboard } from "@/context/dashboardContext";
import { api } from "@/utils/Auth";

export default function PaymentFailed(){
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const { plans } = useDashboard();

    const plan = plans.find((plan :any)=> plan.id == params.id);
    const itemAmount = (plan?.price);
    const TotalAmount = Number(itemAmount ?? 0) ;
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        setLoading(true);
        api("/user_packages/payment_cancel")
          .getExample(undefined, token)
          .then((response: any) => {
            console.log(response);
            
          })
          .catch((error: any) => {
            console.error("Error fetching invite code:", error);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);
    
    return (
        <Background
        width=" w-full "
        height=""
        classess="p-6 md:p-10 w-full mb-3 flex-col"
      >
            <div className=" flex flex-col justify-center items-center w-full mb-10">
                <div className="mb-8">
                <Image src={paymentFailedIcon} alt="Payment Failed Icon" width={165} height={165} />
                </div>
                <div className="mb-20 flex flex-col justify-center">
                <h1 className="font-bold text-3xl mb-3">Payment Failed!</h1>
                <h1 className="font-medium text-center text-[#D2D3D6] text-lg mb-3">Payment Unsuccessful</h1>
                <Button variant="customorange" className="p-3 w-32 mx-auto" >Try Again <span className="ml-6"> <FaArrowRight  /></span></Button>
                </div>
                
                <div className="border-t border-[#807a7a]  w-[642px] py-6 px-2">
                    <h4 className="font-semibold text-[#D2D3D6]">Summary</h4>
      <div className="mt-7">
      <div className="p-5 rounded-2xl bg-[#FFF]/5">
            <div className="flex flex-row justify-between">
            <div className="space-y-4 text-[#D2D3D6]">
                <p>Item Subtotal</p>

            </div>
            <div className="space-y-4 ">
                <p>${itemAmount}</p>
            </div>
            </div>
        </div>
        <div className="flex justify-end gap-24 p-5">
            <div className="text-[#D2D3D6] "> Total:</div>
            <div>${TotalAmount}</div>
        </div>

      </div>
                </div>
            </div>
        </Background>
    );
}   