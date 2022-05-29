import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineReviews } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { GrAddCircle} from 'react-icons/gr';
import { SiGoogletagmanager} from 'react-icons/si';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';

const Dashboard = () => {
  const [user]=useAuthState(auth)
  const [admin]=useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col bg-gray-100">
   <h2 className='text-xl md:text-4xl font-bold flex justify-center my-4 text-sky-500 uppercase'>Welcome To Your Dashboard</h2>
   <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-70 bg-base-100 text-base-content">
      <li><Link className='flex items-center' to='/dashboard'><CgProfile></CgProfile> My Profile</Link></li>
      {!admin && <li><Link className='flex items-center' to='/dashboard/myOrder'><AiOutlineShoppingCart></AiOutlineShoppingCart> My Order</Link></li>}
     {!admin && <li><Link className='flex items-center' to='/dashboard/review'><MdOutlineReviews></MdOutlineReviews>Add Review</Link></li>}
     {admin && <li><Link className='flex items-center' to='/dashboard/allUser'><FaUsers></FaUsers>All Users</Link></li>}
     {admin && <li><Link className='flex items-center' to='/dashboard/addpd'><GrAddCircle></GrAddCircle>Add Product</Link></li>}
     { admin && <li><Link className='flex items-center' to='/dashboard/manageOrder'><SiGoogletagmanager></SiGoogletagmanager>Manage All Orders</Link></li>}
     { admin && <li><Link className='flex items-center' to='/dashboard/manageProduct'><SiGoogletagmanager></SiGoogletagmanager>Manage Product</Link></li>}
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;