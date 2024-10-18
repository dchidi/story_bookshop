import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <header>Dashboard Header</header>
      <nav>Dashboard Navigation</nav>
      <main>
        <Outlet />
        {/* This will render the nested routes (MyStories, Orders, etc.) */}
      </main>
    </div>
  );
};

export default DashboardLayout;
