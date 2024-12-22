import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto ">
                <Navbar></Navbar>
            </div>

            <div>
                <Outlet></Outlet>
            </div>
            
            <div className="">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;