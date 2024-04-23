const MovieList = ({ data }) => {
  const movieApiResponse = data.movieApiResponse;
  console.log(movieApiResponse);
  if (movieApiResponse.Response === "False") {
    return <h1>{movieApiResponse.Error || "Not Found Yet!!!"} </h1>;
  }
  return (
    <div>
      {movieApiResponse &&
        movieApiResponse.Search.map((movie) => {
          return <h1 key={movie.imdbID}>{movie.Title}</h1>;
        })}
    </div>
  );
};

export default MovieList;
