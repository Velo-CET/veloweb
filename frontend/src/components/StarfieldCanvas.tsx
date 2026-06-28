"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  color: string;
  baseOpacity: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  isTwinkling: boolean;
  speedX: number;
  speedY: number;
}

interface ShootingStar {
  x: number;
  y: number;
  startX: number;
  startY: number;
  dx: number;
  dy: number;
  length: number;
  speed: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: Star[] = [];
    let activeShootingStar: ShootingStar | null = null;
    let timeToNextSpawn = Math.random() * 2000 + 1000; // 1s to 3s
    let animationFrameId: number;
    let lastTime = performance.now();

    const generateStars = (width: number, height: number): Star[] => {
      // Scale count between 300 and 500 based on area
      const area = width * height;
      const count = Math.max(300, Math.min(500, Math.floor(area * 0.00012)));
      const list: Star[] = [];

      const colors = [
        "rgba(255, 255, 255,",      // White
        "rgba(243, 244, 246,",      // Faint gray-white
        "rgba(224, 242, 254,",      // Faint blue-white
        "rgba(238, 242, 255,"       // Indigo-tinted white
      ];

      for (let i = 0; i < count; i++) {
        const rand = Math.random();
        let size = 1;
        let baseOpacity = 0.5;
        let speedY = 0.025;
        let speedX = 0.012;
        let isTwinkling = Math.random() < 0.08;

        if (rand < 0.6) {
          // Background layer (60%): Smallest, dimmest, slowest
          size = Math.random() * 0.4 + 0.6; // 0.6px to 1.0px
          baseOpacity = Math.random() * 0.25 + 0.15; // 0.15 to 0.40
          speedY = 0.025;
          speedX = 0.012;
          isTwinkling = Math.random() < 0.12; // distant stars twinkle more
        } else {
          // Midground layer (40%): Medium
          size = Math.random() * 0.6 + 1.0; // 1.0px to 1.6px
          baseOpacity = Math.random() * 0.3 + 0.35; // 0.35 to 0.65
          speedY = 0.06;
          speedX = 0.03;
          isTwinkling = Math.random() < 0.08;
        }

        list.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size,
          color: colors[Math.floor(Math.random() * colors.length)],
          baseOpacity,
          opacity: 0,
          twinkleSpeed: Math.random() * 0.012 + 0.004,
          twinklePhase: Math.random() * Math.PI * 2,
          isTwinkling,
          speedX,
          speedY
        });
      }
      return list;
    };

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      stars = generateStars(rect.width, rect.height);
      activeShootingStar = null;
    };

    // Initial sizing
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const loop = (time: number) => {
      animationFrameId = requestAnimationFrame(loop);

      if (document.hidden) {
        lastTime = time;
        return;
      }

      const deltaTime = time - lastTime;
      lastTime = time;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Clear the canvas
      ctx.clearRect(0, 0, width, height);

      // 1. Draw and update background stars (parallax layers)
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Parallax drift based on assigned speed values
        star.y += star.speedY;
        star.x += star.speedX;

        // Wrap around bounds
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
        if (star.x > width) {
          star.x = 0;
          star.y = Math.random() * height;
        }

        // Twinkle logic
        if (star.isTwinkling) {
          star.twinklePhase += star.twinkleSpeed;
          const variance = Math.sin(star.twinklePhase) * 0.22;
          star.opacity = Math.max(0.12, Math.min(0.85, star.baseOpacity + variance));
        } else {
          star.opacity = star.baseOpacity;
        }

        // Render star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${star.opacity})`;
        ctx.fill();
      }

      // 2. Draw and update shooting star
      if (activeShootingStar) {
        const ss = activeShootingStar;
        ss.life += 1;
        ss.x += ss.dx;
        ss.y += ss.dy;

        const lifeRatio = ss.life / ss.maxLife;
        ss.opacity = 1 - lifeRatio;

        if (ss.opacity > 0) {
          ctx.beginPath();
          // Create gradient for the tail path
          const grad = ctx.createLinearGradient(ss.x, ss.y, ss.x - ss.dx * 2.5, ss.y - ss.dy * 2.5);
          grad.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`);
          grad.addColorStop(0.2, `rgba(167, 139, 250, ${ss.opacity * 0.7})`); // violet highlights
          grad.addColorStop(1, "rgba(139, 92, 246, 0)");

          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.2;
          ctx.moveTo(ss.x, ss.y);
          // Draw trailing line
          ctx.lineTo(ss.x - (ss.dx / ss.speed) * ss.length, ss.y - (ss.dy / ss.speed) * ss.length);
          ctx.stroke();
        }

        if (ss.life >= ss.maxLife) {
          activeShootingStar = null;
        }
      } else {
        timeToNextSpawn -= deltaTime;
        if (timeToNextSpawn <= 0) {
          const startX = Math.random() * width;
          const startY = Math.random() * (height * 0.3); // Top 30% of canvas
          const speed = Math.random() * 8 + 8; // Travel speed (pixels per frame)
          const angle = Math.PI / 6 + Math.random() * (Math.PI / 12); // Diagonal angle (30 to 45 deg)

          activeShootingStar = {
            x: startX,
            y: startY,
            startX,
            startY,
            dx: Math.cos(angle) * speed,
            dy: Math.sin(angle) * speed,
            length: Math.random() * 60 + 40,
            speed,
            opacity: 1,
            life: 0,
            maxLife: Math.floor(Math.random() * 15 + 25), // 0.4s to 0.7s at 60fps
          };

          timeToNextSpawn = Math.random() * 1000 + 1000; // 1s to 3s
        }
      }
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
