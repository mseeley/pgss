/* eslint-env node */
/* eslint-disable no-console */

const fs = require('fs');
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('Received:', message);
  });

  // Buffer instances are also Uint8Array instances.
  // https://nodejs.org/docs/latest/api/buffer.html#buffer_buffers_and_typedarray

  // This just pushes a single frame to the client at connection time.

  const id = Buffer.alloc(32);
  const start = Buffer.alloc(32);
  const end = Buffer.alloc(32);
  const img = fs.readFileSync('img.png');

  id.write('1');
  start.write('1000');
  end.write('2000');

  const buffer = Buffer.concat(
    [id, start, end, img],
    id.length + start.length + end.length + img.length
  );

  ws.send(buffer);
});
