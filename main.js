const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 324,
    height: 400,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
    }
  })

  win.loadFile('html/index.html')
}

app.whenReady().then(() => {
  createWindow()
})