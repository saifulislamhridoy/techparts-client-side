import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaStar } from 'react-icons/fa'
import Swal from 'sweetalert2';
import auth from '../../firebase.init';

const AddReview = () => {
    const [rating,setRating]=useState(null)
    const [user]=useAuthState(auth)
    const handleReview=e=>{
        const email = user?.email
        e.preventDefault()
        const name = e.target.name.value
        const comment = e.target.comment.value 
        const review ={
            name:name,
            comment:comment,
            rating:rating
        }
        const url = `http://localhost:5000/review/${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
             'content-type':'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res =>res.json())
        .then(data => {
            if(data.acknowledged===true){
            Swal.fire({
                title: 'Successfully Order!',
                icon: 'success',
                confirmButtonText: 'ok'
              })
            }
        })
    e.target.reset()
    setRating(null)
    }
    return (
        <div className='flex justify-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold text-primary">Add Your Review</h2>
                    <form onSubmit={handleReview} className='grid grid-cols-1 justify-items-center'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder='Your name' className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Review</span>
                            </label>
                            <textarea name='comment' class="textarea textarea-bordered" placeholder="Your review"></textarea>
                        </div>
                        <div className='flex mt-5'>
                            {[...Array(5)].map((star,i) => {
                                const ratingValue = i
                                return (
                                    <label  key={i} className="label">
                                        <input className='hidden' value={ratingValue} onClick={()=>setRating(ratingValue +1)} type="radio" name="rating"  />
                                        <FaStar color={ratingValue < rating ? '#ffc107' : '#e4e5e9'} className='w-[40px] h-[30px]'></FaStar>
                                    </label>

                                )
                            })}
                        </div>
                        <input disabled={rating===null} className='btn bg-primary text-white border-0' type="submit" value="Add" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;