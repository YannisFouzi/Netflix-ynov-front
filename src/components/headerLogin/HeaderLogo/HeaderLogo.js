import React from 'react';
import Link from "next/link";
import LogoImg from "../../../../public/Netflix-logo.png";
import styles from "./HeaderLogo.module.scss";
import Image from 'next/image'

const Headerlogo = () => {
    return (
        <div className={styles.header__logo}>
            <Link href="/">
            <a>
            <Image width="100%" height="100%" src={LogoImg.src} alt="Netflix"/>
            </a>
            </Link>

        </div>
    );
}

export default Headerlogo;
