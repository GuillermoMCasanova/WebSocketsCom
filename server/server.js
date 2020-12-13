// Libraries and constants definition

const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

// This function is called when a client connect with the server.
io.on('connection', (socket) => {
    console.log('New client connected.')
})

// Endpoint available on /api/data/
app.get('/api/data/', (req, res) => {
    io.emit('event_001', req.query);
    res.send({
        'status': 'OK',
        'message': 'Message sent to clients on event "event_001".'
    });
})

// Endpoint available on /
app.get('/', (req, res) => {
    res.send('Welcome to my server!');
})

// Run service on port 8080
server.listen(8080, () => {
    console.log('Server is running at port 8080');
})