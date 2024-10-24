import React from "react";

const Background = ({
  children,
  width,
  height,
  classess,
}: Readonly<{
  children: React.ReactNode;
  width: string;
  height: string;
  classess: string;
}>) => {
  return (
    <div
      className={`${width} ${height} ${classess} bg-[#FFF]/5 flex py-10 rounded-2xl`}
    >
      {children}
    </div>
  );
};

export default Background;
