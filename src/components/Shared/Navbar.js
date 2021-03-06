import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo/logo.png'

const Navbar = () => {
    const [user]=useAuthState(auth)
    const handleLogOut = ()=>{
        signOut(auth)
        localStorage.removeItem('accessToken')
    }
    return (
        <div className="navbar sticky bg-base-100 top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/portfolio'>My Portfolio</Link></li>
                       {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
                        {user? <li><Link onClick={handleLogOut} to='/login'>LogOut</Link></li> : <li><Link to='/login'>Login</Link></li>}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl flex items-center"><img className='w-[35px] h-[35px] mr-3' src={logo} alt="" /> <span className='text-amber-500 text-xl font-bold'>Techparts</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal uppercase font-bold p-0">
                    <li className='hover:text-amber-500'><Link to='/'>Home</Link></li>
                    <li className='hover:text-amber-500'><Link to='/blogs'>Blogs</Link></li>
                    <li  className='hover:text-amber-500'><Link to='/portfolio'>My Portfolio</Link></li>
                    {user && <li className='hover:text-amber-500'><Link to='/dashboard'>Dashboard</Link></li>}
                    {user? <li className='hover:text-amber-500'><Link onClick={handleLogOut} to='/login'>LogOut</Link></li> : <li className='hover:text-amber-500'><Link to='/login'>Login</Link></li>}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;