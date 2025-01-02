import { useRef } from 'react';

export const useDebounce = (callback: (arg: string) => void, delay: number) => {
  const timer = useRef<NodeJS.Timeout>();

  const debouncedCallback = (arg: string) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      callback(arg);
    }, delay);
  };

  return debouncedCallback;
};
