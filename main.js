 var app = require('app');
 var BrowserWindow = require('browser-window');
 require('crash-reporter').start();

 var mainWindow = null;

 app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
   app.quit();
 });

app.setPath("userData", __dirname + "/zDillinger");

 app.on('ready', function() {
  mainWindow = new BrowserWindow({
   width: 1200,
   height: 860,
   resizable: true,
   title: "zDillinger",
   icon: "/zDillinger.icns",
   icon: "/zDillinger.ico",
   icon: "/zDillinger.png"
  });
  mainWindow.setOverlayIcon(
   __dirname + "/zDillinger.png",
   "Test?");
  mainWindow.setTitle("zDillinger");
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.focus();
  mainWindow.on('closed', function() {
   mainWindow = null;
  });
  //mainWindow.toggleDevTools();
 });
