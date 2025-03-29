const { app, BrowserWindow, globalShortcut } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    icon: './assets/app_icons/app_icon.png',
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

app.on('browser-window-focus', function () {
  globalShortcut.register("CommandOrControl+R", () => {
      //console.log("CommandOrControl+R is pressed: Shortcut Disabled");
  });
});