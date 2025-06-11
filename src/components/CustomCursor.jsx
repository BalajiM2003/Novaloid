import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide cursor on touch devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) {
      setVisible(false);
      return;
    }
    let raf;
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!raf) raf = requestAnimationFrame(updateCursor);
    };
    const updateCursor = () => {
      currentX += (mouseX - currentX) * 0.4;
      currentY += (mouseY - currentY) * 0.4;
      if (cursorRef.current) {
        cursorRef.current.style.left = currentX + 'px';
        cursorRef.current.style.top = currentY + 'px';
      }
      raf = null;
    };

    const handleMouseOver = (e) => {
      if (
        e.target.closest('a,button,[role="button"],input,textarea,.cursor-pointer')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!visible) return null;
  return (
    <div
      ref={cursorRef}
      className={`fixed z-[9999] pointer-events-none transition-all duration-200 ${
        hovered ? 'w-8 h-8' : 'w-4 h-4'
      }`}
      style={{
        left: 0,
        top: 0,
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        background: hovered
          ? 'radial-gradient(circle, rgba(57,255,20,0.18) 60%, rgba(0,191,255,0.12) 100%)'
          : 'transparent',
        border: `2.5px solid transparent`,
        boxShadow: hovered
          ? '0 0 32px 8px #39FF14, 0 0 64px 16px #00BFFF, 0 0 0 2px #39FF14'
          : '0 0 12px 2px #39FF14, 0 0 24px 4px #00BFFF',
        backgroundClip: 'padding-box',
        opacity: 0.85,
        pointerEvents: 'none',
        mixBlendMode: 'lighten',
        transition: 'width 0.2s, height 0.2s, opacity 0.2s, box-shadow 0.2s, background 0.2s',
        zIndex: 9999,
        animation: 'cursorPulse 1.6s infinite alternate',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          border: hovered
            ? '2.5px solid #39FF14'
            : '2.5px solid #00BFFF',
          boxShadow: hovered
            ? '0 0 16px 4px #39FF14, 0 0 32px 8px #00BFFF'
            : '0 0 8px 2px #00BFFF',
          opacity: 0.8,
          transition: 'border 0.2s, box-shadow 0.2s',
        }}
      />
    </div>
  );
};

export default CustomCursor;
