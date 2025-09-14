import React, { useEffect, useState } from 'react';

const CursorGradient: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* Main cursor glow - larger radius */}
      <div
        className="fixed inset-0 pointer-events-none z-30 opacity-40"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 110, 0, 0.2), transparent 50%)`,
        }}
      />
      {/* Medium glow */}
      <div
        className="fixed inset-0 pointer-events-none z-30 opacity-50"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 110, 0, 0.25), transparent 60%)`,
        }}
      />
      {/* Intense center glow */}
      <div
        className="fixed inset-0 pointer-events-none z-30 opacity-60"
        style={{
          background: `radial-gradient(150px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 110, 0, 0.4), transparent 70%)`,
        }}
      />
    </>
  );
};

export default CursorGradient;