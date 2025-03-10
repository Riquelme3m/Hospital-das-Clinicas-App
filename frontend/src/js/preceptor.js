const MOCK_USER_ASSISTENTIAL = {
    name: "Mariana Silva",
    birthDate: "24/06/2002",
    login: "mariana",
    cellphone: "(38)988670683",
    password: "mariana123",
    role: "assistencial",
    isStudent: "no",
    isAdmin: "no",
    specialty: "Cardiologia",
};

const PRECEPTORS = [
    "Alice Johnson",
    "Michael Smith",
    "Emma Davis",
    "James Brown",
    "Olivia Wilson",
    "William Taylor",
    "Sophia Martinez",
    "Benjamin Anderson",
    "Charlotte Thomas",
    "Daniel Harris"
];

const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownOptions = document.querySelector(".dropdown-options");
const username = document.querySelector(".username");
const specialty = document.querySelector(".specialty");
const continuarButton = document.querySelector(".buttons a:last-child"); // Selects "Continuar"
let selectedPreceptor = null;

// Set user info
username.textContent = MOCK_USER_ASSISTENTIAL.name;
specialty.textContent = MOCK_USER_ASSISTENTIAL.specialty;

// Populate dropdown with preceptors
PRECEPTORS.forEach((name) => {
    const option = document.createElement("div");
    option.classList.add("option");
    option.textContent = name;
    option.dataset.value = name;
    dropdownOptions.appendChild(option);
});

// Show/hide dropdown options
dropdownToggle.addEventListener("click", (event) => {
    dropdownOptions.classList.toggle("show");
    event.stopPropagation();
});

// Handle option selection
dropdownOptions.addEventListener("click", (event) => {
    if (event.target.classList.contains("option")) {
        selectedPreceptor = event.target.dataset.value;
        dropdownToggle.textContent = selectedPreceptor;
        dropdownOptions.classList.remove("show");
        continuarButton.classList.remove("disabled"); // Enable "Continuar"
    }
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!dropdownToggle.contains(event.target) && !dropdownOptions.contains(event.target)) {
        dropdownOptions.classList.remove("show");
    }
});

// Prevent clicking "Continuar" without selecting a preceptor
continuarButton.addEventListener("click", (event) => {
    if (!selectedPreceptor) {
        alert("Por favor, selecione um preceptor antes de continuar.");
        event.preventDefault(); // Stop navigation
    }
});
