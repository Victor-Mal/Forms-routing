import React from "react";
import classNames from "classnames";
import styles from "../Buttons.module.sass";

export default function TurquoiseButton(props) {
  const login = classNames([styles.login], [styles.btn], [styles.linkStyle]);
  return (
    <a className={login} href={props.href}>
      {props.title}
    </a>
  );
}
