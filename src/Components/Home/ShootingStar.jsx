import React, { useEffect, useRef } from "react";

const ShootingStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];

    const createStar = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height * 0.5; // top half
      const length = Math.random() * 80 + 10;
      const speed = Math.random() * 6 + 4;
      return { x, y, length, speed, opacity: 1 };
    };

    const drawStar = (star) => {
      ctx.beginPath();
      const gradient = ctx.createLinearGradient(star.x, star.y, star.x + star.length, star.y + star.length);
      gradient.addColorStop(0, `rgba(255,255,255,${star.opacity})`);
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(star.x + star.length, star.y + star.length);
      ctx.stroke();
    };

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (Math.random() < 0.03) stars.push(createStar()); // chance of new star

      stars.forEach((star, index) => {
        star.x += star.speed;
        star.y += star.speed;
        star.opacity -= 0.005;

        if (star.opacity <= 0) stars.splice(index, 1);
        else drawStar(star);
      });

      requestAnimationFrame(update);
    };

    update();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

return (
  <canvas
    ref={canvasRef}
    className="fixed inset-0 z-[1] pointer-events-none"
  />
);

};

export default ShootingStars;
