import React from 'react'
import './Input.css'

const Input = () => {
  return (
    <form className='form'>
      <input
        className='input'
        type='text'
        placeholder='Type a message...'
        value=''
      />
      <button className='sendButton' type='submit'>
        Send
      </button>
    </form>
  )
}

export default Input
