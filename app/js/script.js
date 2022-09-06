const htmlWheel = document.getElementById('htmlWheel');
let htmlWheelElements = htmlWheel.children;

let main = document.getElementById("main");

var i = "test";

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 38:
      console.log("up"); //show the message saying up"
      break;
    case 40:
      console.log("down"); //show the message saying down"
      break;
  }
};
