import useDocumentTitle from "@/components/Title";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    useDocumentTitle("Login || Lost Nest");
    const {signInUser, googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value

        signInUser(email, password)
        .then(res=>{
            
            toast.success("Login successful");
            navigate(location?.state ? location.state : "/")
        })
        .catch(err=>{
            
            toast.error(err.message)
        })
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(res=>{
            
            toast.success("Login successful")
            navigate("/")
        })
        .catch(err => {
            
            toast.error(err.message)
        })

    }

    return (
        <div className="py-14 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-6 w-full max-w-md">
                <h2 className="text-2xl text-center font-semibold text-gray-800 dark:text-gray-100 mb-4">Sign in now!!</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-teal-500 hover:bg-teal-600 text-white dark:bg-teal-500 dark:hover:bg-teal-600 transition-all duration-300 ease-linear py-2 px-4 rounded-md text-sm font-medium"
                    >
                        Login
                    </button>
                    <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                        Don&apos;t have an account?{' '}
                        <Link to={"/register"} className="text-blue-600 dark:text-blue-400 hover:underline">
                            Register
                        </Link>
                    </p>
                </form>

                <div className="mt-6 flex items-center justify-between">
                    <hr className="w-full border-gray-300 dark:border-gray-600" />
                    <span className="text-sm text-gray-500 dark:text-gray-400 px-2">or</span>
                    <hr className="w-full border-gray-300 dark:border-gray-600" />
                </div>

                <button
                    onClick={handleGoogleLogin}
                    className="mt-4 w-full bg-teal-500 hover:bg-teal-600 text-white dark:bg-teal-500 dark:hover:bg-teal-600 hover:-translate-y-1 transition duration-200 py-2 px-4 rounded-md text-sm font-medium flex items-center justify-center"
                >
                    <FaGoogle className="mr-2"></FaGoogle>
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
