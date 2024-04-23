import { apiKey } from "./contants";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import SingleMovieDetail from "./pages/SingleMovieDetail";
import ErrorPage from "./pages/ErrorPage.jsx"
import { loader as movieLoader } from "./pages/Home.jsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage/>}>
      <Route index element={<Home />} loader={movieLoader}/>
      <Route path="/detail/:imdbId" element={<SingleMovieDetail />} />
      </Route>
    )
  );
  return (  
    <RouterProvider router={router}>
      <h1>App</h1>
    </RouterProvider>
  );
};

export default App;
