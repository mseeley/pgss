/* eslint-env node */
/* eslint-disable no-console */

const fs = require('fs');
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('received: %s', message);
  });

  const buffer = fs.readFileSync('img.png');

  ws.send(buffer);
});
