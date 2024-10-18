import { useMemo } from "react";
import { LOGIN_MENU, LOGOUT_MENU } from "../../constants/settings";
import { useLogin } from "../../hooks/useLogin";
import style from "./Menu.module.css";
import { useMenu } from "./useMenu";
import { useNavigate } from "react-router-dom";

export const Menu: React.FC = () => {
  const { isAuthenticated } = useLogin();
  const { currentNav, setCurrentNav } = useMenu();
  const navigate = useNavigate();

  const menuList = useMemo(
    () => (isAuthenticated ? LOGIN_MENU : LOGOUT_MENU),
    [isAuthenticated]
  );

  const handleMenuClick = (menu: string) => {
    setCurrentNav(menu);
    navigate(menu);
  };

  return (
    <>
      <ul className={style.menu}>
        {menuList.map(({ label, value }) => (
          <li
            key={label}
            className={label === currentNav ? style.active : undefined}
            onClick={() => handleMenuClick(label)}
          >
            {value}
          </li>
        ))}
      </ul>
    </>
  );
};
