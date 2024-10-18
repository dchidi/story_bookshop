import React from "react";
import { Outlet } from "react-router-dom";
import style from "./PageLayout.module.css";
import { PLATFORM_NAME } from "../constants/settings";
import { QuickIcons } from "./menu_quick_icons/QuickIcons";
import { Menu } from "../components/menu/Menu";

const PageLayout: React.FC = () => {
  return (
    <div>
      <header className={`row ${style.header}`}>
        <div>{PLATFORM_NAME}</div>
        <Menu />
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

export default PageLayout;
