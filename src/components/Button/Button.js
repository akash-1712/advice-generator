import React from "react";
import iconDice from "../../images/icon-dice.svg";
import style from "./_button.module.scss";

const Button = (props) => {
  return (
    <button className={style.dice} onClick={props.onClick}>
      <img src={iconDice} alt="Dice" />
    </button>
  );
};

export default Button;
