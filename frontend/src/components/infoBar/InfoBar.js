import React from 'react'
import OnlineIcon from './online-icon.png'
import CloseIcon from './close-icon.png'
import './InfoBar.css'

const InfoBar = () => {
  return (
    <div className='infoBar'>
      <div className='leftInnerContainer'>
        <img className='onlineIcon' src={OnlineIcon} alt='online icon' />
        <h3>QW78Z2</h3>
      </div>
      <div className='rightInnerContainer'>
        <a href='/'>
          <img src={CloseIcon} alt='close icon' />
        </a>
      </div>
    </div>
  )
}

export default InfoBar
