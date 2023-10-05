import { Outlet } from "react-router-dom";
import NavigationBar from "../Page/Shared/NavigationBar/NavigationBar";
import Footer from "../Page/Shared/Footer/Footer";

 

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="max-w-7xl mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;