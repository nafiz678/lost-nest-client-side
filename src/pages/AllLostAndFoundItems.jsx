import ItemsCard from "@/components/ItemsCard";
import Loader from "@/components/Loader";
import useDocumentTitle from "@/components/Title";
// import { AuthContext } from "@/provider/AuthProvider";
import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


const AllLostAndFoundItems = () => {
    // const { user } = useContext(AuthContext)
    useDocumentTitle("Lost and found items || Lost Nest");
    const [loader, setLoader] = useState(true)
    const [items, setItems] = useState([])
    const [search, setSearch] = useState("")
    const [recentLost, setRecentLost] = useState(false)
    const [recentFound, setRecentFound] = useState(false)
    const [isOpen, setIsOpen] = useState(false);


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
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-items?search=${search}&recentLost=${recentLost}&recentFound=${recentFound}`)
            setItems(data)
        }
        fetchAll()
    }, [search, recentLost, recentFound])

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleRecentLost = () => {
        setRecentLost(!recentLost)
        setRecentFound(false)
        setIsOpen(false)
    }
    const handleRecentFound = () => {
        setRecentFound(!recentFound)
        setRecentLost(false)
        setIsOpen(false)
    }

    useEffect(() => {
        if (items.length) {
            const tl = gsap.timeline();
    
            tl.to(".cardAnim", {
                opacity: 1,               // Fade in
                y: 0,                     // Move into place
                duration: 0.5,            // Duration for each card
                stagger: 0.2,             // Delay between each card
                ease: "power2.out",       // Smooth easing effect
            });
        }
    }, [items]);




    return (
        <div className="w-11/12 mx-auto pt-10">
            <div className="max-w-7xl mt-6 mx-auto flex-col md:flex-row items-start md:items-start flex justify-end gap-10 ">

                {/* sorting functionality */}
                <div className="relative inline-block text-left mr-4 mb-12">
                    <button
                        aria-expanded={isOpen}
                        aria-controls="dropdown-menu"
                        onClick={toggleDropdown}
                        className="flex items-center px-4 py-2 text-sm font-medium text-white bg-[#f17837] rounded-md shadow hover:bg-[#EA580C] focus:outline-none focus:ring-2 focus:ring-blue-500 "
                    >
                        View items
                        <svg
                            className={`w-5 h-5 ml-2 -mr-1 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"
                                }`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>

                    <div
                        className={`absolute right-0 left-0 z-50 w-52 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transform transition-all duration-300 ease-in-out ${isOpen
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                            }`}
                    >
                        <div className="py-1 z-50">
                            <button
                                onClick={() => handleRecentLost()}
                                className={`block px-4 py-2 text-sm z-50 text-gray-700
                                transition-all duration-300 ease-linear 
                                 hover:bg-teal-100 hover:text-gray-800 w-full text-left
                                ${recentLost ? "bg-blue-100 text-blue-800" : ""}   `}
                            >
                                {recentLost == true ? "Recent Items" : "Recent Items"}

                            </button>
                            <button
                                onClick={() => handleRecentFound()}
                                className={`block px-4 py-2 z-50 text-sm text-gray-700 
                                  transition-all duration-300 ease-linear  hover:bg-teal-100 hover:text-gray-800 w-full text-left
                                    ${recentFound ? "bg-blue-100 text-blue-800" : ""}   `}
                            >
                                {recentFound == true ? "Old Items" : "Old Items"}
                            </button>
                        </div>
                    </div>
                </div>


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
                <div className="grid card-container max-w-7xl mx-auto mb-20 mt-10 items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
                    {items.map(item =>
                        <ItemsCard key={item._id} item={item}></ItemsCard>
                    )}
                </div>

            }

        </div>
    );
};

export default AllLostAndFoundItems;