import BreadCrumb from 'components/frontend/BreadCrumb/BreadCrumb';
import React from 'react';

const Cart = () => {
    return (
        <div>
            <BreadCrumb/>
           <div className="grid grid-cols-12">
            <div className='col-span-8'></div>
            <div className='col-span-4'></div>
           </div>
        </div>
    );
};

export default Cart;