import React, { useState } from "react";

import INFO from "../../data/user";

import "./styles/movies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Movies = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedMovie, setSelectedMovie] = useState(null);

	return (
		<div className="movies-container">
			{INFO.movies.map((movie, index) => (
				<div
					className="movie"
					key={index}
					onClick={() => {
						setIsOpen(true);
						setSelectedMovie(movie);
					}}
				>
					<div className="bubble">
						{movie.title + " (" + movie.year + ")"}
					</div>
					<div className="movie-image">
						<img src={movie.image} alt="logo" />
					</div>
				</div>
			))}
			{isOpen && (
				<div className="modal-overlay">
					<div className="modal">
						<div className="modal-inner">
							<button
								className="modal-close"
								onClick={() => setIsOpen(false)}
							>
								<FontAwesomeIcon icon={faTimes} />
							</button>
							<div className="modal-content">
								<img
									className="modal-image"
									src={selectedMovie.image}
									alt="Selected movie"
								/>
								<div className="modal-right-side">
									<p>{selectedMovie.title}</p>
									<div className="movie-info">
										<p>{selectedMovie.year}</p>
										<p>
											Directed by:{" "}
											{selectedMovie.director}
										</p>
									</div>
									<p>{selectedMovie.tagline}</p>
									<p>{selectedMovie.description}</p>
								</div>
							</div>
							<p>Rating: {selectedMovie.rating}</p>
							<p>Review: {selectedMovie.review}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Movies;
