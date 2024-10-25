import { DashboardProvider } from "@/context/dashboardContext"

const purchaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <DashboardProvider>
            {children}
        </DashboardProvider>
    )
}

export default purchaseLayout;