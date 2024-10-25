"use client";

import { useState } from "react";
import phone1 from '../../imgs/phone1.png';
import mobilebackground from '../../imgs/mobilebackground.png';
import groupusersimg from '../../imgs/groupusersimg.png';
import google from '../../imgs/website/google.png';
import facebook from '../../imgs/website/facebook.png';
import twitter from '../../imgs/website/twitter.png';
import whatsapp from '../../imgs/website/whatsapp.png';
import telegram from '../../imgs/website/telegram.png';
import yt from '../../imgs/website/yt.png';
import customImg1 from '../../imgs/website/customImg1.png';
import windows from '../../imgs/website/windows.png';
import mac from '../../imgs/website/mac.png';
import ios from '../../imgs/website/ios.png';
import android from '../../imgs/website/android.png';
import linux from '../../imgs/website/linux.png';
import androidtv from '../../imgs/website/androidtv.png';
import homeFeatureImg from '../../imgs/website/homeFeatureImg.png';
import phonesImg from '../../imgs/website/phonesImg.png';
import appStore from '../../imgs/website/appStore.png';
import googlePlay from '../../imgs/website/googlePlay.svg';
import worldWideLocation from '../../imgs/website/worldWideLocation.png';
import visa from '../../imgs/website/visa.png';
import masterCard from '../../imgs/website/masterCard.png';
import gPay from '../../imgs/website/gPay.png';
import stripe from '../../imgs/website/stripe.png';
import applePay from '../../imgs/website/applePay.png';
import paypal from '../../imgs/website/paypal.png';
import fastServers from '../../imgs/website/fastServers.png';
import policy from '../../imgs/website/policy.png';
import encryption from '../../imgs/website/encryption.png';
import protectionLock from '../../imgs/website/protectionLock.png';
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import "../Website/Home"
import { FaArrowAltCircleDown,  FaChevronDown, FaChevronUp } from "react-icons/fa";
import Header from "./component/Header";
import Footer from "./component/Footer";
import FAQUI from "./component/Faq";
export default function WebHome(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
      <div className="">
{/* Header */}
<Header />
 <section id="main"  className="container mx-auto mt-10">
  <div className="flex">
  <div className="flex-none content-center w-[30rem] mx-auto">
    <h1 className="text-4xl font-bold mb-6">
      Protect Your Privacy While Accessing Global Content
    </h1>
    <p className="text-sm mb-10">
      Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum orci pulvinar felis cras
    </p>
    <div className="flex justify-center space-x-4">
      <a href="#" className="bg-orange-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-orange-600">
        Get Started
      </a>
      <a href="#" className="flex items-center space-x-2 text-white py-3 px-6  border-b-2 border-white hover:bg-white hover:text-blue-900">
        <span>Watch Feature</span>
        <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M14.7 12l-5.2-4v8l5.2-4z"/>
        </svg>
      </a>
    </div>
    <div className="flex justify-center items-center mt-12 space-x-4 text-white">
      <div className="flex items-center space-x-2">
        <Image src={groupusersimg} alt="UserIcon" width={103} height={44} className=" rounded-full" />
        <span className="font-semibold text-lg">19m+ Happy Client</span>
      </div>
      <div>
        <span className="text-2xl font-bold">20+ M</span>
        <small className="text-lg">Download</small>
      </div>
    </div>
  </div>
<div className="flex relative " >
    <Image src={mobilebackground} width={640.35} height={501.01}  alt="phone" className="absolute right-[13rem] bottom-[-6rem]"/>
    <Image src={phone1} width={640.35} height={501.01}  alt="phone" className="z-10" />
  </div>
</div>
        </section>
        <section id="Supported Application" className="mt-10 h-[427px]">
         <div className="flex flex-col justify-center items-center">
            <h1 className="text-center text-5xl">Supported Application</h1>
            <div className="flex gap-5  mt-11">
                <Image src={google} alt="google" width={215} height={148} />
                <Image src={facebook} alt="facebook" width={171} height={148} />
                <Image src={twitter} alt="twitter" width={171} height={148} />
                <Image src={whatsapp} alt="whatsapp" width={171} height={148} />
                <Image src={telegram} alt="telegram" width={171} height={148} />
                <Image src={yt} alt="yt" width={173} height={148} />
            </div>
         </div>
        </section>
        <section id="Features" className="mt-10 mx-auto h-[617]">
                <div className="flex justify-center   gap-8 mx-auto">
                    <div className="">
                        <Image src={homeFeatureImg} alt="VPN" width={481} height={412} />
                    </div>
                    <div className="w-[40rem]"> 
                    <h4 className="text-[#085DEC] font-semibold text-2xl">Features</h4>
                    <h2 className="font-semibold text-5xl mt-4">Unblock streaming media, watch favored content smoothly anywhere</h2>
                    <p className="text-lg text-[#D2D3D6] mt-7">By bypassing geo-restrictions, you can binge-watch NETFLIX, HULU, HBO (Max), AbemaTV, Disney+ and other national streaming platforms fluently from anywhere and access your favourite content freely.</p>
                    <Button variant={"custom"} className="mt-[50px] w-[135px]" > Learn More</Button>
                    </div>
                </div>
        </section>
        <section id="AvailableDevices" className="container mx-auto mt-10 px-[138px] py-[90px]">
            <div className="flex  flex-col justify-center items-center">
                <h1 className="font-semibold text-5xl">Available for All Your Devices</h1>
                <div className="mt-[45px] flex justify-around gap-6">
                    <Image src={windows} alt="" width={174} height={160} />
                    <Image src={mac} alt="" width={174} height={160} />
                    <Image src={ios} alt="" width={174} height={160} />
                    <Image src={android} alt="" width={174} height={160} />
                    <Image src={linux} alt="" width={174} height={160} />
                    <Image src={androidtv} alt="" width={174} height={160} />

                </div>
            </div>
        </section>
        <section className="container mx-auto  py-[125px] px-[138px]">
            <div className="flex flex-row justify-center gap-56 mx-5">
                <div className="">
                    <h1 className="text-5xl font-semibold">Hide IP address, stay anonymous online completely with a virtual IP</h1>
                    <p className="mt-7 text-lg text-[#D2D3D6]">Full-speed VPN gives you an invisibility cloak on the Internet. All your online activity is 100%anonymous and untraceable with encrypted connections. Your personal data will be securelyprotected.</p>
                    <Button variant={"custom"} className="mt-[50px] w-[135px]" > Learn More</Button>
               
                </div>
                <Image src={customImg1} alt="" width={418} height={376} />
            </div>
        </section>
        <section className="container mx-auto py-[125px] px-[100px] ">
            <div className="flex justify-center gap-28 mx-5">
            <Image src={phonesImg} alt="" width={547} height={474} />
                <div className="">
                    <h1 className="text-5xl font-semibold">Encrypt all your data, maintain a secure network connection always</h1>
                    <p className="mt-7 text-lg text-[#D2D3D6]">Under public WIFI, hackers can steal your password and data, threaten your security andproperty security. Network service providers can query your browsing history. Full-speed VPNencrypts all your data and keeps it absolutely safe under any network.</p>
                   <div className="mt-12 flex gap-5">
                    <Image src={appStore} alt="" width={167} height={56} />
                    <Image src={googlePlay} alt="" width={167} height={56} />
                   </div>
                </div>

            </div>
        </section>
<section className="container mx-auto py-12 px-[138px]">
  <div className="flex flex-col justify-center items-center">
    <h1 className="text-center text-5xl font-semibold w-[798px]">
      Enjoy fast and stable connection anywhere, anytime
    </h1>
    <p className="text-center mt-7 text-lg text-[#D2D3D6]">
      The internet is slow and unbearable? Dont worry. Full-speed VPN currently supports over 3000 servers in 170 VPN server locations in 80 countries, and the number is still growing. This ensures that no matter where you are, you can always find a high-bandwidth and low-latency server nearby and enjoy the best network performance.
    </p>
    <div className="mt-7">
      <Image src={worldWideLocation} alt="World Wide Location" width={1039} height={818} />
    </div>
    <div className="flex gap-5">
            <div className="py-8 px-5">
                <p className="text-lg text-center ">Countruies</p>
                <p className="text-5xl font-semibold ">100+</p>
            </div>
            <div className="py-8 px-5">
                <p className="text-lg text-center ">Servers</p>
                <p className="text-5xl font-semibold ">1000+</p>
            </div>
            <div className="py-8 px-5">
                <p className="text-lg text-center ">Locations</p>
                <p className="text-5xl font-semibold ">100+</p>
            </div>
            <div className="py-8 px-5">
                <p className="text-lg text-center ">Bandwidth</p>
                <p className="text-5xl font-semibold ">Unlimited</p>
            </div>
    </div>
  </div>
</section>
    <section className="container mx-auto px-[138px] ">
                <div className="rounded-3xl bg-[#085DEC] px-24 py-10 flex justify-center items-center gap-20">
                <div className="">
                <Image src={phonesImg} alt="" width={308} height={321} />
                </div>
                <div className="flex-1 w-[555]">
                    <h1 className="text-5xl font-semibold">Protect all your devices</h1>
                    <p className="mt-7 text-base text-[#D2D3D6]">Full-speed VPN supports all mainstream devices on the market to protect your private data on multi-platform devices. You can enjoy exquisite and user-friendly clients for Windows, Mac, iOS, Android, Linux, and Android TV. With Full-speed VPN, one-click connect and server selection, you can access an unlimited network.</p>
                   <div className="mt-12 flex gap-5">
                    <Image src={appStore} alt="" width={167} height={56} />
                    <Image src={googlePlay} alt="" width={167} height={56} />
                   </div>
                </div>
                </div>
    </section>
    <section id="PaymentMethods" className="container mx-auto mt-10 px-[138px] py-[90px]">
            <div className="flex  flex-col justify-center items-center">
                <h1 className="font-semibold text-5xl">Supported Payment Methods</h1>
                <div className="mt-[45px] flex justify-around gap-6">
                    <Image src={visa} alt="" width={174} height={160} />
                    <Image src={masterCard} alt="" width={174} height={160} />
                    <Image src={gPay} alt="" width={174} height={160} />
                    <Image src={stripe} alt="" width={174} height={160} />
                    <Image src={applePay} alt="" width={174} height={160} />
                    <Image src={paypal} alt="" width={174} height={160} />

                </div>
            </div>
        </section>
        <section id="PaymentMethods" className="container mx-auto mt-10 px-[138px] py-[90px]">
            <div className="flex flex-row justify-center items-center gap-8">
                <div className="flex-1 w-[370px] p-7 bg-[#FFF]/5 rounded-3xl">
                <div>
                    <Image src={fastServers} alt="Fast Server Icon" width={64} height={64}/>
                </div>
                <h1 className="mt-6 text-2xl font-semibold">Ultra-fast servers</h1>
                <p>All of the servers have implemented patented acceleration technology. What’s more, ultra-fast IPLC servers are provided to you. no buffering, no trouble.</p>
                </div>
                <div className="flex-1 w-[370px] p-7 bg-[#085DEC] rounded-3xl">
                <div>
                    <Image src={policy} alt="Fast Server Icon" width={64} height={64}/>
                </div>
                <h1 className="mt-6 text-2xl font-semibold">Truly no logs policy</h1>
                <p>Full-speed VPN strictly implements no logs policy to ensure that all data between applications
                and platforms are completely anonymous and protect your online privacy</p>
                </div>
                <div className="flex-1 w-[370px] p-7 bg-[#FFF]/5 rounded-3xl">
                <div>
                    <Image src={encryption} alt="Fast Server Icon" width={64} height={64}/>
                </div>
                <h1 className="mt-6 text-2xl font-semibold">The highest level of ECC encryption</h1>
                <p>All of your Internet access can beprotected through our highest level of secure ECC encryptiontechnology. Therefore, no one can snoop your data.</p>
                </div>
            </div>
        </section>
        <FAQUI />
        <section className="container mx-auto px-[138px] py-[90px]">
                <div className="rounded-3xl bg-[#FFF]/5 px-24 py-10 flex justify-center items-center gap-20">
                <div className="">
                <Image src={protectionLock} alt="" width={365} height={237} />
                </div>
                <div className="flex-1 w-[555]">
                    <h1 className="text-5xl font-semibold">Protect Your Online Privacy Today</h1>
                    <p className="mt-7 text-base text-[#D2D3D6]">Get Started with our VPN Service and safegurard your digital life from prying eyes</p>
                   <div className="mt-12 p-5 w-44 gap-2 justify-center items-center flex bg-[#085DEC] rounded-3xl">
                       <FaArrowAltCircleDown />  Download Now
                   </div>
                </div>
                </div>
    </section>
    <Footer />
      </div>

      
    );
}