import React from 'react';
import SVG1 from './SVG1';
import BPIC from './media/projectCards2.png'
import coder1 from './media/coder4.png'

export default function BG_Transition() {

  const blue_color = "715DF2"
  const gray_color = "CCCCCC"
  const hero_txt = (<>

  From concept<br></br> >>>> deployed project


  
  </>)

  return (
    <>
      <div class="top_color">
        <h1 id="headline">I create webites and apps</h1>
        <div id='heroTileWrapper'>
          <img id='coderOneSVG' src={coder1}></img>
          <div id='heroTXT'>{hero_txt}</div>
          <img id='heroImage' src={BPIC}></img>
        </div>
      </div>

      <div id='git_wrapper'>
        <h2>My GitHub Contributions <span id='boldText'>LIVE FEED</span></h2>
        <img id='git' src="http://ghchart.rshah.org/mrsaxman29" alt="machinedlens' Github chart" />

      </div>
      
      <SVG1></SVG1>
      
      
      
      
    </>
  )
}
