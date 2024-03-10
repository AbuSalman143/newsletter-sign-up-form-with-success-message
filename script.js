let email=document.getElementById("email");
let submit=document.getElementById("submit");
let form=document.querySelector("form");
let container=document.querySelector(".container");
let thank_container=document.querySelector(".thank-container");
let dismiss=document.querySelector("#dismiss");
let validation_text=document.querySelector("#validation");
let subscribingemail=document.querySelector("#subscribingemail");

function toggel(){
    if(container.style.display==="none"){
        container.style.display="flex";
        thank_container.style="none";
       
    }else{
        container.style.display="none";
        thank_container.style.display="flex";
        email.style.border = "";
        email.style.background = "";
        validation_text.style.display = "none";
    }
}

function validation(){
    email.style.border="1px solid red";
    email.style.background="rgba(202, 93, 93, 0.609)";
    validation_text.style.display="block";

}

dismiss.addEventListener("click",()=>{
    toggel()
})
form.addEventListener("submit",(e)=>{
    e.preventDefault();


    // Regular expression for basic email validation
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.value===""||!emailRegex.test(email.value.trim())){
        validation();
    }else{
        subscribingemail.innerText=email.value.trim();
        toggel();
        form.reset();
    }

   
    
})

