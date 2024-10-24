"use client"
import Header from "./component/Header";
import Image from "next/image";
import rocket from '../../imgs/website/rocket.png'
import userIcon from '../../imgs/website/userIcon.png'
import cardIcon from '../../imgs/website/cardIcon.png'
import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";

export default function Help(){
    return (
        <div className="">
        <Header />
        <section className="container mx-auto mt-10 h-[300px] ">
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-[52px]"> Help</h1>
                <p className="text-lg text-center text-[#A0A4AD] w-[557px]">Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum orci pulvinar felis cras</p>
            </div>
        </section>
        <section id="PaymentMethods" className="container mx-auto mt-5 px-[138px] py-[90px]">
            <h1 className="font-semibold text-5xl text-center my-10">How can we help you?</h1>
            <div className="flex flex-row justify-center items-center gap-8">
                <div className="flex-1 w-[370px] p-7 bg-[#FFF]/5 rounded-3xl">
                <div>
                    <Image src={rocket} alt="Fast Server Icon" width={69} height={69}/>
                </div>
                <h1 className="mt-6 text-2xl font-semibold">General</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum orci pulvinar felis cras.</p>
                </div>
                <div className="flex-1 w-[370px] p-7 bg-[#FFF]/5 rounded-3xl">
                <div>
                    <Image src={userIcon} alt="Fast Server Icon" width={69} height={69}/>
                </div>
                <h1 className="mt-6 text-2xl font-semibold">Account</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum orci pulvinar felis cras</p>
                </div>
                <div className="flex-1 w-[370px] p-7 bg-[#FFF]/5 rounded-3xl">
                <div>
                    <Image src={cardIcon} alt="Fast Server Icon" width={69} height={69}/>
                </div>
                <h1 className="mt-6 text-2xl font-semibold">Payment</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum orci pulvinar felis cras</p>
                </div>
            </div>
        </section>
        <ContactUs />
        <Footer />
        </div>
    );
}