import axios from "axios";
import { apiKey } from "../contants";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const imdbId = params.imdbId;
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}&plot=full`;
  try {
    const response = await axios.get(url);
    return { movie: response?.data, isError: false, error: "" };
  } catch (error) {
    console.log(error);
    const errorMessage =
      error?.response?.data?.Error ||
      error.message ||
      "Something went wrong !!!";
    return { movie: null, isError: true, error: errorMessage };
  }
}

const SingleMovieDetail = () => {
  const { movie: movieDetail, isError, error } = useLoaderData();
  if (isError) {
    return <h1>{error}</h1>;
  }
  if (movieDetail && movieDetail.Response === "False") {
    return <h1>{movieDetail.Error}</h1>;
  }
  return <div>{movieDetail && movieDetail.Title}</div>;
};

export default SingleMovieDetail;
