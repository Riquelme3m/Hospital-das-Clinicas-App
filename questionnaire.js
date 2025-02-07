const carachteristicsCheckboxes = document.querySelectorAll("input[name='patient-carachteristics']");
const submitBtn = document.getElementById("submit-form");


const patientWaitingBlock = document.querySelector(".patient-waiting-options");

const isPatientWaiting = document.querySelector("#waiting-yes");
const isPatientWaitingNo = document.querySelector("#waiting-no");

isPatientWaiting.addEventListener("click", () => {
    if (isPatientWaiting.checked) {
        patientWaitingBlock.style.display = "block";
    } else {
        patientWaitingBlock.style.display = "none";
    }
})
isPatientWaitingNo.addEventListener("click", () => {
    if (isPatientWaitingNo.checked) {
        patientWaitingBlock.style.display = "none";
    }
})

/*-----------------------------------------------------------------------------*/


const patientWaitingCheckBoxes = document.querySelectorAll("input[name='patient-waiting']");

const warningCha = document.getElementById("warning-characteristics");



const characteristicsCheckboxes = document.querySelectorAll("input[name='patient-carachteristics']");
let characteristicChecked = false;
characteristicsCheckboxes.forEach((element)=>{
    element.addEventListener("change",()=>{
        characteristicChecked = Array.from(characteristicsCheckboxes).some(input => input.checked);
    })
    
})

const waitingCheckboxes = document.querySelectorAll("input[name='patient-waiting']");
let patientWaitingChecked = false;
waitingCheckboxes.forEach((element)=>{
    element.addEventListener("change",()=>{
        patientWaitingChecked = Array.from(waitingCheckboxes).some(input => input.checked);
    })
    
})




const dateInput = document.getElementById("discharged-date");
const textAreaInput = document.getElementById("text-area-input");
const examOption = document.getElementById("option-1");
const warningWaiting = document.getElementById("warning-waiting");
submitBtn.addEventListener("click", function (e) {
    // First, check if the date input is empty
    if (!dateInput.value) {
        dateInput.reportValidity(); // Show default browser validation message
        return; // Stop execution here
    }
    else if(!textAreaInput.value){
        console.log("here");
        textAreaInput.reportValidity();
        return;
    }
    else if(!characteristicChecked){
        e.preventDefault();
        warningCha.style.color = "red";
        warningCha.style.display = "block";
        return;
    }
    else{
        warningCha.style.display = "none";
       
    }


    
    if(!patientWaitingChecked){
        e.preventDefault();
        warningWaiting.style.color = "red";
        warningWaiting.style.display = "block";
        return;
    }
    else{
        warningWaiting.style.display = "none";
       
    }



   


    

    // Now check if at least one characteristic checkbox is checked
    
});
