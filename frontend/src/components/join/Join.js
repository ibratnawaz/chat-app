import React, { useState } from 'react'
import './Join.css'

const Join = ({ history }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [roomError, setRoomError] = useState(null)
  // eslint-disable-next-line
  const [userError, setUserError] = useState(null)

  const submitHandler = (e) => {
    e.preventDefault()
    if (room.length < 6)
      setRoomError('Room code should be minimum of 6 characters')
    else history.push(`/chat?name=${name}&room=${room}`)
  }

  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'>Join</h1>
        <form onSubmit={submitHandler}>
          <div>
            <input
              placeholder='Name'
              className='joinInput'
              type='text'
              onChange={(event) => setName(event.target.value)}
              required
            />
            {userError && <small>{userError}</small>}
          </div>
          <div>
            <input
              placeholder='Room'
              className='joinInput mt-20'
              type='text'
              onChange={(event) => setRoom(event.target.value)}
              required
            />
            {roomError && <small>{roomError}</small>}
          </div>
          <button className={'button mt-20'} type='submit'>
            Join Room
          </button>
        </form>
      </div>
    </div>
  )
}

export default Join
