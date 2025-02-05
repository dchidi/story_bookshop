import { useEffect, useState, useRef } from "react";

export const useTimer = (hours: number, minutes: number, seconds: number) => {
  const [timeModifier, setTimeModifier] = useState({
    h: hours,
    m: minutes,
    s: seconds,
  });

  const [isRunning, setIsRunning] = useState(false); // Track if timer is running
  const intervalRef = useRef<number | null>(null); // Store interval ID

  useEffect(() => {
    if (!isRunning) return; // Only run the effect when the timer is running

    intervalRef.current = setInterval(() => {
      setTimeModifier((prev) => {
        let { h, m, s } = prev;

        if (h === 0 && m === 0 && s === 0) {
          clearInterval(intervalRef.current!);
          return prev; // Stop countdown when it reaches zero
        }

        if (s > 0) {
          s -= 1;
        } else {
          if (m > 0) {
            m -= 1;
            s = 59;
          } else if (h > 0) {
            h -= 1;
            m = 59;
            s = 59;
          }
        }

        return { h, m, s };
      });
    }, 1000);

    return () => clearInterval(intervalRef.current!); // Cleanup on unmount
  }, [isRunning]); // Re-run effect when `isRunning` changes

  // Function to pause the timer
  const pauseTimer = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Function to resume the timer
  const resumeTimer = () => {
    setIsRunning(true);
  };

  // Function to restart the timer
  const restartTimer = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimeModifier({ h: hours, m: minutes, s: seconds }); // Reset to initial values
    setTimeout(() => setIsRunning(true), 0); // Ensure restart happens after reset
  };

  const mode = (strictMode: boolean, counter: number) =>
    strictMode === false ? true : counter === 0 ? false : true;

  return {
    timeModifier,
    isRunning,
    pauseTimer,
    resumeTimer,
    restartTimer,
    mode,
  };
};
