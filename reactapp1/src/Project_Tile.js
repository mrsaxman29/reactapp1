import React from 'react'
import Tags from './Tags';

export default function Project_Tile() {

    const spellitaire_tags = ["JS", "CSS", "HTML"];
    const pierpg_tags = ["CSS", "JS", "GAMES"];



  return (
    <div className='tile_wrapper'>
        <img className='pic' src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80'/>
        <div>
            <div className='summary'>SUMMARY:   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
            <div  className='tags_wrapper'>TAGS WRAPPERRR
                {spellitaire_tags.map((tag)=>(

                    <div className='tag'>{tag}</div>
                ))}
                
            
            </div>
        </div>



    </div>
  )
}
