// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu, globalShortcut} = require('electron')
const path = require('path')
const ipc = require('electron').ipcMain
const url = require('url')
const creator= require('./src/creator.js')
const fs = require("fs");

//Hot Reload (Remove on production)
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules/.bin/electron')
});

let mainWindow = null

app.once('ready', () => {
  // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 600, height: 800,
        frame: false,
        show: false,
        webPreferences: {
            nodeIntegration:true,
            preload: path.join(__dirname,'./preload.js')

        }
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    });

    Menu.setApplicationMenu(null)
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
})

app.whenReady().then(() => {
    globalShortcut.register('CommandOrControl+X', () => {
        BrowserWindow.getFocusedWindow().webContents.toggleDevTools()

    })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

//Catch quit

ipc.on('quit',function (){
  app.quit()
})

ipc.on('start',async function (e,delays,mode,resetMode,UAfield){

    let account = new creator.create(delays,mode,resetMode,UAfield)
    account.createAccount()
})
