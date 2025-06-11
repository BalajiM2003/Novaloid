import React, { useEffect, useRef } from 'react';

const SPARKLES = 18;
const colors = ['#39FF14', '#00BFFF', '#fff'];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const SparkleParticles = ({ className = '', style = {}, area = 'hero' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sparkles = containerRef.current.querySelectorAll('.sparkle');
    sparkles.forEach((sparkle) => {
      const animate = () => {
        sparkle.style.left = random(0, 100) + '%';
        sparkle.style.top = random(0, 100) + '%';
        sparkle.style.opacity = random(0.3, 0.9);
        sparkle.style.transform = `scale(${random(0.5, 1.2)})`;
        sparkle.style.transition = `all ${random(3, 7)}s cubic-bezier(.4,0,.2,1)`;
        setTimeout(animate, random(3000, 7000));
      };
      animate();
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 z-10 ${className}`}
      style={style}
      aria-hidden="true"
    >
      {Array.from({ length: SPARKLES }).map((_, i) => (
        <span
          key={i}
          className="sparkle block absolute rounded-full"
          style={{
            width: `${random(6, 14)}px`,
            height: `${random(6, 14)}px`,
            background: colors[i % colors.length],
            filter: 'blur(1.5px)',
            opacity: 0.5,
            left: `${random(0, 100)}%`,
            top: `${random(0, 100)}%`,
            transition: 'all 5s cubic-bezier(.4,0,.2,1)',
          }}
        />
      ))}
    </div>
  );
};

export default SparkleParticles;
