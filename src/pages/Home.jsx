import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const Home = ({ onStart }) => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name1.trim() && name2.trim()) {
      onStart(name1, name2);
    } else {
      alert("Please enter both names!");
    }
  };

  return (
    <div className={styles.container}>
  
  <div className={styles.mainTextContainer}>
     <img
            src="/Cupid.gif"
            alt="Cupid flying"
            className={styles.cupid}
          />
          <h1 className={styles.title}>FLAMES Match Meter</h1>
          <img
            src="/Hear No Evil Monkey.gif"
            alt="Cupid flying"
            className={styles.cupid}
          />
  </div>
      

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Crush’s Name 😍"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Find My Fate 🔮
        </button>
      </form>
    </div>
  );
};

export default Home;
