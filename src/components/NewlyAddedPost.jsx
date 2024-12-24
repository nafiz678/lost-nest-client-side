import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import ItemsCard from "./ItemsCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer motion

const NewlyAddedPost = () => {
    const [loader, setLoader] = useState(true);
    const [items, setItems] = useState([]);

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
        fetchData();
    }, []);

    console.log(items);

    // Framer Motion Variants for Staggered Animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger the children with a 0.2s delay
                duration: 0.8
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 }, // Start the cards offscreen and transparent
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } // Animate into view
    };

    return (
        <div>
            {loader ? (
                <Loader />
            ) : (
                <div className="my-20 w-11/12 mx-auto">
                    {/* Motion container for the grid */}
                    <motion.div
                        className="grid w-11/12 mx-auto items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Staggered animation for each item */}
                        {items.map(item => (
                            <motion.div 
                                key={item._id} 
                                variants={itemVariants}
                                whileInView="visible" // Trigger animation when it comes into view
                                initial="hidden"
                                viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in the viewport
                            >
                                <ItemsCard item={item} />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Show all data button */}
                    <button className="w-[94%] mt-7 flex items-end justify-end">
                        <Link
                            className="px-6 py-3 font-semibold text-white rounded-lg shadow-md bg-gradient-to-br from-teal-400 via-cyan-500 to-emerald-600 hover:from-teal-300 hover:via-cyan-400 hover:to-emerald-500 
                            hover:scale-105 active:scale-95 transition duration-200"
                            to={"/allItems"}
                        >
                            Show all data
                        </Link>
                    </button>
                </div>
            )}
        </div>
    );
};

export default NewlyAddedPost;
