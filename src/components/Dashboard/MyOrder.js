import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyOrderTable from './MyOrderTable';

const MyOrder = () => {
    const [user]=useAuthState(auth)
    const email = user?.email
    const {data:myOrders,isLoading,refetch}=useQuery(['myOrders',user],()=>fetch(`https://mysterious-atoll-84227.herokuapp.com/myOrder/${email}`).then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>My orders: {myOrders.length}</h2>
            <div class="overflow-x-auto w-full">
  <table class="table w-full">
    <thead>
      <tr>
        <th>
         Cancel
        </th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Pay</th>
      </tr>
    </thead>
    <tbody>
     {
         myOrders.map(myOrder=><MyOrderTable refetch={refetch} key={myOrder._id} myOrder={myOrder}></MyOrderTable>)
     }
    </tbody> 
  </table>
</div>
        </div>
    );
};

export default MyOrder;