"use strict";

const ctx = document.getElementById('myChart'); 
const ctx2 = document.getElementById('myOtherChart');

window.onload = getData();

async function getData () {
try {
const response = await fetch("https://studenter.miun.se/~mallar/dt211g/")
const info = await response.json();

    const filteredProg = info.filter(type => type.type === "Program");
    const topValuesprogram = filteredProg.sort((a, b) => b.applicantsTotal - a.applicantsTotal).slice(0,5);

    const filteredCour = info.filter(type => type.type === "Kurs");
    const topValuescourse = filteredCour.sort((a, b) => b.applicantsTotal - a.applicantsTotal).slice(0,6);
   
    printCourses(topValuescourse);
    printPrograms(topValuesprogram);
} catch (error) {
    console.error(error);
}}

function printPrograms (content) {
    console.table(content);
    console.log(content[1].name);
    
new Chart(ctx2, { 
    type: 'pie', 
    data: { 
    labels: [content[0].name, content[1].name, content[2].name, content[3].name, content[4].name], 
    datasets: [{ 
    label: 'Antal sökande', 
    data: [content[0].applicantsTotal, content[1].applicantsTotal, content[2].applicantsTotal, content[3].applicantsTotal, content[4].applicantsTotal],
    backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(255, 205, 86, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(153, 102, 255, 0.7)',
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(54, 162, 235, 1)', 
        'rgba(153, 102, 255, 1)',
    ],
    borderWidth: 1
    }]
    },
    });
}

function printCourses (content) {
    console.table(content);

new Chart(ctx, { 
type: 'bar', 
data: { 
labels: [content[0].name, content[1].name, content[2].name, content[3].name, content[4].name, content[5].name], //Kan då också vara inplockat på samma sätt 
datasets: [{ 
label: 'Antal sökande', 
data: [content[0].applicantsTotal, content[1].applicantsTotal, content[2].applicantsTotal, content[3].applicantsTotal, content[4].applicantsTotal, content[5].applicantsTotal, ],
backgroundColor: [
    'rgba(255, 99, 132, 0.7)',
    'rgba(75, 192, 192, 0.7)',
    'rgba(255, 205, 86, 0.7)',
    'rgba(54, 162, 235, 0.7)',
    'rgba(153, 102, 255, 0.7)',
    'rgba(253, 122, 15, 0.7)',
],
borderColor: [
    'rgba(255, 99, 132, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(255, 205, 86, 1)',
    'rgba(54, 162, 235, 1)', 
    'rgba(153, 102, 255, 1)',
    'rgba(253, 122, 15, 0.7)',
],
borderWidth: 1
}]
},
});
}
