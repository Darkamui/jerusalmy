import React from "react";
import { Link } from "react-router-dom";
import confrerie from "../img/confrerie.jpg";
import diderot from "../img/diderot.jpg";
import evac from "../img/evac.jpg";
import mozart from "../img/mozart.webp";
import obus from "../img/obus.jpg";
import rose from "../img/rose.jpg";
import bleu from "../img/bleu.png";
import { pageAnim, fade, titleAnim } from "../animation";
import { motion } from "framer-motion";

export default function Ouvrages() {
	return (
		<motion.div
			variants={pageAnim}
			initial='hidden'
			animate='show'
			exit='exit'
			className='ouvrages-container'>
			{/* <motion.h3 variants={fade} className="ouvrages-title">Ouvrages</motion.h3> */}
			<Link to='/confrerie' className='book-card'>
				<motion.div variants={fade}>
					<img src={confrerie} alt='' />
					<motion.h4 variants={titleAnim}>
						La confrérie des chasseurs de livres
					</motion.h4>
				</motion.div>
			</Link>

			<Link to='/mozart' className='book-card'>
				<motion.div variants={fade}>
					<img src={mozart} alt='' />
					<motion.h4 variants={titleAnim}>Sauver Mozart</motion.h4>
				</motion.div>
			</Link>

			<Link to='/rose' className='book-card'>
				<motion.div variants={fade}>
					<img src={rose} alt='' />
					<motion.h4 variants={titleAnim}>La rose de Saragosse</motion.h4>
				</motion.div>
			</Link>

			<Link to='/diderot' className='book-card'>
				<motion.div variants={fade}>
					<img src={diderot} alt='' />
					<motion.h4 variants={titleAnim}>
						Denis Diderot - Non à l'ignorance
					</motion.h4>
				</motion.div>
			</Link>

			<Link to='/evacuation' className='book-card'>
				<motion.div variants={fade}>
					<img src={evac} alt='' />
					<motion.h4 variants={titleAnim}>Évacuation</motion.h4>
				</motion.div>
			</Link>

			<Link to='/bleu' className='book-card'>
				<motion.div variants={fade}>
					<img src={bleu} alt='' />
					<motion.h4 variants={titleAnim}>
						Manuel bleu contre l'antisémitisme &amp; la désinformation
					</motion.h4>
				</motion.div>
			</Link>

			<Link to='/obus' className='book-card'>
				<motion.div variants={fade}>
					<img src={obus} alt='' />
					<motion.h4 variants={titleAnim}>
						Les obus jouaient à pigeon vole
					</motion.h4>
				</motion.div>
			</Link>
		</motion.div>
	);
}
