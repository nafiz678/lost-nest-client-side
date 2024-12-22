import { Link, NavLink } from 'react-router-dom';
import { ModeToggle } from './Toggle';
import logo from '../assets/logo.png'
import "./nav.css"
import { Button } from './ui/button';


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost pl-0 lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu gap-2 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink>Item 1</NavLink></li>
                        <li><NavLink>Item 3</NavLink></li>
                    </ul>
                </div>
                <div className='flex items-center justify-start gap-2'>
                    <img src={logo} className='h-12 w-12' alt="" />
                    <Link to={"/"} className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">Lost Nest</Link>
                </div>
            </div>
            <div className="navbar-end lg:flex">
                <ul className="menu gap-2 menu-horizontal px-1">

                    <li><NavLink className={`bg-[#f0c35e] hover:bg-[#f0c35e] hover:scale-105 active:scale-105 text-black`} to={"/"}>Home</NavLink></li>

                    <li><NavLink className={`bg-[#f0c35e] hover:bg-[#f0c35e] hover:scale-105 active:scale-105 text-black`} to={"/lost-found"}>Lost & Found</NavLink></li>
                    <li><NavLink className={`bg-[#f0c35e] hover:bg-[#f0c35e] hover:scale-105 active:scale-105 text-black`} to={"/login"}>Login</NavLink></li>

                    <li><NavLink className={`bg-[#f0c35e] hover:bg-[#f0c35e] hover:scale-105 active:scale-105 text-black`} to={"/register"}>Register</NavLink></li>
                </ul>

                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="m-1 p-1 rounded-full transition duration-150 hover:bg-gray-700">
                            <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" className='h-10 w-10 rounded-full' alt="image" />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu border rounded-box z-[1] p-2 shadow">
                            <Button>Logout</Button>
                        </ul>
                    </div>

                <ModeToggle></ModeToggle>
            </div>
        </div>
    );
};

export default Navbar;