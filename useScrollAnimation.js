import { useState, useLayoutEffect } from 'react';

export const useScrollAnimation = ({ animationDistance = 600, ref }) => {
  const [scrollY, setScrollY] = useState(0);
  const [elementTop, setElementTop] = useState(0);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const getElementPosition = () => {
      const top = ref.current ? ref.current.offsetTop : 0;
      setElementTop(top);
    };

    getElementPosition();
    window.addEventListener('resize', getElementPosition);
    return () => window.removeEventListener('resize', getElementPosition);
  }, [ref]);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollPositionRelativeToElement = scrollY - elementTop;

  const animationProgress = Math.max(
    0,
    Math.min(scrollPositionRelativeToElement / animationDistance, 1)
  );
  
  const curtainTranslate = animationProgress * 50; 
  const textOpacity = 1 - Math.min((scrollPositionRelativeToElement / (animationDistance / 3)), 1); 
  const parallaxOffset = (1 - animationProgress) * 200; 

  return { curtainTranslate, textOpacity, parallaxOffset, animationProgress };
};