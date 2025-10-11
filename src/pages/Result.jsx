import React, { useState } from "react";
import styles from '../styles/Result.module.css';

const Result = ({ name1, name2, result, steps, count, common, onReset }) => {
  const [showMore, setShowMore] = useState(false);

  const flamesEmojis = {
    Friends: "😎",
    Lovers: "💖",
    Affection: "🥰",
    Marriage: "💍",
    Enemies: "😡",
    Siblings: "👫",
  };

  const flamesMessages = {
    Friends: "You both vibe perfectly as best buddies!",
    Lovers: "There’s serious chemistry between you two!",
    Affection: "You care deeply for each other 💗",
    Marriage: "Wedding bells are ringing already! 💒",
    Enemies: "Uh-oh! Too much fire in this relationship 😅",
    Siblings: "More like family than lovers 💫",
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>✨ Your FLAMES Result ✨</h1>
      <p className={styles.text}>
        {name1} ❤️ {name2}
      </p>

      <div className={styles.resultBox}>
        <h2>
          {result} {flamesEmojis[result]}
        </h2>
        <p className={styles.meaning}>{flamesMessages[result]}</p>
      </div>

      {/* Show/Hide Explanation */}
      {!showMore ? (
        <button onClick={() => setShowMore(true)} className={styles.moreBtn}>
          💭 How it happened
        </button>
      ) : (
        <div className={styles.explainBox}>
          <h3>💭 How it happened</h3>

          <div className={styles.step}>
            <h4>🧩 Step 1 — Removing Common Letters</h4>
            <p>
              We started with your names: <b>{name1}</b> and <b>{name2}</b>.<br />
              Common letters found:{" "}
              <b>{common.length ? common.join(", ") : "none"}</b>.<br />
              After removing them, the remaining letters are <b>{count}</b> in total.
            </p>
          </div>

          <div className={styles.step}>
            <h4>🔢 Step 2 — Setting up FLAMES</h4>
            <p>
              We begin with the letters: <b>F L A M E S</b> <br />
              F – Friendship L – Love A – Affection M – Marriage E – Enemy S – Sibling
            </p>
          </div>

          <div className={styles.step}>
            <h4>🔁 Step 3 — Elimination Round</h4>
            {steps.map((s, i) => (
              <p key={i}>👉 {s}</p>
            ))}
          </div>

          <div className={styles.step}>
            <h4>🎯 Final Result</h4>
            <p>
              After all that love math ❤️, the last letter standing is <b>{result}</b> —{" "}
              which means <b>{result}</b> {flamesEmojis[result]}!
            </p>
          </div>

          <button
            onClick={() => setShowMore(false)}
            className={styles.hideBtn}
          >
            🔙 Hide explanation
          </button>
        </div>
      )}

      <button onClick={onReset} className={styles.button}>
        Try Again 🔁
      </button>
    </div>
  );
};

export default Result;
