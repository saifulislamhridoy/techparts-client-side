import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageOrderTable from './ManageOrderTable';

const ManageAllOrders = () => {
  const { data: manageAllOrders, isLoading, refetch } = useQuery('manageAllOrders', () => fetch(`http://localhost:5000/manageAllOrder`).then(res => res.json()))
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>
                Cancel
              </th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              manageAllOrders.map(manageOrder => <ManageOrderTable key={manageOrder._id} manageOrder={manageOrder}></ManageOrderTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;