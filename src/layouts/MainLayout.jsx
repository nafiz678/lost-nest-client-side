import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto mt-6">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div className="mt-96">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;