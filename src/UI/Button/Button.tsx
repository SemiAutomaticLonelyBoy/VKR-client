import React from 'react';
import cl from './Button.module.css'

const Button = ({children, type, onClick}: any) => {
    return (
        <>
            <button type={type} onClick={onClick} className={cl.MyButton}>{children}</button>
        </>
    );
};

export default Button;