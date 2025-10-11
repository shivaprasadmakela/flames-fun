import React from "react";
import styles from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      {/* Animated Heart */}
      {/* <div className={styles.heart}></div> */}

      {/* Cupid GIF */}
      <img
        src="/Fire Heart.gif"
        alt="Cupid flying"
        className={styles.cupid}
      />

      <p>Calculating your destiny... 💫</p>
    </div>
  );
};

export default Loader;
