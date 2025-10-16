'use client';
import { useEffect, useRef } from 'react';
import TubesCursor from 'threejs-components/build/cursors/tubes1.min.js';

const CursorEffect = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const app = TubesCursor(canvas, {
      tubes: {
        colors: ['#f967fb', '#53bc28', '#6958d5'],
        lights: {
          intensity: 200,
          colors: ['#83f36e', '#fe8a2e', '#ff008a', '#60aed5'],
        },
      },
    });

    appRef.current = app;

    const randomColors = (count) =>
      Array.from({ length: count }, () =>
        '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
      );

    const handleClick = () => {
      if (!appRef.current?.tubes) return;

      const newTubeColors = randomColors(3);
      const newLightColors = randomColors(4);

      appRef.current.tubes.setColors(newTubeColors);
      appRef.current.tubes.setLightsColors(newLightColors);
      console.log('🎨 Tubes and light colors updated');
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
      if (appRef.current?.destroy) appRef.current.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{
        zIndex: 0,
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          pointerEvents: 'auto',
          position: 'absolute',
          inset: 0,
        }}
      />
    </div>
  );
};

export default CursorEffect;
