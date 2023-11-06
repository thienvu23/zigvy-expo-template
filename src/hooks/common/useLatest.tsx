import { useRef } from 'react';

export const useLatest = <T,>(value: T) => {
  const valueRef = useRef(value);
  valueRef.current = value;
  return valueRef;
};
