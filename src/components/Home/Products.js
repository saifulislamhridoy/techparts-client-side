import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Product from './Product';
import PurchaseModal from './PurchaseModal';
import RequireAuth from '../Login/RequireAuth'

const Products = () => {
    const [purchase,setPurchase]=useState(null)
    const {data:products,isLoading,refetch}=useQuery('products',()=>fetch('http://localhost:5000/product',{
        method:'GET',
        headers:{
            'content-type':'application/json',
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
           <h2 className='text-center font-bold text-2xl uppercase my-4 text-primary'>Products</h2> 
           <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5 pb-10'>
           {
               products?.slice(0,6).map(product=> <Product setPurchase={setPurchase} key={product._id} product={product}></Product>)
           }
           </div>
           {purchase && <RequireAuth><PurchaseModal refetch={refetch} setPurchase={setPurchase} purchase={purchase}></PurchaseModal></RequireAuth>}
        </div>
    );
};

export default Products;