const customSelect = document.querySelector(".custom-select");
const selectedOption = customSelect.querySelector(".selected-option");
const specialtyWarning = document.getElementById('specialty-warning');
const dropdownOptions = customSelect.querySelector(".dropdown-options");
const options = customSelect.querySelectorAll(".option");
const form = document.getElementById("form-signup");

let isSpecialtySelected = false;
// Toggle dropdown on click
selectedOption.addEventListener("click", () => {
    dropdownOptions.classList.toggle("show"); // Use the 'show' class
});

// Add event listeners to options
options.forEach(option => {
    option.addEventListener("click", () => {
        const value = option.getAttribute("data-value");
        selectedOption.textContent = option.textContent;
        selectedOption.setAttribute("data-value", value);
        isSpecialtySelected = true;
        specialtyWarning.style.display="none";
        dropdownOptions.classList.remove("show"); // Hide dropdown after selection
    });
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!customSelect.contains(event.target)) {
        dropdownOptions.classList.remove("show");
    }
});




const inputName = document.getElementById("name");
console.log(inputName);
inputName.addEventListener("input", function (event) {
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (!nameRegex.test(this.value)) {
        this.setCustomValidity("O nome deve conter apenas letras e espaços.");
    } else {
        this.setCustomValidity("");
    }
});


const inputDate = document.getElementById("birth-date");

inputDate.addEventListener("change", function () {
    const inputField = this;
    console.log(inputField.value);
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

const inputLogin = document.getElementById("login");

inputLogin.addEventListener("input", function () {
    const loginValue = this.value;
    const loginRegex = /^[A-Za-z0-9]{4,}$/;

    if (!loginRegex.test(loginValue)) {
        this.setCustomValidity("O login deve conter ao menos 4 caracteres, apenas letras, números e ponto (.) sem espaços.");
    } else {
        this.setCustomValidity("");
    }
})

const inputNumber = document.getElementById("celphone");

inputNumber.addEventListener("input", function () {
    const numberValue = this.value;
    const numberRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!numberRegex.test(this.value)) {
        this.setCustomValidity("O telefone deve seguir o formato (XX) XXXXX-XXXX.");
    } else {
        this.setCustomValidity("");
    }
})



const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("password-confirmation");

function validatePasswords() {
    if (passwordField.value.length < 8) {
        passwordField.setCustomValidity("A senha deve ter pelo menos 8 caracteres.");
    } else {
        passwordField.setCustomValidity("");
    }
    if (passwordField.value !== confirmPasswordField.value) {
        confirmPasswordField.setCustomValidity("As senhas não são iguais.");
    } else {
        confirmPasswordField.setCustomValidity("");
    }

    
}
passwordField.addEventListener("input",validatePasswords);
confirmPasswordField.addEventListener("input",validatePasswords);
validatePasswords();

console.log(form);

form.addEventListener("submit", function (e) {
    if (!isSpecialtySelected) {
        e.preventDefault();
        console.log("here");
        specialtyWarning.style.display = 'block';
        specialtyWarning.style.color = "red";

    } else {

        specialtyWarning.style.display = 'none';
        e.preventDefault();
        window.alert("Cadastro realizado com sucesso.");
        setTimeout(() => {
            
            window.location.href = "index.html";
            

        }, 1000);
    }
})




// const customSelect = document.querySelector(".custom-select");
// const selectedOption = customSelect.querySelector(".selected-option");
// const specialtyWarning = document.getElementById('specialty-warning');
// const dropdownOptions = customSelect.querySelector(".dropdown-options");
// const options = customSelect.querySelectorAll(".option");