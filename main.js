const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 324,
    height: 440,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
    }
  })

  win.loadFile('html/index.html')
  win.setResizable(false)
}

app.whenReady().then(() => {
  createWindow()
})