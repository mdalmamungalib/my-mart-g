import { Layers } from 'lucide-react';
import React from 'react';

const LargeCards = ({data}) => {
    
    return (
        <div className={`${data?.color} rounded-lg text-white shadow-md p-8 flex items-center flex-col gap-2`}>
            <Layers/>
            <h4>{data?.period}</h4>
            <h2 className='text-3xl'>${data?.sales}</h2>
        </div>
    );
};

export default LargeCards;