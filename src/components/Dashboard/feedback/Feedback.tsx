"use client"
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Background from "../shared/Background";
import Image from "next/image";
import Pic from "@/imgs/pic01.png";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/utils/Auth";
import { useAuthContext } from "@/context/authContext";

interface Message {
  id: number;
  message_body: string;
  created_at: string;  // ISO 8601 format: "2024-10-23T14:47:12.630Z"
  is_read: boolean;
  sender: {
    id: number;
    type: string;    // "Admin" | "User"
    name: string;
  };
  receiver: {
    id: number;
    type: string;    // "Admin" | "User"
    name: string;
  };
}




const Feedback = () => {
  const { userData } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [mergedMessages, setMergedMessages] = useState<any>([]);
  const [outgoingMessages, setOutgoingMessages] = useState<Message[]>([]);
  const [incomingMessages, setIncomingMessages] = useState<Message[]>([]);

  useEffect(() => {

    // Merge the two arrays
    const merged = outgoingMessages.concat(incomingMessages);
    // Sort the merged array by "created_at"
    const sortedMessages = merged.sort((a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    );

    // Update the state with sorted messages
    setMergedMessages(sortedMessages);
    console.log(sortedMessages);
    
  }, [outgoingMessages,incomingMessages]);

  const formSchema = z.object({
    message_body: z.string().min(1, {
      message: "Text must be greater than 1 word",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message_body: "",
    },
  });


  useEffect(()=>{
    getMessages();
  },[])
  function markMessageRead(){
    
  }
  function getMessages(){
    const token = localStorage.getItem("token");
    api("user/messages")
    .getExample(undefined,token)
    .then((response:any)=>{
        console.log(response);
        setIncomingMessages(response.incoming_messages);
        setOutgoingMessages(response.outgoing_messages);
    })
    .catch((error: any)=>{
      console.error(error);
      
    })
    .finally(()=>{setLoading((state: any)=> {return !state})})
  }

  function sendMessage(value: {message_body: string}){
    const token = localStorage.getItem('token');
    api("user/messages")
    .postExample(value,token)
    .then((response:any)=>{
      console.log(response);
      form.reset({message_body: ""})
      getMessages();
    })
    .catch((error:any)=>{
      console.error(error);
    })
    .finally(()=>{});
  }


  function onSubmit(values: z.infer<typeof formSchema>){
    console.log(values);
    sendMessage(values);
 }
  // const messages = [
  //   { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales sed odio sit amet finibus. Vestibulum vitae sodales libero, ac consequat tortor. Morbi eget lorem sit amet orci cursus feugiat. Fusce consequat semper ligula eu dictum. Sed lacinia vehicula consectetur. Curabitur sit amet augue venenatis, molestie ligula sit amet, euismod diam. Phasellus ac interdum odio, id fermentum mauris. Nullam rutrum et sapien viverra vulputate. Mauris lacinia lectus a aliquam semper. Cras ac aliquet orci. Vivamus aliquet in nisl a pellentesque. Cras suscipit, ante quis vehicula vehicula, mi metus efficitur nisi, vitae finibus turpis ipsum id ipsum. Praesent ornare semper pharetra. Quisque consequat turpis vel finibus elementum.", type: "incoming" },
  //   { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales sed odio sit amet finibus. Vestibulum vitae sodales libero, ac consequat tortor. Morbi eget lorem sit amet orci cursus feugiat. Fusce consequat semper ligula eu dictum. Sed lacinia vehicula consectetur. Curabitur sit amet augue venenatis, molestie ligula sit amet, euismod diam. Phasellus ac interdum odio, id fermentum mauris. Nullam rutrum et sapien viverra vulputate. Mauris lacinia lectus a aliquam semper. Cras ac aliquet orci. Vivamus aliquet in nisl a pellentesque. Cras suscipit, ante quis vehicula vehicula, mi metus efficitur nisi, vitae finibus turpis ipsum id ipsum. Praesent ornare semper pharetra. Quisque consequat turpis vel finibus elementum.", type: "outgoing" },
  // ];
  return (
    <div className="w-full min-h-screentext-white p-6 flex justify-center  flex-col items-center">
      {/* User Feedback Form */}

      <Background
        width="w-2/3"
        height=""
        classess="mb-10 flex-col  item-center justify-center "
      >
    <h2 className="text-center text-2xl font-semibold mb-6">Support</h2>

{/* Chat Message UI */}
<div className="relative">
<div className="flex flex-col space-y-4 p-4 w-full max-h-[500px] overflow-auto py-10">
  {mergedMessages.map((message: any, index: any) => (
    <div
      key={index}
      className={`flex ${
        message.sender.name === userData.name ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`${
          message.sender.name === userData.name
            ? "bg-[#FFF]/5 text-white"
            : "bg-yellow-600 text-black"
        } rounded-lg p-3 max-w-xs`}
      >
        <p>{message.message_body}</p>
      </div>
    </div>
  ))}

</div>
<div className="flex justify-center  bottom-0 p-5">
<Form {...form}>
<form
  onSubmit={form.handleSubmit(onSubmit)} className="w-full">
   <FormField
    control={form.control}
    name="message_body"
    render={({ field }) => (
      <FormItem>
        {/* <FormLabel className="text-sm">Password</FormLabel> */}
        <FormControl className="">
          <Textarea
            className="border-none bg-white/10 rounded-2xl p-4"
            {...field}
          />

        </FormControl>
        <FormMessage className="font-semibold" />
      </FormItem>
    )}
  />
  <div className="flex justify-end mt-3">
  <Button type="submit" className="w-40" variant="custom">
    Send Messagge
  </Button>{" "}
  </div>

  </form>
  </Form>
    {/* message typing input and sending */}
  </div>
</div>


      </Background>


    </div>
  );
};

export default Feedback;
