"use client";
import Loader from "@/components/ui/loader";
import { api } from "@/utils/Auth";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface IAuthContext{
    userData: any
}

 const AuthContext = createContext<IAuthContext | undefined >(undefined);

 interface AuthProviderProp{
    children: ReactNode
 }

export const AuthProvider = ({children}: AuthProviderProp)=>{
    const router = useRouter();
    const [userData, setUserData] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading((state)=>{ return !state });
        const token = localStorage.getItem('token');
        api('/user_details')
        .getExample(undefined, token )
        .then((response: any)=>{
          console.log(response);
          setUserData(response);
          localStorage.setItem('user_id',response.user_id);
        })
        .catch(error=>console.error(error)
        ).finally(()=>
          setLoading((state)=>{ return !state})
        )
      }, []);
    
    function isUserAuthenticate(){
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('email');
        const user_id = localStorage.getItem('user_id');
        if(!token || !email || !user_id){
            return true;
        }else{
            return false;
        }
    }
    if(isUserAuthenticate()){
        return router.push('/');
    } 

    return (
        <>
    
         {loading && <Loader />}
         <AuthContext.Provider value= {{ userData }}>
            {children}
        </AuthContext.Provider>
        </>

    );
}

export const useAuthContext = ()=>{
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useDashboard must be used within a DashboardProvider");
      }
      return context;
}
