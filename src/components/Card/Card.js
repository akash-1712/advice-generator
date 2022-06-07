import React from "react";
import Fetch from "../fetch/Fetch";
import styles from "./_card.module.scss";

const Card = () => {
  return (
    <div className={styles.card}>
      <Fetch></Fetch>
    </div>
  );
};

export default Card;
