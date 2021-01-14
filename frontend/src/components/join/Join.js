import React from 'react'
import { Link } from 'react-router-dom'
import './Join.css'

const Join = () => {
  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'>Join</h1>
        <div>
          <input placeholder='Name' className='joinInput' type='text' />
        </div>
        <div>
          <input placeholder='Room' className='joinInput mt-20' type='text' />
        </div>
        <Link to={`/chat`}>
          <button className={'button mt-20'} type='submit'>
            Join Room
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Join
