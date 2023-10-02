import React from "react";



function SVG() {
    const svgStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%', // Make the SVG take up the full width of the container
      height: '100%', // Make the SVG take up the full height of the container
      zIndex: 2, // Ensure the SVG is behind the overlay
    };
  
    const divStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      'margin-top': '20px',
      width: '100%', // Same width as the SVG
      height: '100%', // Same height as the SVG
      backgroundColor: 'rgba(255, 0, 0, 0.1)', // Red semi-transparent background
      zIndex: 1, // Ensure the div is above the SVG
      display: 'flex',
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically
      'font-size': '50px',
      'color': 'white'

    };
  
    return (
      <div id="svgWrapper" style={{ position: 'relative', width: '98%', height: '400px' }}>
        
        <svg id="visual" viewBox="0 0 900 250" style={svgStyle}>
          <rect x="0" y="0" width="900" height="250" fill="rgba(255, 0, 0, 0.5)"></rect>
          <path
            d="M0 185L129 185L129 196L257 196L257 195L386 195L386 210L514 210L514 197L643 197L643 157L771 157L771 181L900 181L900 161L900 251L900 251L771 251L771 251L643 251L643 251L514 251L514 251L386 251L386 251L257 251L257 251L129 251L129 251L0 251Z"
            fill="rgba(59, 22, 67, 0.2)"
            strokeLinecap="square"
            strokeLinejoin="miter"
          ></path>
        </svg>
  
        
        <div style={divStyle}>CREATING WITH CODE and <br></br>SHARING WITH THE WORLD</div>
      </div>
    );
  }

export default SVG;

