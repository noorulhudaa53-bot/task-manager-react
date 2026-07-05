import { useState, useEffect } from 'react';

/**
 * Custom hook to persist state in localStorage
 * @param {string} key - localStorage key name
 * @param {any} initialValue - Default value if nothing saved
 * @returns {[any, function]} - Current value and setter function
 */
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;