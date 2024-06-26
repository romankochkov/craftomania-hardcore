'use client';

import React from 'react';
import { useRouter } from 'next/navigation'
import styles from '../app/page.module.css';


const NavButtons = () => {
    const router = useRouter()

    return (
        <div className="d-flex justify-content-end">
            <div className={styles.rules}>Правила</div>
            <div className={styles.button} onClick={() => router.push('/start')}>Начать играть</div>
        </div>
    );
};

export default NavButtons;