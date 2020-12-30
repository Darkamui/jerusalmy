import React from "react";
import raphy from "../img/raph2.png";
import { motion } from "framer-motion";
import { pageAnim, titleAnim2, photoAnim } from "../animation";

export default function About() {
	return (
		<motion.div
			variants={pageAnim}
			initial='hidden'
			animate='show'
			exit='exit'
			className='about-container'>
			<div className='aboutImg-container'>
				<motion.img variants={photoAnim} src={raphy} alt='' />
			</div>
			<div className='aboutText-container '>
				<motion.p variants={titleAnim2}>
					Raphaël Jerusalmy est un écrivain français né à Paris, le 07/11/1954.
					<br />
					Diplômé de l’École Normale Supérieure, après ses études, il s'engage
					dans l'armée israélienne, au sein de laquelle il évolue rapidement
					vers le service de renseignement.
					<br />
					Après une quinzaine d'années, il prend sa retraite de l'armée et mène
					des actions éducatives et humanitaires, puis devient négociant en
					livres anciens à Tel Aviv. Il est également expert sur la chaîne de
					télévision I24news.
					<br />
					Il publie un premier roman très remarqué en 2012, "Sauvez Mozart",
					pour lequel il a reçu le prix Emmanuel Roblès 2013 et le prix
					littéraire de l'ENS Cachan.
					<br />
					Auteur de romans à succès : "La confrérie des chasseurs de livres"
					(Actes Sud, 2013), "Denis Diderot, non à l’ignorance" (Actes Sud
					junior, 2014), son roman "Les obus jouaient à pigeon vole", paru en
					février 2016 dans la collection Sur le fil aux Éditions Bruno Doucey a
					été couronné par le Prix Coup de cœur des lecteurs des Rendez-vous de
					l’histoire de Blois 2016.
					<br />
					En 2018, Il signe "La rose de Saragosse", un roman palpitant dans
					lequel il revient sur la persécution des Juifs d’Espagne par
					l’Inquisition au XVe siècle.
				</motion.p>
			</div>
		</motion.div>
	);
}
