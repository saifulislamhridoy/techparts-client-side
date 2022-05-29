import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManagePdTable from './ManagePdTable';

const ManageProduct = () => {
    const {data:products,isLoading,refetch}=useQuery('products',()=>fetch('https://mysterious-atoll-84227.herokuapp.com/product').then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
        <div class="overflow-x-auto w-full">
          <table class="table w-full">
            <thead>
              <tr>
                <th>
                  product Name
                </th>
                <th>id</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map(pd => <ManagePdTable refetch={refetch} key={pd._id} pd={pd}></ManagePdTable>)
              }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageProduct;