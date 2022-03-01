import React, { useEffect, useState } from "react";
import HeaderLogo from '../../../components/headerRegister/HeaderLogo/HeaderLogo';
import HeaderMenu from '../../../components/headerRegister/HeaderMenu/HeaderMenu';
import HeaderToolbar from '../../../components/headerRegister/HeaderToolbar/HeaderToolbar';
import TitlePage from "../../../components/UI/Title/TitlePage";
import authService from "../../../services/auth.service";
import Input from "../../../components/UI/Input/Input";
import styles from "./index.module.scss";
import Message from "../../../components/UI/Message/Message";
import withAuth from "../../../HOC/withAuth";
import { useMutation } from "@apollo/client";
import { updateUser } from "../../../graphql/mutations/users";
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
    <div>
    <div className={styles.page__login}>
            <div className={styles.form__login}>
      <TitlePage title="mon compte" />
      <form className={styles.form__profil} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.field}>
        <Input
          label="Prénom"
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Prénom"
          required={true}
          value={(user && user.firstName) || ""}
          onChange={(e) => {
            setUser({ ...user, firstName: e.target.value });
          }}
        />
        <Input
          label="Nom"
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Nom"
          required={true}
          value={(user && user.lastName) || ""}
          onChange={(e) => {
            setUser({ ...user, lastName: e.target.value });
          }}
        />
        <Input
          label="Email"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          required={true}
          value={(user && user.email) || ""}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
              <input type="submit" className="btn btn-black" value="Mettre à jour"/>
              {success ? (
                  <Message type="success" message="votre profil a bien été modifié"/>
              ) : ""
            }
              </div>
      </form>
    </div>
    </div>
    </div>
    </>
  );
};

export default withAuth(Index);
