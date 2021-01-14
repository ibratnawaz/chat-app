require('dotenv').config()
const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const { addUser, getUser, getUserInRoom, removeUser } = require('./util/users')

const port = process.env.PORT || 5000

const app = express()
const server = http.createServer(app)
const io = socketio(server)

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, cb) => {
    const { error, user } = addUser({ id: socket.id, name, room })

    if (error) return cb(error)

    socket.join(user.room)

    socket.emit('message', {
      user: 'admin',
      text: `${user.name}, welcome to room ${user.room}.`,
    })
    socket.broadcast
      .to(user.room)
      .emit('message', { user: 'admin', text: `${user.name} has joined!` })

    cb()
  })

  socket.on('sendMessage', (msg, cb) => {
    const user = getUser(socket.id)

    io.to(user.room).emit('message', { user: user.name, text: message })

    cb()
  })

  socket.on('disconnect', () => {
    const user = removeUser(socket.id)

    if (user) {
      io.to(user.room).emit('message', {
        user: 'Admin',
        text: `${user.name} has left.`,
      })
      io.to(user.room).emit('roomData', {
        room: user.room,
        users: getUsersInRoom(user.room),
      })
    }
  })
})

if (process.env.NODE_ENV === 'development') {
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
}

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
