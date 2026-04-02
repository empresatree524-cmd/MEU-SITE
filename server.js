const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    socket.on('typing', (data) => {
        io.emit('update_dashboard', data);
    });

    socket.on('send_signature', () => {
        console.log("[7X] Comando de assinatura executado.");
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`🚀 PAINEL 7X ONLINE NA PORTA ${PORT}`);
});
