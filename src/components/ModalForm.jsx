/* eslint-disable react/prop-types */
import { AuthContext } from "@/provider/AuthProvider";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";


const ModalForm = ({ item }) => {
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const modalRef = useRef(null);

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(item.postType)


        const form = e.target

        const recoverDate = startDate
        const recoverLocation = form?.recoverLocation?.value
        const recoverEmail = form?.recoverEmail?.value
        const recoverName = form?.recoverName?.value
        const recoverPhoto = form?.recoverPhoto?.value

        const recoverItem = {itemId: item._id, recoverDate, recoverLocation, recoverEmail, recoverName, recoverPhoto, status: "recovered" }


        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/recoveredItems`, recoverItem);
            console.log(data);
        
            if (data.insertedId) {
                form.reset();
                toast.success("Recovered successfully");
                // navigate
            }  
        } catch (error) {
            if (error.response) {
                // Error response from the server
                console.log(error.response.data); // Log server error message
                toast.error(error.response.data.message || "You have already recovered this item");
            }
        }

    }

    const handleClose = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };


    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_5" ref={modalRef} className="modal  modal-bottom sm:modal-middle">
                <div className="modal-box dark:bg-gray-900">
                    <button onClick={handleClose} className="btn btn-sm  btn-circle btn-ghost absolute right-8 top-9">✕</button>
                    <form
                        onSubmit={handleSubmit}
                        className="md:max-w-xl mx-3 md:mx-auto px-4 py-4 border bg-white dark:bg-gray-700 shadow-md rounded-md flex-1">
                        <h2 className="text-xl font-bold mb-4">Lost and Found Form</h2>


                        <div>
                            <label className="block mb-2 font-medium">Recovered Date:</label>
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


                        {/* Description and Location */}
                        <div>
                            <label className="block mb-2 font-medium">Recovered location:</label>
                            <input
                                type="text"
                                name="recoverLocation"
                                className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300"
                                required
                            />
                        </div>




                        {/* Date Lost and Contact Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block mb-2 font-medium">Recovered user name:</label>
                                <input
                                    type="text"
                                    name="recoverName"
                                    value={user.displayName}
                                    readOnly
                                    disabled
                                    className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300"
                                />
                            </div>
                            <div>
                                <label className="block mb-2  font-medium">Recovered user email:</label>
                                <input
                                    type="email"
                                    name="recoverEmail"
                                    value={user.email}
                                    readOnly
                                    disabled
                                    className="w-full mb-4 p-2 border rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block mb-2  font-medium">Recovered user photo:</label>
                            <input
                                type="email"
                                name="recoverPhoto"
                                value={user.photoURL}
                                readOnly
                                disabled
                                className="w-full mb-4 p-2 border rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300"
                            />
                        </div>


                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        >
                            Recover Item
                        </button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default ModalForm;