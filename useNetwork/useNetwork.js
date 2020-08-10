import { useState, useEffect } from 'react';

export const useNetwork = (onChange) => {
    const [alive, setAlive] = useState(navigator.onLine);
    const handleAlive = () => {
      if (onChange && typeof onChange === "function") {
        onChange(navigator.onLine);
      }
      setAlive(navigator.onLine);
    };
    useEffect(() => {
      window.addEventListener("online", handleAlive);
      window.addEventListener("offline", handleAlive);
      return () => {
        window.removeEventListener("online", handleAlive);
        window.removeEventListener("offline", handleAlive);
      };
    }, []);
    return alive;
  };