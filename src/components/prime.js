'use client';

import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation'
import styles from '../app/page.module.css';


const PrimeBlock = () => {
    const router = useRouter()

    return (
        <div className={styles.prime} onClick={() => router.push('/prime')}>
            <Image
                className={styles.picturemobile}
                src="/prime.png"
                width={200}
                height={200}
                alt="Prime"
                quality={100} />
            <div className={styles.icon}><i className="fa-solid fa-coins"></i></div>
            <div className="row g-0">
                <div className="d-none d-md-block col-md-4">
                    <div className="d-flex justify-content-center">
                        <Image
                            className={styles.picture}
                            src="/prime.png"
                            width={320}
                            height={320}
                            alt="Prime"
                            quality={100} />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                    <div className={styles.title}>PRIME<span className={styles.span}>-СТАТУС</span></div>
                    <div className={styles.subtitle}>для тех, кто хочет большего</div>
                    <div className={styles.description}>
                        Prime-подписка на нашем Minecraft сервере предлагает уникальные преимущества, которые делают игровой процесс еще более увлекательным и комфортным. Никаких ожиданий после смерти, уникальные предметы персонализации, приоритетная поддержка и многое другое!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrimeBlock;