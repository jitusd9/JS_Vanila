var heading = document.getElementById('h1');

let btn = document.getElementById("btn");

let main = document.getElementById("main");

let img = document.getElementById("img-svg");

function handleOn() {
  heading.style.filter = "blur(5px)";
  main.style.opacity = "0.7";
  img.style.visibility = "visible";
  img.style.animation = "divein 1 1s";
};

function handleOut() {
  heading.style.filter = "blur(0px)";
  main.style.opacity = "0";
  img.style.animation = "diveout 1 1s";
}


var button = document.querySelector('#btn');
button.addEventListener('mouseover', handleOn);
button.addEventListener('mouseout', handleOut);
