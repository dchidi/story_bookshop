import { HiOutlineShoppingBag } from "react-icons/hi2";
import { btnType, RoundButton } from "../button/Button";

interface ICart {
  size?: number;
  buttonType?: btnType;
  onclick: () => void;
}

export const Cart: React.FC<ICart> = ({
  size = 30,
  buttonType = "transparent",
  onclick = () => {},
}) => {
  return (
    <>
      <RoundButton onclick={onclick} buttonType={buttonType}>
        <HiOutlineShoppingBag size={size} />
      </RoundButton>
      {/* <ul className={style.profileMenu}>
        <li></li>
      </ul> */}
    </>
  );
};
