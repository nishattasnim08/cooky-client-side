import React from 'react';
import error from '../../../images/404-Error.png'

const Error = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <img src={error} alt="Page Not Found" />
        </div>
    );
};

export default Error;