import { Link, Outlet, useNavigation } from "react-router-dom";
import styles from "./Root.module.css";
import LoadingSpinner from "../assets/LoadingSpinner.svg"

const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
    <nav className={`container ${styles.nav}`}>
        <Link to="/">
            <h1>Movie Search</h1>
        </Link>
    </nav>

    {navigation.state === "loading" ? (
        <img
            src={LoadingSpinner}
            alt="Loading..."
            className="loadingSpinner"
        />
    ) : (
        <Outlet />
    )}
</div>
  );
};

export default Root;
