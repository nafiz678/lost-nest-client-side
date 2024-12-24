import { motion } from "framer-motion";
import { FaSignInAlt, FaSearch, FaClipboardList, FaPhoneAlt, FaExchangeAlt, FaCheckCircle } from 'react-icons/fa'; // Import more icons for extra steps

const HowItWorks = () => {

    const steps = [
        {
            id: 1,
            icon: <FaSignInAlt className="text-4xl text-teal-500" />,
            title: "Step 1: User Login",
            description: "First, sign up or log in to your account to access all the features of the platform."
        },
        {
            id: 2,
            icon: <FaSearch className="text-4xl text-teal-500" />,
            title: "Step 2: Submit Lost or Found Item",
            description: "Once logged in, you can submit details and photos of the item you've lost or found."
        },
        {
            id: 3,
            icon: <FaClipboardList className="text-4xl text-teal-500" />,
            title: "Step 3: Browse and Search Items",
            description: "Browse through all reported lost and found items. Use filters to easily search for your lost or found items."
        },
        {
            id: 4,
            icon: <FaPhoneAlt className="text-4xl text-teal-500" />,
            title: "Step 4: Connect and Recover",
            description: "If you find a match, get in touch with the other user directly to recover the item or return it to its rightful owner."
        },
        {
            id: 5,
            icon: <FaExchangeAlt className="text-4xl text-teal-500" />,
            title: "Step 5: Arrange Exchange or Pickup",
            description: "Once you're connected, arrange to exchange or pick up the lost or found item at a convenient location."
        },
        {
            id: 6,
            icon: <FaCheckCircle className="text-4xl text-teal-500" />,
            title: "Step 6: Successful Recovery",
            description: "The item is successfully recovered, and users can leave feedback on the platform to help others."
        }
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-3xl font-bold text-teal-600 dark:text-teal-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    How It Works
                </motion.h2>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.2, // Add staggered delay for each step
                            }}
                            viewport={{ once: true }} // Trigger only once when scrolled into view
                        >
                            <div className="mb-4">
                                {step.icon}
                            </div>
                            <h3 className="font-semibold text-xl text-teal-600 dark:text-teal-300">{step.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mt-4">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
