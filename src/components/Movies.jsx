import Movie from "./Movie";
import "../styles/movies.scss";

const Movies = ({ movies, viewTrailer, closeCard }) => {
	return (
		<div data-testid='movies'>
			{movies.movies.map((item) => {
				return item.results?.map((movie) => (
					<Movie
						movie={movie}
						key={movie.id}
						viewTrailer={viewTrailer}
						closeCard={closeCard}
					/>
				));
			})}
		</div>
	);
};

export default Movies;
