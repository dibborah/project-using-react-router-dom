import { Link, Outlet, useNavigation } from "react-router-dom";

const Root = () => {
  const { state } = useNavigation();
  return (
    <nav>
      <Link to="/">Movie Search</Link>
      {state === "loading" ? <h1>Loading ...</h1> : <Outlet />}
    </nav>
  );
};

export default Root;
