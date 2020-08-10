import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleScroll = () => {
    setPosition({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return position;
};