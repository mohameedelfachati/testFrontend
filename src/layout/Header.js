import React from 'react';
import styles from './header.module.css';
import Logo from '../Assets/blondefairy.svg'
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    return (
        <div className={styles.header}>
            <img src={Logo} alt="" />
            <div className={styles['left-header']}>
                <div className={styles['icons']}>
                    <HomeIcon style={{"color":"white"}}/>
                    <FavoriteIcon style={{"color":"white"}}/>
                    <LocalGroceryStoreIcon style={{"color":"white"}}/>
                </div>
                <div className={styles['account']}>
                    <p style={{"color":"white"}}>Mohamed el fachati</p>
                    <AccountCircleIcon style={{"color":"white"}}/>
                </div>
            </div>

        </div>
    );
};

export default Header;