'use client';

import React from 'react';
import styles from '../app/page.module.css';


const CopyIP = () => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText('mc.craftomania.net');
        alert('IP-адрес скопирован');
    };

    return (
        <div className={styles.ip} onClick={copyToClipboard}>
            <i className="fa-solid fa-copy"></i>
            <div className={styles.host}>mc.craftomania.net</div>
            <div className={styles.version}>1.20.1</div>
        </div>
    );
};

export default CopyIP;