import { HiOutlineShoppingBag } from "react-icons/hi2";
import Button from "../button/Button";
export const Cart: React.FC = () => {
  return (
    <>
      <Button onclick={() => {}}>
        <HiOutlineShoppingBag size={30} />
      </Button>
      {/* <ul className={style.profileMenu}>
        <li></li>
      </ul> */}
    </>
  );
};
