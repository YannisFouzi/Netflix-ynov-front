import React from 'react';
import styles from "./SubtitlePage.module.scss";

const Subtitlepage = (props) => {
    return (
        <div className={styles.subtitle__page}>
            <h2>{props.subtitle}</h2>
        </div>
    );
}


export default Subtitlepage;
