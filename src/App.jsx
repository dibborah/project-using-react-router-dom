import { apiKey } from "./contants";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<h1>Parent Element</h1>}>
        <Route path={"/"} element={<h1>Home Page</h1>} />
        <Route path={"/about"} element={<h1>About Page</h1>} />
        <Route path={"/contact"} element={<h1>Contact Page</h1>} />
      </Route>
    )
  );
  console.log(apiKey);
  return (
    <RouterProvider router={router}>
      <h1>App</h1>
    </RouterProvider>
  );
};

export default App;
