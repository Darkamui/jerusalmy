import React, { useState,useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {MovieState} from '../utils';
import {pageAnim,titleAnim2,fade,photoAnim} from '../animation';
import {motion} from 'framer-motion';

export default function LibraryBook() {
   const history = useHistory();
   const url = history.location.pathname;
   const [movies,setMovies] = useState(MovieState);
   const [movie,setMovie] = useState(null);

    useEffect(() => {
        const currentBook = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentBook[0]);
    },[movies,url])
    return (
        <>
        {movie &&
        <motion.div variants={pageAnim} initial="hidden" animate="show" exit="exit" className="libraryBook-container">
                <div className="cover-container">
                    <motion.img variants={photoAnim} src={movie.img} alt=""/>
                </div>
                <div className="hide">
                <motion.div setMovies={setMovies} variants={titleAnim2} className="book-details">
                    <motion.h1 variants={fade}>{movie.title}</motion.h1>
                    <motion.p variants={fade}>{movie.description}</motion.p>
                </motion.div>            
                </div>
        </motion.div>}
        </>
    )
}
