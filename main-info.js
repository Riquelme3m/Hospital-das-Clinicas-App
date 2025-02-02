/*Script to display the include patient pop up*/

const includePatientBtn =  document.querySelector(".include-patient");
const includePatientCloseIcon = document.querySelector(".close-icon");
const popUp = document.querySelector(".include-patient-pop-up")

includePatientBtn.addEventListener("click",()=>{
    popUp.classList.toggle("active");
})

includePatientCloseIcon.addEventListener("click",()=>{
    popUp.classList.toggle("active");
})


/*Script to show the filter icons*/

const filterBarOne = document.querySelector(".dropdown-filter-one");
const filterBarTwo = document.querySelector(".dropdown-filter-two");
const filterBarThree = document.querySelector(".dropdown-filter-three");
const filterBarIcons = document.querySelectorAll(".filter-wrapper .filter-icon");



filterBarIcons.forEach((element,index)=>{
    
    element.addEventListener("click",(e)=>{
        e.stopPropagation();
        if(index==0){
            filterBarOne.style.display= (filterBarOne.style.display ==="flex")? "none":"flex";
        }
        else if(index==1){
            filterBarTwo.style.display= (filterBarTwo.style.display ==="flex")? "none":"flex";
        }
        else{
            filterBarThree.style.display= (filterBarThree.style.display ==="flex")? "none":"flex";
        }
       
    })
})


document.addEventListener("click", (e) => {
    // If the click is not inside any filter container or its icon, hide them.
    if (
      !e.target.closest(".dropdown-filter-one") &&
      !e.target.closest(".dropdown-filter-two") &&
      !e.target.closest(".dropdown-filter-three") &&
      !e.target.closest(".filter-wrapper")
    ) {
      filterBarOne.style.display = "none";
      filterBarTwo.style.display = "none";
      filterBarThree.style.display = "none";
    }
  });

