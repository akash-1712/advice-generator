import React from "react";
import style from "./_advice.module.scss";

const Advice = (props) => {
  return (
    <div className={style.advice}>
      <div className={style.advice_num}>
        <h3>ADVICE</h3>
        <p>#{props.advice.slip.id}</p>
      </div>
      <h1 className={style.advice_messages}>"{props.advice.slip.advice}"</h1>
    </div>
  );
};

export default Advice;
