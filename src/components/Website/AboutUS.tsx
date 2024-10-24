"use client"

import { Button } from "../ui/button";
import Header from "./component/Header";
import Image from "next/image";
import wwwVPN from '../../imgs/website/wwwVPN.png';
import keyicon from '../../imgs/website/keyicon.png';
import wifiProte from '../../imgs/website/wifiProte.png'
import globeIcon from '../../imgs/website/globeIcon.png'
import Footer from "./component/Footer";
import ContactUs from "./component/ContactUs";

export default function AboutUs(){
    return (
        <div className="">
        <Header />
        <section className="container mx-auto mt-10 h-[300px] ">
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-[52px]"> About Us</h1>
                <p className="text-lg text-center text-[#A0A4AD] w-[557px]">Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum orci pulvinar felis cras</p>
            </div>
        </section>
        <section className="container mx-auto  px-[138px]">
            <div className="flex flex-row justify-center items-center  mx-5">
                <div className="flex flex-col">
                    <div>
                        <h1 className="text-5xl font-semibold">About Us</h1>
                        <p className="mt-7 text-lg text-[#D2D3D6] w-[515px]">At Full-Speed VPN, we are committed to providing the highest level of online privacy and security. Our mission is to empower users with the tools they need to browse the internet safely, privately, and freely. By using advanced encryption protocols, we protect your data from hackers, surveillance, and other online threats. Whether you're looking to secure your connection on public Wi-Fi or bypass geographic restrictions, we’ve got you covered.</p>
                        <p className="text-xl font-semibold mt-7 w-[464px]" >The World's Only Community Supported Secure VPN Service.</p> 
                    </div>
                    <div className="flex flex-row mt-4 gap-3 flex-1 w-[385px]">
                        <div className="flex flex-col gap-2">
                            <div className="bg-[#FFF]/5 rounded-3xl p-4 w-[113px] font-semibold text-2xl text-center">
                                121
                            </div>
                            <p className="text-base text-[#A0A4AD] text-center">Countries</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="bg-[#FFF]/5 rounded-3xl p-4 w-[113px] font-semibold text-2xl text-center">
                                8210
                            </div>
                            <p className="text-base text-[#A0A4AD] text-center">Servers</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="bg-[#FFF]/5 rounded-3xl p-4 w-[113px] font-semibold text-2xl text-center">
                                9600
                            </div>
                            <p className="text-base text-[#A0A4AD] text-center">Gbps Capacity</p>
                        </div>
                    </div>
                    {/* <Button variant={"custom"} className="mt-[50px] w-[135px]" > Learn More</Button> */}
               
                </div>
                <div>
                <Image src={wwwVPN} alt="" width={616} height={579} />

                </div>
            </div>
        </section>
        <section className="container mx-auto mt-5 px-[138px] py-[110px]">
            <h1 className="font-semibold text-5xl mb-[60px]">Privacy Policy</h1>
            <div className="flex flex-col gap-9">
            <div>
                <h1 className="font-semibold text-[28px]">Terms & Conditions</h1>
                <p className="text-base text-[#A0A4AD] w-[1087px]">At Full-Speed VPN, your privacy is our top priority. We are committed to safeguarding your personal data and ensuring a secure browsing experience. This Privacy Policy outlines how we collect, use, and protect your information.</p>
            </div>
            <div className="flex flex-row justify-center gap-5">
                <div className="h-[328px] bg-[#fff]/5 p-9 rounded-3xl">
                    <h1 className="font-semibold text-2xl mb-5">Information We Collect</h1>
                    <div className="w-[507px]">
                        <h1 className="text-lg">Personal Information</h1>
                        <p className="text-base text-[#A0A4AD] ">We may collect minimal personal information such as email addresses for account creation and support purposes.</p>
                    </div>
                    <div className="w-[507px] mt-[22px]">
                        <h1 className="text-lg">Usage Data</h1>
                        <p className="text-base text-[#A0A4AD] ">We may collect anonymized data regarding how you interact with our service to improve performance and functionality.</p>
                    </div>
                </div>
                <div className="h-[328px] bg-[#fff]/5 p-9 rounded-3xl ">
                    <h1 className="font-semibold text-2xl mb-5">How We Use Your Data</h1>
                    <div className="w-[507px]">
                        <h1 className="text-lg">Service Optimization</h1>
                        <p className="text-base text-[#A0A4AD]">We use anonymized data to enhance our VPN service, improving speed, reliability, and security.</p>
                    </div>
                    <div className="w-[507px] mt-[22px]">
                        <h1 className="text-lg">Customer Support</h1>
                        <p className="text-base text-[#A0A4AD] ">Personal data like email addresses are only used for communication and troubleshooting purposes</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="font-semibold text-[28px]">Data Protection</h1>
                <p className="text-base text-[#A0A4AD] w-[1087px]">We use industry-standard security measures such as AES-256 encryption to protect your data. Additionally, we follow a strict no-logs policy, meaning we do not store any details of your online activities.</p>
            </div>
            <div>
                <h1 className="font-semibold text-[28px]">Third-Party Disclosure</h1>
                <p className="text-base text-[#A0A4AD] w-[1087px]">We do not sell, trade, or otherwise transfer your personal data to outside parties. We may share limited information with trusted service providers who assist us in operating our website and services, under strict confidentiality agreements.</p>
            </div>
            <div>
                <h1 className="font-semibold text-[28px]">Refund Policy</h1>
                <p className="text-base text-[#A0A4AD] w-[1087px]">If you are not satisfied with our service, you can request a refund within [number] days of purchase. Please refer to our Refund Policy for more details.</p>
            </div>
            <div>
                <h1 className="font-semibold text-[28px]">Limitation of Liability</h1>
                <p className="text-base text-[#A0A4AD] w-[1087px]">Full-Speed VPN is not liable for any indirect, incidental, or consequential damages arising from your use of our service. The VPN is provided on an "as-is" basis, and while we strive for perfection, we do not guarantee uninterrupted service.</p>
            </div>
            </div>
           


        </section>
        <section id="" className="container mx-auto mt-5 px-[138px] py-[90px]">
            <h1 className="font-semibold text-5xl text-center my-10">Why Choose Us?</h1>
            <div className="flex flex-row justify-center items-center gap-8">
                <div className="flex-1 w-[370px] p-7 bg-[#FFF]/5 rounded-3xl h-[285px]">
                <div>
                    <Image src={wifiProte} alt="Fast Server Icon" width={69} height={69}/>
                </div>
                <h1 className="mt-6 text-2xl font-semibold">Top-Tier Encryption</h1>
                <p className="text-base text-[#A0A4AD] mt-3">We use AES-256 encryption, 4096-bit RSA key exchange, and HMAC with SHA-384 to keep your data secure.</p>
                </div>
                <div className="flex-1 w-[370px] p-7 bg-[#FFF]/5 rounded-3xl h-[285px]">
                <div>
                    <Image src={keyicon} alt="Fast Server Icon" width={69} height={69}/>
                </div>
                <h1 className="mt-6 text-2xl font-semibold">No Logging Policy</h1>
                <p className="text-base text-[#A0A4AD] mt-3">We strictly enforce a no-logs policy, meaning your data stays private—always.</p>
                </div>
                <div className="flex-1 w-[370px] p-7 bg-[#FFF]/5 rounded-3xl h-[285px]">
                <div>
                    <Image src={globeIcon} alt="Fast Server Icon" width={69} height={69}/>
                </div>
                <h1 className="mt-6 text-2xl font-semibold">Global Access</h1>
                <p className="text-base text-[#A0A4AD] mt-3">Our VPN has servers in 32 countries, ensuring unrestricted access worldwide.</p>
                </div>
            </div>
        </section>
        <ContactUs />
        <Footer />
        </div>
    );
}