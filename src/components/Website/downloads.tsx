"use client"

import Header from "./component/Header";
import Image from "next/image";
import downloadImg from '../../imgs/website/downloadImg.png'
import windowsIcon from '../../imgs/website/windowsIcon.png'
import macIcon from '../../imgs/website/macIcon.png'
import iosIcon from '../../imgs/website/iosIcon.png'
import androidIcon from '../../imgs/website/androidIcon.png'
import downloadWindowsImg from '../../imgs/website/dowloadWindowsImg.png'
import downloadMacImg from '../../imgs/website/downloadMacImg.png'
import downloadAndroidImg from '../../imgs/website/downloadAndroidImg.png'
import { useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { Button } from "../ui/button";
import Footer from "./component/Footer";
// import androidIcon from '../../imgs/website/androidIcon.png'


export default function Downloads(){
    const devices = [
        {id: 1, title: "Download For Windows", version: "6.4.1", Update: "2024.09.16", Supports: "11/10/8/7", 
            desp:  "Download the reliable and secure VPN for windows, comprehensivly protect your online privacy and enjoy unrestricted and unhindered access to the worldwide web.",
            points: [ 
                "Risk-free VPN for windows 11, 10, 8, and 7",
                "Compatible with desktops and laptops",
                "Bypass geo-blocking. Safely access worldwide content",
                "The highest level of ECC encryption, Keep anonymous browsing",
                "Strick no-logs policy, never track, Store, or share any of your data",
                "7-day money-back guarantee"
             ],
             iconImage: windowsIcon,
             despImg: downloadWindowsImg
          },
          {id: 2, title: "Download For Mac", version: "6.4.2", Update: "2024.09.20", Supports: "MacOS 10.12+", 
            desp:  "Download the reliable and secure VPN for macOS. Hide your digital footprint on your iMac or MacBook",
            points: [ 
                "Compatible with macOS Sierra, High Sierra, Mojave, Catalina, Big Sur, Catalina, and Monterey",
                "Works on all MacBook and IMac models",
                "Hide IP address, stay anonymous online",
                "Unblock GEO restrictions, access websites securely and fast",
                "The highest level of ECC encryption, protect data privacy and security",
                "7-day money-back guarantee"
             ],
             iconImage: macIcon,
             despImg: downloadMacImg
          },
          {id: 3, title: "Download For iOS", version: "6.4.2", Update: "2024.09.20", Supports: "MacOS 10.12+", 
            desp:  "Download the reliable and secure VPN for macOS. Hide your digital footprint on your iMac or MacBook",
            points: [ 
                "Compatible with macOS Sierra, High Sierra, Mojave, Catalina, Big Sur, Catalina, and Monterey",
                "Works on all MacBook and IMac models",
                "Hide IP address, stay anonymous online",
                "Unblock GEO restrictions, access websites securely and fast",
                "The highest level of ECC encryption, protect data privacy and security",
                "7-day money-back guarantee"
             ],
             iconImage: iosIcon,
             despImg: downloadWindowsImg
          },
          {id: 4, title: "Download For iOS", version: "6.4.2", Update: "2024.09.20", Supports: "MacOS 10.12+", 
            desp:  "Download the reliable and secure VPN for macOS. Hide your digital footprint on your iMac or MacBook",
            points: [ 
                "Compatible with macOS Sierra, High Sierra, Mojave, Catalina, Big Sur, Catalina, and Monterey",
                "Works on all MacBook and IMac models",
                "Hide IP address, stay anonymous online",
                "Unblock GEO restrictions, access websites securely and fast",
                "The highest level of ECC encryption, protect data privacy and security",
                "7-day money-back guarantee"
             ],
             iconImage: androidIcon,
             despImg: downloadAndroidImg
          },
    ]

  
    const [selectedDeviceId, setSelectDeviceId] = useState<number>(1);
    const [selectDevice, setSelectDevice] = useState<any>();

    useEffect(()=>{
        const sdevice = devices.find((device:any)=>device.id == selectedDeviceId);
        setSelectDevice(sdevice)
    },[selectedDeviceId])

    function handleSelectDevice(deviceId: number){
        setSelectDeviceId(deviceId);
    }

    return (
        <>
        <Header />
        <section className="container mx-auto mt-10">
            <div className="flex flex-row justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-semibold text-[52px]"> All Device Download</h1>
                    <p className="text-lg text-center text-[#A0A4AD] w-[557px]">Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum orci pulvinar felis cras</p>
                </div>
                <div>
                    <Image src={downloadImg} alt="download img" width={500} height={487} />
                </div>
            </div>
        </section>
        <section id="PaymentMethods" className="container mx-auto mt-10 px-[138px] py-[90px]">
            <div className="flex flex-row justify-center items-center gap-8">
                {devices.map((device: any,index:number)=>(
                <div key={index} className={` w-[270px] flex justify-center py-9 px-20  rounded-3xl ${selectedDeviceId == device.id ? "bg-[#E48920]":"bg-[#FFF]/5"} ` } onClick={()=>handleSelectDevice(device.id)}>
                <Image src={device.iconImage} alt="Fast Server Icon" width={64} height={64}/>
                </div>
                ))}




            </div>
        </section>
        <section className="container mx-auto  py-[125px] px-[138px]">
            
            <div  className="flex flex-row justify-center items-center gap-56 mx-5">
            <div className="">
                <h1 className="text-5xl font-semibold">{selectDevice?.title}</h1>
                <p className="mt-7 text-lg text-[#D2D3D6]">{selectDevice?.desp}</p>
                <div className="flex flex-col mt-9 gap-3">
                    {selectDevice?.points.map((point:any,index:number)=>(
                   <p key={index} className="flex gap-2 items-center"> <span> <FaRegCheckCircle />  </span> {point}</p>

                    ))}
                   
                </div>
                <Button variant={"custom"} className="mt-[50px] w-[135px]" >Explore all features</Button>
           
            </div>
            <Image src={selectDevice?.despImg} alt="" width={433} height={498} />
        </div>
            

        </section>
        <Footer />
        </>

    );
}