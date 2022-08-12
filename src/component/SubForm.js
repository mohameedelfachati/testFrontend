import React, { useState } from 'react';
import styles from './subForm.module.css';

const Input = ({ label, value, type, name, editable }) => {
    const [inputValue, setInputValue] = useState(value);
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <div className={styles['form-control']}>
            <label>{label}</label>
            {editable ? <input type={type} name={name} onChange={handleChange} /> : <span>{value}</span>}
        </div>
    );
};

export default Input;