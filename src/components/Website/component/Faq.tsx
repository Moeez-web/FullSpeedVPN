"use client"
import Image from "next/image";
import stars from '../../../imgs/website/stars.png';
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
export default function FAQUI(){
    const FAQS = [
        {id: 1, question: "What is Neuros and how does it differ from other analytics platforms?", answer: "Neuros is an AI-powered business analytics platform designed to provide real-time insights, predictive analytics, and seamless integrations with various tools. Unlike traditional analytics platforms, Neuros harnesses the power of artificial intelligence to offer more accurate forecasts, customizable dashboards, and a user-friendly interface tailored for businesses of all sizes."},
        {id: 2, question: "How does the AI-driven predictive analytics feature work?", answer: "Neuros is an AI-powered business analytics platform designed to provide real-time insights, predictive analytics, and seamless integrations with various tools. Unlike traditional analytics platforms, Neuros harnesses the power of artificial intelligence to offer more accurate forecasts, customizable dashboards, and a user-friendly interface tailored for businesses of all sizes."},
        {id: 3, question: "Is my data secure with Neuros?", answer: "Neuros is an AI-powered business analytics platform designed to provide real-time insights, predictive analytics, and seamless integrations with various tools. Unlike traditional analytics platforms, Neuros harnesses the power of artificial intelligence to offer more accurate forecasts, customizable dashboards, and a user-friendly interface tailored for businesses of all sizes."},
        {id: 4, question: "Can I integrate Neuros with other tools and platforms I currently use??", answer: "Neuros is an AI-powered business analytics platform designed to provide real-time insights, predictive analytics, and seamless integrations with various tools. Unlike traditional analytics platforms, Neuros harnesses the power of artificial intelligence to offer more accurate forecasts, customizable dashboards, and a user-friendly interface tailored for businesses of all sizes."},
    ];
    const [selectedFAQ, setFAQ] = useState<number>();
    function handleFAQ(faqId: number){
        if(faqId == selectedFAQ){
            setFAQ(undefined);
        }else{
            setFAQ(faqId);
        }
    }
    return (
        <section id="FAQs" className="container mx-auto  px-[138px] py-[90px]">
            <div className="flex flex-row justify-center gap-5">
                <div className="flex-1 w-[476px]">
                    <div className="bg-[#E48920] p-2 flex gap-2 rounded-3xl w-24">
                    <Image src={stars} alt="stars" /> <span> FAQ </span> 
                    </div>
                    <div className="mt-5">
                    <h1 className="text-5xl font-semibold" >Frequently asked questions</h1>
                    <p className="mt-6 text-lg text-[#D2D3D6]">
                    Explore our frequently asked questions to learn more about Neuros’s features, security, integration capabilities, and more
                    </p>
                    </div>
                </div>
                <div className="flex-1 w-[680px] ">
                    {FAQS.map((faq:{id:number, question: string, answer: string})=>(
                        <div key={faq.id} className="flex-1 flex flex-col bg-[#FFF]/5 border-b-2 border-b-[#161650] ">
                            <div className={`flex flex-row justify-between p-5 items-center ${faq.id == selectedFAQ ? 'border-l-2  border-l-[#085DEC]': '' } `}>
                            <p className="font-bold text-lg ">{faq.question}</p>
                            <p onClick={()=>handleFAQ(faq.id)} >{faq.id == selectedFAQ ? <FaChevronUp />: <FaChevronDown /> }</p>
                            </div>
                        {faq.id === selectedFAQ && <p className="p-5 text-base text-[#A0A4AD]">{faq.answer}</p>}
                    </div>
                    ))}
                    
                </div>

            </div>
        </section>
    );
}