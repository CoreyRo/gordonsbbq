import React from 'react'
import './HeadImg.css'

const HeadImg = props =>
  <div
    className='HeadImg text-center'
    style={{ backgroundImage: `url(${props.backgroundImage})` }}
  >
  </div>

export default HeadImg
