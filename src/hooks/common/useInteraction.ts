import { useState, useEffect } from 'react';
import { InteractionManager } from 'react-native';
export const useInteraction = ({ useInteractionManager = false }) => {
  const [interactionComplete, setInteractionComplete] = useState(false);

  useEffect(() => {
    let subAnimationFrame: number;
    let subInteractionManager: { cancel: () => void };

    const timeoutForInteraction = setTimeout(() => {
      setInteractionComplete(true);
    }, 1000);

    if (useInteractionManager) {
      subInteractionManager = InteractionManager.runAfterInteractions(() => {
        clearTimeout(timeoutForInteraction);
        setInteractionComplete(true);
      });
    } else {
      subAnimationFrame = requestAnimationFrame(() => {
        clearTimeout(timeoutForInteraction);
        setInteractionComplete(true);
      });
    }

    return () => {
      clearTimeout(timeoutForInteraction);
      cancelAnimationFrame(subAnimationFrame);
      subInteractionManager?.cancel();
    };
  }, [useInteractionManager]);

  return interactionComplete;
};
