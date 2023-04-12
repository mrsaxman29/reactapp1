import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,  faElevator } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const element = <FontAwesomeIcon id="hamburger" icon={faBars} />;
const other_icon = <FontAwesomeIcon id="o_icon"  icon={faElevator} />;

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

    const r = document.querySelector(':root');

    function add_colors(color_l){
      console.log("ADD COLORS CALLED");
      r.style.setProperty('--light_shades', color_l[0]);
      console.log(color_l[0]);
      r.style.setProperty('--light_accents', color_l[1]);
      console.log(color_l[1]);
      r.style.setProperty('--main_color', color_l[2]);
      console.log(color_l[2]);
      r.style.setProperty('--dark_accents', color_l[3]);
      console.log(color_l[3]);
      r.style.setProperty('--dark_shades', color_l[4]);
      console.log(color_l[4]);
      console.log("FINISHED COLORSSS");
    };

    const colors_list = ['rgb(164, 36, 36','rgb(251, 249, 230','rgb(168, 155, 128','rgb(103, 86, 82','rgb(21, 36, 45'];
    
    const get_data = function(){
    
  
      fetch("http://colormind.io/api/", {
      method:"POST",
      body: JSON.stringify({ model: 'default' })
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.result.forEach((color, index)=>{
          var color_str = "rgb(";
          color.forEach((element, index) => {
              color_str += element.toString();
              if (index<2){
                  color_str += ", ";
              };
          });
      console.log(color_str);
      colors_list.unshift(color_str);
      console.log("CL: " + colors_list);

      
      })
  }).catch(error => console.error(error));
  }

    function color_swap(){
      console.log("swap color button clicked");
      console.log("COLOR LIST: " + colors_list);
      get_data();
      add_colors(colors_list);
      colors_list = [];
      
      
      

    }

    const color_btn = document.getElementById("color_change");
    color_btn.addEventListener("click", color_swap);

    return () => {
      hamburger.removeEventListener('click', show_sidebar);
      hamburger.removeEventListener('click', hide_bar);
      color_btn.removeEventListener('click', color_swap);
    };
  }, []);

  return (
    <>
      <ul className='nav'>
        <i className='links'>{element}</i>
        <li><Link className='links' to="/">HOME</Link></li>
        <li><Link className='links' to="/Projects">PROJECTS</Link></li>
        <li><Link className='links' to="/Bio">BIO</Link></li>
        
        <li id='color_change' className='links'>{other_icon} COLOR</li>
      </ul>
      <div id='below_nav'></div>
    </>
  );
}
