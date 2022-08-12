import React, { useState, useEffect } from 'react';
import styles from './information.module.css'
import InfoForm from './InfoForm'
import Profil from '../Assets/mohameed.svg';
import Button from './Button';
import style from './information.module.css';
import UploadButtons from './UploadButton';
import axios from 'axios';


const Information = () => {


    const [data, setData] = useState({ firstName: "", lastName: "", mail: "", tel: "", nbrYearOfExperience: "", lastEmployer: "", levelOfStudies: "" });
    const [upload, setUpload] = useState(true);
    const [file, setFile] = useState(null);

    const next = (e) => {
        e.preventDefault();
        console.log('hhhh');
        console.log(e.target)
         setData({ firstName: e.target.firstName.value, lastName: e.target.lastName.value, mail: e.target.mail.value, tel: e.target.tel.value, nbrYearOfExperience: e.target.nbrYearOfExperience.value, lastEmployer: e.target.lastEmployer.value, levelOfStudies: e.target.levelOfStudies.value });
        setUpload(false)
        // console.log(e.target.levelOfStudies.value)


    }

    const cancel = (e) => {
        setUpload(true)
    }

    const valide = (e) => {
        var formdata = new FormData();
        formdata.append("candidatInformation", JSON.stringify(data));
        console.log(file)
        formdata.append("CV", file);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        fetch("http://localhost:8080/save/candidature", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


        setData({ firstName: "", lastName: "", mail: "", tel: "", nbrYearOfExperience: "", lastEmployer: "", levelOfStudies: "" })
        setUpload(true)

    }
    const uploadFile = (selectedFile) => {

        setFile(selectedFile)
        console.log(selectedFile)
    }

    return (
        <div className={styles.info}>
            <h2 style={{ "color": "#51026f" }}>ADD CANDIDAT</h2>
            <div className={styles.image}>
                <img src={Profil} alt='profil img' />
                <div>
                    <p style={{ "fontSize": "medium", "fontweight": "medium", "color": "grey" }}></p>
                </div>
            </div>
            <h2>CANDIDATE INFORMATION</h2>
            <InfoForm onSubmit={next} editable={upload} data={data} />
            <div style={{ display: upload ? "none" : "" }}>
                <div className={style.load}>
                    <div className={style["form-control"]}>
                        <UploadButtons uploadFile={uploadFile} />
                    </div>
                    <div className={style.Buttons}>
                        <Button onClick={valide} name="valide" />
                        <Button onClick={cancel} name="cancel" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Information;