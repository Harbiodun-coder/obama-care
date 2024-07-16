import { useState, useEffect } from 'react';

export const useOutsideClick = (el: any, initialState: any) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = (e: any) => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks outside
    if (isActive) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [el, isActive]);

  return [isActive, setIsActive];
};