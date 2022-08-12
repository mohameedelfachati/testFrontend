import React, { useState } from 'react';
import styles from './dropdown.module.css'
const Dropdown = ({ name, value, editable }) => {
    const [selectValue, setSelectValue] = useState(value);

    const handleChange = (e) => {
        setSelectValue(e.target.value)
    }

    return (
        <div className={styles['form-control']}>
            <label>level of study</label>
            {
                editable ? <select name={name} clasName={styles.select} onChange={handleChange}>
                    <option value=""> please choose an option</option>
                    <option value="BAC +1">BAC +1</option>
                    <option value="BAC +2">BAC +2</option>
                    <option value="BAC +3">BAC +3</option>
                    <option value="BAC +4">BAC +4</option>
                    <option value="BAC +5">BAC +5</option>
                </select> : <span>{selectValue}</span>

            }

        </div>
    );
};

export default Dropdown;