
function add() {
    var text1 = document.getElementById("input1").value.length;
    var text2 = document.getElementById("input2").value.length;
    var output = document.getElementById("input3");

    output.value = text1+text2;


}

function subtract() {
    var text1 = document.getElementById("input1").value.length;
    var text2 = document.getElementById("input2").value.length;
    var output = document.getElementById("input3");

    output.value = text1-text2;
}

function multiply() {
    var text1 = document.getElementById("input1").value.length;
    var text2 = document.getElementById("input2").value.length;
    var output = document.getElementById("input3");

    output.value = text1*text2;
}

function divide() {
    var text1 = document.getElementById("input1").value.length;
    var text2 = document.getElementById("input2").value.length;
    var output = document.getElementById("input3");

    output.value = text1/text2;
}

function reset() {
    document.getElementById("input3").value = " ";
}
