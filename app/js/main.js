var main = function() {
    // Editor
    var aceEditor = ace.edit("editor");
    var fs = require('fs');
    var eFontSize = localStorage.getItem('editorFontSize');
    document.getElementById('editor').style.fontSize = eFontSize;
    if(localStorage.getItem('editorLineHighlight') === 'true') {
        aceEditor.setHighlightActiveLine(true);
    } else {
        aceEditor.setHighlightActiveLine(false);
    }
    if(localStorage.getItem('editorReadOnly') === 'true') {
        aceEditor.setReadOnly(true);
    } else {
        aceEditor.setReadOnly(false);
    }
    if(localStorage.getItem('editorSoftTabs') === 'true') {
        aceEditor.getSession().setUseSoftTabs(true);
    } else {
        aceEditor.getSession().setUseSoftTabs(false);
    }
    aceEditor.getSession().setTabSize(Number(localStorage.getItem('editorTabSize')));
    var eTheme = localStorage.getItem('editorTheme');
    aceEditor.setTheme("ace/theme/" + eTheme);
    if(localStorage.getItem('editorWordWrapping') === 'true') {
        aceEditor.getSession().setUseWrapMode(true);
    } else {
        aceEditor.getSession().setUseWrapMode(false);
    }

    aceEditor.getSession().setMode("ace/mode/html");

    $.get('live.html', function(data){
        aceEditor.setValue(data);
    });

    aceEditor.commands.addCommand({
        name: 'saveCommand',
        bindKey: {win: 'Ctrl-S',  mac: 'Command-S'},
        exec: function(aceEditor) {
            var value = aceEditor.getValue();
            fs.writeFile('app/live.html', value, function() {
                $('iframe').attr('src', $('iframe').attr('src'));
            });
        }
    });

    // Widnow and menu
    var gui = require('nw.gui');
    var win = gui.Window.get();

    // menu bar
    var menu_bar = new gui.Menu({type: 'menubar'});

    // Menu bar file option
    menu_bar.append(new gui.MenuItem({
        label: 'File',
        click: function() {
            file_popup.popup(0, 0);
        }
    }));
    var file_popup = new gui.Menu();
    file_popup.append(new gui.MenuItem({
        label: 'Exit',
        click: function() {
            win.close();
        }
    }));

    // Menu bar editor option
    menu_bar.append(new gui.MenuItem({
        label: 'Editor',
        click: function() {
            editor_popup.popup(30, 0);
        }
    }));
    var editor_popup = new gui.Menu();
    editor_popup.append(new gui.MenuItem({
        label: 'Settings',
        click: function() {
            $('#editor-settings').dialog('open');
        }
    }));
    $('#editor-settings').dialog({
        autoOpen: false,
        modal: true,
        height: 500,
        width: 250,
        show: {
            effect: 'blind',
            duration: 1000
        },
        hide: {
            effect: 'blind',
            duration: 1000
        },
        buttons: {
            "Close": function() {
                $(this).dialog('close');
            }
        }
    });
    $('#theme').selectmenu({
        select: function(event, ui) {
            var value = ui.item.value;

            localStorage.setItem('editorTheme', value);
            aceEditor.setTheme("ace/theme/" + value);
        }
    });
    $('#tab-size').selectmenu({
        select: function(event, ui) {
            var value = ui.item.value;

            localStorage.setItem('editorTabSize', value);
            aceEditor.getSession().setTabSize(Number(value));
        }
    });
    $('#soft-tabs').selectmenu({
        select: function(event, ui) {
            var value = ui.item.value;

            localStorage.setItem('editorSoftTabs', value);
            if(value === 'true') {value = true;} else {value = false;}
            aceEditor.getSession().setUseSoftTabs(value);
        }
    });
    $('#font-size').selectmenu({
        select: function(event, ui) {
            var value = ui.item.value;

            localStorage.setItem('editorFontSize', value);
            document.getElementById('editor').style.fontSize = value;
        }
    });
    $('#word-wrapping').selectmenu({
        select: function(event, ui) {
            var value = ui.item.value;

            localStorage.setItem('editorWordWrapping', value);
            if(value === 'true') {value = true;} else {value = false;}
            aceEditor.getSession().setUseWrapMode(value);
        }
    });
    $('#line-highlight').selectmenu({
        select: function(event, ui) {
            var value = ui.item.value;

            localStorage.setItem('editorLineHighlight', value);
            if(value === 'true') {value = true;} else {value = false;}
            aceEditor.setHighlightActiveLine(value);
        }
    });
    $('#read-only').selectmenu({
        select: function(event, ui) {
            var value = ui.item.value;

            localStorage.setItem('editorReadOnly', value);
            if(value === 'true') {value = true;} else {value = false;}
            aceEditor.setReadOnly(value);
        }
    });


    // Menu bar developer opyion
    menu_bar.append(new gui.MenuItem({
        label: 'Dev',
        click: function() {
            dev_popup.popup(75, 0);
        }
    }));
    var dev_popup = new gui.Menu();
    dev_popup.append(new gui.MenuItem({
        label: 'Reload',
        click: function() {
            win.reload();
        }
    }));
    dev_popup.append(new gui.MenuItem({
        label: 'Developer reload',
        click: function() {
            win.reloadDev();
        }
    }));
    dev_popup.append(new gui.MenuItem({
        label: 'Restore',
        click: function() {
            win.restore();
        }
    }));
    dev_popup.append(new gui.MenuItem({
        label: 'Developer tools',
        click: function() {
            win.showDevTools();
        }
    }));

    win.menu = menu_bar;

    // // Editor
    // var aceEditor = ace.edit("editor");
    // var fs = require('fs');
    // var eFontSize = localStorage.getItem('editorFontSize'),
    //     eLineHighLight = localStorage.getItem('editorLineHighlight'),
    //     eReadOnly = localStorage.getItem('editorReadOnly'),
    //     eSoftTabs = localStorage.getItem('editorSoftTabs'),
    //     eTabSize = localStorage.getItem('editorTabSize'),
    //     eTheme = localStorage.getItem('editorTheme'),
    //     eWordWrapping = localStorage.getItem('editorWordWrapping');
    //
    //
    // aceEditor.setTheme("ace/theme/github");
    // aceEditor.getSession().setMode("ace/mode/html");
    // document.getElementById('editor').style.fontSize='14px';
    //
    // $.get('live.html', function(data){
    //     aceEditor.setValue(data);
    // });
    //
    // aceEditor.commands.addCommand({
    //     name: 'saveCommand',
    //     bindKey: {win: 'Ctrl-S',  mac: 'Command-S'},
    //     exec: function(aceEditor) {
    //         var value = aceEditor.getValue();
    //         fs.writeFile('app/live.html', value, function() {
    //             $('iframe').attr('src', $('iframe').attr('src'));
    //         });
    //     }
    // });
}

$(document).ready(main);
