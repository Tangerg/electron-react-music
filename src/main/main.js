const path = require("path");
const url = require("url");
const { app, BrowserWindow } = require("electron");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1030,
    height: 690,
    minWidth: 1030,
    minHeight: 690,
    frame: false
  });
  mainWindow.setMenu(null);
  mainWindow.loadURL("http://localhost:3000/");
  mainWindow.webContents.openDevTools();
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
}
app.on("ready", createWindow);
app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", function() {
  if (mainWindow === null) {
    createWindow();
  }
});
