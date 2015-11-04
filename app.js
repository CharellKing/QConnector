// menu
'use strict'

var app = require('app');
var path =require('path');
var Tray = require('tray');
var Menu = require('menu');
var BrowserWindow = require('browser-window');

app.on('ready', function(){
    var tray_icon_path = path.join(__dirname, 'icon', 'connector.png');
    var tray = new Tray(tray_icon_path);
    var contextMenu = Menu.buildFromTemplate([
        { label: 'Item1', type: 'radio' },
        { label: 'Item2', type: 'radio' },
        { label: 'Item3', type: 'radio', checked: true },
        { label: 'Item4', type: 'radio' }
    ]);
    tray.setToolTip('QConnector');
    tray.setContextMenu(contextMenu);

    var main_window = new BrowserWindow({'accept-first-mouse': true, 'min-width': 500, 'min-height': 200, icon: tray_icon_path, 'title-bar-style': 'hidden'});
    main_window.loadUrl(`file://${__dirname}/index.html`);
});
