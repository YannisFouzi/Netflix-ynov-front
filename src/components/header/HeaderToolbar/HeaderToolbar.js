import React, {useContext} from 'react';
import Link from "next/link";
import styles from "./HeaderToolbar.module.scss";
import CartContext from "../../../context/CartContext";


const Headertoolbar = () => {

    const { count } = useContext(CartContext);

    return (
        <div className={styles.header__toolbar}>
   <select>
          <option value="english">Français</option>
          <option value="espanol">Espanol</option>
        </select>
            <Link href="/login">
                <a className="btn btn-white">
                    S&apos;identifier
                </a>
            </Link>

        </div>
    );
}

export default Headertoolbar;
