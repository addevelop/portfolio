import profil from '../assets/media/profil.png';
import React, { useState } from 'react';
import '../assets/css/header.css';

const HeaderComp = () => {
let [ profilImg, setProfilImg ] = useState(true);
const handleClick = () => {
  setProfilImg(false);
}


  return (
    <header>
      <section className="container-profil">
        <img className={`profil ${ profilImg ? 'profilActive' : ''}`} src={profil} alt="profil"/>
      </section>
      <section className="container-menu">
        <nav className="menu">
          <ul>
            <li><a onClick={ handleClick } >Home</a></li>
            <li><a>My skill</a></li>
            <li><a>My projects</a></li>
            <li><a>My Jobs</a></li>
          </ul>
        </nav>
      </section>
      <section className="container-contact">
        <a>contact</a>
      </section>
      
    </header>
  )
}

export default HeaderComp