
import React from 'react';
import style from './button.module.css'

const Button = ({ name, onClick, type }) => {
    return (
        <button className={style.buttonStyle} onClick={onClick} type={type}>{name}</button>
    );
};

export default Button;