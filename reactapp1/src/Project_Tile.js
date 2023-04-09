import React from 'react'
import Tags from './Tags';
import Video from './Video';



export default function Project_Tile(props) {

    const spellitaire_tags = ["JS", "CSS", "HTML"];
    const pierpg_tags = ["CSS", "JS", "GAMES"];


    const video = props.video;
    const summary = props.summary;
    const tags = props.tags;
    const code_url = props.code_url;
    const deployed_url = props.deployed_url;
    const title = props.title;


  return (
    <div className='tile_wrapper'>
        <div className='video_wrapper'>
            <video className='video' muted autoPlay loop src={video} />
            <button className='linkbuttons'>CODE</button>
            <button className='linkbuttons'>PROJECT</button>
            
        </div>
        <div className='text_wrapper'>
            <div className="title">{title}</div>
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
