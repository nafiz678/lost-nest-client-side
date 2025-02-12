import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { AnimatedSubscribeButton } from "./magicui/animated-subscribe-button";

const Footer = () => {

    const { user } = useContext(AuthContext);

    const images = [
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
        "https://logos-world.net/wp-content/uploads/2020/04/Twitter-Symbol.png"
    ]

    return (
        <footer className="bg-gradient-to-b from-gray-100 via-white to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-black text-gray-800 dark:text-gray-300 py-16">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {/* Logo & Slogan */}
                    <div>
                        <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
                            Lost Nest
                        </h2>
                        <p className="text-sm">
                            Reuniting lost belongings with their owners since 2020. A place
                            where hope finds its way back to you.
                        </p>
                        <div className="mt-6">
                            {
                                user ? null : <Link to={"/register"} className="bg-[#f49f7b] hover:-translate-y-1 duration-300 text-white px-6 py-2 rounded-full shadow-md transition-all">
                                    Join Us
                                </Link>
                            }
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    to={"/aboutUs"}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/add-lost-found"}
                                >
                                    Report Lost Item
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/add-lost-found"}
                                >
                                    Report Found Item
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#works"
                                >
                                    How It Works
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Stay Connected */}
                    <div>
                        <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                            Stay Connected
                        </h3>
                        <p className="text-sm">
                            Follow us on social media to stay updated and help connect lost
                            belongings with their rightful owners.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            {images.map((image, idx) =>
                                <img
                                    key={idx}
                                    src={image}
                                    alt={image}
                                    className="h-10 w-10 object-cover hover:scale-110 transition duration-300"
                                />
                            )}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                            Subscribe to Updates
                        </h3>
                        <p className="text-sm mb-4">
                            Get the latest updates and tips on recovering lost items directly
                            in your inbox.
                        </p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                            />

                            <AnimatedSubscribeButton className="w-32 absolute right-1 top-1 bg-[#f49f7b] hover:bg-[#ff8c5c]  text-white px-4 py-2 rounded-full transition-all">
                                <span className="group inline-flex items-center">
                                    Subscribe
                                    <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                                <span className="group inline-flex items-center">
                                    <CheckIcon className="mr-2 size-4" />
                                    Subscribed
                                </span>
                            </AnimatedSubscribeButton>

                            {/* <button className="absolute right-1 top-1 bg-[#f49f7b] hover:bg-[#ff8c5c]  text-white px-6 py-2 rounded-full transition-all">
                                Subscribe
                            </button> */}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-12 border-t border-gray-300 dark:border-gray-700"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Lost Nest. All Rights Reserved.</p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;