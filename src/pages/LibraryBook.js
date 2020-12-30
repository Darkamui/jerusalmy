import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MovieState } from "../utils";
import { pageAnim, titleAnim2, fade, photoAnim } from "../animation";
import { motion } from "framer-motion";
import rakuten from "../img/rakuten.png";
import amazon from "../img/amazon-64.png";
import fnac from "../img/fnac.png";
import cultura from "../img/cultura.png";

export default function LibraryBook() {
	const history = useHistory();
	const url = history.location.pathname;
	const [movies, setMovies] = useState(MovieState);
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		const currentBook = movies.filter((stateMovie) => stateMovie.url === url);
		setMovie(currentBook[0]);
	}, [movies, url]);
	return (
		<>
			{movie && (
				<motion.div
					variants={pageAnim}
					initial='hidden'
					animate='show'
					exit='exit'
					className='libraryBook-container'>
					<div className='cover-container'>
						<div className='hide'>
							<motion.img variants={photoAnim} src={movie.img} alt='' />
						</div>
					</div>
					<div className=''>
						<motion.div
							setMovies={setMovies}
							variants={titleAnim2}
							className='book-details '>
							<motion.h1 variants={fade}>{movie.title}</motion.h1>
							<motion.h4 variants={fade}>
								<span className='greenFont'>Éditeur</span> : {movie.editeur}
							</motion.h4>
							<motion.h4 variants={fade}>
								<span className='greenFont'>Date de parution </span>:{" "}
								{movie.date}
							</motion.h4>
							<motion.p variants={fade}>{movie.description}</motion.p>
							<div className='shop-container'>
								<motion.p variants={fade}>Acheter ce livre : </motion.p>

								<img src={amazon} alt='' />
								<img src={fnac} alt='' />
								<img src={rakuten} alt='' />
								<img src={cultura} alt='' />
							</div>
						</motion.div>
					</div>
				</motion.div>
			)}
		</>
	);
}
