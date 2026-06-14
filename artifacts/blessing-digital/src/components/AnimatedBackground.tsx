import React, { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2;
        this.color = Math.random() > 0.5 ? 'rgba(139, 26, 26, 0.15)' : 'rgba(30, 58, 138, 0.1)';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;
        ctx!.fill();
      }
    }

    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    const drawGradients = () => {
      const time = Date.now() * 0.0005;
      
      const g1 = ctx.createRadialGradient(
        canvas.width * 0.2 + Math.sin(time) * 100,
        canvas.height * 0.3 + Math.cos(time) * 100,
        0,
        canvas.width * 0.2,
        canvas.height * 0.3,
        600
      );
      g1.addColorStop(0, 'rgba(139, 26, 26, 0.03)');
      g1.addColorStop(1, 'rgba(0, 0, 0, 0)');

      const g2 = ctx.createRadialGradient(
        canvas.width * 0.8 + Math.cos(time * 0.8) * 100,
        canvas.height * 0.7 + Math.sin(time * 0.8) * 100,
        0,
        canvas.width * 0.8,
        canvas.height * 0.7,
        800
      );
      g2.addColorStop(0, 'rgba(30, 58, 138, 0.02)');
      g2.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawGradients();

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139, 26, 26, ${0.05 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1, background: '#2c3f68' }}
    />
  );
}
