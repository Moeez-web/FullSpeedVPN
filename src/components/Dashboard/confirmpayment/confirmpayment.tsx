"use client";


import Background from "../shared/Background";
import Image from "next/image";
import payment_check from "@/imgs/icons/paymentcheck.png"
import paypal from "@/imgs/icons/paypal.png"
import stripIcon from "@/imgs/icons/stripIcon.png"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useDashboard } from "@/context/dashboardContext";
import toast from "react-hot-toast";
import { api } from "@/utils/Auth";
import Loader from "@/components/ui/loader";


export  function ConfirmPayment(){
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const { plans } = useDashboard();

    const plan = plans.find((plan :any)=> plan.id == params.id);
    const itemAmount = (plan?.price);
    const TotalAmount = Number(itemAmount ?? 0) ;
    
    const paymentMethods = [
        {id:1, name: 'paypal', src: paypal},
        {id:2, name: 'stripe', src: stripIcon}
    ];

    const [selectedMethod, setSelectedMethod] = useState<string>();

    function handleMethod(methodname: string){
        console.log(methodname);
        
        setSelectedMethod(methodname)
    }

    function handlePayment(){
        if(!selectedMethod){
            toast.error("Kindly, choose the method first");
        }else{
            setLoading((state: any)=>{return !state})
            const payload = {package_id: params.id, user_id: localStorage.getItem('user_id'),payment_method: selectedMethod };
            const token = localStorage.getItem('token');
            api('/user_packages/purchase')
            .postExample(payload, token)
            .then((resp:any)=>{
                console.log(resp);
                if(resp.approval_url){
                    window.location.replace(resp.approval_url);
                }
            })
            .catch((error:any)=>{
                console.error(error); 
            })
            .finally(()=>(setLoading((state: any)=>{return !state})))
        }
    }

    return (
        
       <div className="flex flex-row gap-2">
        {loading && <Loader />}
                       <Background
        width="md:w-2/3 w-full "
        height=""
        classess="p-6 md:p-10 w-full mb-3 flex-col "
      >     
      <div className="flex justify-center w-full">
      <Image src={payment_check} alt="ad" className="w-100" />{" "}
      </div>
      <div className="w-full text-center mb-10">
        <h1 className="font-bold text-3xl mb-3"> Payment Now ${itemAmount}</h1>
        <p className="text-lg font-normal text-[#D2D3D6]">Pay Receipt Copy</p>
      </div>
      <div>
        <h1 className="font-semibold text-md mb-10 text-[#D2D3D6]">Summary</h1>
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
        <div className="flex justify-end p-5">
            <Button variant="custom" className="w-60" onClick={handlePayment} >Payment Now</Button>
        </div>
      </div>
        </Background>
                    <Background
                    width="md:w-1/3 w-full "
                    height=""
                    classess="p-6 md:p-10 w-full mb-3 flex-col"
                  >
      <div className="w-full mb-10">
        <h1 className="font-semibold text-3xl mb-3">Choose Payment Method</h1>
      </div>
      <div className="flex gap-2 w-full">
        {paymentMethods.map((method:any)=>(
            <Image key={method.id} src={method.src} onClick={()=>handleMethod(method.name)} alt="ad" className={selectedMethod == method.name ? "border rounded-lg border-[#F7A809]": ""}  />
        ))}
      {" "}
      </div>
                    </Background>
       </div>

       


    );
}

export default ConfirmPayment;