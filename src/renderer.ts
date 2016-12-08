// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// Require ipcRender
const {ipcRenderer} = require('electron');

ipcRenderer.on('new-total', (event, t) => {
    console.log(event);
    console.log(t);
});