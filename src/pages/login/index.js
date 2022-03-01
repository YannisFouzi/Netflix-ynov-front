import React, {useEffect, useState} from 'react';
import Link from "next/link";
import HeaderLogo from '../../components/headerLogin/HeaderLogo/HeaderLogo';
import HeaderMenu from '../../components/headerLogin/HeaderMenu/HeaderMenu';
import HeaderToolbar from '../../components/headerLogin/HeaderToolbar/HeaderToolbar';
import TitlePage from "../../components/UI/Title/TitlePage";
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
            router.push("/account/browse");
          })
          .catch((err) => {
            console.log(err);
          });
    }
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
            <TitlePage title="S'identifier"/>
            <div className={styles.field}>

            <Input 
                type="email"
                label="email"
                id="email"
                name="email"
                placeholder="email"
                 required={true}
                onChange={(e) => {
                    setUser({...user, email:e.target.value})
                }}
                
                description="Email address or phone number"/>
                <Input 
                type="password"
                label="Mot de passe"
                id="password"
                name="Mot de passe"
                placeholder="Mot de passe"
                required={true}
                onChange={(e) => {
                    setUser({...user, password:e.target.value})
                }}
                
               description="Mot de passe"/>
                

            </div>




                <input className={styles.signin__btn} value="S'identifier" type="submit"/>
                <div className={styles.action__group}>
                <label>
              <input type="checkbox"/>
              Se souvenir de moi
            </label>
            <a>Besoin d&apos;aide ?</a>
                    </div>
           
           
                    <div className={styles.onboarding}>
            <div>
            <div className={styles.icon}>
            <img src={LogoImg.src} alt="Facebook"/>
              </div>
              <small>S&apos;identifier avec facebook</small>
            </div>
            <p>Première visite sur Netflix ? 

            <Link href="/register">
            <a> Inscrivez-vous.</a>
        </Link>

             
              
              </p>
            <p>Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n&apos;êtes pas un robot.  <a>En savoir plus.</a></p>
          </div>
            </form>
        </div>
        </div>
        </>
    );
}

export default Index;
