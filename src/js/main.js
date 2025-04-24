"use strict";



let btnEl = document.getElementById("clickme");
let boxEl = document.getElementById("animation4");

btnEl.addEventListener('click', runPlay) 



    function runPlay () {

        let style = window.getComputedStyle(boxEl);
        
        if (boxEl.style.animationPlayState === "running") {
            boxEl.style.animationPlayState = "paused";
        } else {boxEl.style.animationPlayState = "running";
        }
        }


