import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';


const PurchaseModal = ({ setPurchase, purchase,refetch }) => {
    const [quantityValue, setQuantityValue] = useState('')
    const [user] = useAuthState(auth)
    const { name, minimumQuantity, img, price, availableQuantity,_id } = purchase;

    let qError
    if (minimumQuantity > parseInt(quantityValue)) {
        qError = `Minimum order ${minimumQuantity} unit`
    }
    else if (availableQuantity < parseInt(quantityValue)) {
        qError = `Maximum order ${availableQuantity} unit`
    }
    else {
        qError = ''
    }
    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const userName = e.target.name.value
        const address = e.target.address.value
        const phone = e.target.phone.value
        const quantity = e.target.quantity.value
        const data = {
            email: email,
            name: userName,
            address: address,
            phone: phone,
            quantity: quantity,
            img: img,
            price: price,
            pdName:name
        }
        fetch('https://mysterious-atoll-84227.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successfully Order!',
                        icon: 'success',
                        confirmButtonText: 'ok'
                      })
                    e.target.reset()

                    // update quantity
                    fetch(`https://mysterious-atoll-84227.herokuapp.com/order/${_id}`,{
                        method:'PUT',
                        headers:{
                            'content-type':'application/json'
                        },
                        body:JSON.stringify({quantity})
                    })
                    .then(res => res.json())
                    .then(result =>{
                        if(result.modifiedCount > 0){
                            setPurchase(null)
                            refetch()
                        }
                    })
                }
                else{
                    Swal.fire({
                        title: 'Faild to Order!',
                        icon: 'error',
                        confirmButtonText: 'ok'
                      })
                }
            })
         
    }
    return (
        <div>
            <input type="checkbox" id="purchase-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 justify-items-center'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name='email' disabled value={user.email} className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder='Your Name' className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Address</span>
                            </label>
                            <input type="text" name='address' placeholder='Your Address' className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Phone</span>
                            </label>
                            <input type="number" name='phone' placeholder='Phone Number' className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" onChange={e => setQuantityValue(e.target.value)} name='quantity' placeholder={`Minimum order Quantity ${minimumQuantity} unit`} className="input input-bordered w-full max-w-xs" required />
                            <label className="label">
                                <span className="label-text text-red-500">{qError}</span>
                            </label>
                        </div>

                        <input disabled={minimumQuantity > parseInt(quantityValue) || availableQuantity < parseInt(quantityValue)} className='btn btn-primary mt-3 text-white' type="submit" value='Order' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;