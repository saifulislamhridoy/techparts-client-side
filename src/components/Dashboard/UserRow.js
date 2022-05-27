import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user,index ,refetch}) => {
    const {email,role}=user
    const makeAdmin =()=>{
        const url =`http://localhost:5000/user/admin/${email}`
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json',
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
         if(res.status===403){
             toast.error('Faild made an admin')
         }
          return res.json()})
        .then(data =>{
           if(data.modifiedCount >0){
            toast.success('Successfully made an admin')
            refetch()
           }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !=='admin' && <button onClick={makeAdmin} className="btn btn-xs bg-sky-500 text-white border-0">Make Admin</button>}</td>
            <td><button className="btn btn-xs bg-red-500 text-white border-0">Remove Admin</button></td>
        </tr>
    );
};

export default UserRow;