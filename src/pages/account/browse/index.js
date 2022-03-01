import React, { useEffect, useState } from "react";
import HeaderLogo from '../../../components/headerBrowse/HeaderLogo/HeaderLogo';
import HeaderMenu from '../../../components/headerBrowse/HeaderMenu/HeaderMenu';
import HeaderToolbar from '../../../components/headerBrowse/HeaderToolbar/HeaderToolbar';
import authService from "../../../services/auth.service";
import styles from "./index.module.scss";
import LogoImg from "../../../../public/ozark.png";
import Imgcasa_de_papel from "../../../../public/tendance/casa_de_papel.jpg";
import Imgbreaking_bad from "../../../../public/tendance/breaking_bad.webp";
import Imgall_of_us from "../../../../public/tendance/all_of_us.jpg";
import Imganna from "../../../../public/tendance/anna.jpg";
import Imgelite from "../../../../public/tendance/elite.jpg";
import Imgsquid_game from "../../../../public/tendance/squid_game.jpg";
import Imgstranger_things from "../../../../public/tendance/stranger_things.jpg";
import Imgvikings from "../../../../public/tendance/vikings.jpg";
import Imgbodyguard from "../../../../public/serie/bodyguard.jpg";
import Imgdemon_slayer from "../../../../public/serie/demon_slayer.webp";
import Imgechec from "../../../../public/serie/echec.jpg";
import Imgozark from "../../../../public/serie/ozark.jpg";
import Imgsnk from "../../../../public/serie/snk.webp";
import Imgwalking_dead from "../../../../public/serie/walking_dead.webp";
import Imgwabbey from "../../../../public/serie/abbey.webp";



import Imgrobot from "../../../../public/new/robot.webp";
import Imgchapo from "../../../../public/new/chapo.jpg";
import Imgclub from "../../../../public/new/club.webp";
import Imgequalizer from "../../../../public/new/equalizer.webp";
import Imgloup from "../../../../public/new/loup.webp";
import Imgsniper from "../../../../public/new/sniper.webp";
import Imgsuits from "../../../../public/new/suits.webp";
import Imgup from "../../../../public/new/up.jpg";
import Imgwinter from "../../../../public/new/winter.jpg";


import Img2guns from "../../../../public/succes/2guns.webp";
import Imgcards from "../../../../public/succes/cards.jpg";
import Imgcobra from "../../../../public/succes/cobra.jpg";
import Imgeducation from "../../../../public/succes/education.jpg";
import Imgeminem from "../../../../public/succes/eminem.webp";
import Imgfaucon from "../../../../public/succes/faucon.webp";
import Imglucifer from "../../../../public/succes/lucifer.jpg";
import Imgman from "../../../../public/succes/man.webp";
import Imgtrip from "../../../../public/succes/trip.webp";




import Imgacademia from "../../../../public/anime/academia.webp";
import Imgbaki from "../../../../public/anime/baki.jpg";
import Imgclassroom from "../../../../public/anime/classroom.webp";
import Imghunter from "../../../../public/anime/hunter.webp";
import Imgjojo from "../../../../public/anime/jojo.jpg";
import Imgpunch from "../../../../public/anime/punch.webp";
import Imgsword from "../../../../public/anime/sword.webp";








import Film from "../../../../public/film2.webp";
import withAuth from "../../../HOC/withAuth";
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

  useEffect(() => {
    const token = localStorage.getItem("token");
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
        <HeaderMenu />
        <HeaderToolbar />
      </header>
      <div className={styles.body}>
        <div className={styles.main}>
          <div className={styles.area}>
            <img src={LogoImg.src} alt="ozark" />
            <h1>Saison 4 Partie 2 bientôt disponible</h1>
            <h3>Un conseiller financier embarque sa famille au fin fond du Missouri. Il doit y blanchir 500 millions de dollars en cinq ans pour calmer la fureur d&apos;un baron de la drogue.</h3>


            <div className={styles.search}>
              <div className={styles.signin__form} onSubmit={(e) => handleSubmit(e)}>

                <input className={styles.signin__btn} value="> Lecture" type="submit" />
                <input className={styles.signin__btn2} value="i Plus d'infos" type="submit" />
              </div>
            </div>

          </div>
        </div>











        <div className={styles.container2}>



          <h1 className={styles.title}>Tendances actuelles</h1>
          <div className={styles.wrapper}>
            <section id="section1">
              <a href="#section2" className={styles.arrow__btn}></a>
              <div className={styles.item}>
                <img src={Imgcasa_de_papel.src} alt="Describe Image" />
              </div>
              <div className={styles.item}>
                <img src={Imgbreaking_bad.src} alt="Describe Image" />
              </div>
              <div className={styles.item}>
                <img src={Imgall_of_us.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Imganna.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Imgelite.src} alt="Describe Image" />  </div>
              <a href="#section2" className={styles.arrow__btn}>›</a>
            </section>
            <section id="section2">
              <a href="#section1" className={styles.arrow__btn}>‹</a>
              <div className={styles.item}>
                <img src={Imgsquid_game.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Imgstranger_things.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Imgvikings.src} alt="Describe Image" />  </div>
                <div className={styles.item}>
                <img src={Imgvikings.src} alt="Describe Image" />  </div>
                <div className={styles.item}>
                <img src={Imgvikings.src} alt="Describe Image" />  </div>

              <a href="#section1" className={styles.arrow__btn}>›</a>
            </section>
          </div>
        </div>

        <div className={styles.container2}>



          <h1 className={styles.title}>Séries primées à regarder sans modération</h1>
          <div className={styles.wrapper}>
            <section id="section4">
              <a href="#section5" className={styles.arrow__btn}></a>
              <div className={styles.item}>
                <img src={Imgbodyguard.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Imgdemon_slayer.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Imgbreaking_bad.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Imgechec.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Imgozark.src} alt="Describe Image" />  </div>
              <a href="#section5" className={styles.arrow__btn}>›</a>
            </section>
            <section id="section5">
              <a href="#section4" className={styles.arrow__btn}>‹</a>
              <div className={styles.item}>
                <img src={Imgsnk.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Imgwalking_dead.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Imgwabbey.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Imgwabbey.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Imgwabbey.src} alt="Describe Image" />  </div>
              <a href="#section5" className={styles.arrow__btn}>›</a>
            </section>
          </div>
        </div>

        <div className={styles.container2}>



          <h1 className={styles.title}>Les plus gros succès sur Netflix</h1>
          <div className={styles.wrapper}>
            <section id="section7">
              <a href="#section8" className={styles.arrow__btn}></a>
              <div className={styles.item}>
                <img src={Imgrobot.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgchapo.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgclub.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgequalizer.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgloup.src} alt="Describe Image" /></div>
              <a href="#section8" className={styles.arrow__btn}>›</a>
            </section>
            <section id="section8">
              <a href="#section7" className={styles.arrow__btn}>‹</a>
              <div className={styles.item}>
                <img src={Imgozark.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgsniper.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgsuits.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgup.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgwinter.src} alt="Describe Image" /></div>
              <a href="#section8" className={styles.arrow__btn}>›</a>
            </section>
          </div>
        </div>


        <div className={styles.container2}>



          <h1 className={styles.title}>Nouvautés</h1>
          <div className={styles.wrapper}>
            <section id="section10">
              <a href="#section11" className={styles.arrow__btn}></a>
              <div className={styles.item}>
                <img src={Img2guns.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgcards.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgcobra.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgeducation.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgeminem.src} alt="Describe Image" /></div>
              <a href="#section11" className={styles.arrow__btn}>›</a>
            </section>
            <section id="section11">
              <a href="#section10" className={styles.arrow__btn}>‹</a>
              <div className={styles.item}>
                <img src={Imgfaucon.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imglucifer.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgman.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgtrip.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgechec.src} alt="Describe Image" /></div>
              <a href="#section11" className={styles.arrow__btn}>›</a>
            </section>
          </div>
        </div>
        <div className={styles.container2}>



          <h1 className={styles.title}>Séries animées japonaises</h1>
          <div className={styles.wrapper}>
            <section id="section13">
              <a href="#section15" className={styles.arrow__btn}></a>
              <div className={styles.item}>
                <img src={Imgacademia.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgbaki.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgclassroom.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imghunter.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgsnk.src} alt="Describe Image" /></div>
              <a href="#section15" className={styles.arrow__btn}>›</a>
            </section>
            <section id="section15">
              <a href="#section13" className={styles.arrow__btn}>‹</a>
              <div className={styles.item}>
                <img src={Imgjojo.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgpunch.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgsword.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgsword.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Imgsword.src} alt="Describe Image" /></div>
              <a href="#section15" className={styles.arrow__btn}>›</a>
            </section>
          </div>
        </div>


      </div>
    </>
  );
};

export default withAuth(Index);
