
import { Button } from "@/components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../../ui/textarea";
import {  FaMapMarker, FaPhoneAlt} from "react-icons/fa";
export default function ContactUs(){
    const formSchema = z.object({
        name: z.string().min(2, {
            message: "Email must be at least 2 characters.",
          }),
        email: z.string().email({
          message: "Email must be valid.",
        }),
        message: z.string().min(20, {
          message: "Text must be greater than 20 words",
        }),
      });
      const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          message: "",
        },
      });
     function onSubmit(values: z.infer<typeof formSchema>){
        console.log(values);
        
     }
    return (
        <section className="container mx-auto mt-10">
        <div className="flex flex-row justify-center gap-40">
            <div className="flex-1 max-w-[414px]">
            <h1 className="font-semibold text-4xl">Contact info</h1>
            <div className="flex flex-row gap-3  items-start mt-10">
               <div className="mt-1"><FaMapMarker /></div> 
                <div> 
                    <h1 className="text-lg font-semibold">Address</h1>
                    <p className="text-base text-[#D2D3D6]">House of Stone Ireland, 28 Mountjoy, Dublin 7.</p>
                </div>
            </div>
            <div className="flex flex-row gap-3  items-start mt-10">
               <div className="mt-1"><FaPhoneAlt /></div> 
                <div> 
                    <h1 className="text-lg font-semibold">Phone</h1>
                    <p className="text-base text-[#D2D3D6]">+2 201-88205500</p>
                </div>
            </div>
            <div className="flex flex-row gap-3  items-start mt-10">
               <div className="mt-1"><FaMapMarker /></div> 
                <div> 
                    <h1 className="text-lg font-semibold">Email</h1>
                    <p className="text-base text-[#D2D3D6]">exampleinfo.20@gmail.com</p>
                </div>
            </div>
            <div className="flex flex-row gap-3  items-start mt-10">
               <div className="mt-1"><FaMapMarker /></div> 
                <div> 
                    <h1 className="text-lg font-semibold">Support Hours</h1>
                    <p className="text-base text-[#D2D3D6]">Time:- 10:00AM - 09:00PM</p>
                </div>
            </div>
            </div>
            <div className="bg-[#FFF]/5 rounded-3xl p-8 flex-1 max-w-[470px]" >
                <div className="w-80">
                  <h1 className="font-semibold text-2xl"> Get a quote</h1>
                  <p className="text-sm text-[#A0A4AD] mt-2">Fill up the form and our Team will get back to you within 24 hours.</p>
                  <div  className="mt-6">
                  <Form {...form}>
<form
  onSubmit={form.handleSubmit(onSubmit)}
  className="space-y-4 "
>
                  <FormField
    control={form.control}
    name="name"
    render={({ field }) => (
      <FormItem>
        {/* <FormLabel className="text-sm">Email</FormLabel> */}
        <FormControl className="">
          <Input
            className="border-none bg-white/10  rounded-2xl p-4"
            placeholder="name"
            {...field}
          />
        </FormControl>
        <FormMessage className="font-semibold" />
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        {/* <FormLabel className="text-sm">Email</FormLabel> */}
        <FormControl className="">
          <Input
            className="border-none bg-white/10  rounded-2xl p-4"
            placeholder="email"
            {...field}
          />
        </FormControl>
        <FormMessage className="font-semibold" />
      </FormItem>
    )}
  />

   <FormField
    control={form.control}
    name="message"
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

  <Button type="submit" className="w-40" variant="custom">
    Send Messagge
  </Button>{" "}

</form>
</Form>
                  </div>
                </div>
            </div>
        </div>
</section>   
    );
}