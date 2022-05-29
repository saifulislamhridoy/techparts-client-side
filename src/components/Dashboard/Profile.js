import React from 'react';
import pp from '../../images/icons/user.png'
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Swal from 'sweetalert2';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
const Profile = () => {
    const [user]=useAuthState(auth)
    const email = user?.email
    const { register, handleSubmit,reset } = useForm();
    const {data:profile,isLoading ,refetch}=useQuery(['profile', user],()=>fetch(`http://localhost:5000/profile/${email}`).then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    console.log(profile);
    const onSubmit = data => {
        const myProfile ={
            name:data.name,
            email:email,
            education:data.education,
            location:data.location,
            phone:data.phone
        }
       if(email){
        const url = `http://localhost:5000/profile/${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
             'content-type':'application/json'
            },
            body:JSON.stringify(myProfile)
        })
        .then(res =>res.json())
        .then(data => {
            if(data.acknowledged===true){
            Swal.fire({
                title: 'Successfully Update Profile!',
                icon: 'success',
                confirmButtonText: 'ok'
              })
              refetch()
              reset()
            }
            else{
                Swal.fire({
                    title: 'Faild Update Profile!',
                    icon: 'error',
                    confirmButtonText: 'ok'
                  })
            }
        })
       }
   
    };
    return (
        <div className='flex justify-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-xl">My Profile</h2>
                    <div className='flex justify-center'>
                        <img className='w-[70px]' src={pp} alt="" />
                    </div>
                    {profile?.name ?<p>Name: {profile?.name}</p> : <p>Name:</p>}
                   {profile?.email ? <p>Email: {profile?.email}</p> : <p>Email:</p>}
                    {profile?.location ? <p>Education: {profile?.education}</p> : <p>Location:</p>}
                    {profile?.location ?<p>Location: {profile.location}</p> :<p>Location:</p>}
                    {profile?.phone ? <p>Phone: {profile.phone}</p> : <p>Phone:</p>}
                    <div className="card-actions justify-center">
                        <label for="my-modal-6" class="btn bg-primary text-white border-0">Update Profile</label>
                    </div>
                </div>
                <div>

                    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 justify-items-center">
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" placeholder='Your Name' className="input input-bordered w-full max-w-xs" {...register("name")} />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input type="email" disabled value={email} className="input input-bordered w-full max-w-xs" {...register("email")} />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Education</span>
                                    </label>
                                    <input type="text" placeholder='Your Education' className="input input-bordered w-full max-w-xs" {...register("education")} />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Your Location</span>
                                    </label>
                                    <input type="text" placeholder='Your Location' className="input input-bordered w-full max-w-xs" {...register("location")} />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Your Phone</span>
                                    </label>
                                    <input type="number" placeholder='Your Phone' className="input input-bordered w-full max-w-xs mb-2" {...register("phone")} />
                                </div>
                                <input className='btn bg-primary text-white border-0' type="submit"  value="Update"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;