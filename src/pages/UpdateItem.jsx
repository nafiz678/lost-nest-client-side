import { AuthContext } from "@/provider/AuthProvider";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import animatedImage from "../assets/updaet animation lottie.json"
import { Player } from "@lottiefiles/react-lottie-player";
import toast from "react-hot-toast";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useDocumentTitle from "@/components/Title";

function LostAndFoundForm() {
    useDocumentTitle("Update item || Lost Nest");
    const navigate = useNavigate()
    const myAxios = useAxiosSecure()
    const item = useLoaderData()
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date(item.startDate));


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target

        const postType = form?.postType?.value;
        const thumbnail = form?.thumbnail?.value;
        const title = form?.title?.value;
        const description = form?.description?.value;
        const category = form?.category?.value;
        const location = form?.location?.value;
        const contactName = form?.contactName?.value;
        const contactEmail = form?.contactEmail?.value;

        const formData = {
            postType,
            thumbnail,
            title,
            description,
            category,
            location,
            contactName,
            contactEmail,
            startDate
        };


        const {data}  = await myAxios.put(`/updateItem/${item._id}`, formData)
        
        if(data.modifiedCount)
        {
            form.reset()
            toast.success("Updated successfully")
            navigate("/myItems")
        }

    };


    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-14 px-4 flex flex-col-reverse md:flex-row">
            <motion.form
                onSubmit={handleSubmit}
                className="md:max-w-xl mx-3 md:mx-auto px-4 py-4 border bg-white dark:bg-gray-700 shadow-md rounded-md flex-1"
                initial={{ opacity: 0,scale: 0, }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-xl font-bold mb-4">Lost and Found Form</h2>

                {/* Post Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {item?.postType &&
                        <div>
                            <label className="block mb-2 font-medium">Post Type:</label>
                            <select
                                name="postType"
                                required
                                defaultValue={item.postType}
                                className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300"
                            >
                                <option value="Lost">Lost</option>
                                <option value="Found">Found</option>
                            </select>
                        </div>}

                    <div>
                        <label className="block mb-2 font-medium">Thumbnail:</label>
                        <input
                            type="url"
                            name="thumbnail"
                            placeholder="Upload image"
                            defaultValue={item.thumbnail}
                            required
                            className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300"
                        />
                    </div>
                </div>

                {/* Title and Description */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block mb-2 font-medium">Title:</label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={item.title}
                            placeholder="Items title"
                            className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300"
                            required
                        />
                    </div>

                    {item?.category &&
                        <div>
                            <label className="block mb-2 font-medium">Category:</label>
                            <select
                                name="category"
                                defaultValue={item.category}
                                className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300"
                                required
                            >
                                <option value="pets">Pet</option>
                                <option value="documents">Document</option>
                                <option value="gadgets">Gadget</option>
                            </select>
                        </div>}
                </div>

                {/* Description and Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block mb-2 font-medium">Description:</label>
                        <textarea
                            name="description"
                            rows="4"
                            defaultValue={item.description}
                            placeholder="Description"
                            className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300"
                            required
                        ></textarea>
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">Location:</label>
                        <input
                            type="text"
                            name="location"
                            defaultValue={item.location}
                            className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300"
                            required
                        />
                    </div>
                </div>

                {/* Date Lost and Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block mb-2 font-medium">Date Lost/Found:</label>
                        <DatePicker
                            selected={startDate}
                            showIcon
                            closeOnScroll={true}
                            onChange={(date) => setStartDate(new Date(date))}
                            dateFormat="yyyy-MM-dd"
                            className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300"
                            placeholderText="Select a date"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">Contact Name:</label>
                        <input
                            type="text"
                            name="contactName"
                            value={user.displayName}
                            readOnly
                            disabled
                            className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block mb-2 font-medium">Contact Email:</label>
                        <input
                            type="email"
                            name="contactEmail"
                            value={user.email}
                            readOnly
                            disabled
                            className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Update Post
                </button>
            </motion.form>

            {/* Animated Image */}
            <motion.div
                className=" flex justify-center items-center"
                initial={{ opacity: 0,scale: 0, }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex justify-center items-center h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
                    <Player
                        autoplay
                        loop
                        src={animatedImage}
                    />
                </div>
            </motion.div>
        </div>
    );
}

export default LostAndFoundForm;
