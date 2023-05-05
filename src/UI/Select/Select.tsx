import React from 'react';
import cl from './Select.module.css'

const options = ['string', 'integer', ' boolean']

const Select = React.forwardRef(({onChange, onBlur, name, label}: any, ref: any) => (
    <>
        <select className={cl.container} name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
            {options.map((option: string) => (
                <option key={option}>{option}</option>
            ))}
        </select>
    </>
));

export default Select;