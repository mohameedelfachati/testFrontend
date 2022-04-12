import React from 'react';
import styles from './home.module.css'
import Menu from '../component/Menu'
import Information from '../component/Information'

const Home = () => {
  return (
    <div className={styles.App}>
      <div className={styles["right-container"]}>
        <Menu/>
      </div>
      <div className={styles["lef-container"]}>
        <Information/>
      </div>
    </div>


  );
};

export default Home;