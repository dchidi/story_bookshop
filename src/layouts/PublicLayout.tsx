import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      <header> Header</header>
      <nav> Navigation</nav>
      <main>
        <Outlet />
        {/* This will render the nested routes (MyStories, Orders, etc.) */}
      </main>
    </div>
  );
};

export default PublicLayout;
