import { Cart } from "../cart/Cart";
import { Wish } from "../wish_btn/Wish";
import style from "./StoryThumbnail.module.css";
import classNames from "classnames";

interface IStoryThumbnail {
  iconsPosition?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  imagePath?: string;
  title: string;
  id: number | string;
  backgroundColor?: "color1" | "color2" | "color3" | "color4";
  className?: string;
  size?: "sm" | "lg";
}

const StoryThumbnail: React.FC<IStoryThumbnail> = ({
  iconsPosition = "topRight",
  imagePath,
  title,
  id,
  className,
  backgroundColor = "color1",
  size = "sm",
}) => {
  const rootCSS = classNames(
    style.root,
    style[size],
    style[backgroundColor],
    className
  );
  const imgCSS = classNames(style.img, style[size]);
  if (size === "lg")
    return (
      <div
        onClick={() => {
          console.log(id);
        }}
        className={rootCSS}
      >
        <div className={`${style.icons} ${style[iconsPosition]}`}>
          <Cart size={18} buttonType="default" onclick={() => {}} />
          <Wish size={16} buttonType="default" onclick={() => {}} />
        </div>
        <div>
          <img src={imagePath} alt="" className={imgCSS} />
        </div>

        <h3>{title}</h3>
      </div>
    );
  return (
    <div
      onClick={() => {
        console.log(id);
      }}
      className={rootCSS}
    >
      {/* <div className={`${style.icons} ${style[iconsPosition]}`}>
        <Cart size={18} buttonType="default" onclick={() => {}} />
        <Wish size={16} buttonType="default" onclick={() => {}} />
      </div> */}
      {/* <div> */}
      <img src={imagePath} alt="" className={imgCSS} />
      {/* </div> */}

      <h3 className={style.smTitle}>{title}</h3>
    </div>
  );
};
export default StoryThumbnail;
