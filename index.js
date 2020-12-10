var countId = 0;
var yes = 0;

function createInput() {
    var checkbox = document.createElement('input');
    checkbox.id = countId + "_" + "checkBox";
    checkbox.className = "checkBox"
    checkbox.type = "checkbox";
    checkbox.name = countId + "_" + "checkBoxList"
    checkbox.onclick = function () {
        if (checkbox.checked) {
            num = String(checkbox.id).substring(0, 1);
            document.getElementById(num + "_" + "text").style.textDecoration = "line-through";
        } else {
            num = String(checkbox.id).substring(0, 1);
            document.getElementById(num + "_" + "text").style.textDecoration = "none";
        }
    }
    return checkbox;
}

function createText() {
    var text = document.createElement('input');
    text.id = countId + "_" + "text";
    text.className = "textBox";
    text.type = "text";
    text.name = countId + "_" + "textList"
    return text;
}

function clickButton() {
    var where = document.getElementById("list");
    input = document.createElement("br");
    where.appendChild(input);

    input = createInput();
    where.appendChild(input);

    input = createText();
    where.appendChild(input);
    countId++;
}

