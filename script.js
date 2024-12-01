const buttonhandler = document.querySelectorAll(".btn");
const circle = document.querySelector(".circle");
const submitBtn = document.getElementById("button-addon2");
const inputHandler = document.getElementById("ColorInput");

buttonhandler.forEach((button) => {
    button.addEventListener("click",()=>{
        circle.style.backgroundColor = button.classList.contains("btn-danger") ? "red" 
        : button.classList.contains("btn-success") ? "green"
        : button.classList.contains("btn-primary") ? "blue"
        : ""
    })
});

function changeCircleColor(){
    const color = inputHandler.value.trim()
    if(color){
       return circle.style.backgroundColor = color;
    }else{
       return alert("Enter hexcode or valid color");
    }
}


submitBtn.addEventListener("click",()=>{
   return changeCircleColor();
})
