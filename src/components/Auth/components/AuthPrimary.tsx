import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import "./style.css";

export default function AuthPrimary({
  children,
  leftImg,
  heading,
}: Readonly<{
  children: React.ReactNode;
  leftImg: StaticImageData;
  heading: ReactNode;
}>) {
  return (
<div className="bg flex items-center justify-center h-screen w-full px-28">
  <div className="lg:flex items-center justify-between w-full max-w-screen-xl">
    {/* Left Side - Illustration */}
    <div className="flex items-center justify-center w-full md:max-lg:flex">
      <Image src={leftImg} width={528} height={470} alt="img" />
    </div>

    {/* Form Section */}
    <div className="w-full max-w-2xl h-[calc(100vh-25px)] flex flex-col items-center justify-center mt-2 rounded-3xl bg-[#FFF]/5">
      <h2 className="text-sm md:text-2xl lg:text-3xl font-semibold text-white text-center">
        {heading}
      </h2>
      {children}
    </div>
  </div>
</div>

  );
}
