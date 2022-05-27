import React from 'react';
import bg1 from '../../images/background/bg-1.webp'
import bgCar from '../../images/background/bg-car.webp'

const Car = () => {
    return (
        <div className='h-[500px] md:h-[600px]' style={{background:`url(${bg1})`}}>
            <div className='text-center pt-12'>
              <h2 className='text-4xl font-bold'>ALL KINDS OF PARTS THAT YOU</h2>
              <h2 className='text-4xl font-bold pb-4 '>NEED CAN FIND HERE</h2>
              <button className='btn bg-primary text-white border-0'>Shop now</button>
              <div className='flex justify-center mt-12'>
                  <img src={bgCar} alt="" />
              </div>
            </div> 
        </div>
    );
};

export default Car;