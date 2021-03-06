import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const {data:users,isLoading,refetch}=useQuery('users',()=>fetch('https://mysterious-atoll-84227.herokuapp.com/user',{
        method:'GET',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mb-5'>
            <h2 className='text-2xl text-primary font-bold mb-2'>Total Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>User</th>
                            <th>Make Admin</th>
                            <th>Remove Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                users.map((user,index) => <UserRow refetch={refetch} index={index} key={user._id} user={user}></UserRow>)
                            }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;