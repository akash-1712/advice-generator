import React from "react";
import styles from "./_divider.module.scss";
import divider from "../../images/pattern-divider-desktop.svg";

const Divider = () => {
  return (
    <div className={styles.divider}>
      <img src={divider} alt="divider" />
    </div>
  );
};
export default Divider;
