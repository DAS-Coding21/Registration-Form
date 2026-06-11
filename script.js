let fullNameEl = document.getElementById("fullName");
let emaliEl = document.getElementById("email");
let submitBtnEl = document.getElementById("submitBtn");
let errFullNameEl = document.getElementById("errFullName");
let errEmailEl = document.getElementById("errEmail");



fullNameEl.addEventListener('blur', function(event){
    if(event.target.value === ""){
        errFullNameEl.textContent = "Name Required";
    }
    else{
        errFullNameEl.textContent = "";
    }
});

emaliEl.addEventListener('blur', function(event){
    if(event.target.value === ""){
        console.log("blur event is worked.");
        errEmail.textContent = "Email Required";
    }
    else{
        errEmailEl.textContent = "";
    }
});

submitBtnEl.addEventListener('submit', function(event){
    event.preventDefault();
});