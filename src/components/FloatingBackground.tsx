
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Shape = {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  opacity: number;
  duration: number;
  delay: number;
  type: 'circle' | 'square';
};

const FloatingBackground = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const generateShapes = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      const newShapes: Shape[] = [];
      
      for (let i = 0; i < 8; i++) {
        newShapes.push({
          id: i,
          x: Math.random() * windowWidth,
          y: Math.random() * windowHeight,
          size: Math.random() * 100 + 50,
          rotation: Math.random() * 360,
          opacity: Math.random() * 0.2 + 0.1,
          duration: Math.random() * 10 + 15,
          delay: Math.random() * 5,
          type: Math.random() > 0.5 ? 'circle' : 'square',
        });
      }
      
      setShapes(newShapes);
    };

    generateShapes();
    
    window.addEventListener('resize', generateShapes);
    return () => window.removeEventListener('resize', generateShapes);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          initial={{ 
            x: shape.x, 
            y: shape.y, 
            rotate: shape.rotation,
            opacity: 0 
          }}
          animate={{ 
            x: [shape.x, shape.x + 50, shape.x - 30, shape.x],
            y: [shape.y, shape.y - 40, shape.y + 60, shape.y],
            rotate: [shape.rotation, shape.rotation + 20, shape.rotation - 20, shape.rotation],
            opacity: shape.opacity
          }}
          transition={{ 
            repeat: Infinity, 
            duration: shape.duration, 
            delay: shape.delay,
            ease: "easeInOut"
          }}
          className="absolute"
          style={{ width: shape.size, height: shape.size }}
        >
          <div 
            className={`w-full h-full ${shape.type === 'circle' ? 'rounded-full' : 'rounded-md'} bg-gradient-to-br from-msp-dark-brown/20 to-msp-ivory`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBackground;
