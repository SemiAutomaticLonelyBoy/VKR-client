import React from 'react';
import cl from './MyInput.module.css'

const MyInput = ({register, label, required, autoComplete , type , placeholder}: any) => {

    let classes = ''

    if (type !== 'checkbox') {
        classes = `${cl.MyInput} ${cl.wd}`
    }else {
        classes = `${cl.MyInput}`
    }

    return (
        <>
            <input
                {...register(label,  type === 'checkbox' ? {} : {required} )}
                autoComplete={autoComplete}
                className={classes}
                type={type}
                placeholder={placeholder}
            />
        </>
    );
};

export default MyInput;