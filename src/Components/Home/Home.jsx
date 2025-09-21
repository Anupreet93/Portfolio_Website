import React, { useState, useEffect, useRef } from "react";
import ResumePDF from "../../assets/ANUPREET DALVI 1 (1).pdf";
import { CodeBracketIcon, ShieldCheckIcon, CpuChipIcon } from "@heroicons/react/24/outline";

const BACKGROUND_URL =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80";

/* ----------- Shooting Stars ----------- */
const ShootingStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const createStar = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.5,
      length: Math.random() * 60 + 20,
      speed: Math.random() * 6 + 4,
      opacity: 1,
    });

    const drawStar = (s) => {
      ctx.beginPath();
      const gradient = ctx.createLinearGradient(s.x, s.y, s.x + s.length, s.y + s.length);
      gradient.addColorStop(0, `rgba(255,255,255,${s.opacity})`);
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x + s.length, s.y + s.length);
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (Math.random() < 0.03) stars.push(createStar());

      stars.forEach((star, index) => {
        star.x += star.speed;
        star.y += star.speed;
        star.opacity -= 0.005;
        if (star.opacity <= 0) stars.splice(index, 1);
        else drawStar(star);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

/* ----------- Floating Orbs ----------- */
const FloatingOrbs = ({ count = 10 }) => {
  const orbsRef = useRef([]);
  const [orbs, setOrbs] = useState([]);

  useEffect(() => {
    const initOrbs = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 20 + 8,
      color: `rgba(99,102,241,${Math.random() * 0.6 + 0.2})`,
    }));
    setOrbs(initOrbs);
  }, [count]);

  useEffect(() => {
    let animationId;

    const animate = () => {
      setOrbs((prevOrbs) =>
        prevOrbs.map((o) => {
          let nx = o.x + o.dx * 2;
          let ny = o.y + o.dy * 2;

          if (nx < 0 || nx > window.innerWidth) o.dx = -o.dx;
          if (ny < 0 || ny > window.innerHeight) o.dy = -o.dy;

          return { ...o, x: nx, y: ny };
        })
      );
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {orbs.map((orb, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: orb.y,
            left: orb.x,
            width: orb.size,
            height: orb.size,
            borderRadius: "50%",
            background: orb.color,
            filter: "blur(6px)",
            opacity: 0.6,
            boxShadow: `0 0 ${orb.size / 2}px ${orb.color}`,
          }}
        />
      ))}
    </div>
  );
};

/* ----------- Home Component ----------- */
export const Home = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getBackgroundStyle = () => {
    const centerX = windowSize.width / 2 || 0;
    const centerY = windowSize.height / 2 || 0;
    return {
      backgroundImage: `url(${BACKGROUND_URL})`,
      transform: `translate3d(${-(cursorPos.x - centerX) / 25}px, ${-(cursorPos.y - centerY) / 25}px, 0) scale(1.12)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };
  };

  return (
    <div className="relative min-h-screen overflow-hidden mt-10">
      {/* Background */}
      <div
        className="fixed inset-0 z-0 transition-transform duration-700 ease-out opacity-50"
        style={getBackgroundStyle()}
      />
      <ShootingStars />
      <FloatingOrbs count={12} />
      <div className="fixed inset-0 z-[1] bg-gradient-to-br from-gray-100/20 via-transparent to-gray-100/20 dark:from-gray-900/40 dark:via-gray-900/30 dark:to-gray-900/40" />

      {/* Main Content */}
      <div className="relative z-10 py-20 px-5 md:px-20">
        <div className="text-center md:text-left max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark">
              Full-Stack Developer
            </span>
            <br />
            <span className="text-gray-900 dark:text-white mt-4 block">Anupreet Dalvi</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
            Building secure, scalable systems at the intersection of{" "}
            <span className="text-primary-light dark:text-primary-dark">cybersecurity</span> and{" "}
            <span className="text-secondary-light dark:text-secondary-dark">distributed architecture</span>
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white px-8 py-3 rounded-full hover:scale-105 transition-transform"
            >
              Get in Touch
            </a>
            <a
              href={ResumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-light dark:border-primary-dark text-gray-900 dark:text-white px-8 py-3 rounded-full hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-colors"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
