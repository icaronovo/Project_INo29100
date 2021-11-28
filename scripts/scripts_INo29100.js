function adjustDimensions() {
    document.getElementById('logo1').style.fontSize = '20px';
    document.getElementById('logo2').style.fontSize = '35px';
}

function revertDimensions() {
    document.getElementById('logo2').style.fontSize = '20px';
    document.getElementById('logo1').style.fontSize = '35px';
}

function adjustDimensions2() {
    document.getElementById('logo2').style.fontSize = '20px';
    document.getElementById('logo1').style.fontSize = '35px';
}

function revertDimensions2() {
    document.getElementById('logo1').style.fontSize = '20px';
    document.getElementById('logo2').style.fontSize = '35px';
}

function reviewInformation(form) {
    let userName = document.getElementById('guestNameInput').value;
    target = document.getElementById('guestNameOutput').innerText = "Name: " + userName;

    let userEmail = document.getElementById('guestEmailInput').value;
    target = document.getElementById('guestEmailOutput').innerText = "E-mail: " + userEmail;

    let description = document.getElementById('descriptionInput').value;
    target = document.getElementById('descriptionOutput').innerText = "Description: " + description;


    var langCheckboxes = form.elements["selectedLanguagesInput"];
    var target = document.getElementById("selectedLangaguesOutput");

    let languages = "";
    for (let check_node of langCheckboxes) {
        if (check_node.checked)
            languages += check_node.value + "; ";
    }

    target.innerText = "Languages selected: " + languages;
}

function clearForm(form) {
    var frm_elements = form.elements;

    for (i = 0; i < frm_elements.length; i++) {
        field_type = frm_elements[i].type.toLowerCase();
        switch (field_type) {
            case "text":
            case "email":
            case "textarea":
                frm_elements[i].value = "";
                break;
            case "checkbox":
                if (frm_elements[i].checked) {
                    frm_elements[i].checked = false;
                }
                break;
            default:
                break;
        }
    }
}

function submitForm(form) {
    clearForm(form);
    document.getElementById("guestNameOutput").innerText = "Name: ";
    document.getElementById("guestEmailOutput").innerText = "E-mail: ";
    document.getElementById("selectedLangaguesOutput").innerText = "Languages selected: ";
    document.getElementById("descriptionOutput").innerText = "Description: ";
    alert("Your request has been sent successfully");
}


function addEvent(form) {

    let eventName = document.getElementById("eventName").value;
    let eventDescription = document.getElementById("eventDescription").value;
    let eventDate = document.getElementById("eventDate").value;
    let eventHour = document.getElementById("eventHour").value
    table = document.getElementById("table");
    var row = table.getElementsByTagName('tr')[table.getElementsByTagName('tr').length];
    var row = table.insertRow(row);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = eventName;
    cell2.innerHTML = eventDescription;
    cell3.innerHTML = eventDate;
    cell4.innerHTML = eventHour;

    document.getElementById("eventName").value = "";
    document.getElementById("eventDescription").value = "";
    document.getElementById("eventDate").value = "";
    document.getElementById("eventHour").value = "";
}