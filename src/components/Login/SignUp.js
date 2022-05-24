import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';

const SignUp = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, uError] = useUpdateProfile(auth);
      let signUpError;
      if(error || gError || uError){
          signUpError=<p className='text-red-500 py-3'>{error?.message || gError?.message || uError?.message}</p>
      }
      if(loading||gLoading||updating){
        return <Loading></Loading>
    }
    if(user || gUser){
        navigate('/');
       }
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email,data.password)
          await updateProfile({ displayName:data.name});
          reset()
      };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center text-primary">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is Required"
                                }
                            })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" {...register("email", {
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a Valid Email'
                                },
                                required: {
                                    value: true,
                                    message: "Email is Required"
                                }
                            })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" {...register("password", {
                                minLength: {
                                    value: 6,
                                    message: 'Provide Minmum 6 Character'
                                },
                                required: {
                                    value: true,
                                    message: "Password is Required"
                                }
                            })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signUpError}
                        <input className='btn w-full max-w-xs text-white hover:bg-primary hover:border-0' type="submit" value="Sign Up" />
                    </form>
                    <p><small>Already Have An Account? <Link className='text-primary' to='/login'>Please Login</Link></small></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline hover:bg-primary hover:border-0 hover:text-white">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;