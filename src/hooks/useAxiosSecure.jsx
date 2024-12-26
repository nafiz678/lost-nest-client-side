import { AuthContext } from "@/provider/AuthProvider";
import axios from "axios";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const myAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})


const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOut } = useContext(AuthContext)
    useEffect(() => {
        myAxios.interceptors.response.use(res => {
            return res
        }, async error => {
            if(error.response.status === 400) {
                toast.error(error.response.data.message)
            }

            if (error.response.status === 401 || error.response.status === 403) {
                logOut()
                navigate("/login")
            }
        })
    }, [logOut, navigate])
    return myAxios
}

export default useAxiosSecure