import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import logo from "../img/jerumedia2.png";

export default function Nav() {
	return (
		<nav>
			<Link to='/' className='link'>
				Accueil
			</Link>
			<Link to='/auteur' className='link'>
				Sur l'auteur
			</Link>
			<Link className='link' to='/ouvrages'>
				Ouvrages
				<FontAwesomeIcon className='icon' icon={faBook} />
			</Link>
			<div className='jerumedia'>
				<img src={logo} className='' alt='JeruMedia Company Logo' />
			</div>
		</nav>
	);
}
