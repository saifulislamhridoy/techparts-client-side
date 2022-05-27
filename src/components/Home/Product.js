import React from 'react';

const Product = ({ product }) => {
    const { img, name, availableQuantity, minimumQuantity, description,price } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='h-[200px]' src={img} alt="parts" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price} per pis</p>
                <p>Available Quantity: {availableQuantity}</p>
                <p>Minimum Order Quantity: {minimumQuantity}</p>
                <p>{description.slice(0,70)}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary text-white">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Product;