"use strict";

console.log("Hello world!");

let btnEl = document.getElementById("clickme");
let boxEl = document.getElementById("animation4");

btnEl.addEventListener('click', runPlay) 

// function runPlay () {

//     let style = window.getComputedStyle(boxEl);
    
//     boxEl.style.animation = "bubblecolor 1s 1s infinite alternate running";
//     }

    function runPlay () {

        let style = window.getComputedStyle(boxEl);
        
        if (boxEl.style.animationPlayState === "paused") {
            boxEl.style.animationPlayState = "running";
        } else {boxEl.style.animationPlayState = "paused";
        }
        }

//If animationthingie === se above then change to paused
//else change to it