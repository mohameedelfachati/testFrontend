import React from 'react';
import styles from './menu.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RateReviewIcon from '@mui/icons-material/RateReview';


const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.icons}>
                <DashboardIcon />
                <p>DASHBOARD</p>
            </div>
            <div className={styles.icons}>
                <InfoIcon />
                <p>INFORMATIONS</p>
            </div>
            <div className={styles.icons}>
                <ImportContactsIcon />
                <p>ADDRESS BOOK</p>
            </div>
            <div className={styles.icons}>
                <AddShoppingCartIcon />
                <p>MY ORDERS</p>
            </div>
            <div className={styles.icons}>
                <EmojiEventsIcon />
                <p>MY REWARDS</p>
            </div>
            <div className={styles.icons}>
                <RateReviewIcon />
                <p>MY REVIEWS</p>
            </div>
        </div>
    );
};

export default Menu;