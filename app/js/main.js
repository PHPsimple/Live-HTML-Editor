var editor = ace.edit("editor");
var fs = require('fs');

editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/html");
document.getElementById('editor').style.fontSize='14px';

var main = function() {
    $.get('live.html', function(data){
        editor.setValue(data);
        // $('.live-page-container').empty().append(data);
    });

    editor.commands.addCommand({
        name: 'saveCommand',
        bindKey: {win: 'Ctrl-S',  mac: 'Command-S'},
        exec: function(editor) {
            var value = editor.getValue();
            fs.writeFile('app/live.html', value, function() {
                $('iframe').attr('src', $('iframe').attr('src'));
            });
        }
    });
}

$(document).ready(main);
