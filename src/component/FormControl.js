import React from 'react';
import styles from './formControl.module.css';

const FormControl = ({label,value}) => {
    return (
        <div className={styles['form-control']}>
                <label>{label}</label>
                <input type="text" value={value}/>
        </div>
    );
};

export default FormControl;