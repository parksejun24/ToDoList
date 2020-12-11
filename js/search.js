var count = 0;
var yes = 0;

function createCheckBox() {
    var checkbox = document.createElement('input');
    checkbox.id = count + "_" + "checkBox";
    checkbox.className = "DonecheckBox"
    checkbox.value = 'N'
    checkbox.type = "checkbox";
    checkbox.name = "checkBoxList"
    var n = count;
    checkbox.onclick = function () {
        if (checkbox.checked) {
            checkbox.value = 'Y';
            var lastindex = n.toString();
            var indexCount = lastindex.length;
            var num = String(checkbox.id).substring(0, indexCount);
            document.getElementById(num + "_" + "ToDoTextList").style.textDecoration = "line-through";
        } else {
            checkbox.value = 'N';
            var lastindex = n.toString();
            var indexCount = lastindex.length;
            var num = String(checkbox.id).substring(0, indexCount);
            num = String(checkbox.id).substring(0, 1);
            document.getElementById(num + "_" + "ToDoTextList").style.textDecoration = "none";
        }
    }
    return checkbox;
}

function createToDoText() {
    var toDoText = document.createElement('input');
    toDoText.type = "text";
    toDoText.placeholder = "To-Do";
    toDoText.className = "ToDoTextBox";
    toDoText.id = count + "_" + "ToDoTextBox";
    toDoText.name = "ToDoText";
    return toDoText;
}

function createSubjectText() {
    var subjectText = document.createElement('input');
    subjectText.type = "text";
    subjectText.placeholder = "과목";
    subjectText.className = "MediumTextBox";
    subjectText.id = count + "_" + "SubjectTextBox";
    subjectText.name = "SubjectText";
    return subjectText;
}

function createStartTimeText() {
    var startTimeText = document.createElement('input');
    startTimeText.type = "text";
    startTimeText.placeholder = "시작시간";
    startTimeText.className = "MediumTextBox";
    startTimeText.id = count + "_" + "StartTimeTextBox";
    startTimeText.name = "StartTimeText";
    return startTimeText;
}

function createFinishTimeText() {
    var finishTimeText = document.createElement('input');
    finishTimeText.type = "text";
    finishTimeText.placeholder = "종료시간";
    finishTimeText.className = "MediumTextBox";
    finishTimeText.id = count + "_" + "FinishTimeTextBox";
    finishTimeText.name = "FinishTimeText";
    return finishTimeText;
}

function createBr() {
    var br = document.createElement("br");
    br.id = count + "_" + "br";
    return br;
}

function createlabel() { //DeleteCheckBox를 꾸며주는 요소
    var label = document.createElement("label");
    label.setAttribute("for", count + "_" + "DeleteButton");
    label.className = "DeleteButtonLabel";
    label.id = count + "_" + "DeleteButtonLabel";
    return label;
}

function createDeleteButton() {
    var deleteButton = document.createElement('input');
    deleteButton.type = "checkbox";
    deleteButton.value = count; // delete checkButton의 순서를 value 값으로 저장
    deleteButton.className = "DeleteButton";
    deleteButton.id = count + "_" + "DeleteButton";
    deleteButton.name = "DeleteButton";

    deleteButton.onclick = function () {
        if (deleteButton.checked) {
            var lastindex = deleteButton.value.toString();
            var indexCount = lastindex.length;
            var num = String(deleteButton.id).substring(0, indexCount);

            list.removeChild(document.getElementById(num + "_" + "ToDoTextBox"));
            list.removeChild(document.getElementById(num + "_" + "SubjectTextBox"));
            list.removeChild(document.getElementById(num + "_" + "StartTimeTextBox"));
            list.removeChild(document.getElementById(num + "_" + "FinishTimeTextBox"));
            list.removeChild(document.getElementById(num + "_" + "checkBox"));
            list.removeChild(document.getElementById(num + "_" + "DeleteButton"));
            list.removeChild(document.getElementById(num + "_" + "DeleteButtonLabel"));
            list.removeChild(document.getElementById(num + "_" + "br"));
        }
    }
    return deleteButton;
}


function clickButton() {
    count++;
    var where = document.getElementById("list");
    var input1 = createlabel();
    var input2 = createDeleteButton();
    var input3 = createFinishTimeText();
    var input4 = createStartTimeText();
    var input5 = createToDoText();
    var input6 = createSubjectText();
    var input7 = createCheckBox();
    var input8 = createBr();

    where.appendChild(input1);
    where.insertBefore(input2, input1);
    where.insertBefore(input3, input2);
    where.insertBefore(input4, input3);
    where.insertBefore(input5, input4);
    where.insertBefore(input6, input5);
    where.insertBefore(input7, input6);
    where.insertBefore(input8, input7);
}

