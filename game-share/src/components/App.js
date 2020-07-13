import React, { useState, useEffect} from 'react';
import styles from '../css/styles.module.css';

export default function App(props) {
  useEffect(() => {
    const requestOption = {
      method: "POST",
      header: {"user-key": process.env.KEY},
      body: "fields name; limit 10;"
    }

    fetch("https://api-v3.igdb.com/games/", requestOption)
    .then((res) => {
      console.log(res)
    })
    .catch(err => console.log(err));
  }, [])

  return (
    <div>
      <div className={styles.header}>
        <h1>GameShare</h1>
        <p>Cart</p>
        <p>Sign In</p>
      </div>
    </div>
  );
}
