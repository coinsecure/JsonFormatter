/*globals require, document, CodeMirror, alert*/
require.config({
    paths: {
        "crel": "../lib/crel"
    }
});
require(["../src/jsontohtml"], function (JsonHuman) {
    var textarea = document.getElementById("input"),
        output = document.getElementById("output"),
        raw = document.getElementById("output-raw"),
        button = document.getElementById("convert"),
        editor = CodeMirror.fromTextArea(textarea, {
            mode: "application/json",
            json: true,
            lineNumbers: true
            
        });

    function convert(input, output) {
        var node = JsonHuman.format(input);
        output.innerHTML = "";
        output.appendChild(node);  
    }

    function doConvert() {
        var json;
        try {
            json = JSON.parse(editor.getValue());
        } catch (error) {
            alert("Text area is blank or You have given wrong json");
            return;
        }

        convert(json, output);
    }

    button.addEventListener("click", doConvert);
    doConvert();
      $("#search-text").keyup(function () {
            console.log("hii")
    //split the current value of searchInput
    var data = this.value.split(" ");
    //create a jquery object of the rows
    var jo = $("table").find("tr");
    if (this.value == "") {
        jo.show();
        return;
    }
    //hide all the rows
    jo.hide();

    //Recusively filter the jquery object to get results.
    jo.filter(function (i, v) {
        var $t = $(this);
        for (var d = 0; d < data.length; ++d) {
            if ($t.is(":contains('" + data[d] + "')")) {
                return true;
            }
        }
        return false;
    })
    //show the rows that match.
    .show();
});
});


