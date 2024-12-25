import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import ItemsCard from "./ItemsCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


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


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                duration: 0.8
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 py-16">
            <motion.h2
                className="text-3xl font-bold text-teal-600 dark:text-teal-400 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Recently Added Posts
            </motion.h2>
            {loader ? (
                <Loader />
            ) : (
                <div className="py-10 w-11/12 mx-auto">
                    <motion.div
                        className="grid w-11/12 mx-auto items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {items.map(item => (
                            <motion.div
                                key={item._id}
                                variants={itemVariants}
                                whileInView="visible"
                                initial="hidden"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <ItemsCard item={item} />
                            </motion.div>
                        ))}
                    </motion.div>
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
