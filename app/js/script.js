const htmlWheel = document.getElementById('htmlWheel');
let htmlWheelElements = htmlWheel.children;

let main = document.getElementById("main");
let cell3 = document.getElementById("cell3")
let cell5 = document.getElementById("cell5")


htmlWheel.addEventListener("click", () => {
  main.classList.add("scrolldown-main");
  cell3.classList.add("scrolldown-cell3");
  cell5.classList.add("scrolldown-cell5");

  setTimeout(() => {
    main.classList.remove("scrolldown-main");
    cell3.classList.remove("scrolldown-cell3");
    cell5.classList.remove("scrolldown-cell5");

  }, 500);
})
