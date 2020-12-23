import React from "react";
import { Link } from "react-router-dom";
import raphy from "../img/raphy.png";
import { pageAnim, titleAnim, fade, photoAnim } from "../animation";
import { motion } from "framer-motion";
import Wave from "./Wave";
import Text from "../components/Text";

export default function Landing() {
	return (
		<motion.div
			variants={pageAnim}
			initial='hidden'
			animate='show'
			className='landing-container'
			exit='exit'>
			<div className='description'>
				<div className='title'>
					<div className='hide'>
						<motion.h2 variants={titleAnim}>Raphaël Jerusalmy</motion.h2>
					</div>
					<div className='hide'>
						<motion.h3 variants={titleAnim}>Écrivain Français</motion.h3>
					</div>
				</div>
				<motion.p variants={fade}>
					Auteur de romans à succès traduits internationalement
				</motion.p>
				<motion.button variants={fade}>
					<Link to='/ouvrages'>Consulter les ouvrages</Link>
				</motion.button>
			</div>
			<Wave></Wave>
			<div className='image hide'>
				<motion.img variants={photoAnim} src={raphy} alt='' />
			</div>
		</motion.div>
	);
}
