import { Dispatch, SetStateAction, useState } from "react";

interface IUseMenu {
  currentNav: string;
  setCurrentNav: Dispatch<SetStateAction<string>>;
}
export const useMenu = (): IUseMenu => {
  const [currentNav, setCurrentNav] = useState<string>("/shop");
  return { currentNav, setCurrentNav };
};
