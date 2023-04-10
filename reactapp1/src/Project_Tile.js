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
            <div className='button_wrapper'>
                <a href={code_url} target="_blank" className='linkbuttons'>CODE &#9999;</a>
                <a href={deployed_url} target="_blank" className='linkbuttons'>PROJECT</a>
            </div>
            
            
        </div>
        <div className='text_wrapper'>
            <div className="title">{title}</div>
            <div className='summary'><p>{summary}</p></div>
            <div  className='tags_wrapper'>TOPIC TAGS: 
                {spellitaire_tags.map((tag)=>(

                    <div className='tag'>{tag}</div>
                ))}
                
            
            </div>
        </div>

    </div>
  )
}
