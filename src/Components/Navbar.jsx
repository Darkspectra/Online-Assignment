import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import logo from '../assets/logo.jpg';
import userDefault from "../assets/user.jpg";
import { AuthContext } from "../Provider/AuthProvider";
import DisAssign from "./DisAssign";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const links = <>
        <NavLink to="/"><img className="w-16 rounded-full mx-auto" src={logo} alt="" /></NavLink>
        <li className="font-bold text-3xl ml-10"><NavLink to="/">Assignments</NavLink></li>
        {user?.email ? <>
            <li className="font-bold text-3xl mx-6"><NavLink to="/create">Create Assignment</NavLink></li>
            <li className="font-bold text-3xl mr-6"><NavLink to="/submit">Submitted Assignment</NavLink></li>
            <li className="font-bold text-3xl mr-6"><NavLink to="/myassignment">My Assignment</NavLink></li>
        </>
            : ""
        }
    </>

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div>
            <div className="flex mx-auto items-center justify-between">
                <div>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {links}
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                </div>
                <div>
                    {
                        user ?
                            <div>
                                <button onClick={handleSignOut} className="btn text-3xl font-bold">Sign Out</button>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar mt-8">
                                    <div className="w-28 rounded-full">
                                        <img className="mx-auto items-center" src={userDefault} />
                                    </div>
                                </label>
                                <p className="text-4xl font-bold text-green-600">{user.email.split("@")[0]}</p>
                            </div>
                            :
                            <Link to="/login">
                                <button className="btn text-3xl font-bold">Login</button>
                            </Link>
                    }
                </div>
            </div>
            <DisAssign></DisAssign>
        </div>
    );
};

export default NavBar;