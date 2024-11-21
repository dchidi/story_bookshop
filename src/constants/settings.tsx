export const PLATFORM_NAME = (
  <div>
    <div className="platformName">DreamStudio</div>
    <div className="platformNameSub">MarketPlace</div>
  </div>
);
const BaseMenu = [
  { label: "/shop", value: "Shop" },
  { label: "/deals", value: "Deals" },
  { label: "/kids", value: "For Kids" },
];
export const LOGOUT_MENU = [...BaseMenu, { label: "/login", value: "Login" }];
export const LOGIN_MENU = [
  ...BaseMenu,
  { label: "/dashboard/orders", value: "Orders" },
  { label: "/dashboard/my-stories", value: "My Stories" },
  { label: "/dashboard/wish-list", value: "Wish List" },
];

export const FOOTER_MENU = [
  { label: "/contact", value: "Contact Us" },
  { label: "/terms", value: "Terms & Conditions" },
  { label: "/privacy", value: "Privacy Policy" },
  { label: "/About", value: "About Us" },
  { label: "/About", value: "Return & Replace" },
  { label: "/About", value: "Co-Writers" },
  { label: "/About", value: "Shop with points" },
  { label: "/About", value: "Membership" },
];
