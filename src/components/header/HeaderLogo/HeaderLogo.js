import React from 'react';
import LogoImg from "../../../../public/Netflix-logo.png";
import styles from "./HeaderLogo.module.scss";
import Image from 'next/image'

const Headerlogo = () => {
    return (
        <div className={styles.header__logo}>
            <Image width="100%" height="100%" src={LogoImg.src} alt="Netflix"/>
        </div>
    );
}

export default Headerlogo;
