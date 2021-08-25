import React from 'react';
import '../../App.css';
import styles from './Footer.module.css';

const Footer = (props) => {
    return (
        <div className={styles.general}>
            <div className="container">
                <div className={styles.text}>Copyright © Typical<span className={styles.blue}>Network</span>. All Rights Reserved.</div>
            </div>
        </div>
    )
};

export default Footer;
