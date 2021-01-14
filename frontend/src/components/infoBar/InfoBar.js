import React from 'react'
import OnlineIcon from './online-icon.png'
import CloseIcon from './close-icon.png'
import './InfoBar.css'

const InfoBar = ({ room }) => {
  return (
    <div className='infoBar'>
      <div className='leftInnerContainer'>
        <img className='onlineIcon' src={OnlineIcon} alt='online icon' />
        <h3>{room}</h3>
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
