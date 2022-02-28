import React, {useContext} from 'react';
import Link from "next/link";
import styles from "./HeaderToolbar.module.scss";
import CartContext from "../../../context/CartContext";

const Headertoolbar = () => {

    const { count } = useContext(CartContext);

    return (
        <div>

        </div>
    );
}

export default Headertoolbar;
