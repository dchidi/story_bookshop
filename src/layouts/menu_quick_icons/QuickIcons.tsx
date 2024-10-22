import React from "react";
import style from "./QuickIcons.module.css";
import { Search } from "../../components/search/Search";
import { Cart } from "../../components/cart/Cart";
import { ProfileMenu } from "../../components/profile/ProfileMenu";

export const QuickIcons: React.FC = () => {
  return (
    <div className={`row ${style.quickIcon}`}>
      <Search />
      <Cart onclick={() => {}} />
      <ProfileMenu />
    </div>
  );
};
