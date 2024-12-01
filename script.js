const buttonhandler = document.querySelectorAll(".btn");
const circle = document.querySelector(".circle");

buttonhandler.forEach((button) => {
    button.addEventListener("click",()=>{
        circle.style.backgroundColor = button.classList.contains("btn-danger") ? "red" 
        : button.classList.contains("btn-success") ? "green"
        : button.classList.contains("btn-primary") ? "blue"
        : ""
    })
});
