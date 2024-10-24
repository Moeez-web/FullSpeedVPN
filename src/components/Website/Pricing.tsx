"use client"

import Header from "./component/Header";
import Footer from "./component/Footer";
import { FaCheck, FaRegWindowClose } from "react-icons/fa";
import FAQUI from "./component/Faq";
import { Button } from "@/components/ui/button";
import ContactUs from "./component/ContactUs";


export default function Pricing(){

    const pakages =  [
        {title: "Starter", price: 3.99, discount: 83, timeLimit: "2 Weeks", 
            features: [ 
                { featureId: 1, featureTitle:"Works on All Devices", isAvailable: true},
                { featureId: 2, featureTitle:"Unlimited Bandwitch", isAvailable: true},
                { featureId: 3, featureTitle:"Unlimited Orders", isAvailable: true},
                { featureId: 4, featureTitle:"Unlimited VPN Location", isAvailable: true},
                { featureId: 5, featureTitle:"Encrypted Connection", isAvailable: true},
                { featureId: 6, featureTitle:"Extra locations", isAvailable: false},
                { featureId: 7, featureTitle:"Windows/Mac included", isAvailable: false},
                { featureId: 8, featureTitle:"No Traffic Logs", isAvailable: false},
             ]
        },
        {title: "Standard", price: 5.99, discount: 72, timeLimit: "4 Weeks", 
            features: [ 
                { featureId: 1, featureTitle:"Works on All Devices", isAvailable: true},
                { featureId: 2, featureTitle:"Unlimited Bandwitch", isAvailable: true},
                { featureId: 3, featureTitle:"Unlimited Orders", isAvailable: true},
                { featureId: 4, featureTitle:"Unlimited VPN Location", isAvailable: true},
                { featureId: 5, featureTitle:"Encrypted Connection", isAvailable: true},
                { featureId: 6, featureTitle:"Extra locations", isAvailable: false},
                { featureId: 7, featureTitle:"Windows/Mac included", isAvailable: false},
                { featureId: 8, featureTitle:"No Traffic Logs", isAvailable: false},
             ]
        },
        {title: "Professional", price: 9.99, discount: 31, timeLimit: "8 Weeks", 
            features: [ 
                { featureId: 1, featureTitle:"Works on All Devices", isAvailable: true},
                { featureId: 2, featureTitle:"Unlimited Bandwitch", isAvailable: true},
                { featureId: 3, featureTitle:"Unlimited Orders", isAvailable: true},
                { featureId: 4, featureTitle:"Unlimited VPN Location", isAvailable: true},
                { featureId: 5, featureTitle:"Encrypted Connection", isAvailable: true},
                { featureId: 6, featureTitle:"Extra locations", isAvailable: false},
                { featureId: 7, featureTitle:"Windows/Mac included", isAvailable: false},
                { featureId: 8, featureTitle:"No Traffic Logs", isAvailable: false},
             ]
        }
    ]
    return(
        <div className="">
            <Header />
            <section className="container mx-auto mt-10 h-[300px] ">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-semibold text-[52px]"> Pricing</h1>
                    <p className="text-lg text-center text-[#A0A4AD] w-[557px]">Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum orci pulvinar felis cras</p>
                </div>
            </section>
            <section className="container mx-auto px-[138px] py-[90px]">
                <div className="flex flex-row justify-center gap-3">
                    {pakages.map((pakage: { title: string; price: number; discount: number; timeLimit: string; features: { featureId: number; featureTitle: string; isAvailable: boolean; }[]; })=>(
                         <div key={pakage.title} className="flex flex-1 flex-col gap-2 justify-center items-center max-w-[370px] bg-[#FFF]/5 p-4 rounded-3xl ">
                         <div className="flex-1 w-[310px] flex flex-col items-center gap-2 border-dashed border-b-2 border-[#81848b]">
                             <div className="text-xl font-semibold">{pakage.title}</div>
                             <div ><p className="text-4xl font-bold">${pakage.price}/<span className="text-2xl font-normal">month</span> </p></div>
                             <div><p className="text-sm font-normal">Per month: <span className="text-base font-semibold bg-gradient-to-r from-[#E48920]  to-[#DF9A12] inline-block text-transparent bg-clip-text"> {pakage.discount}% OFF</span></p></div>
                             <div className="text-base font-medium mb-5">{pakage.timeLimit}</div>
                         </div>
                         <div className="flex flex-col  w-full">
                            {pakage.features.map((feature:{ featureId: number; featureTitle: string; isAvailable: boolean; })=>(
                             <div key={feature.featureId} className="flex flex-row justify-between px-5 py-3">
                             <p className="text-base">{feature.featureTitle}</p>
                            { feature.isAvailable ? (<FaCheck color="#F7A809" />): (<FaRegWindowClose color="#F7A809" />) } 
                            </div>
                            ))}

                         </div>
                         <div>
                            <Button variant={"custom"} className="w-64">Get Started Now</Button>
                         </div>
                     </div>
                    ))}
                    
                </div>
            </section>
            <FAQUI />
            <ContactUs />

        <Footer />
        </div>
    );
}