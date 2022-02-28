import React from "react";
import Link from "next/link";
import styles from "./HeaderMenu.module.scss";
import {useRouter} from "next/router";

const Headermenu = () => {
  const router = useRouter();
  return (
    <div className={styles.header__menu}>
      <nav>
        <ul>
          <li className={router.pathname=="/account/browse" ? styles.active : ""}>
            <Link href="/account/browse">
              <a>Accueil</a>
            </Link>
          </li>
          <li className={router.pathname=="/account/series" ? styles.active : ""}>
            <Link href="/account/series">
              <a>Séries</a>
            </Link>
          </li>
          <li className={router.pathname=="/account/films" ? styles.active : ""}>
            <Link href="/account/films">
              <a>Films</a>
            </Link>
          </li>
          <li className={router.pathname=="/account/latest" ? styles.active : ""}>
            <Link href="/account/latest">
              <a>Nouveautés les plus regardées</a>
            </Link>
          </li>
          <li className={router.pathname=="/account/list" ? styles.active : ""}>
            <Link href="/account/list">
              <a>Ma liste</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Headermenu;
