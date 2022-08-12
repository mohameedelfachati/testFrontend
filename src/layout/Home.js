import React from 'react';
import styles from './home.module.css'
import Menu from '../component/Menu'
import Information from '../component/Information'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from '../component/List'

const Home = () => {
  return (
    <div className={styles.App}>
      <Router>
        <div className={styles["right-container"]}>
          <Menu />
        </div>

        <div className={styles["lef-container"]}>

          <Routes>
            <Route path="/" element={<Information />} />
            <Route path="/visualize" element={<List />} />
          </Routes>

        </div>
      </Router>
    </div>


  );
};

export default Home;