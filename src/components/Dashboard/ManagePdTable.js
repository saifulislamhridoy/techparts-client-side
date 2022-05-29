import React from 'react';
import Swal from 'sweetalert2';

const ManagePdTable = ({pd}) => {
    const {_id,img,name}=pd
    const handleDelete = (id)=>{
        const sure = window.confirm('are you sure')
        if(sure){
            fetch(`https://mysterious-atoll-84227.herokuapp.com/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount >0){
                    Swal.fire({
                        title: 'Delete Success',
                        icon: 'success',
                        confirmButtonText: 'ok'
                      })
                }
                else{
                    Swal.fire({
                        title: 'Faild to cancel!',
                        icon: 'error',
                        confirmButtonText: 'ok'
                      })
                }
            })
        }
       }
    return (
        <tr>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>{_id}</td>
        <th>
          <button onClick={()=>handleDelete(_id)} className='btn bg-red-500 text-white border-0'>Delete</button>
        </th>
      </tr>
    );
};

export default ManagePdTable;