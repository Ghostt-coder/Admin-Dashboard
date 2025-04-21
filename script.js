let email = document.querySelector("#email");
let password = document.querySelector("#password");
let btn = document.querySelector("#btn");
let error1 = document.querySelector("#error1")
let error2 = document.querySelector("#error2")
let form = document.querySelector("form"); // grab the form, not the button


form.addEventListener('submit', (e)=>{
      if(email.value!=="user@gmail.com"){
          e.preventDefault();
          error1.textContent="literally the email is written in placeholder";
          email.style.borderColor = "crimson";
        } 
        
        if(password.value!=="07"){
            e.preventDefault();
            error2.textContent="you seroius? this is 2nd grade sum";
            password.style.borderColor = "crimson";
      }
});


let toggle = document.querySelector(".toggle-password");

toggle.addEventListener('click', ()=>{
    const targetID = toggle.getAttribute("data-target");
    const input = document.getElementById(targetID);

    if(input.type === "password"){
          input.type = "text";
          toggle.src='notshow.svg'
    } else {
          input.type = "password";
          toggle.src='show.svg';
    }
});
