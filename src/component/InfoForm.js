import React from 'react';
import Dropdown from './Dropdown';
import styles from './infoForm.module.css'
import Input from './SubForm'
import Button from './Button';

const InfoForm = ({ onSubmit, editable, data }) => {



    return (
        <form className={styles.infoForm} onSubmit={onSubmit}>
            <Input value={data.firstName} name="firstName" label="Nom" type="text" editable={editable} />
            <Input value={data.lastName} label="first Name" type="text" name="lastName" editable={editable} />
            <Input value={data.mail} label="Mail" type="text" name="mail" editable={editable} />
            <Input value={data.tel} label="Phone number" type="number" name="tel" editable={editable} />
            <Dropdown editable={editable} value={data.levelOfStudies} name="levelOfStudies" />
            <Input value={data.nbrYearOfExperience} label="numbre of years of experience" type="number" name="nbrYearOfExperience" editable={editable} />
            <Input value={data.lastEmployer} label="Last Employer" type="text" name="lastEmployer" editable={editable} />
            <Button type="submit" name="NEXT" />
        </form>
    );
};

export default InfoForm;