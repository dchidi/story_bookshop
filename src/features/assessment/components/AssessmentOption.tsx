import React from "react";
import styles from "./AssessmentOption.module.css";

interface IAssessmentOptionProps {
  label: string;
  value: string;
  isSelected: boolean;
  className?: string;
}

export const AssessmentOption: React.FC<IAssessmentOptionProps> = ({
  label,
  value,
  isSelected = false,
  className = "",
}) => {
  return (
    <div className={`${styles.option} ${className} ${isSelected}`}>
      <div className={styles.label}>{label}</div>
      <div>{value}</div>
    </div>
  );
};
