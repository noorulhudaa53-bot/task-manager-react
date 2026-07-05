import { useState } from 'react';

/**
 * Custom hook to toggle a boolean value
 * @param {boolean} initialValue - Starting value (default: false)
 * @returns {[boolean, function]} - Current value and toggle function
 */
const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((prev) => !prev);

  return [value, toggle];
};

export default useToggle;