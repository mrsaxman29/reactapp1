import React from 'react'
import vid from './media/Pierpg.mp4'

export default function Video() {



    return (
        <div className='video_wrapper'>
        
            <video className='video' muted autoPlay loop src={vid} />

        </div>
        
        
      );
    };
    