import React, {useEffect, useState} from 'react';
import HeaderLogo from '../components/header/HeaderLogo/HeaderLogo';
import HeaderMenu from '../components/header/HeaderMenu/HeaderMenu';
import HeaderToolbar from '../components/header/HeaderToolbar/HeaderToolbar';
import Input from "../components/UI/Input/Input";
import authService from "../services/auth.service";
import { useRouter } from "next/router";
import styles from "./index.module.scss";
import LogoImg from "../../public/tv.png";
import LogoImgMobile from "../../public/mobile-0819.jpg";
import LogoImgDevice from "../../public/device-pile.png";
import LogoImgKids from "../../public/kids.png";
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
          router.push("/login");
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

    <div className={styles.body}>
      <div className={styles.main}>
<div className={styles.area}>
  <h1>Films, séries TV et bien plus en illimité.</h1>
  <h3>Où que vous soyez. Annulez à tout moment.
    </h3>
    <h4>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.
  </h4>

    <div className={styles.search}>
    <form className={styles.signin__form} onSubmit={(e) => handleSubmit(e)}>
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
                description="Adress e-mail"/>
<input className={styles.signin__btn} value="Commencer >" type="submit"/>
    </form>
</div>

    </div>
    </div>


    <div className={styles.container1}>
    <div className={styles.text}>
          <h1>Regardez Netflix sur votre TV.
            </h1>
            <p>
            Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et bien plus.
            </p>
        </div>
        <div className={styles.image}>
        <Image width="100%" height="100%" src={LogoImg.src} alt="tv"/>
        </div>
      </div>
      <div className={styles.container1}>
          
      <div className={styles.image}>
      <Image width="100%" height="100%" src={LogoImgMobile.src} alt="mobile"/>
          </div>
          <div className={styles.text}>
              <h1>Téléchargez vos séries préférées pour les regarder hors connexion.
                </h1>
                <p>
                Enregistrez vos programmes préférés et ayez toujours quelque chose à regarder.
                </p>
            </div>
            
        </div>

        <div className={styles.container1}>
        <div className={styles.text}>
              <h1>Où que vous soyez.


                </h1>
                <p>
                Regardez des films et séries TV en accès illimité sur votre TV, smartphone, tablette et ordinateur, tout compris.

                </p>
            </div>
            <div className={styles.image}>
            <Image width="100%" height="100%" src={LogoImgDevice.src} alt="device"/>
            </div>
          </div>


          <div className={styles.container1}>
          
          <div className={styles.image}>
          <Image width="100%" height="100%" src={LogoImgKids.src} alt="kids"/>
              </div>
              <div className={styles.text}>
                  <h1>Créez des profils pour les enfants.

                    </h1>
                    <p>
                    Les enfants découvrent de nouvelles aventures et retrouvent leurs personnages préférés dans un espace bien à eux, déjà inclus dans votre abonnement.
                    </p>
                </div>
                
            </div>

            <div className={styles.question}>
            <h1>Foire aux questions
              </h1>
              <div className={styles.quest}>
              <div className={styles.textbox}>Netflix, qu&apos;est-ce que c&apos;est ?</div>
              <i>+</i>
              </div>
              <div className={styles.quest}>
                  <div className={styles.textbox}>Combien coûte Netflix ?</div>
                  <i>+</i>
                </div>             
                <div className={styles.quest}>
                    <div className={styles.textbox}>Où puis-je regarder Netflix ?</div>
                    <i>+</i>
                  </div>                 <div className={styles.quest}>
                    <div className={styles.textbox}>Comment puis-je annuler mon forfait ?</div>
                    <i>+</i>
                  </div>               
                  <div className={styles.quest}>
                      <div className={styles.textbox}>Que puis-je regarder sur Netflix ?</div>
                      <i>+</i>
                    </div>
                    <div className={styles.quest}>
                        <div className={styles.textbox}>Est-ce que Netflix est adapté aux enfants ?</div>
                        <i>+</i>                   
                      </div>    

                      <h4>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.
                      </h4>

                      <div className={styles.search1}>
                      <form className={styles.signin__form} onSubmit={(e) => handleSubmit(e)}>
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
                description="Adress e-mail"/>
<input className={styles.signin__btn} value="Commencer >" type="submit"/>
    </form>
                          
                    </div>  



                   
                    </div>


      </div>

    
      </>
);
}

export default Index;