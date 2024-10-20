import MovieCard from "./MovieCard";

const MovieList = ({ data }) => {
  const { movieApiResponse, isError, error } = data;
  // console.log(data);
  if (isError) {
    return <h1>{error}</h1>;
  }
  if (movieApiResponse && movieApiResponse.Response === "False") {
    return <h1>{movieApiResponse.Error || "Not Found Yet!!!"} </h1>;
  }
  return (
    <div>
      {movieApiResponse &&
        movieApiResponse.Search.map((movie) => {
          return <MovieCard key={movie.imdbID} {...movie} />
        })}
    </div>
  );
};

export default MovieList;
