import React from 'react';
import styles from './subForm.module.css';

const SubForm = ({ label, value, type }) => {
    return (
        <div className={styles['form-control']}>
            <label>{label}</label>
            <input type={type} value={value}/>
        </div>
    );
};

export default SubForm;