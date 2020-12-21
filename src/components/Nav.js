import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion';
import {slideDown} from '../animation';


export default function Nav() {
    const push = () => {
    }
    return (
        <nav>
            <Link to="/auteur" className="link">Sur l'auteur</Link>
            <Link to="/" className="link">Raphael Jerusalmy</Link>
            <Link className="link" to ="/ouvrages">Ouvrages
            
            <FontAwesomeIcon className="icon" icon={faBook}/>
            </Link>
        </nav>
    )
}
