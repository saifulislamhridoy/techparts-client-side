import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineReviews } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { GrAddCircle,GrDeliver } from 'react-icons/gr';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col bg-gray-100">
   <h2 className='text-xl md:text-4xl font-bold flex justify-center mt-4 text-sky-500 uppercase'>Welcome To Your Dashboard</h2>
    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label for="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-70 bg-base-100 text-base-content">
      <li><Link className='flex items-center' to='/dashboard/order'><CgProfile></CgProfile> My Profile</Link></li>
      <li><Link className='flex items-center' to='/dashboard/profile'><AiOutlineShoppingCart></AiOutlineShoppingCart> My Order</Link></li>
      <li><Link className='flex items-center' to='/dashboard/review'><MdOutlineReviews></MdOutlineReviews>Add Review</Link></li>
      <li><Link className='flex items-center' to='/dashboard/allUser'><FaUsers></FaUsers>All Users</Link></li>
      <li><Link className='flex items-center' to='/dashboard/addpd'><GrAddCircle></GrAddCircle>Add Product</Link></li>
      <li><Link className='flex items-center' to='/dashboard/manageOrder'><GrDeliver></GrDeliver>Manage All Orders</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;