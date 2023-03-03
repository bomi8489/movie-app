import PropTypes from "prop-types";
import {Link} from "react-router-dom"
import {
  MovieBox, 
  MovieImg, 
  MovieTitle, 
  MovieYear, 
  MovieGenres,
} from "../Presenter/MoviePresenter"

function Movie({ id, medium_cover_image, title, year, summary, genres}) {
  return (
    <MovieBox>
      <Link to={`/movie/${id}`}>
        <MovieImg src={medium_cover_image} alt={title} />
      </Link>
      <div>
        <MovieTitle>
          <Link to={`/movie/${id}`}>{title}</Link>
        </MovieTitle>
        <MovieYear>{year}</MovieYear>
        <p>{summary.length > 100 ? `${summary.slice(0, 100)} ...` : summary}</p>
        <MovieGenres>
          {genres.map(g => (
            <li key={g}>{g}</li>
          ))}
        </MovieGenres>
      </div>
    </MovieBox>
  );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;