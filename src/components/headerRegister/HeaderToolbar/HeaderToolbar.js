import React, {useContext} from 'react';
import Link from "next/link";
import LogoImg from "../../../../public/account.png";
import LogoImg1 from "../../../../public/user1.png";
import LogoImg2 from "../../../../public/user2.png";
import LogoImg3 from "../../../../public/user3.png";
import styles from "./HeaderToolbar.module.scss";
import CartContext from "../../../context/CartContext";
import Image from 'next/image'

const Headertoolbar = () => {

    const { count } = useContext(CartContext);

    return (
        <div className={styles.header__toolbar}>

          
                <div className={styles.dropdown}>
                <img className={styles.dropbtn} src={LogoImg.src} alt="account"/>
            
                <div className={styles.dropdown_content}>
    <a href="#"><img className={styles.dropbtn2}  src={LogoImg1.src} alt="account"/>Mehdi</a>
    <a href="#"><img className={styles.dropbtn2}  src={LogoImg2.src} alt="account"/>Kuro Kami</a>
    <a href="#"><img className={styles.dropbtn2}  src={LogoImg3.src} alt="account"/>Parent</a>
    <a href="#">Gérer les profils</a>
    <Link href="/account/profil">
                <a>
                Compte
                </a>
            </Link>
    <a href="#">Centre d&apos;aide</a>
    <a href="#">Se déconnecter</a>
  </div>

                </div>
          


   




        </div>
    );
}

export default Headertoolbar;
