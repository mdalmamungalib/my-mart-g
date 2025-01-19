import Navbar from 'components/frontend/Navbar/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Navbar/>
           {children} 
        </div>
    );
};

export default layout;