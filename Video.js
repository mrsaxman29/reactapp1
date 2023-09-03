import React from 'react'
import vid from './media/Pierpg.mp4'

export default function Video(props) {

  const vidz = props.video;



    return (
        <div className='video_wrapper'>
        
            <video className='video' muted autoPlay loop src={vidz} />

        </div>
        
        
      );
    };
    