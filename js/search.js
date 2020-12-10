var countId = 0;
var yes = 0;

function createCheckBox() {
    var checkbox = document.createElement('input');
    checkbox.id = countId + "_" + "checkBox";
    checkbox.className = "checkBox"
    checkbox.value = 'N'
    checkbox.type = "checkbox";
    checkbox.name = countId + "_" + "checkBoxList"
    checkbox.onclick = function () {
        if (checkbox.checked) {
            checkbox.value = 'Y'
            num = String(checkbox.id).substring(0, 1);
            document.getElementById(num + "_" + "text").style.textDecoration = "line-through";
        } else {
            checkbox.value = 'N'
            num = String(checkbox.id).substring(0, 1);
            document.getElementById(num + "_" + "text").style.textDecoration = "none";
        }
    }
    return checkbox;
}
function createToDoText() {
    var text = document.createElement('input');
    text.id = countId + "_" + "text";
    text.className = "ToDoTextBox";
    text.type = "text";
    text.name = countId + "_" + "ToDotextList";
    text.placeholder = "To-Do";
    return text;
}

function createSubjectText() {
    var text = document.createElement('input');
    text.id = countId + "_" + "text";
    text.className = "TimeTextBox";
    text.type = "text";
    text.placeholder = "과목";
    text.name = countId + "_" + "SubjectTextList";
    return text;
}

function createStartTimeText() {
    var text = document.createElement('input');
    text.id = countId + "_" + "text";
    text.className = "TimeTextBox";
    text.type = "text";
    text.placeholder = "시작시간";
    text.name = countId + "_" + "TimeTextList";
    return text;
}

function createFinishTimeText() {
    var text = document.createElement('input');
    text.id = countId + "_" + "text";
    text.className = "TimeTextBox";
    text.type = "text";
    text.placeholder = "종료시간";
    text.name = countId + "_" + "TimeTextList";
    return text;
}

function clickButton() {
    var where = document.getElementById("list");
    var input1 = createFinishTimeText();
    var input2 = createStartTimeText();
    var input3 = createToDoText();
    var input4 = createSubjectText();
    var input5 = createCheckBox();
    var input6 = document.createElement("br");
    where.appendChild(input1);
    where.insertBefore(input2, input1);
    where.insertBefore(input3, input2);
    where.insertBefore(input4, input3);
    where.insertBefore(input5, input4);
    where.insertBefore(input6, input5);
    countId++;
}

