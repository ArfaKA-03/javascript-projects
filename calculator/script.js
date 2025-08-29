buttons.forEach(button => {
    button.addEventListener("click", function () {
        let buttonText = this.innerText;

        if (button.id === "all-clear") {
            ipscreen.value = ""; // Clear the screen
        }
    }
