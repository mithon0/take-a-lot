import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "../Page/Shared/NavigationBar/NavigationBar";
import Footer from "../Page/Shared/Footer/Footer";

 

const Main = () => {
    const location = useLocation();
    const helpCenterPath = location.pathname.includes("help-center");
    return (
        <div>
            {helpCenterPath || <NavigationBar></NavigationBar>}
            <div className="max-w-7xl mx-auto">
            <Outlet></Outlet>
            </div>
            {helpCenterPath || <Footer></Footer>}
            
            
        </div>
    );
};

export default Main;