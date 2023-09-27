import React from 'react'
import Project_Tile from './Project_Tile'
import v from './media/Pierpg.mp4'
import v2 from './media/Spellitaire.mp4'
import v3 from './media/HLC.mp4'
import v4 from './media/PennyMovie.mp4'
import v5 from './media/bsappdemo.mp4'
import v6 from './media/resumevid.mov'

/*

  const spellSummaryOld = 'I created after constantly losing to my wife in Quiddler (an analog card game).  We would play this game a lot during lockdown and the shuffling became tedious so I created a digital version (and yes I scoured the internet first and no one had yet developed a digital version of Quiddler).  But for someone like me this was in fact a great opportunity to try and develop something I surely couldn’t copy or get help on creating.  The first version was developed in python and was only playable on the command line.  It was an exact replica of solitaire Quiddler (the single player expression of the game).  I even began development on a multiplayer version using the socket module.  But, not unlike Pierpg I wanted to share what I was making with others and decided to rewrite the game (now called Spellitaire) with an updated rule set and logic in JavaScript.  The deployed version here is written in vanilla JS, HTML & CSS without the use of frameworks.  The game is mobile optimized and responsively designed for different devices.  One notable feature that is not immediately obvious is the use of cookies to create a persistent (local) highscore without the use of a database.';
  const ppgSummaryOld = "Pierpg was one of my first projects.  I used python to create a text based RPG simulation of my wine shop Pier Wines.  The game morphed into a kind of training simulator.  I employed nested data structures (dictionaries in python) and object oriented programming to create a text-based game world complete with a network of connected rooms, npcs & objects.  The python version worked well but only ran on the command line via the python script so after learning JavaScript, I ported my work from scratch into this new language and hosted the results on my github repo’s page so that anyone could play it.  The playable version you see here is written using vanilla JS, HTML & CSS without the use of frameworks.  The JS version of Pierpg works on desktop, tablet and mobile and uses media queries and responsive design to make sure you can play on any device.  A notable feature besides the game logic to point out is the custom created typewriter effect whereby the text is seemingly typed on screen.  ";
*/



export default function Projects() {

  const hlSummary = (<>
    <strong>GOALS</strong>
    <br /><br />
    • Create a mobile-first, responsive, optimized ecommerce Shopify website aligned with initial design and customer research.
    <br /><br />
    • Enhance the functionality, aesthetics, and SEO of the site while maintaining performance.
    <br /><br />
    • Refine the conversion funnel to maximize sales.
    <br /><br />
    • Learned the Shopify CDN (front- & back-end), Liquid coding language and API to Customized and extended the site's functionality:
    <br /><br />
    <strong>PROCESS</strong>
    <br /><br />
    » Created custom dynamic announcement bar in the header to update customers about their progress towards free shipping. 
    <br /><br />
    » Developed a custom app to optimize product photos, improving PageSpeed.
    <br /><br />
    » Implemented a "sold out" form to handle customer interest in unavailable items.
    <br /><br />
    » Created sign-up form with functionality to add customer data to the Shopify backend 		  	database via API calls.
    <br /><br />
    <strong>RESULTS</strong>
    <br /><br />
    + Successfully launched and operated the Hither Lane ecommerce shop resulting in over $66,000 in sales since the store's launch in the last quarter of 2022.
    <br /><br />
    + Gained proficiency in Shopify's Liquid coding/templating language and improved skills in HTML, CSS, and JavaScript.
    <br /><br />
    
    </>
  
  );

  const ResumeSummary = (<>
    <strong>GOALS</strong>
    <br /><br />
      • Create a personal resume website using React to showcase coding and web development skills and provide a platform for prospective employers to evaluate my projects and abilities.
    <br /><br />
    <strong>PROCESS</strong>
    <br /><br />
    » Designed, developed and deployed the website using React to include sections for showcasing coding projects, skills, experience, and contact information.

    <br /><br />
    » Integrated external data sources for dynamic content, such as the GitHub contributions live feed section of the homepage and the color change button in the header (which makes API calls to Colormind.io) to change the site's color scheme.
    <br /><br />
    <strong>RESULTS</strong>
    <br /><br />
    + Hopefully you are reading this right now and are proof of the website's success! 
    <br /><br />
  
  
  </>
  );

  const sS = (<>
    <strong>GOALS</strong>
    <br /><br />
      • Create a digital version of the Quiddler card game.
    <br /><br />
      • R
    <br /><br />
    <strong>PROCESS</strong>
    » Created
    <br /><br />
    <strong>RESULTS</strong>
    <br /><br />
    + Successfully
    <br /><br />
  
  
  </>
  );

  const PennySummary = (<>
    <strong>GOALS</strong>
    <br /><br />
      • Make a 2D video game demo of my cat Penny-Poo.
    <br /><br />
      • Create a simple Pokemon clone style RPG to explore video game development using the Pygame library.
    <br /><br />
    <strong>PROCESS</strong>
    <br /><br />
    » Used Python and the Pygame library to create a playable video game.
    <br /><br />
    <strong>RESULTS</strong>
    <br /><br />
    + Pure enjoyment and game development practical experience.
    <br /><br />
  
  
  </>
  );


  const ppgSummary = (<>
    <strong>GOALS</strong>
    <br /><br />
      • Create a text-based RPG simulation of my Brooklyn based wine shop Pier Wines in the style of a Multi-User-Dungeon (MUD) game. 
    <br /><br />
      • Train employees on store duties using the game after hosting it publicly. 
    <br /><br />
    <strong>PROCESS</strong>
    <br /><br />
    » Utilize Python to implement the initial version of the game and then transition the project to JavaScript to broaden accessibility.
    <br /><br />
    » Employ object-oriented programming to create a world of interconnected rooms, NPCs, objects and objectives to amuse and educate players.
    <br /><br />
    <strong>RESULTS</strong>
    <br /><br />
    + Successfully implemented a custom, responive UI complete with typewriter effect text display.
    <br /><br />
    + 5 Employees trained on procedures and locations of the real world small business using the game's simulation from anywhere with an internet connection.
    <br /><br />
  
  </>
  );


  const spellSummary = (<>
    <strong>GOALS</strong>
    <br /><br />
      • Create a digital version of the Quiddler card game.
    <br /><br />
      • Learn to play Quiddler better than my wife who always wins.
    <br /><br />
    <strong>PROCESS</strong>
    <br /><br />
    » Python was used for the first iteration of the game logic: a command line text entry version that logs results to the console.
    <br /><br />
    » Use JS, HTML and CSS to create a mobile first web app of solitaire Quiddler.
    <br /><br />
    » Keep a persistent HIGH SCORE via local storage.
    <br /><br />
    <strong>RESULTS</strong>
    <br /><br />
    + A github-pages deployed web app accesible to anyne with an internet connection.
    <br /><br />
    + Hours of distraction and an improved Quiddler game!
    <br /><br />
  
  
  </>
  );

  const bsAPP_summary = (
    <>
      <strong>GOALS</strong>
      <br /><br />
      • Create and deploy a full-stack baseball scoring and notation mobile first web app.  
      <br /><br />
      <strong>PROCESS</strong>
      <br /><br />
      » Vanilla JS, HTML and CSS was used without any front-end framework to create a single-page-application. 
      <br /><br />
      » Impliment backend database, login, and authetication using Firebase.
      <br /><br />
      » Handle state and data persistence with JS, url query strings and the Firestore database.
      <br /><br />
      » Design and create animations using JS.
      <br /><br />
      <strong>RESULTS</strong>
      <br /><br />
      + www.baseballnotation.com has been active since August of 2023.
      <br /><br />
      + Dozens of signups and a handful of daily active users.
    </>
  );
  
  const spellitaire_tags = ["JS", "CSS", "HTML"];
  const pierpg_tags = ["CSS", "JS", "GAMES"];
  const hl_tags = ["LIQUID", "PYTHON", "JS", "CSS", "HTML"];
  const resume_tags = ["REACT", "JS", "CSS", "HTML"];
  const penny_tags = ["PYTHON", 'PYGAME']
  const bs_app_tags = ["FIREBASE", "JS", "CSS", "HTML"]


  const pierVideo = v;
  const spellVideo = v2;
  const hlcVideo = v3;
  const pennyVideo = v4;
  const bsVideo = v5;
  const resumeVid = v6;

  return (
    <div>
        
        
        <Project_Tile tags={hl_tags} deployed_url="https://www.shophitherlane.com/" code_url="https://github.com/mrsaxman29/Hither-Lane-Repo" summary={hlSummary} title="HITHER LANE" video={hlcVideo}/>
        <Project_Tile tags={bs_app_tags} deployed_url="https://bsapp-a588a.web.app/landing.html"  code_url="https://github.com/mrsaxman29/bsapp" summary={bsAPP_summary} title="BaseballNotation.com" video={bsVideo}/>
        <Project_Tile tags={spellitaire_tags} deployed_url="https://mrsaxman29.github.io/spellitaire/" code_url="https://github.com/mrsaxman29/spellitaire" summary={spellSummary} title="SPELLITAIRE" video={spellVideo}/>
        <Project_Tile tags={pierpg_tags} deployed_url="https://mrsaxman29.github.io/pierpg/" code_url="https://github.com/mrsaxman29/pierpg" summary={ppgSummary} title="PIERPG" video={pierVideo}/>
        <Project_Tile tags={resume_tags} deployed_url="https://mrsaxman29.github.io/reactapp1/" code_url="https://github.com/mrsaxman29/reactapp1" summary={ResumeSummary} title="RESUME" video={resumeVid}/>
        <Project_Tile tags={penny_tags}  code_url="https://github.com/mrsaxman29/PennyPG" summary={PennySummary} title="PENNYPG" video={pennyVideo}/>
        
        
        
    </div>
  )
}
