import React from 'react';
import HeaderLogo from '../header/HeaderLogo/HeaderLogo';
import HeaderMenu from '../header/HeaderMenu/HeaderMenu';
import HeaderToolbar from '../header/HeaderToolbar/HeaderToolbar';
import Footer from '../footer/Footer';
import styles from "./MainLayout.module.scss";

const Mainlayout = ({children}) => {
    return (
        <>
     
            <main>
                <div className={styles.container}>
                    {children}
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default Mainlayout;
