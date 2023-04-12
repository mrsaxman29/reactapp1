import React from 'react';
import SVG1 from './SVG1';

export default function BG_Transition() {

  const blue_color = "715DF2"
  const gray_color = "CCCCCC"

  return (
    <>
      <div class="top_color">
        <h1 id="headline">CREATING THINGS WITH CODE AND SHARING THEM WITH THE WORLD</h1>
      </div>

      <div id='git_wrapper'>
        <h2>My Live GitHub Contributions</h2>
        <img id='git' src="http://ghchart.rshah.org/mrsaxman29" alt="2016rshah's Github chart" />

      </div>
      
      
      <img id="svg" src='../bg2.svg'></img>
      <SVG1></SVG1>
      
      
      <div class="bottom_color"></div>
      
    </>
  )
}
