import React, { useState, useEffect } from "react";
import styles from "./TorchButton.module.css";

interface TorchButtonProps {
  isTorchOn: boolean;
  toggleTorch: () => void;
}

const TorchButton: React.FC<TorchButtonProps> = ({
  isTorchOn,
  toggleTorch,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleToggleTorch = () => {
    toggleTorch();

    // Make the button visible and set a timeout to hide it after 10 seconds
    setIsVisible(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 10000);
    setTimeoutId(newTimeoutId);
  };

  useEffect(() => {
    // Cleanup timeout on component unmount
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <button
      className={`${styles.torchButton} ${
        isVisible ? styles.visible : styles.hidden
      }`}
      onClick={handleToggleTorch}
    >
      {isTorchOn ? "Turn Off Torch" : "Turn On Torch"}
    </button>
  );
};

export default TorchButton;
