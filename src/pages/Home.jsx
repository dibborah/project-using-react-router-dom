import { useLoaderData } from "react-router-dom";
import MovieLists from "../components/MoviesList";
import SearchForm from "../components/SearchForm";
import { apiKey } from "../contants";
import axios from "axios";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "marvel";
  const movieSearchEndpoint = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`;
  try {
    const response = await axios.get(movieSearchEndpoint);
    return {
      movieApiResponse: response.data,
      searchTerm,
      error: "",
      isError: false,
    };
  } catch (error) {
    const errorMessage =
      error?.response?.data?.Error ||
      error.message ||
      "Something went wrong!!!";
    return {
      movieApiResponse: null,
      searchTerm,
      error: errorMessage,
      isError: true,
    };
  }
};

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <SearchForm searchTerm={data.searchTerm} />
      <MovieLists data={data} />
    </div>
  );
};

export default Home;
