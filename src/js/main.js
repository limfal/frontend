"use strict";

console.log("Hello world!");

let btnEl = document.getElementById("clickme");
let boxEl = document.getElementById("animation4");

btnEl.addEventListener('click', runPlay) 

function runPlay () {

let style = window.getComputedStyle(boxEl);

boxEl.style.animation = "bubblecolor 1s 1s infinite alternate running";
}