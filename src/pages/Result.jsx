import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Share2, RefreshCw, ChevronDown, ChevronUp, Heart } from "lucide-react";
import styles from "../styles/Result.module.css";
import SoundManager from "../utils/SoundManager";

const Result = ({ name1, name2, result, steps, count, common, lovePercentage, zodiacCompatibility, onReset }) => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (result === "Lovers" || result === "Marriage" || result === "Affection") {
      SoundManager.play("celebration");
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ff8fa3', '#fff']
      });
    } else if (result === "Enemies") {
      SoundManager.play("fail");
    } else {
      SoundManager.play("success");
    }
  }, [result]);

  const handleShare = async () => {
    const text = `${name1} ❤️ ${name2} = ${result} (${lovePercentage}% Love)!\nCheck your compatibility on FLAMES Fun! 🔥`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'FLAMES Result',
          text: text,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(text);
      alert("Result copied to clipboard! 📋");
    }
  };

  const flamesEmojis = {
    Friends: "😎",
    Lovers: "💖",
    Affection: "🥰",
    Marriage: "💍",
    Enemies: "😡",
    Siblings: "👫",
  };

  const flamesMessages = {
    Friends: "Besties for life! 👯‍♂️",
    Lovers: "It's getting hot in here! 🔥",
    Affection: "Sweet and caring vibes 💕",
    Marriage: "Put a ring on it! 💒",
    Enemies: "Run while you can! 🏃💨",
    Siblings: "Bro/Sis zone alert! 🚫",
  };

  return (
    <div className={styles.container}>
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={styles.glassCard}
      >
        <h1 className={styles.title}>✨ The Verdict ✨</h1>
        
        <div className={styles.names}>
          <span className={styles.name}>{name1}</span>
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Heart fill="#ff4d6d" color="#ff4d6d" size={32} />
          </motion.div>
          <span className={styles.name}>{name2}</span>
        </div>

        {zodiacCompatibility && (
          <div className={styles.zodiacBadge}>
            {zodiacCompatibility}
          </div>
        )}

        <div className={styles.resultBox}>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
            className={styles.emoji}
          >
            {flamesEmojis[result]}
          </motion.div>
          <h2 className={styles.resultText}>{result}</h2>
          <p className={styles.message}>{flamesMessages[result]}</p>
          
          <div className={styles.loveMeter}>
            <div className={styles.loveBarBg}>
              <motion.div 
                className={styles.loveBarFill}
                initial={{ width: 0 }}
                animate={{ width: `${lovePercentage}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <p className={styles.loveText}>{lovePercentage}% Love Compatibility</p>
          </div>
        </div>

        <div className={styles.actions}>
          <button onClick={handleShare} className={styles.iconBtn} title="Share Result">
            <Share2 size={20} /> Share
          </button>
          <button onClick={onReset} className={styles.primaryBtn}>
            <RefreshCw size={20} /> Try Again
          </button>
        </div>

        <div className={styles.explanationSection}>
          <button 
            onClick={() => setShowMore(!showMore)} 
            className={styles.toggleBtn}
          >
            {showMore ? "Hide Details" : "See How It Happened"}
            {showMore ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className={styles.details}
              >
                <div className={styles.step}>
                  <h4>Step 1: Common Letters</h4>
                  <p>Removed: <b>{common.length ? common.join(", ") : "None"}</b></p>
                  <p>Remaining Count: <b>{count}</b></p>
                </div>
                
                <div className={styles.step}>
                  <h4>Step 2: Elimination</h4>
                  <ul className={styles.stepList}>
                    {steps.slice(1).map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Result;
