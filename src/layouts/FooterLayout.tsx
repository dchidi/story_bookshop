import React from "react";
import style from "./FooterLayout.module.css";
import { FOOTER_MENU } from "../constants/settings";
import AutoSlider from "../components/slider/AutoSlider";

const FooterLayout: React.FC = () => {
  const comments = [
    {
      comment: `The book offers a captivating premise with a richly imagined world and intriguing characters. 
    The author’s descriptive writing truly brings the forest to life, making it feel like a character in its own right. 
    The story unfolds at a steady pace, and the themes of mystery and self-discovery are well-handled.`,
      username: "dchidi",
      rating: 3,
    },
  ];
  return (
    <div className={style.root}>
      <ul className={style.footermenu}>
        {FOOTER_MENU.map((menu, index) => (
          <li key={index}>{menu.value}</li>
        ))}
      </ul>
      <div className={style.slider}>
        <AutoSlider slides={comments} />
      </div>
    </div>
  );
};

export default FooterLayout;
