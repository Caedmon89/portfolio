import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const isSSR = typeof window !== 'undefined';
  const [windowSize, setWindowSize] = useState({
    width: isSSR ? undefined : window.innerWidth,    
  });

  const changeWindowSize = () => {
    setWindowSize({ width: window.innerWidth });
  };

  useEffect(() => {
    window.addEventListener('resize', changeWindowSize);

    return () => window.removeEventListener('resize', changeWindowSize);
  }, []);

  return windowSize;
};
