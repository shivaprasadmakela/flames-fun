import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import styles from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <motion.div 
        className={styles.glassCard}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={styles.iconWrapper}
        >
          <Heart size={64} fill="#ff4d6d" color="#ff4d6d" />
        </motion.div>
        
        <motion.h2
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={styles.text}
        >
          Calculating your destiny... 💫
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Loader;
