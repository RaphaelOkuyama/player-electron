const { contextBridge, ipcRenderer } = require('electron');

// Expondo a API para o renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  // Enviar dados para o Electron
  sendToElectron: (channel, data) => ipcRenderer.send(channel, data),

  // Receber dados do Electron
  receiveFromElectron: (channel, func) => {
    ipcRenderer.on(channel, (event, ...args) => {
      func(event, ...args);
    });
  }
});
