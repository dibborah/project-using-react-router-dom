import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <nav>
      <Link to="/">Movie Search</Link>
      <Outlet />
    </nav>
  );
};

export default Root;
