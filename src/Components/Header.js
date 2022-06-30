import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll } from 'react-scroll/modules';
import "../App.css";


export default function Header() {
  return (
    <header className='header'>
        <h1 className='headerH1'>Carrette Antoine <br/> Web developper fullstack</h1>
        <nav className='navHeader'>
            <li className='HeaderLi'><Link to={"/"} className='link'>Acceuil</Link></li>
            <li className='HeaderLi'><Link to={"Techs/"} className='link'>Mes techs</Link></li>
            <li className='HeaderLi'><Link to={"Creations/"} className='link'>Créations/experiences</Link></li>
            <li className='HeaderLi'><Link to={"quiSuisJe/"} className='link'>Qui suis je ?</Link></li>
        </nav>
    </header>

  )
}
