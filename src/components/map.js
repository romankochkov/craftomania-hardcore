'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../app/page.module.css';


export default function MapComponent() {
    const [isIframeVisible, setIsIframeVisible] = useState(false);

    const handleButtonClick = () => {
        setIsIframeVisible(true);
    };

    return (
        <div className="col-12">
            {!isIframeVisible && (
                <div className={styles.screensaver} onClick={handleButtonClick}>
                    <Image
                        className={styles.icon}
                        src="/map.png"
                        width={120}
                        height={120}
                        alt="Icon"
                        quality={100}
                    />
                </div>
            )}
            {isIframeVisible && (
                <iframe
                    src='https://ultrahardcore.net/map/#world:-220:0:77:1000:0:0:0:0:perspective'
                    loading='lazy'
                    className={styles.iframe}
                ></iframe>
            )}
        </div>
    );
}
