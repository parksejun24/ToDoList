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
            document.getElementById(num + "_" + "ToDotextList").style.textDecoration = "line-through";
        } else {
            checkbox.value = 'N'
            num = String(checkbox.id).substring(0, 1);
            document.getElementById(num + "_" + "ToDotextList").style.textDecoration = "none";
        }
    }
    return checkbox;
}
function createToDoText() {
    var text = document.createElement('input');
    text.id = countId + "_" + "ToDoTextList";
    text.className = "ToDoTextBox";
    text.type = "text";
    text.name = countId + "_" + "ToDoTextList";
    text.placeholder = "To-Do";
    return text;
}

function createSubjectText() {
    var text = document.createElement('input');
    text.id = countId + "_" + "SubjectTextList";
    text.className = "TimeTextBox";
    text.type = "text";
    text.placeholder = "과목";
    text.name = countId + "_" + "SubjectTextList";
    return text;
}

function createStartTimeText() {
    var text = document.createElement('input');
    text.id = countId + "_" + "TimeTextBox1";
    text.className = "TimeTextBox";
    text.type = "text";
    text.placeholder = "시작시간";
    text.name = countId + "_" + "TimeTextList";
    return text;
}

function createFinishTimeText() {
    var text = document.createElement('input');
    text.id = countId + "_" + "TimeTextBox2";
    text.className = "TimeTextBox";
    text.type = "text";
    text.placeholder = "종료시간";
    text.name = countId + "_" + "TimeTextList";
    return text;
}

function createBr() {
    var br = document.createElement("br");
    br.id = countId + "_" + "br";
    return br;
}

function createDeleteButton() {
    var deleteButton = document.createElement('input');
    deleteButton.id = countId + "_" + "DeleteButton";
    deleteButton.className = "DeleteButton";
    deleteButton.type = "checkbox";
    deleteButton.name = "DeleteButton";
    deleteButton.value = countId;
    deleteButton.onclick = function () {
        if (deleteButton.checked) {
            var lastindex = deleteButton.value.toString();
            var indexCount = lastindex.length;
            var num = String(deleteButton.id).substring(0, indexCount);
            console.log(num + "_" + "ToDoTextList");

            var where1 = document.getElementById(num + "_" + "ToDoTextList");
            var where2 = document.getElementById(num + "_" + "SubjectTextList");
            var where3 = document.getElementById(num + "_" + "TimeTextBox1");
            var where4 = document.getElementById(num + "_" + "TimeTextBox2");
            var where5 = document.getElementById(num + "_" + "checkBox");
            var where6 = document.getElementById(num + "_" + "DeleteButton");
            var where7 = document.getElementById(num + "_" + "br");

            list.removeChild(where1);
            list.removeChild(where2);
            list.removeChild(where3);
            list.removeChild(where4);
            list.removeChild(where5);
            list.removeChild(where6);
            list.removeChild(where7);
        }
    }
    return deleteButton;
}


function clickButton() {
    countId++;
    var where = document.getElementById("list");
    var input1 = createDeleteButton();
    var input2 = createFinishTimeText();
    var input3 = createStartTimeText();
    var input4 = createToDoText();
    var input5 = createSubjectText();
    var input6 = createCheckBox();
    var input7 = createBr();

    where.appendChild(input1);
    where.insertBefore(input2, input1);
    where.insertBefore(input3, input2);
    where.insertBefore(input4, input3);
    where.insertBefore(input5, input4);
    where.insertBefore(input6, input5);
    where.insertBefore(input7, input6);
}

