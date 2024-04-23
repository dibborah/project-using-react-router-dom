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
          return <h3 key={movie.imdbID}>{movie.Title}</h3>;
        })}
    </div>
  );
};

export default MovieList;
