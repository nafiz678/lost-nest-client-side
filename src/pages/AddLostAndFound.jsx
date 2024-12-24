import { AuthContext } from "@/provider/AuthProvider";
import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LostFoundForm = () => {
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate()
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target

        const postType = form.postType.value
        const thumbnail = form.thumbnail.value
        const title = form.title.value
        const description = form.description.value
        const category = form.category.value
        const location = form.location.value
        const contactName = form.contactName.value
        const contactEmail = form.contactEmail.value

        const formData = {
            postType,
            thumbnail,
            title,
            description,
            category,
            location,
            contactName,
            contactEmail,
            startDate,
            status: "notRecovered"
        };

        console.log(formData);

        const {data}  = await axios.post(`${import.meta.env.VITE_API_URL}/add-item`, formData)
        console.log(data)
        if(data.insertedId)
        {
            form.reset()
            toast.success("Added successfully")
            navigate("/myItems")
        }

    };

    return (
        <div className=" bg-gray-100 dark:bg-gray-900 py-14">
            <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto px-8 py-4 border bg-white dark:bg-gray-800 shadow-md rounded-md"
            >
                <h2 className="text-xl font-bold mb-4">Lost and Found Form</h2>

                {/* Post Type */}
                <label className="block mb-2 font-medium ">Post Type:</label>
                <select
                    name="postType"
                    required
                    className="w-full p-2 border rounded mb-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                >
                    <option value="Lost">Lost</option>
                    <option value="Found">Found</option>
                </select>

                {/* Thumbnail */}
                <label className="block mb-2 font-medium">Thumbnail:</label>
                <input
                    type="url"
                    // accept="image/*"
                    name="thumbnail"
                    placeholder="Upload image"
                    required
                    className="w-full p-2 border rounded mb-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300"
                />

                {/* Title */}
                <label className="block mb-2 font-medium">Title:</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Items title"
                    className="w-full p-2 border rounded mb-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300"
                    required
                />

                {/* Description */}
                <label className="block mb-2 font-medium">Description:</label>
                <textarea
                    name="description"
                    rows="4"
                    placeholder="Description"
                    className="w-full p-2 border rounded mb-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300"
                    required
                ></textarea>

                {/* Category */}
                <label className="block mb-2 font-medium">Category:</label>
                <select
                    name="category"
                    className="w-full p-2 border rounded mb-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300"
                    required
                >
                    <option value="">Select Category</option>
                    <option value="pets">Pet</option>
                    <option value="documents">Document</option>
                    <option value="gadgets">Gadget</option>
                </select>

                {/* Location */}
                <label className="block mb-2 font-medium">Location:</label>
                <input
                    type="text"
                    name="location"

                    className="w-full p-2 border rounded mb-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300"
                    required
                />

                {/* Date Lost */}
                <label className="block mb-2 font-medium">Date Lost/Found:</label>
                <DatePicker
                    selected={startDate}
                    showIcon
                    closeOnScroll={true}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="yyyy-MM-dd"
                    className="w-full p-2 border rounded mb-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300"
                    placeholderText="Select a date"
                    required
                />

                {/* Contact Information */}
                <label className="block mb-2 font-medium">Contact Name:</label>
                <input
                    type="text"
                    name="contactName"
                    value={user.displayName}
                    readOnly
                    disabled
                    className="w-full p-2 border rounded mb-4"
                />

                <label className="block mb-2 font-medium">Contact Email:</label>
                <input
                    type="email"
                    name="contactEmail"
                    value={user.email}
                    readOnly
                    disabled
                    className="w-full p-2 border rounded mb-4"
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Add Post
                </button>
            </form>
        </div>
    );
};

export default LostFoundForm;
