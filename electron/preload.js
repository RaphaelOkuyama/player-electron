const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {

  sendToElectron: (channel, data) => ipcRenderer.send(channel, data),

  receiveFromElectron: (channel, func) => {
    ipcRenderer.on(channel, (event, ...args) => {
      func(event, ...args);
    });
  }
});
