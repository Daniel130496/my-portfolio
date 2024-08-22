import React, { useRef, useEffect } from 'react';
import './css/MatrixRain.css'

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = 250;
    canvas.height = 250;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ'.repeat(6).split('');
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }, () => 1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach((drop, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drop * fontSize);

        drops[i]++;
        if (drop * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      });
    };

    const interval = setInterval(draw, 70);
    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} style={{ display: 'block', background: '#000', width: '250px', height: '250px' }} />;
};

export default MatrixRain;
