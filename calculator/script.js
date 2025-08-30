let ipscreen = document.getElementById("ipscreen");
let ans = document.getElementById("ans");
let buttons = document.querySelectorAll(".num button");
buttons.forEach(button => {
    button.addEventListener("click", function () {
        let buttonText = this.innerText;

        if (button.id === "all-clear") {
            ipscreen.value = ""; // Clear the screen
        }
        else if (buttonText === "%") {
            ipscreen.value = parseFloat(ipscreen.value) / 100;
        }
    });
});
