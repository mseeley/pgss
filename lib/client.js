/* eslint-env browser */
/* eslint-disable no-console */

const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', function (event) {
  socket.send('Hello Server!');
});

socket.addEventListener('message', function (event) {
  console.log('Message from server ', event.data);

  const img = new Image();

  const url = window.URL.createObjectURL(event.data);

  img.src = url;

  document.body.appendChild(img);
});
