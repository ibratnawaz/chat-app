import React from 'react'
import InfoBar from '../infoBar/InfoBar'
import Messages from '../message/Messages'
import Input from '../input/Input'
import './Chat.css'

const Chat = () => {
  return (
    <div className='outerContainer'>
      <div className='container'>
        <InfoBar />
        <Messages />
        <Input />
      </div>
    </div>
  )
}

export default Chat
