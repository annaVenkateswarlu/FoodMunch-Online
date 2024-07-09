let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let workingStatusElphone = document.getElementById("status");
let phoneErrMsgEl = document.getElementById("phoneErrMsg");

let messEl = document.getElementById("textarea")
let MessErrMsgEl = document.getElementById("MessErrMsg");

let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");

let myFormEl = document.getElementById("myForm");

let formData = {
    name: "",
    email: "",
    status: "",
    mess: "",
    gender: "Male"
};

nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }

    formData.name = event.target.value;
});

emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }

    formData.email = event.target.value;
});

workingStatusElphone.addEventListener("change", function(event) {
    if (event.target.value === "") {
        phoneErrMsgEl.textContent = "Required*";
    } else {
        phoneErrMsgEl.textContent = "";
    }

    formData.status = event.target.value;
});

messEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        MessErrMsgEl.textContent = "Message is Required*";
    } else {
        MessErrMsgEl.textContent = "";
    }

    formData.mess = event.target.value;
});

genderMaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

genderFemaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

function validateFormData(formData) {

    let k = true;

    let {
        name,
        email,
        status,
        mess
    } = formData;
    if (name === "") {
        nameErrMsgEl.textContent = "Required*";
        k = false;
    }
    if (email === "") {
        emailErrMsgEl.textContent = "Required*";
        k = false;
    } else {
        if (!(email.endsWith('@gmail.com'))) {
            k = false;
            emailErrMsgEl.textContent = "Enter Valid email";
        }
    }
    if (status === "") {
        phoneErrMsgEl.textContent = "Required*";
        k = false;
    } else {
        if (!/^\d{10}$/.test(status)) {
            phoneErrMsgEl.textContent = "Phone number must be exactly 10 digits";
            k = false;
        }
    }
    if (mess === "") {
        MessErrMsgEl.textContent = "Message is Required";
        k = false;
    }
    if (k === true) {
        alert('Form submitted successfully!');
        nameEl.value = "";
        emailEl.value = "";
        workingStatusElphone.value = "";
        messEl.value = "";
    }
}

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(formData);
});