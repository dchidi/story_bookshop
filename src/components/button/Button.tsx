import React from "react";
import style from "./Button.module.css";
import classNames from "classnames";

interface IButton {
  children: React.ReactNode;
  className?: string;
  onclick: () => void;
  buttonType?:
    | "primary"
    | "secondary"
    | "warning"
    | "success"
    | "default"
    | "transparent";
}

const Button: React.FC<IButton> = ({
  buttonType = "transparent",
  children,
  onclick,
  className,
}) => {
  const rootCSS = classNames(style.btn, style[buttonType], className);
  return (
    <button className={rootCSS} onClick={onclick}>
      {children}
    </button>
  );
};

export const RoundButton: React.FC<IButton> = ({
  children,
  onclick,
  buttonType = "default",
  className,
}) => {
  const rootCSS = classNames(style.roundBtn, style[buttonType], className);
  return (
    <button className={rootCSS} onClick={onclick}>
      {children}
    </button>
  );
};

export default Button;
