import React, {useEffect, useState} from 'react';
import Link from "next/link";
import HeaderLogo from '../../components/headerLogout/HeaderLogo/HeaderLogo';
import HeaderMenu from '../../components/headerLogout/HeaderMenu/HeaderMenu';
import HeaderToolbar from '../../components/headerLogout/HeaderToolbar/HeaderToolbar';
import TitlePage from "../../components/UI/Title2/TitlePage";
import Input from "../../components/UI/Input/Input";
import authService from "../../services/auth.service";
import { useRouter } from "next/router";
import styles from "./index.module.scss";
import LogoImg from "../../../public/FB-Logo.png";
import Image from 'next/image'

const Index = () => {
    const router = useRouter();
    const [user, setUser] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        authService.login(user)
        .then((data) => {
            console.log(data);
            if (data.message) {
              return false;
            }
            localStorage.setItem("token", data.token);
            router.push("/");
          })
          .catch((err) => {
            console.log(err);
          });
    }
    setTimeout(function(){
      window.location.href = '/';
   }, 30000);


    return (
      <>
    <header className={styles.header__main}>
    <HeaderLogo />
    <HeaderMenu/>
    <HeaderToolbar/>
</header>
     
        <div className={styles.page__login}>
            <div className={styles.form__login}>
            <form className={styles.signin__form} onSubmit={(e) => handleSubmit(e)}>
            <TitlePage title="Vous partez déjà ?"/>
            <div className={styles.field}>

    
       
                

            </div>




               
      
           
           
                    <div className={styles.onboarding}>
    
            <p>Le saviez-vous ? Inutile de vous déconnecter de Netflix systématiquement. Vous devez le faire uniquement si vous êtes sur un ordinateur partagé ou public. </p>

            <p>Vous serez redirigé vers Netflix.com dans 30 secondes.



             
              
              </p>
              <input className={styles.signin__btn} value="Essayer maintenant" type="submit"/>
          </div>
          
            </form>
            
        </div>
        </div>
        </>
    );
}

export default Index;
