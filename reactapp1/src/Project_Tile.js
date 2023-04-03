import React from 'react'
import Tags from './Tags';
import Video from './Video';


export default function Project_Tile() {

    const spellitaire_tags = ["JS", "CSS", "HTML"];
    const pierpg_tags = ["CSS", "JS", "GAMES"];



  return (
    <div className='tile_wrapper'>
        
        

        <Video></Video>
        <div className='text_wrapper'>
            <div>TITLE </div>
            <div className='summary'>SUMMARY:   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
            <div  className='tags_wrapper'>TOPIC TAGS: 
                {spellitaire_tags.map((tag)=>(

                    <div className='tag'>{tag}</div>
                ))}
                
            
            </div>
        </div>

    </div>
  )
}
