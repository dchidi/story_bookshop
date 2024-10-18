import { Outlet } from "react-router-dom";
import style from "./PublicLayout.module.css";

const PublicLayout = () => {
  return (
    <div>
      <header className={`row ${style.header}`}>
        <div>platform name</div>
        <div>menu</div>
        <div className={style.quickIcons}>quick icons</div>
      </header>
      <main>
        <Outlet />
        {/* This will render the nested routes (MyStories, Orders, etc.) */}
      </main>
    </div>
  );
};

export default PublicLayout;
