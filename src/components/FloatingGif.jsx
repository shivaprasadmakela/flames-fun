import React, { useState, useEffect } from "react";

const FloatingGif = () => {
  const [position, setPosition] = useState({ x: 200, y: 200 });
  const gifWidth = 180; // 🔧 adjust this for your GIF size
  const gifHeight = 180;

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const dx = clientX - position.x;
    const dy = clientY - position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 120) {
      const randomX = Math.random() * (window.innerWidth - gifWidth);
      const randomY = Math.random() * (window.innerHeight - gifHeight);
      setPosition({ x: randomX, y: randomY });
    }
  };


  useEffect(() => {
    const interval = setInterval(() => {
      const randomX = Math.random() * (window.innerWidth - gifWidth);
      const randomY = Math.random() * (window.innerHeight - gifHeight);
      setPosition({ x: randomX, y: randomY });
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  

  return (
    <img
      src="/Love Eye Ethrium.gif"
      alt="Love Eye"
      className="floatingGif"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${gifWidth}px`,
        height: `${gifHeight}px`,
      }}
      onMouseMove={handleMouseMove}
    />
  );
};

export default FloatingGif;
