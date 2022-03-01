import React from "react";
import Link from "next/link";
import styles from "./HeaderMenu.module.scss";
import {useRouter} from "next/router";

const Headermenu = () => {
  const router = useRouter();
  return (
    <div className={styles.header__menu}>
    </div>
  );
};

export default Headermenu;
