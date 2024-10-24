import { DashboardProvider } from "@/context/dashboardContext"

export const purchaseLayout = ({ children }: { children: React.ReactNode })=>{
    return (
        <DashboardProvider>
            {children}
        </DashboardProvider>
    )
}

export default purchaseLayout;