import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2 } from 'lucide-react';

const HistoryModal = ({ isOpen, onClose, history, onClear }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal-overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(15px)',
            padding: '2rem',
            borderRadius: '20px',
            width: '90%',
            maxWidth: '500px',
            maxHeight: '80vh',
            overflowY: 'auto',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            color: 'white'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.8rem' }}>📜 History</h2>
            <button 
              onClick={onClose}
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            >
              <X size={24} />
            </button>
          </div>

          {history.length === 0 ? (
            <p style={{ textAlign: 'center', opacity: 0.7 }}>No history yet. Go find your fate! 🔮</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {history.map((item, index) => (
                <li key={index} style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  marginBottom: '10px',
                  padding: '15px',
                  borderRadius: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                      {item.name1} + {item.name2}
                    </div>
                    <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                      {item.result} • {item.lovePercentage}% Love
                    </div>
                  </div>
                  <div style={{ fontSize: '1.5rem' }}>
                    {item.result === 'Lovers' || item.result === 'Marriage' ? '❤️' : 
                     item.result === 'Enemies' ? '😈' : '✨'}
                  </div>
                </li>
              ))}
            </ul>
          )}

          {history.length > 0 && (
            <button
              onClick={onClear}
              style={{
                marginTop: '1.5rem',
                width: '100%',
                padding: '10px',
                background: 'rgba(255, 77, 109, 0.8)',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                fontSize: '1rem'
              }}
            >
              <Trash2 size={18} /> Clear History
            </button>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HistoryModal;
