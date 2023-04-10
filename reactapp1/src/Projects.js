import React from 'react'
import Project_Tile from './Project_Tile'
import v from './media/Pierpg.mp4'
import v2 from './media/Spellitaire.mp4'
import v3 from './media/HLC.mp4'


export default function Projects() {

  const spellSummary = 'I created after constantly losing to my wife in Quiddler (an analog card game).  We would play this game a lot during lockdown and the shuffling became tedious so I created a digital version (and yes I scoured the internet first and no one had yet developed a digital version of Quiddler).  But for someone like me this was in fact a great opportunity to try and develop something I surely couldn’t copy or get help on creating.  The first version was developed in python and was only playable on the command line.  It was an exact replica of solitaire Quiddler (the single player expression of the game).  I even began development on a multiplayer version using the socket module.  But, not unlike Pierpg I wanted to share what I was making with others and decided to rewrite the game (now called Spellitaire) with an updated rule set and logic in JavaScript.  The deployed version here is written in vanilla JS, HTML & CSS without the use of frameworks.  The game is mobile optimized and responsively designed for different devices.  One notable feature that is not immediately obvious is the use of cookies to create a persistent (local) highscore without the use of a database.';
  const hlSummary = "Hither Lane is a side hustle investment ecommerce shop I created with a childhood friend and business partner.  This Shopify powered store (www.shophitherlane.com) launched in the last quarter of 2022 and has grossed close to $50,000 in sales so far.  This project gave me a chance to get familiar with Shopify’s Liquid coding/templating language.  Customizing and extending the site’s functionality and aesthetics has also improved my HTML, CSS & JS skills.  Some notable features I created for our shop include a dynamic announcement bar in the header that updates after new products are added to the cart and tells customers how close they are to our free shipping threshold (although this feature is available in paid Apps on the Shopify App Store, my solution is free)!  In addition, I created a custom App (only available for us to use) which downloads, converts and optimizes the file size and type of our product photos via a call to the Shopify API.  This private app has saved us a ton of time and helped increase our PageSpeed as well. I created and implemented a “sold out” form that replaces the normal add to cart button on sold out items which automatically emails us when a customer is interested in ordering an item that is currently unavailable.  This form functionality was also extended to create a custom landing page that adds customer data (name, email, phone etc.) from the form inputs to our shopify backend customer database.Countless design improvements using CSS and HTML to give a better aesthetic to our site.";
  const ppgSummary = "Pierpg was one of my first projects.  I used python to create a text based RPG simulation of my wine shop Pier Wines.  The game morphed into a kind of training simulator.  I employed nested data structures (dictionaries in python) and object oriented programming to create a text-based game world complete with a network of connected rooms, npcs & objects.  The python version worked well but only ran on the command line via the python script so after learning JavaScript, I ported my work from scratch into this new language and hosted the results on my github repo’s page so that anyone could play it.  The playable version you see here is written using vanilla JS, HTML & CSS without the use of frameworks.  The JS version of Pierpg works on desktop, tablet and mobile and uses media queries and responsive design to make sure you can play on any device.  A notable feature besides the game logic to point out is the custom created typewriter effect whereby the text is seemingly typed on screen.  ";



  const pierVideo = v;
  const spellVideo = v2;
  const hlcVideo = v3;

  return (
    <div>
        
        <Project_Tile deployed_url="https://mrsaxman29.github.io/spellitaire/" code_url="https://github.com/mrsaxman29/spellitaire" summary={spellSummary} title="SPELLITAIRE" video={spellVideo}/>
        <Project_Tile deployed_url="https://www.shophitherlane.com/" code_url="https://github.com/mrsaxman29/Hither-Lane-Repo" summary={hlSummary} title="HITHER LANE" video={hlcVideo}/>
        <Project_Tile deployed_url="https://mrsaxman29.github.io/pierpg/" code_url="https://github.com/mrsaxman29/pierpg" summary={ppgSummary} title="PIERPG" video={pierVideo}/>
        
        
    </div>
  )
}
