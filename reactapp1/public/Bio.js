import React from 'react'
import pic from './media/me5.PNG'
import pic2 from './media/me6.PNG'
import pic3 from './media/me3.PNG'

export default function Bio() {
  return (
    <div id='bio_wrapper'>
      <img id='bio_image' src={pic}></img>
      
      <div id='bio_txt'>
        <p>
        The act of creation defines me as a person and learning new skills and delving into new subjects is my passion.  I am an entrepreneur that has founded and operated several businesses (including a retail wine boutique in Williamsburg, Brooklyn, an e-commerce DTC brand to name a few).  I am also an accomplished composer, jazz musician and producer with a bachelor's degree in music theory & composition that has worked alongside stars like Joey BadA$$, Kid Cudi, Elle Varner, Statik Selector and many more.
        </p>
        Computer programing and development have always been a devotion and truly hits all the notes for me. It combines the creativity of composing a complex piece of music with the tangible utility of starting a business combined with the mathematical and logical curiosity I get from learning. It is a unique way to be creative and share those creations with the world!
      </div>
    </div>
  )
}
