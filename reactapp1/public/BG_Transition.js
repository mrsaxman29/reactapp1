import React from 'react';
import SVG1 from './SVG1';

export default function BG_Transition() {

  const blue_color = "715DF2"
  const gray_color = "CCCCCC"

  return (
    <>
      <div class="top_color">
        <h1 id="headline">CREATING WITH CODE AND <i>SHARING WITH THE WORLD</i></h1>
      </div>

      <div id='git_wrapper'>
        <h2>My GitHub Contributions <span id='boldText'>LIVE FEED</span></h2>
        <img id='git' src="http://ghchart.rshah.org/mrsaxman29" alt="machinedlens' Github chart" />

      </div>
      
      <SVG1></SVG1>
      
      
      
      
    </>
  )
}
