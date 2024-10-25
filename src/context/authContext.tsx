"use client";
import Loader from "@/components/ui/loader";
import { api } from "@/utils/Auth";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IAuthContext {
    userData: any;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

interface AuthProviderProp {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProp> = ({ children }) => {
    const router = useRouter();
    const [userData, setUserData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/");
            return;
        }

        setLoading(true);
        api("/user_details")
            .getExample(undefined, token)
            .then((response: any) => {
                console.log(response);
                setUserData(response);
                localStorage.setItem("user_id", response.user_id);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [router]);

    const isUserAuthenticated = () => {
        const token = localStorage.getItem("token");
        const email = localStorage.getItem("email");
        const user_id = localStorage.getItem("user_id");
        return !!token || !!email || !!user_id;
    };

    useEffect(() => {
        if (!isUserAuthenticated()) {
            router.push("/");
        }
    }, [router]);

    if (loading) return <Loader />;

    return (
        <AuthContext.Provider value={{ userData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
};
