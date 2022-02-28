import React from "react";
import styles from "./Input.module.scss";

const Input = (props) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.login}>
        <div className={styles.signin_form}>
        <div className={styles.field}>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        value={props.value}
        placeholder={props.placehoder}
        required={props.required}
        onChange={props.onChange}      
      />
      <span className={styles.floating_label}>{props.description}</span>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Input;
