import ItemsCard from "@/components/ItemsCard";
import Loader from "@/components/Loader";
// import { AuthContext } from "@/provider/AuthProvider";
import axios from "axios";
import { useEffect, useState } from "react";


const AllLostAndFoundItems = () => {
    // const { user } = useContext(AuthContext)
    const [loader, setLoader] = useState(true)
    const [items, setItems] = useState([])
    const [toggle, setToggle] = useState(true)


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-items`);
                setItems(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
                setItems([]);
            } finally {
                setLoader(false);
            }
        };
        fetchUserData()
    }, [])

    console.log(items)


    return (
        <div>
            <div className="max-w-7xl mt-6 mx-auto flex justify-end gap-10 items-center">
                {/* Search Bar */}
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="bg-white text-orange-600 px-4 py-2 rounded-xl shadow hover:bg-orange-100 font-medium transition duration-300">Filter by Deadline</div>
                    <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Ascending</a></li>
                        <li><a>Descending</a></li>
                    </ul>
                </div>
                <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 pl-4 w-64 focus:outline-none text-gray-700"
                    />
                    <button className="bg-orange-500 px-4 py-2 text-white font-semibold rounded-r-full hover:bg-orange-600 transition duration-300">
                        Search
                    </button>
                </div>

                {/* Filters Dropdown */}
                <div className="">
                    <button onClick={()=>{
                        setToggle(true)
                    }} className="px-6 py-2 bg-orange-400 text-white font-semibold rounded-l-full hover:bg-orange-600 transition duration-300">Table</button>

                    <button onClick={()=>{
                        setToggle(false)
                    }} className="px-6 py-2 bg-orange-400 text-white font-semibold rounded-r-full hover:bg-orange-600 transition duration-300">Card</button>
                </div>
            </div>

            {loader ?
                <Loader></Loader>
                :
                <div className="grid max-w-7xl mx-auto my-20 items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
                    {items.map(item =>
                        <ItemsCard key={item._id} item={item}></ItemsCard>
                    )}
                </div>

            }

        </div>
    );
};

export default AllLostAndFoundItems;