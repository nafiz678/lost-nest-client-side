import Loader from "@/components/Loader";
import RecoveredDataCard from "@/components/RecoveredDataCard";
import RecoveredDataTable from "@/components/RecoveredDataTable";
import { AuthContext } from "@/provider/AuthProvider";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const AllRecovered = () => {
    const {user} = useContext(AuthContext)
    const [toggle, setToggle] = useState(true)
    const [loader, setLoader] = useState(true)
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchRecoverData = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/recoveredItems/${user.email}`);
                setItems(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
                setItems([]);
            } finally {
                setLoader(false);
            }
        };
        fetchRecoverData()
    }, [user.email])
    console.log(items)

    return (
        <div>
            <div className="max-w-7xl mt-6 mx-auto flex-col md:flex-row items-start md:items-center flex justify-end gap-10 ">

                {/* Filters Dropdown */}
                <div className="">
                    <button onClick={() => {
                        setToggle(true)
                    }} className="px-6 py-2 bg-orange-400 text-white font-semibold rounded-l-full hover:bg-orange-600 transition duration-300">Table</button>

                    <button onClick={() => {
                        setToggle(false)
                    }} className="px-6 py-2 bg-orange-400 text-white font-semibold rounded-r-full hover:bg-orange-600 transition duration-300">Card</button>
                </div>
            </div>

            <div className="overflow-x-auto my-10">
            {loader ? (
                <Loader></Loader>
            ) : items.length > 0 ?  
            toggle ? 
            <RecoveredDataTable items={items}></RecoveredDataTable> 
            :
            <RecoveredDataCard items={items}></RecoveredDataCard>

            : 
            (
                <div className="text-center h-40 w-auto text-gray-500 text-xl md:text-3xl lg:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
                    No items data from &quot;{user.email}&quot;.
                </div>
            )}
        </div>
        </div>
    );
};

export default AllRecovered;