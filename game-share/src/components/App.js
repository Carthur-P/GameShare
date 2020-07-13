import React from 'react';
import styles from '../css/styles.module.css';

export default function App(props) {
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
