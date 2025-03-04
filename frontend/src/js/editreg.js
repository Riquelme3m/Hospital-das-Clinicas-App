const customSelect = document.querySelector(".custom-select");
const selectedOption = customSelect.querySelector(".selected-option");
const specialtyWarning = document.getElementById('specialty-warning');
const dropdownOptions = customSelect.querySelector(".dropdown-options");
const options = customSelect.querySelectorAll(".option");
const form = document.getElementById("form-signup");
const eye = document.querySelector(".eye");
const eyeConfirmation = document.querySelector(".eye-confirmation");
const specialtyType = document.querySelector(".specialty-type");
const eyeSlash = document.querySelector(".eye-slash");
const eyeSlashConfirmation = document.querySelector(".eye-slash-confirmation");

const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("password-confirmation");


let valueSpecialty;

eye.addEventListener("click", () => {

    if(passwordField.type==="password"){
        passwordField.type="text";
    };
    eye.style.display="none";
    eyeSlash.style.display="inline";

});


eyeSlash.addEventListener("click", () => {

    if(passwordField.type==="text"){
        passwordField.type="password";
    };
    eye.style.display="inline";
    eyeSlash.style.display="none";
   

    
});

eyeConfirmation.addEventListener("click", () => {

    if(confirmPasswordField.type==="password"){
        confirmPasswordField.type="text";
    };
    eyeConfirmation.style.display="none";
    eyeSlashConfirmation.style.display="inline";

});


eyeSlashConfirmation.addEventListener("click", () => {

    if(confirmPasswordField.type==="text"){
        confirmPasswordField.type="password";
    };
    eyeConfirmation.style.display="inline";
    eyeSlashConfirmation.style.display="none";
   

    
});











let isSpecialtySelected = false;
// Toggle dropdown on click
selectedOption.addEventListener("click", () => {
    dropdownOptions.classList.toggle("show"); // Use the 'show' class
});

// Add event listeners to options
options.forEach(option => {
    option.addEventListener("click", () => {
        valueSpecialty = option.getAttribute("data-value");
        selectedOption.textContent = option.textContent;
        selectedOption.setAttribute("data-value", valueSpecialty);
        isSpecialtySelected = true;
        specialtyWarning.style.display = "none";
        dropdownOptions.classList.remove("show");
        specialtyType.value=valueSpecialty;
        console.log(specialtyType.value); // Hide dropdown after selection
    });
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!customSelect.contains(event.target)) {
        dropdownOptions.classList.remove("show");
    }
});



//Name constraints
const inputName = document.getElementById("name");

inputName.addEventListener("input", function (event) {
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (!nameRegex.test(this.value)) {
        this.setCustomValidity("O nome deve conter apenas letras e espaços.");
    } else {
        this.setCustomValidity("");
    }
});

//Date constraints
const inputDate = document.getElementById("birth-date");
inputDate.addEventListener("input", function () {
    const inputField = this;
    
    const selectedDate = new Date(this.value);
    const today = new Date();
    const minDate = new Date();
    minDate.setFullYear(today.getFullYear() - 120);

    if (isNaN(selectedDate)) {
        inputField.setCustomValidity("Por favor,selecione uma data válida;");
    } else if (selectedDate > today) {
        inputField.setCustomValidity("A data de nascimento não pode ser no futuro.");
    } else if (selectedDate < minDate) {
        inputField.setCustomValidity("Por favor, insira uma data de nascimento realista (máximo 120 anos).")
    } else {
        inputField.setCustomValidity("");
    }
})


//Cellphone constraints
const inputNumber = document.getElementById("celphone");
inputNumber.addEventListener("input", function (e) {
    let input = e.target.value.replace(/\D/g, ''); // Remove all non-numeric characters

    if (input.length > 11) input = input.slice(0, 11); // Limit to 11 digits

    let formattedNumber = '';
    if (input.length <= 2) {
        formattedNumber = `(${input}`;
    } else if (input.length <= 7) {
        formattedNumber = `(${input.slice(0, 2)}) ${input.slice(2)}`;
    } else {
        formattedNumber = `(${input.slice(0, 2)}) ${input.slice(2, 7)}-${input.slice(7)}`;
    }
    e.target.value = formattedNumber;
    
});


//Password constraints


function validatePasswords() {
    if (passwordField.value.length < 8) {
        passwordField.setCustomValidity("A senha deve ter pelo menos 8 caracteres.");
    } else {
        passwordField.setCustomValidity("");
    }
    if (passwordField.value !== confirmPasswordField.value) {
        confirmPasswordField.setCustomValidity("As senhas devem ser iguais.");
    } else {
        confirmPasswordField.setCustomValidity("");
    }

}
passwordField.addEventListener("input", validatePasswords);
confirmPasswordField.addEventListener("input", validatePasswords);
validatePasswords();



form.addEventListener("submit", function (e) {
    if (!isSpecialtySelected) {
        e.preventDefault();
        specialtyWarning.style.display = 'block';
        specialtyWarning.style.color = "red";

    } else {

        specialtyWarning.style.display = 'none';
        
        
        // setTimeout(() => {

        //     window.location.href = "loading.html";


        // }, 1000);
    }
})

localStorage.setItem("name","riquelme");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");
console.log(localStorage.getItem("name"));

sessionStorage.setItem("name","batista");
console.log(sessionStorage.getItem("name"));