import React from 'react'
import './HeadImg.css'

const HeadImg = props => {
  return (
    <div className='HeadImg text-center img-fluid' style={{ backgroundImage: `url(${props.image})` }} />
  )
}

export default HeadImg
