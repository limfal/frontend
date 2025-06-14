"use strict";

// GEOLOCATION STUFF

if ("geolocation" in navigator) {

    navigator.geolocation.getCurrentPosition(function (position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        loadMap(latitude, longitude);
    }, function (error) {
        console.error("Fel vid hämtning av postition:", error.message);
        let latitude = "62.39";
        let longitude = "17.29";
        loadMap(latitude, longitude);
    });
} else {
    console.error("Geolokalisering stöds inte av din webbläsare");
    let latitude = "50.5380";
    let longitude = "12.0471";
    loadMap(latitude, longitude);
}

// VARIABLER
const mapEl = document.getElementById("map");
const btnEl = document.getElementById("searchBtn");
const inputEl = document.getElementById("mapSearch");

btnEl.addEventListener('click', searchPlace);


async function searchPlace () {
    console.log(inputEl.value);

        try {
            const response = await fetch("https://nominatim.openstreetmap.org/search?q=" + inputEl.value + "&format=json&limit=1");
            const place = await response.json; 
            console.log(place);

        } catch (error) {
            console.error(error);
        }
    }
    

// FUNKTION FÖR ATT VISA KARTAN
function loadMap(long, lat) {

    mapEl.innerHTML = "";

    const map = L.map('map').setView([long, lat], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

}

