window.onload = function() {
    document.getElementById("biggerBtn").onclick = alertBigger;
    document.getElementById("mooBtn").onclick = textMoo;
};

function alertBigger() {
    alert("Hello, world!");
    makeBigger();
}

function makeBigger() {
    document.getElementById("textInput").style.fontSize = "2em";
}

function changeStyle() {
    var textInput = document.getElementById("textInput");
    if (document.getElementById("fancyShmancy").checked) {
        alert("Switched to FancyShmancy");
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline";
    } 
    
    else if (document.getElementById("boringBetty").checked) {
        alert("Switched to BoringBetty");
        textInput.style.fontWeight = "normal";
        textInput.style.color = "initial";
        textInput.style.textDecoration = "none";
    }
}

function textMoo() {
    var textInput = document.getElementById("textInput");
    var text = textInput.value.toUpperCase();
    var sentences = text.split(".");

    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim().length > 0) {
            var words = sentences[i].trim().split(" ");
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }

    textInput.value = sentences.join(". ").trim();
}
