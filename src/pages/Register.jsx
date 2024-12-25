import useDocumentTitle from "@/components/Title";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = () => {
    useDocumentTitle("Register || Lost Nest");
    const navigate = useNavigate()
    const { createUser, updateUser, setUser, googleLogin } = useContext(AuthContext)


    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const displayName = form.displayName.value
        const email = form.email.value
        const password = form.password.value
        const photoURL = form.photoURL.value

        const info = { displayName, photoURL }

        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if (!regex.test(password)) {
            return toast.error("Password Invalid")
        }
        createUser(email, password)
            .then(res => {
                const user = res.user
                updateUser(info)
                const newUser = { ...user, ...info }
                setUser(newUser)
                toast.success("Registration successful")
                navigate("/")
            })
            .catch(err => {
                
            })


    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(res=>{
            
            toast.success("Registration successful")
            navigate("/")
        })
        .catch(err => {
            
            toast.error(err.message)
        })

    }



    return (
        <div className="py-14 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-6 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Register</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Name
                        </label>
                        <input
                            type="text"
                            name="displayName"
                            className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Photo URL
                        </label>
                        <input
                            type="url"
                            name="photoURL"
                            className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Enter photo URL"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white dark:bg-blue-500 dark:hover:bg-blue-400 hover:bg-blue-700 py-2 px-4 rounded-md text-sm font-medium"
                    >
                        Register
                    </button>
                    <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                        Already have an account?{' '}
                        <a href="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
                            Sign in
                        </a>
                    </p>
                </form>

                <div className="mt-6 flex items-center justify-between">
                    <hr className="w-full border-gray-300 dark:border-gray-600" />
                    <span className="text-sm text-gray-500 dark:text-gray-400 px-2">or</span>
                    <hr className="w-full border-gray-300 dark:border-gray-600" />
                </div>

                <button
                    onClick={handleGoogleLogin}
                    className="mt-4 w-full bg-[#f49f7b] text-white dark:bg-red-400 dark:hover:bg-red-300 hover:-translate-y-1 transition duration-200 py-2 px-4 rounded-md text-sm font-medium flex items-center justify-center"
                >
                    <FaGoogle className="mr-2"></FaGoogle>
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Register;
