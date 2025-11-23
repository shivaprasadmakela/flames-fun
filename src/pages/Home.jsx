import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, History } from "lucide-react";
import styles from "../styles/Home.module.css";
import SoundManager from "../utils/SoundManager";

const Home = ({ onStart, onOpenHistory }) => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [zodiac1, setZodiac1] = useState("");
  const [zodiac2, setZodiac2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name1.trim() && name2.trim()) {
      SoundManager.play("click");
      onStart(name1, name2, zodiac1, zodiac2);
    } else {
      SoundManager.play("fail");
      alert("Please enter both names!");
    }
  };

  return (
    <div className={styles.container}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.glassCard}
      >
        <div className={styles.header}>
          <motion.img
            src="/Cupid.gif"
            alt="Cupid"
            className={styles.cupid}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <h1 className={styles.title}>FLAMES Match Meter</h1>
          <motion.img
            src="/Hear No Evil Monkey.gif"
            alt="Monkey"
            className={styles.cupid}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Your Name"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              className={styles.input}
            />
            <select 
              value={zodiac1} 
              onChange={(e) => setZodiac1(e.target.value)}
              className={styles.select}
            >
              <option value="">Zodiac (Optional)</option>
              {["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"].map(z => (
                <option key={z} value={z}>{z}</option>
              ))}
            </select>
          </div>

          <div className={styles.heartDivider}>
            <Heart fill="#ff4d6d" color="#ff4d6d" size={32} />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Crush’s Name 😍"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              className={styles.input}
            />
            <select 
              value={zodiac2} 
              onChange={(e) => setZodiac2(e.target.value)}
              className={styles.select}
            >
              <option value="">Zodiac (Optional)</option>
              {["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"].map(z => (
                <option key={z} value={z}>{z}</option>
              ))}
            </select>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit" 
            className={styles.button}
          >
            Find My Fate 🔮
          </motion.button>
        </form>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onOpenHistory}
          className={styles.historyBtn}
          title="View History"
        >
          <History size={24} />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
