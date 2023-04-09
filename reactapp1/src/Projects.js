import React from 'react'
import Project_Tile from './Project_Tile'
import v from './media/Pierpg.mp4'
import v2 from './media/Spellitaire.mp4'
import v3 from './media/HLC.mp4'


export default function Projects() {

  const pierVideo = v;
  const spellVideo = v2;
  const hlcVideo = v3;

  return (
    <div>
        
        <Project_Tile title="SPELLITAIRE" video={spellVideo}/>
        <Project_Tile title="HITHER LANE" video={hlcVideo}/>
        <Project_Tile title="PIERPG" video={pierVideo}/>
        
        
    </div>
  )
}
