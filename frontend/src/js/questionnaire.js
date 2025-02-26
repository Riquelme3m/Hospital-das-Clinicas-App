document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");

    // Input fields
    const dischargedDateInput = document.getElementById("discharged-date");
    const clinicalCriteriaInput = document.getElementById("text-area-input");
    const checkboxes = document.querySelectorAll("input[name='patient-carachteristics']");
    const checkboxesWaiting = document.querySelectorAll("input[name='patient-waiting']");
    const radioGroups = [
        "clinical-condition",
        "intervention",
        "effective-int",
        "waiting"
    ];
    const exampOptionsInputs = document.querySelectorAll(`.exam-options input[type="checkbox"]`);
    const errorExampOptions = document.querySelector(".error-exam-options");
    const examInput = document.querySelector(".exam-checked");

    // Error messages
    const dateError = document.querySelector(".date-error");
    const textAreaError = document.querySelector(".text-area-error");
    const checkboxError = document.querySelector(".checkbox-error-message");
    const checkboxWaitingError = document.querySelector(".checkbox-error-message-waiting");
    const radioErrors = radioGroups.map(group => document.querySelector(`.radio-box-error-${radioGroups.indexOf(group) + 1}`));

    // Utility function to show/hide errors
    function showError(element, message) {
        element.textContent = message;
        element.style.display = "block";
    }

    function hideError(element) {
        element.style.display = "none";
    }

    // Date validation (Brazilian format: DD/MM/YYYY)
    dischargedDateInput.addEventListener("input", function () {
        const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        if (!datePattern.test(dischargedDateInput.value)) {
            showError(dateError, "Data inválida! Use o formato DD/MM/AAAA.");
        } else {
            hideError(dateError);
        }
    });
    

    // Textarea validation (at least 10 characters)
    clinicalCriteriaInput.addEventListener("input", function () {
        if (clinicalCriteriaInput.value.trim().length < 10) {
            showError(textAreaError, "Mínimo de 10 caracteres necessários para explicar os critérios clínicos para a alta do paciente.");
        } else {
            hideError(textAreaError);
        }
    });

    // Checkbox validation
    function validateCheckboxes(checkboxes, errorElement) {
        const isChecked = [...checkboxes].some(checkbox => checkbox.checked);
        if (!isChecked) {
            showError(errorElement, "Selecione pelo menos uma opção.");
        } else {
            hideError(errorElement);
        }
    }
    exampOptionsInputs.forEach(checkbox=>{
        checkbox.addEventListener("change",function(){
            validateCheckboxes(exampOptionsInputs,errorExampOptions);
        })
    })
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            validateCheckboxes(checkboxes, checkboxError);
        });
    });

    checkboxesWaiting.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            validateCheckboxes(checkboxesWaiting, checkboxWaitingError);
        });
    });

    // Radio button validation
    function validateRadioButtons(groupName, errorElement) {
        const checked = document.querySelector(`input[name='${groupName}']:checked`);
        if (!checked) {
            showError(errorElement, "Esse campo é obrigatório.");
        } else {
            hideError(errorElement);
        }
    }

    radioGroups.forEach((group, index) => {
        const radios = document.querySelectorAll(`input[name='${group}']`);
        radios.forEach(radio => {
            radio.addEventListener("change", function () {
                validateRadioButtons(group, radioErrors[index]);
            });
        });
    });

    // **Fix for toggling the waiting options div**
    const waitingYes = document.getElementById("waiting-yes");
    const waitingNo = document.getElementById("waiting-no");
    const waitingOptionsDiv = document.querySelector(".patient-waiting-options");

    function toggleWaitingOptions() {
        if (waitingYes.checked) {
            waitingOptionsDiv.style.display = "block";
        } else {
            waitingOptionsDiv.style.display = "none";
        }
    }

    // Ensure the function runs on page load in case a radio is preselected
    toggleWaitingOptions();

    // Add event listeners to radio buttons
    waitingYes.addEventListener("change", toggleWaitingOptions);
    waitingNo.addEventListener("change", toggleWaitingOptions);

    // Form validation on submit
    form.addEventListener("submit", function (event) {
        let isValid = true;

        // Validate date
        if (!/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(dischargedDateInput.value)) {
            showError(dateError, "Data inválida! Use o formato DD/MM/AAAA.");
            isValid = false;
        }

        // Validate textarea
        if (clinicalCriteriaInput.value.trim().length < 10) {
            showError(textAreaError, "Mínimo de 10 caracteres necessários para explicar os critérios clínicos para a alta do paciente.");
            isValid = false;
        }

        // Validate checkboxes
        if (![...checkboxes].some(checkbox => checkbox.checked)) {
            showError(checkboxError, "Selecione pelo menos uma opção.");
            isValid = false;
        }

        if (waitingYes.checked) {
            if (![...checkboxesWaiting].some(checkbox => checkbox.checked)) {
                showError(checkboxWaitingError, "Selecione pelo menos uma opção .");
                isValid = false;
                
            }

        }
        if(examInput.checked){
            if(![...exampOptionsInputs].some(checkbox=>checkbox.checked)){
                showError(errorExampOptions,"Selecione pelo menos uma opção para exame.");
                isValid=false;
            }
        }

        // Validate radio buttons
        radioGroups.forEach((group, index) => {
            if (!document.querySelector(`input[name='${group}']:checked`)) {
                showError(radioErrors[index], "Esse campo é obrigatório.");
                isValid = false;
            }
        });

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        } else {
            console.log("Form submitted successfully!");
        }
    });
});