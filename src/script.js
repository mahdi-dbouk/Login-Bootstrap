
    const confirm_input = document.getElementById("Confirm-Password");
    const name_input = document.getElementById("name-input");
    confirm_input.style.display="none";
    name_input.style.display="none";

    const register_btn = document.getElementById("register-btn");
    const login_btn = document.getElementById("signin-btn");
    const form_title = document.getElementById('form-title');
    

    register_btn.addEventListener('click',function(e){
        e.preventDefault();
        register_btn.classList.replace('btn-secondary','btn-primary');
        login_btn.classList.replace('btn-primary','btn-secondary');
        confirm_input.style.display="";
        name_input.style.display="";
        form_title.innerHTML="Register&#128221;"

    });

    login_btn.addEventListener('click',function(e){
        register_btn.classList.replace('btn-primary','btn-secondary');
        login_btn.classList.replace('btn-secondary','btn-primary');
        confirm_input.style.display="none";
        name_input.style.display="none";
        form_title.innerHTML="Login&#128274;"

    });

    login_btn.addEventListener("submit", login);

let user_details = []

function login() {
  fetch("http://localhost/Mini-Full-Stack-Backend/login.php")
    .then((response) => response.json())
    .then((details) => {
      user_details = details;
    })
    .catch((error) => console.log(error))
}

console.log(user_details);
