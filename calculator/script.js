let ipscreen = document.getElementById("ipscreen");
let ans = document.getElementById("ans");
let buttons = document.querySelectorAll(".num button");
let delbtn = document.getElementById("del");
let funct = document.getElementById("extra_func");
let ac = document.getElementById("all-clear");
let squre = document.getElementById("squr");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        let buttonText = this.innerText;

        if (button.id === "all-clear") {
            ipscreen.value = ""; // Clear the screen
        }
        else if (buttonText === "%") {
            ipscreen.value = parseFloat(ipscreen.value) / 100;
        }
        else if (buttonText === "=") {
            try {
                ipscreen.value = eval(ipscreen.value);
            }
            catch {
                ipscreen.value = "Error";
            }
        } else if (button.id === "del") {
            ipscreen.value = ipscreen.value.slice(0, -1);
        }
        else if (button.id === "squr") {
            let currentValue = parseFloat(ipscreen.value);
            if (!isNaN(currentValue)) {
                ipscreen.value = currentValue * currentValue; // square the number
            }
        }
        else {
            ipscreen.value += buttonText;
        }
    });
});
