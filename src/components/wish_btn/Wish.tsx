import { FaHeart } from "react-icons/fa";
import { btnType, RoundButton } from "../button/Button";

interface IWish {
  size?: number;
  buttonType?: btnType;
  onclick: () => void;
}

export const Wish: React.FC<IWish> = ({
  size = 30,
  buttonType = "transparent",
  onclick = () => {},
}) => {
  return (
    <>
      <RoundButton onclick={onclick} buttonType={buttonType}>
        <FaHeart size={size} />
      </RoundButton>
      {/* <ul className={style.profileMenu}>
        <li></li>
      </ul> */}
    </>
  );
};
