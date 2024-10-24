import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import "./style.css";

export default function AuthSecondary({
  children,
  heading,
  logoImg,
}: Readonly<{
  children: React.ReactNode;
  heading: ReactNode;
  logoImg: StaticImageData;
}>) {
  return (
<div className="bg flex items-center justify-center py-12 min-h-screen">
  {/* Form */}
  <div className="h-[calc(100vh-10vh)] px-6 md:px-20 w-full max-w-2xl p-6 md:p-10 rounded-3xl bg-[#FFF]/5">
    <div className="flex items-center pb-10 mt-10 justify-center">
      <Image src={logoImg} alt="logo" />
    </div>
    <h2 className="text-sm md:text-2xl lg:text-3xl font-semibold mt-3 mb-2 text-white text-center">
      {heading}
    </h2>
    {children}
  </div>
</div>

  );
}
