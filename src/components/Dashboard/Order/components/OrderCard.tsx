import React from "react";

interface OrderCardProps {
  packageName: string;
  pointsOrPrice: string;
  orderType: string;
  status: string;
}

const OrderCard: React.FC<OrderCardProps> = ({
  packageName,
  pointsOrPrice,
  orderType,
  status,
}) => {
  return (
    <div className="bg-white/5 rounded-2xl py-16 space-y-6 px-8 w-full  text-white">
      <div className=" flex justify-between">
        <span className="text-gray-400">Package Name :</span>
        <span className="ml-2 font-semibold">{packageName}</span>
      </div>
      <div className=" flex justify-between">
        <span className="text-gray-400">Points/Price :</span>
        <span className="ml-2 font-semibold">{pointsOrPrice}</span>
      </div>
      <div className=" flex justify-between">
        <span className="text-gray-400">Order Type :</span>
        <span className="ml-2 font-semibold">{orderType}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Status :</span>
        <span
          className={`ml-2 font-semibold ${
            status === "Success" ? "text-[#12B757]" : "text-red-400"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default OrderCard;
