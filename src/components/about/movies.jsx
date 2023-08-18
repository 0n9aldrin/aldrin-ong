import React from "react";

import INFO from "../../data/user";

import "./styles/movies.css";

const Movies = () => {
	return (
		<div className="movies-container">
			{INFO.movies.map((movie, index) => (
				<div className="movie" key={index}>
                    <div className="bubble">{movie.title + " (" + movie.year + ")"}</div>
					<div className="movie-image">
						<img src={movie.image} alt="logo" />
					</div>
				</div>
			))}
		</div>
	);
};

export default Movies;
