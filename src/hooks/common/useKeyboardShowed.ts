import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

export const useKeyboardShowed = () => {
  const [isShowed, setIsShowed] = useState(false);
  useEffect(() => {
    const subShow = Keyboard.addListener('keyboardDidShow', () => {
      setIsShowed(true);
    });
    const subHide = Keyboard.addListener('keyboardDidHide', () => {
      setIsShowed(false);
    });

    return () => {
      subShow.remove();
      subHide.remove();
    };
  }, []);

  return isShowed;
};
