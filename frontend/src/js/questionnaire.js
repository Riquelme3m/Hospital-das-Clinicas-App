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


    const redTwoGreenSign = document.querySelector(".red-green-box");
    const patientConditionDeterminesHospitalizationYes = document.querySelector("#cc-yes");
    const patientConditionDeterminesHospitalizationNo = document.querySelector("#cc-no");
    const interventionsMightBeOutPatientYes = document.querySelector("#intervention-yes");
    const interventionsMightBeOutPatientNo = document.querySelector("#intervention-no");
    const patientReceivedEffectiveInterventionYes = document.querySelector("#effective-int-yes");
    const patientReceivedEffectiveInterventionNo = document.querySelector("#effective-int-no");
    const patientWaitingForSomethingYes = document.querySelector("#waiting-yes");
    const patientWaitingForSomethingNo = document.querySelector("#waiting-no");
    const red2greenInput = document.getElementById("red2green-data");
   
    
    function updateRedTwoGreenSign(){
        
        if(patientConditionDeterminesHospitalizationNo.checked){
            redTwoGreenSign.style.backgroundColor = "red";
        }
        else if(interventionsMightBeOutPatientYes.checked){
            redTwoGreenSign.style.backgroundColor = "red";
        }
        else{
            if(patientReceivedEffectiveInterventionNo.checked){
                redTwoGreenSign.style.backgroundColor="red";
            }
            else{
                if(patientWaitingForSomethingYes.checked){
                    redTwoGreenSign.style.backgroundColor="red";
                }
                else{
                    redTwoGreenSign.style.backgroundColor="green";
                }
            }
        }
        red2greenInput.value=redTwoGreenSign.style.backgroundColor;
        console.log(red2greenInput.value); 
    
    }
    updateRedTwoGreenSign();
    patientConditionDeterminesHospitalizationYes.addEventListener("change",updateRedTwoGreenSign);
    patientConditionDeterminesHospitalizationNo.addEventListener("change",updateRedTwoGreenSign);
    interventionsMightBeOutPatientYes.addEventListener("change",updateRedTwoGreenSign);
    interventionsMightBeOutPatientNo.addEventListener("change",updateRedTwoGreenSign);
    
    patientReceivedEffectiveInterventionYes.addEventListener("change",updateRedTwoGreenSign);
    patientReceivedEffectiveInterventionNo.addEventListener("change",updateRedTwoGreenSign);
    patientWaitingForSomethingYes.addEventListener("change",updateRedTwoGreenSign);
    patientWaitingForSomethingNo.addEventListener("change",updateRedTwoGreenSign);
    

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
        if (dischargedDateInput.value === "") {
            showError(dateError, "Esse campo é obrigatório.");
        } else if (!datePattern.test(dischargedDateInput.value)) {
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
    exampOptionsInputs.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            validateCheckboxes(exampOptionsInputs, errorExampOptions);
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

    examInput.addEventListener("change",function(){
        if(!examInput.isChecked){
            exampOptionsInputs.forEach(checkbox =>{
                checkbox.checked=false;
            })
        }
    })


   
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
    const invasiveProcedure = document.getElementById("option-7.1");
    const interconsultationCare = document.getElementById("option-8.1");
    const familyOrganization = document.getElementById("option-9.1");
    const externalResources = document.getElementById("option-10.1");

    console.log(exampOptionsInputs);
    console.log(examInput);
    console.log(invasiveProcedure);
    console.log(familyOrganization);
    console.log(interconsultationCare);
    console.log(externalResources);

    

    waitingNo.addEventListener("click",(waiting_no)=>{
        if(waitingNo.checked===true){
            exampOptionsInputs.forEach(checkbox =>{
                checkbox.checked=false;
            })
            

            examInput.checked=false;
            invasiveProcedure.checked=false;
            interconsultationCare.checked=false;
            familyOrganization.checked=false;
            externalResources.checked=false;
        }
    })

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
        if(dischargedDateInput.value===""){
            showError(dateError,"Esse campo é obrigatório");
            isValid=false;
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
        if (examInput.checked) {
            if (![...exampOptionsInputs].some(checkbox => checkbox.checked)) {
                showError(errorExampOptions, "Selecione pelo menos uma opção para exame.");
                isValid = false;
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