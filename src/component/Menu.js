import React from 'react';
import styles from './menu.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";


const Menu = () => {
    return (


        <div className={styles.menu}>
            <div className={styles.icons}>
                <DashboardIcon />
                <Link
                    to={"/"}
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <p>ADD USER</p>
                </Link>
            </div>
            <div className={styles.icons}>
                <InfoIcon />
                <Link
                    to={"/visualize"}
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <p>VISUALIZE</p>
                </Link>
            </div>

        </div>

    );
};

export default Menu;