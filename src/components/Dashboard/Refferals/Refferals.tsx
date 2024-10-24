"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Background from "../shared/Background";
import { BiCopy } from "react-icons/bi";

import Pic from "@/imgs/pic01.png";
import Image from "next/image";
import { api } from "@/utils/Auth";
import SingleLoader from "@/components/ui/singleLoader";
import toast from "react-hot-toast";

interface Referral {
  name: string;
  email: string;
  points: number;
  date: string;
}



const Refferals = () => {
  const [referrals,setReferrals] = useState<Referral[]>([]);
  const [inviteLoading, setInviteLoading] = useState(false);
  const [code, setInviteCode] = useState<string | undefined>(undefined);
  const inviteCode = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    setInviteLoading(true);
  
    api("/user/invite_code")
      .getExample(undefined, token)
      .then((response: any) => {
        // console.log("Response invite code: ", response.invite_code);
        setInviteCode(response.invite_code); // Update the state properly
      })
      .catch((error: any) => {
        console.error("Error fetching invite code:", error);
      })
      .finally(() => {
        setInviteLoading(false);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setInviteLoading(true);
  
    api("/user/points_history")
      .getExample(undefined, token)
      .then((response: any) => {
        console.log("Response Referrals: ", response.history);
        setReferrals(()=>{
          return response?.history.map((history:any)=>({
            name: history.invitee_name,
            email: history.invitee_email,
            points: history.points_earned,
            date: history.date,

          }));
          
        })
        console.log(referrals);
        
        // setInviteCode(response.invite_code); // Update the state properly
      })
      .catch((error: any) => {
        console.error("Error fetching invite code:", error);
      })
      .finally(() => {
        setInviteLoading(false);
      });
  }, []);
  
  // In case you want to log the updated `code`, you can do it in another `useEffect`:
  useEffect(() => {
    console.log("Updated invite code: ", code);
    if (inviteCode.current) {
      inviteCode.current.value = code ?? ''; // Set the value when code is updated
    }
  }, [code]);
  
  function copyCode(){
    if (inviteCode.current) {
    inviteCode.current.select();
    document.execCommand('copy');
    toast.success('Copy to clipboard')
    }
  }

  return (
    <div className="min-h-screen  text-white p-6">
      {/* Header Section */}
      <Background
        width="w-full"
        height=""
        classess="flex justify-between px-7 mb-10"
      >
        <span className="flex space-x-6">
          <h1 className="text-3xl font-bold">150+</h1>
          <span className="">
            <p>Earn up to 150GB for every friend who signs up</p>
            <p className="text-gray-400 text-sm">
              Earn up to 1000 points free for every friend who signs up plus
              your friend will get 50 points as well
            </p>
          </span>
        </span>
        <Button variant="customInfo" className="rounded-full px-8 py-7">
          Learn More
        </Button>
      </Background>

      {/* Refer a Friend Section */}
      <Background
        width="w-full"
        height=""
        classess="flex flex-col space-y-4 p-6 mb-10"
      >
        <h2 className="text-xl font-semibold mb-2">Refer A Friend</h2>
        <hr className="border-t-2   border-white/5 " />

        <div className="flex justify-between items-center  ">
          <p className="pr-6">Invite link</p>
          {inviteLoading ? <SingleLoader />: (<Input
            readOnly
            ref={inviteCode}
            className="bg-white/5 w-1/3 p-5 rounded-full"
          />)}

          <Button variant="customInfo" onClick={copyCode} className="rounded-full px-8 py-7">
            <BiCopy className="w-5 h-5 mr-2" />
            Copy link
          </Button>
        </div>
      </Background>

      {/* Email Invites Section */}
      <Background
        width="w-full"
        height=""
        classess="flex justify-between p-6  mb-10"
      >
        <h2 className="text-xl font-semibold ">Email Invites</h2>

        <div className="space-y-4 w-1/3">
          <Input
            placeholder="Enter email"
            className="bg-white/5 p-5 rounded-full"
          />
          <Input
            placeholder="Enter email"
            className="bg-white/5 p-5 rounded-full"
          />
          <Input
            placeholder="Enter email"
            className="bg-white/5 p-5 rounded-full"
          />
        </div>
        <Button variant="customInfo" className="rounded-full px-8 py-7">
          <BiCopy className="w-5 h-5 mr-2" />
          Send Invites
        </Button>
      </Background>

      {/* Referrals Section with Table */}
      <Background
        width="w-full"
        height=""
        classess="flex flex-col space-y-4 p-6 "
      >
        <h2 className="text-xl font-semibold mb-4">Referrals</h2>
        <hr className="border-t-2   border-white/5 " />

        <Table>
          {/* <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Points</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader> */}
          <TableBody>
            {referrals.map((referral, index) => (
              <TableRow key={index}>
                <TableCell className="flex items-center w-[400px]">
                  <span className="w-10 h-10 rounded-full bg-gray-500 mr-2">
                    <Image src={Pic} alt="user" />
                  </span>
                  {referral.name}
                </TableCell>
                <TableCell className="w-1/4">{referral.email}</TableCell>
                <TableCell className="w-1/4">
                  {referral.points} points
                </TableCell>
                <TableCell className="w-1/4">{referral.date}</TableCell>
                {/* <TableCell>
                  <Button variant="customInfo" className="rounded-full p-6">
                    Redeem
                  </Button>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Background>
    </div>
  );
};

export default Refferals;
