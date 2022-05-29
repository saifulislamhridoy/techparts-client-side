import React from 'react';
import Swal from 'sweetalert2';

const MyOrderTable = ({myOrder,refetch}) => {
    const {_id,img,pdName,quantity}=myOrder
    const handleDelete = (id)=>{
        const sure = window.confirm('are you sure')
        if(sure){
            fetch(`http://localhost:5000/pd/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount >0){
                    Swal.fire({
                        title: 'Cancel Success',
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
        <th>
          <button onClick={()=>handleDelete(_id)} className='btn bg-red-500 text-white border-0'>Cancel</button>
        </th>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">{pdName}</div>
            </div>
          </div>
        </td>
        <td>
          <span class="badge badge-ghost badge-sm">{quantity}</span>
        </td>
        <td>{myOrder.price}</td>
        <th>
          <button class="btn bg-primary text-white border-0">Pay Now</button>
        </th>
      </tr>
    );
};

export default MyOrderTable;