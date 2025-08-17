import SidebarPage from "./sidebar";

const AuthLoayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <SidebarPage>
                {children}
            </SidebarPage>
        </div>
    )
}
export default AuthLoayout;