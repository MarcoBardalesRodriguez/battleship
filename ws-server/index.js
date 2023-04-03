const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const PORT = process.env.PORT || 3000;

// WEBSOCKET CONNECTION
wss.on('connection', (ws) => {
    console.log('Client connected');

    const messageObj = {
        type: 'message',
        message: 'Welcome to the websocket server!',
    };
    const messageString = JSON.stringify(messageObj);
    ws.send(messageString);

    // WEBSOCKET EVENT OPEN
    ws.on('open', () => {
        console.log('WebSocket connection established');
    });

    // WEBSOCKET EVENT MESSAGE
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        const obj = JSON.parse(message.toString()); // Convertir Buffer a objeto
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(obj));
            }
        });
    });

    // WEBSOCKET EVENT CLOSE
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});