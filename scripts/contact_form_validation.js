function runValidate() {
    if (validateName()) {
        return true;
    } else
        return false;
}

function validateName() {
    let x = document.forms["myForm"]["guestNameInput"].value;
    console.log(fname);
    if (fname.validity.valueMissing) {
        fname.setCustomValidity("Please enter your name");
        return false;
    } else {
        fname.setCustomValidity("");
        return true;
    }


}