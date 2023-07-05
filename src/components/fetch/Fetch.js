import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Advice from "../Advice/Advice";
import Button from "../Button/Button";
import Divider from "../divider/Divider";
import styles from "./_fetch.module.scss";

const Fetch = () => {
  const [adviceGenerator, SetAdviceGenerator] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  const submitHandler = async () => {
    // const advice = await fetch("https://api.adviceslip.com/advice");
    const advice = await fetch(
      "https://advice-generator-backend.onrender.com/fetch/advice"
    );
    const message = await advice.json();
    SetAdviceGenerator(message);
  };
  useEffect(() => {
    const fetchAdvice = async () => {
      const response = await fetch(
        "https://advice-generator-backend.herokuapp.com/fetch/advice"
      );
      if (!response.ok) {
        throw new Error("Something Went Wrong💀💀");
      }
      const responseData = await response.json();
      SetAdviceGenerator(responseData);
      setIsLoading(true);
    };
    try {
      fetchAdvice().catch((error) => {});
    } catch (error) {
      setIsLoading(true);
      setHttpError(error.message);
    }
  }, []);

  return (
    <Fragment>
      {isLoading && <Advice advice={adviceGenerator}></Advice>}
      {!isLoading && <p>Loading....</p>}
      {httpError && isLoading && <p className={styles.error}>{httpError}</p>}
      <Divider></Divider>
      <Button onClick={submitHandler}></Button>
    </Fragment>
  );
};

export default Fetch;
