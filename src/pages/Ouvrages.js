import React from "react";
import { Link } from "react-router-dom";
import confrerie from "../img/confrerie.jpg";
import diderot from "../img/diderot.jpg";
import evac from "../img/evac.jpg";
import mozart from "../img/mozart.webp";
import obus from "../img/obus.jpg";
import rose from "../img/rose.jpg";
import tsahal from "../img/tsahal.jpg";
import bleu from "../img/bleu.png";
import biblio from "../img/biblio.jpg";
import sexPistols from "../img/sexPistols.jpg";
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
			<Link to='/sexPistols' className='book-card'>
				<motion.div variants={fade}>
					<img src={sexPistols} alt='' />
					<div className='hide'>
						<motion.h4 variants={titleAnim}>
							Des Sex Pistols à l'Intifada
						</motion.h4>
					</div>
				</motion.div>
			</Link>

			<Link to='/confrerie' className='book-card'>
				<motion.div variants={fade}>
					<img src={confrerie} alt='' />
					<div className='hide'>
						<motion.h4 variants={titleAnim}>
							La confrérie des chasseurs de livres
						</motion.h4>
					</div>
				</motion.div>
			</Link>

			<Link to='/mozart' className='book-card'>
				<motion.div variants={fade}>
					<img src={mozart} alt='' />
					<div className='hide'>
						<motion.h4 variants={titleAnim}>Sauver Mozart</motion.h4>
					</div>
				</motion.div>
			</Link>

			<Link to='/rose' className='book-card'>
				<motion.div variants={fade}>
					<img src={rose} alt='' />
					<div className='hide'>
						<motion.h4 variants={titleAnim}>La rose de Saragosse</motion.h4>
					</div>
				</motion.div>
			</Link>

			<Link to='/diderot' className='book-card'>
				<motion.div variants={fade}>
					<img src={diderot} alt='' />
					<div className='hide'>
						<motion.h4 variants={titleAnim}>
							Denis Diderot - Non à l'ignorance
						</motion.h4>
					</div>
				</motion.div>
			</Link>

			<Link to='/evacuation' className='book-card'>
				<motion.div variants={fade}>
					<img src={evac} alt='' />
					<div className='hide'>
						<motion.h4 variants={titleAnim}>Évacuation</motion.h4>
					</div>
				</motion.div>
			</Link>

			<Link to='/tsahal' className='book-card'>
				<motion.div variants={fade}>
					<img src={tsahal} alt='' />
					<div className='hide'>
						<motion.h4 variants={titleAnim}>Shalom Tsahal</motion.h4>
					</div>
				</motion.div>
			</Link>

			<Link to='/bleu' className='book-card'>
				<motion.div variants={fade}>
					<img src={bleu} alt='' />
					<div className='hide'>
						<motion.h4 variants={titleAnim}>
							Manuel bleu contre l'antisémitisme &amp; la désinformation
						</motion.h4>
					</div>
				</motion.div>
			</Link>

			<Link to='/obus' className='book-card'>
				<motion.div variants={fade}>
					<img src={obus} alt='' />
					<div className='hide'>
						<motion.h4 variants={titleAnim}>
							Les obus jouaient à pigeon vole
						</motion.h4>
					</div>
				</motion.div>
			</Link>

			<Link to='/biblio' className='book-card'>
				<motion.div variants={fade}>
					<img src={biblio} alt='' />
					<div className='hide'>
						<motion.h4 variants={titleAnim}>
							Bibliodyssées: 50 histoires de livres sauvés
						</motion.h4>
					</div>
				</motion.div>
			</Link>
		</motion.div>
	);
}
