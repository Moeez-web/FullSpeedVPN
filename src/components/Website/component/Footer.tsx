import Link from "next/link";
import logoicon from '../../../imgs/logo.png';
import Image from "next/image";
import fbIcon from "../../../imgs/website/fbCircleIcon.png"
import linkedin from "../../../imgs/website/linkedinCircleIcon.png"
import insta from "../../../imgs/website/instaCircleIcon.png"
import yt from "../../../imgs/website/ytCircleIcon.png"
import { FaMailBulk, FaMailchimp, FaMapMarker, FaPhoneAlt } from "react-icons/fa";

export default function Footer(){
    return (
        <div className="bg-[#FFF]/5">
        <section id="footer" className="container mx-auto mt-10 px-[138px] py-[90px]">
            <div className="flex flex-row gap-6 min-h-[289px]">
            <div className="flex-1 flex flex-col max-w-[276px] gap-3 max-h-[162px]">
                <div>
                <Link
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
              <Image src={logoicon} alt="logo" width={246} height={57}/>

          </Link>   
                </div>
                <div className="text-base ">
                Lorem ipsum dolor sit amet consectetur, adipiscing elit tellus euismod
                </div>
                <div className="flex flex-row gap-3">
                <Image src={fbIcon} alt="logo" width={34} height={34}/>
                <Image src={linkedin} alt="logo" width={34} height={34}/>
                <Image src={insta} alt="logo" width={34} height={34}/>
                <Image src={yt} alt="logo" width={34} height={34}/>
                </div>
            </div>
            <div className="flex-1 flex flex-col  gap-3 ml-16">
                <div className="text-lg font-semibold">
                    Company
                </div>
                <div className="text-[#D2D3D6] text-sm space-y-1">
                <p>About Us</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>Help</p>
                </div>

            </div>
            <div className="flex-1 flex flex-col  gap-3 ml-16">
                <div className="text-lg font-semibold">
                Products
                </div>
                <div className="text-[#D2D3D6] text-sm space-y-1">
                <p>Linx VPN</p>
                <p>Linx Alart</p>
                <p>Linx Antivirus</p>
                </div>

            </div>
            <div className="flex-1 flex flex-col  gap-3 ml-16">
                <div className="text-lg font-semibold">
                Social
                </div>
                <div className="text-[#D2D3D6] text-sm space-y-1">
                <p>Affiliate</p>
                <p>YouTube Creators</p>
                <p>Student Discount</p>
                </div>

            </div>
            <div className="flex-1 flex flex-col  gap-3 ml-16">
                <div className="text-lg font-semibold">
                Contact Us
                </div>
                <div className="text-[#D2D3D6] text-sm space-y-1">
                <div className="flex gap-2  items-center " ><FaPhoneAlt /> +31 6 34 95 00 55 </div>
                <div className="flex gap-2  items-center " ><FaMailBulk />info@jetelitechart.com</div>
                <div className="flex gap-2  items-center " ><FaMapMarker /> Social Entrepreneur, USA </div>
                </div>

            </div>
            </div>

        </section>
        <div className="bg-[#15153a]">
        <div className="container mx-auto px-[138px]   flex flex-row justify-between text-[#A0A4AD]">
                    <p>Full-Speed VPN . 2024</p>
                    <p>Privacy & Cookie Policy</p>
    
                </div>
        </div>

                </ div>
    );
}