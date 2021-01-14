import React from 'react'
import './Input.css'

const Input = ({ setMessage, sendMessage, message }) => {
  const submitHandler = (e) => {
    e.preventDefault()
    if (message) sendMessage(e)
  }

  return (
    <form className='form' onSubmit={submitHandler}>
      <input
        className='input'
        type='text'
        placeholder='Type a message...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className='sendButton' type='submit'>
        Send
      </button>
    </form>
  )
}

export default Input
