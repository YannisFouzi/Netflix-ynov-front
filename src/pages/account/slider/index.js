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
              <a href="#section6" className={styles.arrow__btn}></a>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" />  </div>
              <a href="#section5" className={styles.arrow__btn}>›</a>
            </section>
            <section id="section5">
              <a href="#section4" className={styles.arrow__btn}>‹</a>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" />  </div>
              <a href="#section6" className={styles.arrow__btn}>›</a>
            </section>
            <section id="section6">
              <a href="#section5" className={styles.arrow__btn}>‹</a>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" />  </div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" />  </div>
              <a href="#section4" className={styles.arrow__btn}>›</a>
            </section>
          </div>
        </div>

        <div className={styles.container2}>



          <h1 className={styles.title}>Nouvautés</h1>
          <div className={styles.wrapper}>
            <section id="section7">
              <a href="#section9" className={styles.arrow__btn}></a>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <a href="#section8" className={styles.arrow__btn}>›</a>
            </section>
            <section id="section8">
              <a href="#section7" className={styles.arrow__btn}>‹</a>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <a href="#section9" className={styles.arrow__btn}>›</a>
            </section>
            <section id="section9">
              <a href="#section8" className={styles.arrow__btn}>‹</a>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <a href="#section7" className={styles.arrow__btn}>›</a>
            </section>
          </div>
        </div>


        <div className={styles.container2}>



          <h1 className={styles.title}>Les plus gros succès sur Netflix</h1>
          <div className={styles.wrapper}>
            <section id="section10">
              <a href="#section12" className={styles.arrow__btn}></a>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <a href="#section11" className={styles.arrow__btn}>›</a>
            </section>
            <section id="section11">
              <a href="#section10" className={styles.arrow__btn}>‹</a>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <a href="#section12" className={styles.arrow__btn}>›</a>
            </section>
            <section id="section12">
              <a href="#section11" className={styles.arrow__btn}>‹</a>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <a href="#section10" className={styles.arrow__btn}>›</a>
            </section>
          </div>
        </div>
        <div className={styles.container2}>



          <h1 className={styles.title}>Séries animées japonaises</h1>
          <div className={styles.wrapper}>
            <section id="section13">
              <a href="#section16" className={styles.arrow__btn}></a>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <a href="#section15" className={styles.arrow__btn}>›</a>
            </section>
            <section id="section15">
              <a href="#section13" className={styles.arrow__btn}>‹</a>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <a href="#section15" className={styles.arrow__btn}>›</a>
            </section>
            <section id="section15">
              <a href="#section14" className={styles.arrow__btn}>‹</a>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <div className={styles.item}>
                <img src={Film.src} alt="Describe Image" /></div>
              <a href="#section13" className={styles.arrow__btn}>›</a>
            </section>
          </div>
        </div>


      </div>
    </>
  );
};

export default withAuth(Index);
