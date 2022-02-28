import React from 'react';
import styles from "./DescriptionPage.module.scss";

const DescriptionPage = (props) => {
    return (
        <div className={styles.description__page}>
            <h3>{props.description}</h3>
        </div>
    );
}


export default DescriptionPage;
