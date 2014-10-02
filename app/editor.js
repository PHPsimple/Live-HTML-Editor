    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/github");
    document.getElementById('editor').style.fontSize = "14px";
    editor.getSession().setTabSize(4);
    editor.getSession().setMode("ace/mode/html");
    editor.resize();

    editor.getSession().on('change', function(e) {
        document.getElementById('parsed-container').innerHTML = editor.getValue();
    });
