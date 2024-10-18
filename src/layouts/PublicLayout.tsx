import React from "react";
import { Outlet } from "react-router-dom";
import style from "./PublicLayout.module.css";
import { PLATFORM_NAME } from "../constants/settings";
import { QuickIcons } from "./menu_quick_icons/QuickIcons";

const PublicLayout: React.FC = () => {
  return (
    <div>
      <header className={`row ${style.header}`}>
        <div>{PLATFORM_NAME}</div>
        <div>menu</div>
        <div className={style.quickIcons}>
          <QuickIcons />
        </div>
      </header>
      <main>
        <Outlet />
        {/* This will render the nested routes (MyStories, Orders, etc.) */}
      </main>
    </div>
  );
};

export default PublicLayout;
