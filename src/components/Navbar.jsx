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
                <div className='flex items-center justify-start gap-2'>
                    <img src={logo} className='h-12 w-12' alt="" />
                    <Link to={"/"} className="md:text-3xl text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">Lost Nest</Link>
                </div>
            </div>

            <div className=" lg:flex">
                <ul className="menu gap-2 menu-horizontal px-1">


                </ul>

                {!loading && <div className='flex items-center justify-center'>
                    {user ? (
                        <>
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
                                    className='menu menu-sm gap-2 dropdown-content z-[1] p-2 shadow border rounded-box w-52'
                                >
                                    <li><NavLink className={`bg-[#f0c35e] hover:bg-[#f0c35e] hover:scale-105 active:scale-105 py-2 text-black`} to={"/"}>Home</NavLink></li>
                                    <li>
                                        <NavLink className={`bg-[#f0c35e] hover:bg-[#f0c35e] hover:scale-105 active:scale-105 py-2 text-black`} to={"/add-lost-found"}>Add Lost & Found</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={`bg-[#f0c35e] hover:bg-[#f0c35e] hover:scale-105 active:scale-105 py-2 text-black`} to={"/all-recovered"}>All Recovered</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={`bg-[#f0c35e] hover:bg-[#f0c35e] hover:scale-105 active:scale-105 py-2 text-black`} to={"/manage-my-items"}>Manage My Items</NavLink>
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
                        <NavLink className={`bg-[#f0c35e] hover:bg-[#f0c35e] hover:scale-105 active:scale-105 text-black py-[6px] mr-2 px-3 rounded-lg`} to={"/login"}>Login</NavLink>
                    }

                </div>}

                <ModeToggle></ModeToggle>
            </div>
        </div>
    );
};

export default Navbar;