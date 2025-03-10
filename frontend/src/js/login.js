

export const MOCK_USER_ASSISTENTIAL={
    name:"Mariana",
    birthDate:"24/06/2002",
    login:"mariana",
    cellphone:"(38)988670683",
    password:"mariana123",
    role:"assistencial",
    isStudent:"no",
    isAdmin:"no",
    specialty:"cardiologia",
    
}
const MOCK_USER_ASSISTENTIAL_STUDENT={
    name:"Riquelme Batista Gomes da Silva",
    birthDate:"24/06/2002",
    login:"riquelme3m",
    cellphone:"(38)988670683",
    password:"matador123",
    role:"assistential",
    isStudent:"yes",
    isAdmin:"no",
    specialty:"none",
    
}
const MOCK_USER_NIR={
    name:"Riquelme Batista Gomes da Silva",
    birthDate:"24/06/2002",
    login:"riquelme3m",
    cellphone:"(38)988670683",
    password:"matador123",
    role:"NIR",
    isStudent:"no",
    isAdmin:"no",
    specialty:"none",
    
}
const MOCK_USER_ADMIN={
    name:"Riquelme Batista Gomes da Silva",
    birthDate:"24/06/2002",
    login:"riquelme3m",
    cellphone:"(38)988670683",
    password:"matador123",
    role:"assistential",
    isStudent:"no",
    isAdmin:"yes",
    specialty:"none",
    
}

console.log("Here");


document.addEventListener("DOMContentLoaded",()=>{
    
   

    const loginForm = document.querySelector(".login");
    const loginInput = document.querySelector("#login");
    const passwordInput = document.querySelector("#password");
    console.log(loginInput,passwordInput);
    const loginError = document.querySelector(".loginError");


    function clearError(){
        loginError.classList.remove("addError");
        loginError.innerHTML="";
        console.log("clearing error");
    }
    loginInput.addEventListener("input",()=>{
        clearError();
    });
    passwordInput.addEventListener("input",()=>{
        clearError();
    });

    loginForm.addEventListener("submit",(e)=>{

        e.preventDefault();
        //create a paragraph saying : Login ou senha inválidos

        if(loginInput.value!==MOCK_USER_ASSISTENTIAL.login || passwordInput.value!==MOCK_USER_ASSISTENTIAL.password){
            loginError.innerHTML="Email ou senha incorretos. Tente novamente.";
            loginError.classList.add("addError");
            return;
        }

        console.log("Login successfull");
        window.location.href="./preceptor.html";




    })


















});