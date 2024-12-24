import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import ItemsCard from "./ItemsCard";
import { Link } from "react-router-dom";


const NewlyAddedPost = () => {
    const [loader, setLoader] = useState(true)
    const [items, setItems] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/sortedItems`);
                setItems(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
                setItems([]);
            } finally {
                setLoader(false);
            }
        };
        fetchData()
    }, [])
    console.log(items)

    return (
        <div>
            {loader ?
                <Loader></Loader>
                :
                <div className="my-20 w-11/12 mx-auto">
                    <div className="grid w-11/12 mx-auto items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
                        {items.map(item =>
                            <ItemsCard key={item._id} item={item}></ItemsCard>
                        )}
                    </div>
                    <button className="w-[94%] mt-7 flex items-end justify-end">
                        <Link className="px-6 py-3 font-semibold text-white rounded-lg shadow-md bg-gradient-to-br from-teal-400 via-cyan-500 to-emerald-600 hover:from-teal-300 hover:via-cyan-400 hover:to-emerald-500 
                        hover:scale-105 active:scale-95 transition duration-200" to={"/allItems"}>Show all data</Link>
                    </button>
                </div>
            }

        </div>
    );
};

export default NewlyAddedPost;