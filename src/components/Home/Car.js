import React from 'react';
import bg1 from '../../images/background/bg-1.webp'

const Car = () => {
    return (
        <div className='h-[800px]' style={{background:`url(${bg1})`}}>
            <div className='text-center pt-10'>
              <h2 className='text-4xl font-bold'>ALL KINDS OF PARTS THAT YOU</h2>
              <h2 className='text-4xl font-bold pb-4 '>NEED CAN FIND HERE</h2>
              <button className='btn bg-primary text-white border-0'>Shop now</button>
            </div> 
        </div>
    );
};

export default Car;