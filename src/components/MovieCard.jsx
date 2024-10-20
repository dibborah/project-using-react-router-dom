import { Link } from "react-router-dom";

const MovieCard = ({ Title, imdbID }) => {
  return (
    <div>
      <Link to={`detail/${imdbID}`}>{Title}</Link>
    </div>
  );
};

export default MovieCard;
