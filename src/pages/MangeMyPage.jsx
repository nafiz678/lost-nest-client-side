import Loader from "@/components/Loader";
import { AuthContext } from "@/provider/AuthProvider";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { RiFileEditFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";
import useAxiosSecure from "@/hooks/useAxiosSecure";



const MangeMyPage = () => {
    const myAxios = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {

        fetchUserData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user.email])

    const fetchUserData = async () => {
        try {
            const { data } = await myAxios.get(`/user-items/${user.email}`);
            setItems(data);
        } catch (error) {
            console.error("Error fetching user data:", error);
            setItems([]);
        } finally {
            setLoader(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/delete/${id}`)
            console.log(data)
            toast.success("Data deleted successfully")
            //   const remaining = items.filter(item=> item._id !== id)
            //   setItems(remaining)
            fetchUserData()
        } catch (error) {
            console.log(error)
            toast.error("Error happen")
        }

    }

    const modernDelete = (id) => {
        toast(
            (t) => (
                <div className='flex gap-2 items-center'>
                    <div>Are u <b>sure?</b></div>

                    <div>
                        <button
                            className='bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full mr-1 hover:bg-red-600'
                            onClick={() => {
                                handleDelete(id)
                                toast.dismiss(t.id)
                            }}>Delete</button>
                        <button
                            className='bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-green-600'
                            onClick={() => toast.dismiss(t.id)}>Cancel</button>
                    </div>
                </div>
            )
        );
    }



    return (
        <div className="overflow-x-auto my-10">
            {loader ? (
                <Loader></Loader>
            ) : items.length > 0 ? (
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr className="dark:text-gray-100">
                            <th></th>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Campaign Deadline</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr
                                key={item._id}
                            >
                                <th></th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.thumbnail}
                                                    alt="Avatar"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className=" uppercase">{item.title}</div>
                                            <div className="text-sm opacity-50 capitalize">{item.category}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.location}
                                    <br />
                                    <span className="badge whitespace-nowrap badge-ghost badge-sm">
                                        Post Type: {item.postType}
                                    </span>
                                </td>
                                <td>{new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                }).format(new Date(item.startDate))}</td>
                                <th>
                                    <Link to={`/updateItem/${item._id}`} className="btn btn-ghost text-xl">
                                        <RiFileEditFill></RiFileEditFill>
                                    </Link>
                                    <button
                                        onClick={() => modernDelete(item._id)}
                                        className="btn btn-ghost text-xl"
                                    >
                                        <MdDeleteForever />
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="text-center h-40 w-auto text-gray-500 text-xl md:text-3xl lg:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
                    No items data from &quot;{user.email}&quot;.
                </div>
            )}
        </div>
    );
};
export default MangeMyPage;
