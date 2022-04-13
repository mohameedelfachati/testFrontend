import React from 'react';
import styles from './header.module.css';
import Logo from '../Assets/blondefairy.svg'
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles['logo-menu']}>
                <div className={styles['menu-icon']}>
                    <MenuIcon style={{ "height": "3rem", "width": "3rem" }} />
                </div>
                <img src={Logo} alt="" />
            </div>
            <div className={styles['left-header']}>
                <div className={styles['icons']}>
                    <HomeIcon style={{ "color": "white" }} />
                    <FavoriteIcon style={{ "color": "white" }} />
                    <LocalGroceryStoreIcon style={{ "color": "white" }} />
                </div>
                <div className={styles['account']}>
                    <p style={{ "color": "white" }}>Mohamed el fachati</p>
                    <AccountCircleIcon style={{ "color": "white" }} />
                </div>
            </div>

        </div>
    );
};

export default Header;