import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,  faElevator } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const element = <FontAwesomeIcon id="hamburger" icon={faBars} />;
const other_icon = <FontAwesomeIcon icon={faElevator} />;

export default function Header() {
  useEffect(() => {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('below_nav');

    function show_sidebar() {
      sidebar.classList.add('transi');
      console.log('funct hit');
      hamburger.removeEventListener('click', show_sidebar);
      hamburger.addEventListener('click', hide_bar);
    }

    function hide_bar() {
      sidebar.classList.remove('transi');
      console.log('HIDE HIT');
      hamburger.removeEventListener('click', hide_bar);
      hamburger.addEventListener('click', show_sidebar);
    }

    hamburger.addEventListener('click', show_sidebar);

    return () => {
      hamburger.removeEventListener('click', show_sidebar);
      hamburger.removeEventListener('click', hide_bar);
    };
  }, []);

  return (
    <>
      <ul className='nav'>
        <i className='links'>{element}</i>

        <li><Link className='links' to="/Projects">PROJECTS</Link></li>
        <i><Link className='links' to="/">{other_icon}</Link></i>
        <li className='links'>Link2</li>
      </ul>
      <div id='below_nav'></div>
    </>
  );
}
