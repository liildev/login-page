import React from 'react';
import spinner from '../../assets/svg/spinner.svg'
const Button = ({children, isLoading, ...props}) => {
    return (
        <button disabled={isLoading} {...props} className="btn">
            {isLoading ? <> <img className='spinner' src={spinner} /> </> : children}
        </button>
    );
}

export default Button;
