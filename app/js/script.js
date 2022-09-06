const htmlWheel = document.getElementById('htmlWheel');
let htmlWheelElements = htmlWheel.children;

let main = document.getElementById("main"); 
let cell1 = document.getElementById("cell1");
let cell2 = document.getElementById("cell2");
let cell3 = document.getElementById("cell3");
let cell5 = document.getElementById("cell5");
let cell6 = document.getElementById("cell6");
let cell7 = document.getElementById("cell7");

/// Scroll Method

htmlWheel.addEventListener("click", () => {
  main.classList.add("scrolldown-main");
  cell1.classList.add("scrolldown-cell1");
  cell2.classList.add("scrolldown-cell2");
  cell3.classList.add("scrolldown-cell3");
  cell5.classList.add("scrolldown-cell5");
  cell6.classList.add("scrolldown-cell6");
  cell7.classList.add("scrolldown-cell7");

  setTimeout(() => {
    main.classList.remove("scrolldown-main");
    cell1.classList.remove("scrolldown-cell1");
    cell2.classList.remove("scrolldown-cell2");
    cell3.classList.remove("scrolldown-cell3");
    cell5.classList.remove("scrolldown-cell5");
    cell6.classList.remove("scrolldown-cell6");
    cell7.classList.remove("scrolldown-cell7");

    let placeholder = cell7.innerHTML;
    cell7.innerHTML = cell6.innerHTML;
    cell6.innerHTML = cell5.innerHTML;
    cell5.innerHTML = main.innerHTML;
    main.innerHTML = cell3.innerHTML;
    cell3.innerHTML = cell2.innerHTML;
    cell2.innerHTML = cell1.innerHTML;
    cell1.innerHTML = placeholder;
  }, 500);

})


