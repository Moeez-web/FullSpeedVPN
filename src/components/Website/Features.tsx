import { Button } from "../ui/button";
import Header from "./component/Header";
import Image from "next/image";
import featurePic1 from '../../imgs/website/featurePic1.png'
import ipMask from '../../imgs/website/ipMask.png'
import swissPrivacy from '../../imgs/website/swissPrivacy.png'
import noLogPolicy from '../../imgs/website/noLogPolicy.png'
import adBlocker from '../../imgs/website/adBlocker.png'
import createService from '../../imgs/website/createService.png'
import protectInternet from '../../imgs/website/protectInternet.png'
import mobileVPNPro from '../../imgs/website/mobileVPNPro.png'
import wifiProte from '../../imgs/website/wifiProte.png'
import keyicon from '../../imgs/website/keyicon.png'
import fileicon from '../../imgs/website/fileicon.png'
import { FaRegCheckCircle } from "react-icons/fa";
import Footer from "./component/Footer";

export default function Features(){

    return(
        <div className="">
            <Header />
            <section className="container mx-auto mt-10 h-[300px] ">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-semibold text-[52px]"> Features</h1>
                    <p className="text-lg text-center text-[#A0A4AD] w-[557px]">Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum orci pulvinar felis cras</p>
                </div>
            </section>
            <section className="container mx-auto  py-[125px] px-[138px]">
            <div className="flex flex-row justify-center items-center gap-56 mx-5">
                <div className="">
                    <h1 className="text-5xl font-semibold">Full-Speed VPN Security Features</h1>
                    <p className="mt-7 text-lg text-[#D2D3D6]">Experience worry-free browsing with Proton VPN, a fast and dependable service designed to safeguard your online privacy. By masking your real IP address, it ensures your internet activities remain private and secure.</p>
                    <div className="flex flex-col mt-9 gap-3">
                       <p className="flex gap-2 items-center"> <span> <FaRegCheckCircle />  </span>  Browse privately and securely</p>
                        <p className="flex gap-2 items-center"> <span> <FaRegCheckCircle />  </span>  Avoid being tracked across the internet</p>
                        <p className="flex gap-2 items-center"> <span> <FaRegCheckCircle />  </span>  Stop your browsing data from being sold to advertisers</p>
                    </div>
                    <Button variant={"custom"} className="mt-[50px] w-[135px]" >Explore all features</Button>
               
                </div>
                <Image src={featurePic1} alt="" width={433} height={498} />
            </div>
        </section>
        <section id="Supported Application" className="mt-10 h-[427px]">
         <div className="flex flex-col justify-center items-center">
            <h1 className="text-center text-5xl">Full-Speed VPN Privacy</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center mt-11">
    <div className="flex flex-row p-5 gap-3 bg-[#FFF]/5 rounded-3xl">
        <div>
            <Image src={ipMask} alt="" />
        </div>
        <div>
            <h1 className="text-2xl font-semibold">Mask your IP</h1>
            <p className="text-base w-[240px]">Lorem ipsum dolor sit amet consectetur</p>
        </div>
    </div>
    <div className="flex flex-row p-5 gap-3 bg-[#FFF]/5 rounded-3xl">
        <div>
            <Image src={swissPrivacy} alt="" />
        </div>
        <div>
            <h1 className="text-2xl font-semibold">Swiss Privacy</h1>
            <p className="text-base w-[240px]">Lorem ipsum dolor sit amet consectetur</p>
        </div>
    </div>
    <div className="flex flex-row p-5 gap-3 bg-[#FFF]/5 rounded-3xl">
        <div>
            <Image src={noLogPolicy} alt="" />
        </div>
        <div>
            <h1 className="text-2xl font-semibold">No-logs policy</h1>
            <p className="text-base w-[240px]">Lorem ipsum dolor sit amet consectetur</p>
        </div>
    </div>
    
    {/* Second row with centered items */}
    <div className="lg:col-span-3 gap-5 flex justify-center">
        <div className="flex flex-row p-5 gap-3 bg-[#FFF]/5 rounded-3xl">
            <div>
                <Image src={adBlocker} alt="" />
            </div>
            <div>
                <h1 className="text-2xl font-semibold">VPN Ad-Blocker</h1>
                <p className="text-base w-[240px]">Lorem ipsum dolor sit amet consectetur</p>
            </div>
        </div>
        <div className="flex flex-row p-5 gap-3 bg-[#FFF]/5 rounded-3xl">
            <div>
                <Image src={createService} alt="" />
            </div>
            <div>
                <h1 className="text-2xl font-semibold">Create Service</h1>
                <p className="text-base w-[240px]">Lorem ipsum dolor sit amet consectetur</p>
            </div>
        </div>
    </div>
</div>



         </div>
        </section>
        <section className="container mx-auto py-[125px] px-[100px] ">
            <div className="flex justify-center items-center gap-28 mx-5">
            <Image src={protectInternet} alt="" width={506} height={440} />
                <div className="">
                    <h1 className="text-5xl font-semibold">Protect your internet</h1>
                    <p className="mt-7 text-lg text-[#D2D3D6]">Experience worry-free browsing with Proton VPN, a fast and dependable service designed to safeguard your online privacy. By masking your real IP address, it ensures your internet activities remain private and secure.</p>
                    <div className="flex flex-col mt-9 gap-3">
                        <p className="flex gap-2 items-center"> <span> <FaRegCheckCircle />  </span> Strict no-logs policy</p>
                        <p className="flex gap-2 items-center"> <span> <FaRegCheckCircle />  </span> All apps are open source and audited</p>
                        <p className="flex gap-2 items-center"> <span> <FaRegCheckCircle />  </span> High-speed servers (up to 10 Gbps)</p>
                        <p className="flex gap-2 items-center"> <span> <FaRegCheckCircle />  </span> Based in USD</p>
                        <p className="flex gap-2 items-center"> <span> <FaRegCheckCircle />  </span> 30-day money-back guarantee</p>
                    </div>
                </div>

            </div>
        </section>
        <section className="container mx-auto  py-[125px] px-[138px]">
            <div className="flex flex-row justify-center items-center gap-56 mx-5">
                <div className="">
                    <h1 className="text-5xl font-semibold">Fortify Your Data with Powerful Encryption</h1>
                    <p className="mt-7 text-lg w-[564px] text-[#D2D3D6]">We ensure maximum security for your internet connection by using cutting-edge encryption. All network traffic is protected with AES-256 encryption, while key exchanges are secured with 4096-bit RSA. For added integrity, we use HMAC with SHA-384 to authenticate messages, safeguarding your data at every step.</p>
                    <Button variant={"custom"} className="mt-[50px] w-[135px]" >Explore all features</Button>
               
                </div>
                <Image src={mobileVPNPro} alt="" width={548} height={574} />
            </div>
        </section>
        <section id="PaymentMethods" className="container mx-auto mt-10 px-[138px] py-[90px]">
            <div className="flex flex-row justify-center items-center gap-8">
                <div className="flex-1 w-[370px] p-7 bg-[#FFF]/5 rounded-3xl">
                <div>
                    <Image src={wifiProte} alt="Fast Server Icon" width={64} height={64}/>
                </div>
                <h1 className="mt-6 text-2xl font-semibold">Strong Protocols</h1>
                <p>We use only the strongest encryption to protect your internet connection.
                This means we encrypt all your network traffic with AES-256, exchange keys with 4096-bit RSA, and use HMAC with SHA384 for message authentication.</p>
                </div>
                <div className="flex-1 w-[370px] p-7 bg-[#FFF]/5 rounded-3xl">
                <div>
                    <Image src={keyicon} alt="Fast Server Icon" width={64} height={64}/>
                </div>
                <h1 className="mt-6 text-2xl font-semibold">Forward Secrecy</h1>
                <p>We use only the strongest encryption to protect your internet connection.
                This means we encrypt all your network traffic with AES-256, exchange keys with 4096-bit RSA, and use HMAC with SHA384 for message authentication.</p>
                </div>
                <div className="flex-1 w-[370px] p-7 bg-[#FFF]/5 rounded-3xl">
                <div>
                    <Image src={fileicon} alt="Fast Server Icon" width={64} height={64}/>
                </div>
                <h1 className="mt-6 text-2xl font-semibold">Full Disk Encryption</h1>
                <p>We use only the strongest encryption to protect your internet connection.
                This means we encrypt all your network traffic with AES-256, exchange keys with 4096-bit RSA, and use HMAC with SHA384 for message authentication.</p>
                </div>
            </div>
        </section>
        <Footer />
        </div>
    );
}