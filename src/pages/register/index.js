import React, { useState } from "react";
import HeaderLogo from '../../components/headerLogin/HeaderLogo/HeaderLogo';
import HeaderMenu from '../../components/headerLogin/HeaderMenu/HeaderMenu';
import HeaderToolbar from '../../components/headerLogin/HeaderToolbar/HeaderToolbar';
import { useRouter } from "next/router";
import authService from "../../services/auth.service";
import TitlePage from "../../components/UI/Title/TitlePage";
import Message from "../../components/UI/Message/Message";
import Input from "../../components/UI/Input/Input";
import styles from "./index.module.scss";

const Index = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
    authService.register(user)
      .then((data) => {
        if (data.message) {
          setError(true);
          setErrorMessage(data.message);
          return false;
        }
        localStorage.setItem("token", data.token);
        router.push("/account/profil");
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setErrorMessage(err.message)
      });
  };

  return (
    <>
    <header className={styles.header__main}>
    <HeaderLogo />
    <HeaderMenu/>
    <HeaderToolbar/>
</header>
    <div className={styles.page__register}>
      <div className={styles.form__register}>
      <form className={styles.signin__form} onSubmit={(e) => handleSubmit(e)}>
      <TitlePage title="Inscription" />
      <div className={styles.field}>
      <p className="text-center">
        Inscrivez vous pour vous connecter à votre profil
      </p>
        <Input
          type="text"
          label="Nom"
          id="firstName"
          name="firstName"
          placeholder="Mon nom"
          required={true}
          onChange={(e) => {
            setUser({ ...user, firstName: e.target.value });
          }}
          description="Nom"/>
        <Input
          type="text"
          label="Prénom"
          id="lasttName"
          name="lastName"
          placeholder="Mon prénom"
          required={true}
          onChange={(e) => {
            setUser({ ...user, lastName: e.target.value });
          }}
          description="Prénom"/>
        
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
                description="Email"/>
        <Input
          type="password"
          label="Mot de passe"
          id="password"
          name="password"
          placeholder="Mon mot de passe"
          required={true}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          description="Mot de passe"/>
          </div>
          <input className={styles.signin__btn} value="S'inscrire" type="submit"/>
        {
          error ? (
            <Message message={errorMessage} type="error"/>
          )
          :
          ""  
        }
     
    
    </form>
    </div>
    
    </div>
    </>
  );
};

export default Index;
