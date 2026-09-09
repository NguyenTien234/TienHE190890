import React, { useEffect, useState } from 'react';
import './HeartRain.css';

const HeartRain = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Tạo một trái tim mới mỗi 300ms
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100, // Vị trí ngẫu nhiên từ 0% - 100% chiều rộng màn hình
        size: Math.random() * 20 + 15, // Kích thước ngẫu nhiên từ 15px - 35px
        duration: Math.random() * 3 + 2, // Thời gian rơi từ 2s - 5s
        opacity: Math.random() * 0.5 + 0.5, // Độ mờ ngẫu nhiên
      };

      setHearts((prevHearts) => [...prevHearts, newHeart]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // Xóa bớt các trái tim đã rơi xong để tránh nặng web
  const handleAnimationEnd = (id) => {
    setHearts((prevHearts) => prevHearts.filter((heart) => heart.id !== id));
  };

  return (
    <div className="heart-rain-container">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          onAnimationEnd={() => handleAnimationEnd(heart.id)}
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            opacity: heart.opacity,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
};

export default HeartRain;