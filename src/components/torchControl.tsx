import { useEffect, useState } from 'react';

let torchTimeout: NodeJS.Timeout | null = null;

export const useTorchControl = () => {
  const [isTorchOn, setIsTorchOn] = useState(false);

  const toggleTorch = () => {
    if (isTorchOn) {
      turnTorchOff();
    } else {
      turnTorchOn();
    }
  };

  const turnTorchOn = () => {
    // Logic to turn the torch on
    setIsTorchOn(true);
    resetTorchTimeout();
  };

  const turnTorchOff = () => {
    // Logic to turn the torch off
    setIsTorchOn(false);
    resetTorchTimeout();
  };

  const resetTorchTimeout = () => {
    if (torchTimeout) {
      clearTimeout(torchTimeout);
    }
    torchTimeout = setTimeout(() => {
      turnTorchOff();
    }, 10000); // 10 seconds
  };

  useEffect(() => {
    return () => {
      if (torchTimeout) {
        clearTimeout(torchTimeout);
      }
    };
  }, []);

  return { isTorchOn, toggleTorch };
};