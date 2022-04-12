import React from 'react';
import style from './input.module.css';

const Input = ({placeholder}) => {
    return (
        <input type="text" placeholder={placeholder} className={style.inputStyle}/>
    );
};

export default Input;