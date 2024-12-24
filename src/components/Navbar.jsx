import { Link, NavLink } from 'react-router-dom';
import { ModeToggle } from './Toggle';
import logo from '../assets/logo.png'
import "./nav.css"
import { useContext } from 'react';
import { AuthContext } from '@/provider/AuthProvider';


const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext)
    return (
        <div className="navbar justify-between">
            <div className="">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn pl-0 btn-ghost md:hidden">
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
                        className='menu bg-gray-100 dark:bg-gray-800 menu-sm gap-2 dropdown-content z-50 p-2 shadow border rounded-box w-52'
                    >
                        {user?.displayName ? <h2 className={`text-xl border text-center p-2 rounded-lg`} to={"/"}>{user?.displayName}</h2> :
                            <div className='flex items-center justify-start gap-2'>
                                <Link to={"/"} className="md:text-3xl p-2 text-center text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">Lost Nest</Link>
                            </div>
                        }
                        <li>
                            <NavLink className={`bg-[#f0c35e] hover:bg-[#f0c35e] hover:scale-105 active:scale-105 py-2 text-black`} to={"/"}>Home</NavLink>
                        </li>
                        
                        
                        <li>
                            <NavLink className={`bg-[#f0c35e] hover:bg-[#f0c35e] hover:scale-105 active:scale-105 py-2 text-black`} to={"/allItems"}>Lost & Found Items</NavLink>
                        </li>
                        {user ? 
                        <li >
                        <button
                            onClick={logOut}
                            className='md:hidden flex w-full bg-[#f0c35e] hover:bg-[#f0c35e] hover:scale-105 active:scale-105 text-black py-2 mr-2 px-3 rounded-lg'
                        >
                            Logout
                        </button>
                    </li>
                     : 
                     ""
                     }


                    </ul>
                </div>
                <div className='flex items-center justify-start gap-2'>
                    <img src={logo} className='h-12 w-12' alt="" />
                    <Link to={"/"} className="md:text-3xl hidden md:inline-block text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">Lost Nest</Link>
                </div>
            </div>

            <div className=" lg:flex">
                <ul className="menu gap-2 menu-horizontal px-1">


                </ul>

                {!loading && <div className='flex items-center justify-center'>
                    {user ? (
                        <>
                            <NavLink className={`bg-[#f0c35e] hover:bg-[#f0c35e] hover:scale-105 active:scale-105 text-black py-[6px] mr-2 px-3 rounded-lg`} to={"/"}>Home</NavLink>
                            <NavLink className={`bg-[#f0c35e] hidden md:inline-block hover:bg-[#f0c35e] hover:scale-105 active:scale-105 text-black py-[6px] mr-2 px-3 rounded-lg`} to={"/allItems"}>Lost & Found Items</NavLink>
                            <button
                                onClick={logOut}
                                className=' hidden md:inline-block  bg-[#f0c35e] hover:bg-[#f0c35e] hover:scale-105 active:scale-105 text-black py-[6px] mr-2 px-3 rounded-lg'
                            >
                                Logout
                            </button>
                            <div className='dropdown gap-4 dropdown-hover dropdown-end z-50'>
                                <div
                                    tabIndex={0}
                                    role='button'
                                    className='btn btn-ghost btn-circle avatar'
                                >
                                    <div title={user?.displayName} className='w-10 rounded-full'>
                                        <img
                                            referrerPolicy='no-referrer'
                                            alt='User Profile Photo'
                                            src={user?.photoURL}
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className='menu bg-gray-100 dark:bg-gray-800 menu-sm gap-2 dropdown-content z-[1] p-2 shadow border rounded-box w-52'
                                >
                                    <h2 className={`text-xl border text-center p-2 rounded-lg`} to={"/"}>{user.displayName}</h2>
                                    <li>
                                        <NavLink className={`bg-[#f0c35e] hover:bg-[#f0c35e] hover:scale-105 active:scale-105 py-2 text-black`} to={"/add-lost-found"}>Add Lost & Found</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={`bg-[#f0c35e] hover:bg-[#f0c35e] hover:scale-105 active:scale-105 py-2 text-black`} to={"/allRecovered"}>All Recovered</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={`bg-[#f0c35e] hover:bg-[#f0c35e] hover:scale-105 active:scale-105 py-2 text-black`} to={"/myItems"}>Manage My Items</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={`bg-[#f0c35e] md:hidden hover:bg-[#f0c35e] hover:scale-105 active:scale-105 py-2 text-black`} to={"/allItems"}>Lost & Found Items</NavLink>
                                    </li>
                                    <li>
                                        <button
                                            onClick={logOut}
                                            className='md:hidden flex w-full bg-[#f0c35e] hover:bg-[#f0c35e] hover:scale-105 active:scale-105 text-black py-2 mr-2 px-3 rounded-lg'
                                        >
                                            Logout
                                        </button>
                                    </li>


                                </ul>

                            </div>

                        </>

                    )
                        :
                        <>
                            <NavLink className={`bg-[#f0c35e] hidden md:inline-block hover:bg-[#f0c35e] hover:scale-105 active:scale-105 text-black py-[6px] mr-2 px-3 rounded-lg`} to={"/"}>Home</NavLink>
                            <NavLink className={`bg-[#f0c35e] hover:bg-[#f0c35e] hover:scale-105 active:scale-105 text-black py-[6px] mr-2 px-3 rounded-lg`} to={"/login"}>Login</NavLink>
                        </>
                    }

                </div>}

                <ModeToggle></ModeToggle>
            </div>
        </div>
    );
};

export default Navbar;