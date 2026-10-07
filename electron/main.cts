const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
    },
  });

  mainWindow.loadURL("http://localhost:5173");
};

app.whenReady().then(() => {
  createWindow();
});