import React from 'react';
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footer__main}>
                   <p className={styles.questions}>Des questions ? Appelez le (+33) 0805-543-063</p>
        <div className={styles.terms}>
          <a>FAQ</a>
          <a>Centre d&apos;aide</a>
          <a>Conditions d&apos;utilisation</a>
          <a>Confidentialité</a>
        </div>
        <div className={styles.terms}>
          <a>Préférences de cookies</a>
          <a>Mentions légales</a>
        </div>
        <select>
          <option value="english">Français</option>
          <option value="espanol">Espanol</option>
        </select>
        </div>
    );
}

export default Footer;
