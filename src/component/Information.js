import React from 'react';
import styles from './information.module.css'
import InfoForm from './InfoForm'
import PasswordForm from './PasswordForm'
import Profil from '../Assets/mohameed.svg'

const Information = () => {
    return (
        <div className={styles.info}>
            <h2 style={{"color":"#51026f"}}>EDIT INFORMATION</h2>
            <div className={styles.image}>
                <img src={Profil} alt='profil img' />
                <div>
                    <button className={styles.button}>Choose a file</button>
                    <p style={{"fontSize":"medium","fontweight":"medium","color":"grey"}}>accept format jpg only</p>
                </div>
            </div>
            <h2>ACCOUNT INFORMATION</h2>
            <InfoForm />
            <h2>CHANGE PASSWORD</h2>
            <PasswordForm />
        </div>
    );
};

export default Information;