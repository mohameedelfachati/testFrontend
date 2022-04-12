import React from 'react';
import styles from './infoForm.module.css'
import SubForm from './SubForm'
const InfoForm = () => {
    return (
        <div className={styles.infoForm}>
            <SubForm label="First Name" type="text"/>
            <SubForm label="Last Name" type="text"/>
            <SubForm label="E-mail" type="text"/>
        </div>
    );
};

export default InfoForm;