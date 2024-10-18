import { RoundButton } from "../button/Button";
import style from "./ProfileMenu.module.css";

export const ProfileMenu: React.FC = () => {
  return (
    <>
      <RoundButton onclick={() => {}} className={style.profileMenu}>
        CD
      </RoundButton>
      {/* <ul className={style.profileMenu}>
        <li></li>
      </ul> */}
    </>
  );
};
