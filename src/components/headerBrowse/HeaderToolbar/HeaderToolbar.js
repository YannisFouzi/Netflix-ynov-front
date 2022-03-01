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

    function logout() {
        localStorage.clear();
        window.location.href = '/logout';
    }


    return (
        <div className={styles.header__toolbar}>
         <Link href="/search">
                <a className={styles.cart}>
                    <svg viewBox="0 0 512 512" width="24px" height="24px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" >			
                    <path fill="white" d="M493.676,443.893L349.931,300.149c23.122-32.11,35.74-70.953,35.74-110.643C385.672,85.012,300.66,0,196.165,0
			S6.659,85.012,6.659,189.506s85.012,189.507,189.507,189.507c33.349,0,65.797-8.715,94.494-25.293l146.593,146.594
			c7.535,7.535,17.554,11.686,28.212,11.686s20.675-4.151,28.212-11.686C509.23,484.759,509.23,459.449,493.676,443.893z
			M474.869,481.507c-2.512,2.512-5.851,3.895-9.404,3.895c-3.552,0-6.893-1.383-9.404-3.895L302.037,327.483
			c-2.571-2.571-5.975-3.895-9.407-3.895c-2.524,0-5.064,0.717-7.296,2.184c-26.543,17.431-57.375,26.644-89.169,26.644
			c-89.829,0-162.909-73.08-162.909-162.909s73.08-162.909,162.909-162.909s162.909,73.08,162.909,162.909
			c0,37.585-13.166,74.285-37.071,103.34c-4.35,5.286-3.975,13.011,0.864,17.852l152,152
			C480.052,467.886,480.052,476.322,474.869,481.507z"/></svg>

                    
                </a>
            </Link>
            <Link href="/login">
                <a className={styles.direct}>
                    DIRECT
                </a>
            </Link>
            <Link href="/checkout">
                <a className={styles.cart}>
                    <svg viewBox="0 0 24 24"  width="24px" height="24px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" ><path fill="white" d="M18 8.4C18 6.70261 17.3679 5.07475 16.2426 3.87452C15.1174 2.67428 13.5913 2 12 2C10.4087 2 8.88258 2.67428 7.75736 3.87452C6.63214 5.07475 6 6.70261 6 8.4C6 15.8667 3 18 3 18H21C21 18 18 15.8667 18 8.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>

                        <div className={styles.cart__count}>
                        <span>
                            {
                                count === 0 ? 0 : count
                            }
                        </span>
                        </div>
                </a>
            </Link>
          
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

  
                <button onClick={() =>{logout()}}>
                Se déconnecter
                </button>
         


  </div>

                </div>
          


   




        </div>
    );
}

export default Headertoolbar;
