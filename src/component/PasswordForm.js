import React from 'react';
import styles from './password.module.css'
import SubForm from './SubForm'

const PasswordForm = () => {
    return (
        <div className={styles.passwordForm}>
            <SubForm type="password" label="Current Password"/>
            <SubForm type="password" label="New Password"/>
            <SubForm type="password" label="Confirm Password"/>
        </div>
    );
};

export default PasswordForm;