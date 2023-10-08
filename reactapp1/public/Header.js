import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,  faElevator } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import pennypic from './media/pennyimg2.png'

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
      console.log("ADD COLORS CALLEDD");
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

    var colors_list = ['rgb(164, 36, 36','rgb(251, 249, 230','rgb(168, 155, 128','rgb(103, 86, 82','rgb(21, 36, 45'];
    
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
      //get_data();

      /// Change to get colors locally

      var randomColor = color_global_list[Math.floor(Math.random()*color_global_list.length)];

      add_colors(randomColor);
      console.log(randomColor);
      colors_list = [];
      
      
      

    }

    const color_global_list = [['rgb(164, 36, 36', 'rgb(251, 249, 230', 'rgb(168, 155, 128', 'rgb(103, 86, 82', 'rgb(21, 36, 45'],
    ['rgb(210, 185, 100', 'rgb(219, 186, 105', 'rgb(244, 224, 198', 'rgb(173, 160, 146', 'rgb(98, 116, 113'], ['rgb(55, 44, 50', 'rgb(94, 102, 95', 'rgb(149, 170, 154', 'rgb(232, 230, 210', 'rgb(213, 105, 85'],
    ['rgb(162, 77, 50', 'rgb(244, 241, 209', 'rgb(168, 190, 119', 'rgb(65, 128, 98', 'rgb(29, 47, 44'], ['rgb(148, 190, 74', 'rgb(227, 98, 51', 'rgb(228, 45, 78', 'rgb(176, 77, 77', 'rgb(62, 114, 83'],
    ['rgb(242, 95, 86', 'rgb(40, 40, 34', 'rgb(35, 44, 43', 'rgb(39, 45, 49', 'rgb(254, 254, 254'], ['rgb(225, 102, 68', 'rgb(248, 147, 34', 'rgb(230, 201, 103', 'rgb(88, 166, 119', 'rgb(51, 90, 91'],
    ['rgb(209, 223, 164', 'rgb(218, 189, 103', 'rgb(174, 151, 87', 'rgb(111, 113, 83', 'rgb(54, 58, 54'], ['rgb(229, 229, 225', 'rgb(161, 183, 169', 'rgb(107, 111, 108', 'rgb(66, 72, 77', 'rgb(33, 33, 36'],
    ['rgb(38, 84, 92', 'rgb(11, 126, 151', 'rgb(214, 193, 202', 'rgb(137, 136, 132', 'rgb(166, 119, 93'], ['rgb(187, 169, 147', 'rgb(232, 158, 157', 'rgb(225, 136, 142', 'rgb(205, 68, 104', 'rgb(118, 65, 58'],
    ['rgb(80, 118, 123', 'rgb(83, 34, 55', 'rgb(159, 48, 59', 'rgb(189, 125, 109', 'rgb(167, 150, 90'], ['rgb(132, 211, 213', 'rgb(25, 90, 96', 'rgb(128, 58, 30', 'rgb(144, 41, 24', 'rgb(175, 50, 46'],
    ['rgb(173, 233, 122', 'rgb(69, 190, 193', 'rgb(91, 111, 187', 'rgb(99, 25, 174', 'rgb(58, 35, 111'], ['rgb(218, 215, 173', 'rgb(251, 218, 123', 'rgb(104, 83, 66', 'rgb(50, 23, 36', 'rgb(36, 30, 29'], ['rgb(58, 48, 46', 'rgb(100, 80, 86', 'rgb(150, 125, 101', 'rgb(207, 158, 117', 'rgb(235, 225, 150']


    ]

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
        <i className='links'><span class="text-with-shadow">{element}</span></i>
        <li><Link className='links' to="/"><span class="text-with-shadow">HOME</span></Link></li>
        <li><Link className='links' to="/Projects"><span class="text-with-shadow">PROJECTS</span></Link></li>
        <li><Link className='links' to="/Bio"><span class="text-with-shadow">BIO</span></Link></li>
        
        <li id='color_change' className='links'><span class="text-with-shadow">COLOR SWAP</span></li>
      </ul>
      <img src={pennypic} style={{backgroundColor: "rgba(255,255,255,0)"}} id='below_nav'>
        
      </img>
    </>
  );
}
