import React, { useEffect, useState } from "react";
import HeaderLogo from '../../../components/headerBrowse/HeaderLogo/HeaderLogo';
import HeaderMenu from '../../../components/headerBrowse/HeaderMenu/HeaderMenu';
import HeaderToolbar from '../../../components/headerBrowse/HeaderToolbar/HeaderToolbar';
import TitlePage from "../../../components/UI/Title/TitlePage";
import authService from "../../../services/auth.service";
import Input from "../../../components/UI/Input/Input";
import styles from "./index.module.scss";
import LogoImg from "../../../../public/ozark.png";
import Film from "../../../../public/film2.webp";
import Message from "../../../components/UI/Message/Message";
import withAuth from "../../../HOC/withAuth";
import { useMutation } from "@apollo/client";
import { updateUser } from "../../../graphql/mutations/users";
import Image from 'next/image'
const Index = () => {
  const [user, setUser] = useState({});
    const [success, setSuccess] = useState(false);
   // const [updateUser] = useMutation(updateUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    authService
      .updateUser(token, user)
        .then((data) => {
            console.log(data);
            setSuccess(true);
            setUser(data.user);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {    const token = localStorage.getItem("token");
    authService
      .getUser(token)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
<Image width="100%" height="100%" src={LogoImg.src} alt="ozark"/>
  <h1>Saison 4 Partie 2 bientôt disponible</h1>
  <h3>Un conseiller financier embarque sa famille au fin fond du Missouri. Il doit y blanchir 500 millions de dollars en cinq ans pour calmer la fureur d&apos;un baron de la drogue.</h3>


    <div className={styles.search}>
    <div className={styles.signin__form} onSubmit={(e) => handleSubmit(e)}>

<input className={styles.signin__btn} value="> Lecture" type="submit"/>
<input className={styles.signin__btn2} value="i Plus d'infos" type="submit"/>
    </div>
</div>

    </div>
    </div>


    <div className={styles.container2}>



    <h1 className={styles.title}>Popular On Netflix</h1>
<div className={styles.wrapper}>
  <section id="section1">
    <a href="#section3" className={styles.arrow__btn}></a>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>
  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>
  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <a href="#section2" className={styles.arrow__btn}>›</a>
  </section>
  <section id="section2">
    <a href="#section1" className={styles.arrow__btn}>‹</a>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <a href="#section3" className={styles.arrow__btn}>›</a>
  </section>
  <section id="section3">
    <a href="#section2" className={styles.arrow__btn}>‹</a>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <a href="#section1" className={styles.arrow__btn}>›</a>
  </section>
</div>
      </div>

    <div className={styles.container2}>



    <h1 className={styles.title}>Popular On Netflix</h1>
<div className={styles.wrapper}>
  <section id="section4">
    <a href="#section6" className={styles.arrow__btn}></a>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <a href="#section5" className={styles.arrow__btn}>›</a>
  </section>
  <section id="section5">
    <a href="#section4" className={styles.arrow__btn}>‹</a>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <a href="#section6" className={styles.arrow__btn}>›</a>
  </section>
  <section id="section6">
    <a href="#section5" className={styles.arrow__btn}>‹</a>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <div className={styles.item}>
    <Image width="100%" height="100%" src={Film.src} alt="Describe Image"/>  </div>
    <a href="#section4" className={styles.arrow__btn}>›</a>
  </section>
</div>
      </div>

      <div className={styles.container2}>



<h1 className={styles.title}>Popular On Netflix</h1>
<div className={styles.wrapper}>
<section id="section7">
<a href="#section9" className={styles.arrow__btn}></a>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<a href="#section8" className={styles.arrow__btn}>›</a>
</section>
<section id="section8">
<a href="#section7" className={styles.arrow__btn}>‹</a>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<a href="#section9" className={styles.arrow__btn}>›</a>
</section>
<section id="section9">
<a href="#section8" className={styles.arrow__btn}>‹</a>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<a href="#section7" className={styles.arrow__btn}>›</a>
</section>
</div>
  </div>


  <div className={styles.container2}>



<h1 className={styles.title}>Popular On Netflix</h1>
<div className={styles.wrapper}>
<section id="section10">
<a href="#section12" className={styles.arrow__btn}></a>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<a href="#section11" className={styles.arrow__btn}>›</a>
</section>
<section id="section11">
<a href="#section10" className={styles.arrow__btn}>‹</a>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<a href="#section12" className={styles.arrow__btn}>›</a>
</section>
<section id="section12">
<a href="#section11" className={styles.arrow__btn}>‹</a>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<a href="#section10" className={styles.arrow__btn}>›</a>
</section>
</div>
  </div>
  <div className={styles.container2}>



<h1 className={styles.title}>Popular On Netflix</h1>
<div className={styles.wrapper}>
<section id="section13">
<a href="#section16" className={styles.arrow__btn}></a>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<a href="#section15" className={styles.arrow__btn}>›</a>
</section>
<section id="section15">
<a href="#section13" className={styles.arrow__btn}>‹</a>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<a href="#section15" className={styles.arrow__btn}>›</a>
</section>
<section id="section15">
<a href="#section14" className={styles.arrow__btn}>‹</a>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<div className={styles.item}>
<Image width="100%" height="100%" src={Film.src} alt="Describe Image"/></div>
<a href="#section13" className={styles.arrow__btn}>›</a>
</section>
</div>
  </div>


      </div>
    </>
  );
};

export default withAuth(Index);
