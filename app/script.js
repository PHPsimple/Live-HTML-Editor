    var gui = require('nw.gui');
    var win = gui.Window.get();

    var menu_bar = new gui.Menu({type: 'menubar'});
    menu_bar.append(new gui.MenuItem({
        label: 'Main',
        click: function() {
            menu_bar_popup.popup(0, 0);
        }
    }));

    var menu_bar_popup = new gui.Menu();
    menu_bar_popup.append(new gui.MenuItem({
        label: 'Exit',
        click: function() {
            win.close();
        }
    }));

    win.menu = menu_bar;
