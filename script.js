const button1 = document.getElementById("final-button");
const message1 = document.getElementById("message1")

button1.addEventListener("click", function(){
    if (message1.classList.contains("visible")) {
        message1.classList.remove("visible");
        message1.textContent= "";
    } else {
        message1.textContent = "Click one of the buttons above and lets explore our amazing world together😊";
        message1.classList.add("visible");
    }
});
