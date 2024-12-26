import ItemsCard from "@/components/ItemsCard";
import Loader from "@/components/Loader";
import useDocumentTitle from "@/components/Title";
// import { AuthContext } from "@/provider/AuthProvider";
import axios from "axios";
import { useEffect, useState } from "react";


const AllLostAndFoundItems = () => {
    // const { user } = useContext(AuthContext)
    useDocumentTitle("Lost and found items || Lost Nest");
    const [loader, setLoader] = useState(true)
    const [items, setItems] = useState([])
    const [search, setSearch] = useState("")


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-items`);
                setItems(data);
            } catch (error) {
                // console.error("Error fetching user data:", error);
                setItems([]);
            } finally {
                setLoader(false);
            }
        };
        fetchUserData()
    }, [])

    useEffect(() => {
        const fetchAll = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-items?search=${search}`)
            setItems(data)
        }
        fetchAll()
    }, [search])
 


    return (
        <div className="w-11/12 mx-auto">
            <div className="max-w-7xl mt-6 mx-auto flex-col md:flex-row items-start md:items-center flex justify-end gap-10 ">

                {/* Search Bar */}
                <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
                    <input
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                        value={search}
                        type="text"
                        placeholder="Search..."
                        className="p-2 pl-4 focus:outline-none text-gray-700"
                    />
                    <button className="bg-orange-500 px-4 py-2 text-white font-semibold rounded-r-full hover:bg-orange-600 transition duration-300">
                        Search
                    </button>
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