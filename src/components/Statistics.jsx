import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Statistics = () => {
    const [itemsRecovered, setItemsRecovered] = useState(0);
    const [usersHelped, setUsersHelped] = useState(0);
    const [successRate, setSuccessRate] = useState(0);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const increment = (setter, target, duration) => {
                const step = target / (duration / 20); 
                let current = 0;
                const interval = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        setter(target);
                        clearInterval(interval);
                    } else {
                        setter(Math.floor(current));
                    }
                }, 20);
            };

            increment(setItemsRecovered, 1200, 2000);
            increment(setUsersHelped, 800, 2000); 
            increment(setSuccessRate, 95, 2000); 
        }
    }, [isInView]);

    return (
        <section
            ref={ref}
            className="bg-gray-100 dark:bg-gray-900 py-16"
        >
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-3xl font-bold text-teal-600 dark:text-teal-400"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    Platform Impact
                </motion.h2>
                <motion.p
                    className="text-gray-700 dark:text-gray-300 mt-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Showcasing the effectiveness of WhereIsIt in reuniting people with their belongings.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    <motion.div
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                            {itemsRecovered}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                            Items Recovered
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                            {usersHelped}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                            Users Helped
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                            {successRate}%
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                            Success Rate
                        </p>
                    </motion.div>
                </div>
                <div className="mt-10">
                    <motion.div
                        className="bg-gray-200 dark:bg-gray-700 rounded-full h-6 overflow-hidden"
                        initial={{ width: "0%" }}
                        animate={isInView ? { width: `${successRate}%` } : {}}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    >
                        <motion.div
                            className="bg-teal-500 dark:bg-teal-400 h-6"
                            initial={{ width: "0%" }}
                            animate={isInView ? { width: `${successRate}%` } : {}}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        ></motion.div>
                    </motion.div>
                    <p className="text-gray-700 dark:text-gray-300 mt-4">
                        Success Rate Tracker: {successRate}% of items successfully matched or returned.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Statistics;
