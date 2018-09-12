/* eslint-env browser */
/* eslint-disable no-console */

const socket = new WebSocket('ws://localhost:8080');

function readAsText(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener('loadend', function handler(e) {
      reader.removeEventListener(e.type, handler);

      resolve(reader.result);
    });

    reader.readAsText(blob);
  });
}

socket.addEventListener('message', function (event) {
  console.log('Received:', event.data);

  const blob = event.data;

  readAsText(blob.slice(0, 32)).then((text) => {
    console.log('Frame ID:', text);
  });

  readAsText(blob.slice(32, 64)).then((text) => {
    console.log('Start:', text);
  });

  readAsText(blob.slice(64, 96)).then((text) => {
    console.log('End:', text);
  });

  // Consider the rest of the message to contain only the image.
  const img = new Image();
  img.src = window.URL.createObjectURL(blob.slice(96));
  document.body.appendChild(img);
});
