document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (button.textContent === "=") {
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = "Error";
        }
      } else if (button.textContent === "C") {
        display.value = "";
      } else {
        display.value += button.textContent;
      }
    });
  });
});
