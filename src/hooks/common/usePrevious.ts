import { useEffect, useRef } from 'react';

export const usePrevious = <T>(value: T): T | undefined => {
  const preValue = useRef<T>();
  useEffect(() => {
    preValue.current = value;
  }, [value]);

  return preValue.current;
};
