import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const imageStorageKey='e480d661e84555b8eddd86bec84b7387'
    const onSubmit = data => {
        const image = data.img[0]
        const formData= new FormData()
        formData.append('image',image)
        const url =`https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                const product={
                    name:data.name,
                    price:data.price,
                    availableQuantity:data.availableQuantity,
                    minimunQuantity:data.minimunQuantity,
                    description:data.description,
                    img:result.data.url
                }
                fetch('http://localhost:5000/product',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(product)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        toast.success('Successfully added product')
                        reset()
                    }
                    else{
                        toast.error('Faild to added product')
                    }
                })
            }
        })
    };
    return (
        <div className='flex justify-center mb-5'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-xl font-bold text-center text-primary">Add Product</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs" {...register("name")} required/>
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="price" className="input input-bordered w-full max-w-xs" {...register("price")} required/>
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="number" placeholder="Quantity" className="input input-bordered w-full max-w-xs" {...register("availableQuantity")} required/>
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Minimum Quantity</span>
                            </label>
                            <input type="number" placeholder="Minimum Quantity" className="input input-bordered w-full max-w-xs" {...register("minimunQuantity")} required/>
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Description" {...register("description")} required></textarea>
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input className='input input-bordered w-full max-w-xs' type="file" {...register("img")} required/>
                        </div>
                        <input className='btn btn-primary text-white mt-5 block mx-auto' type="submit" value='Add Product' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;