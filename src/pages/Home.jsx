import { useLoaderData } from "react-router-dom";
import MovieList from "../components/MovieList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <SearchForm />
      <MovieList data={data}/>
    </div>
  );
};

export default Home;
