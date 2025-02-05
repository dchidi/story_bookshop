import React from "react";
import styles from "./Timer.module.css";
import { useTimer } from "../hooks/useTimer";

interface ITimerProps {
  hours: number;
  minutes: number;
  seconds: number;
  isRunning?: boolean; // Timer should be paused when user is submitting or fetching question to avoid any disadvantages due to slow network
  className?: string;
  strictMode: boolean;
}

export const Timer: React.FC<ITimerProps> = ({
  hours = 0,
  minutes = 0,
  seconds = 0,
  className = "",
  strictMode = false,
}) => {
  const {
    timeModifier,
    isRunning,
    pauseTimer,
    resumeTimer,
    restartTimer,
    mode,
  } = useTimer(hours, minutes, seconds);
  const { h, m, s } = timeModifier;

  return (
    <>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resumeTimer}>Resume</button>
      <button onClick={restartTimer}>Restart</button>
      <div className={`${styles.timer} ${className}`}>
        {mode(strictMode, h) && (
          <>
            <span>{h < 10 ? "0" + h : h}</span>:
          </>
        )}
        {mode(strictMode, m) && (
          <>
            <span>{m < 10 ? "0" + m : m}</span>:
          </>
        )}
        <span>{s < 10 ? "0" + s : s}</span>
      </div>
    </>
  );
};
