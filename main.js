
const name_ = prompt("Please enter your name:");

// Title - Start
function title(){
    let title_content = document.createElement("h1");
    title_content.innerHTML = "DAVON | Front-end 101";
    const title_ = document.querySelector("#title");
    title_.append(title_content);
}
// Title - End

// Greeting - Start

function greetings(){
    let greeting_content = document.createElement("h2");
    greeting_content.innerHTML = `Hello ${name_}! Welcome!`;
    const greeting_ = document.querySelector("#greeting");
    greeting_.append(greeting_content);
}
// Greeting - End

// Clock function - Start
function updateClock() {

    const clockElement = document.getElementById('clock');
    const now = new Date();

    // clock
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[now.getDay()];
    
    clockElement.textContent = `${dayOfWeek} ${hours}:${minutes}:${seconds}`;
}
// Clock function - End


// Paragraphs - Start
function paragraph_first(){
    const paragraph_content = "You're in my homework web page right now.";
    const paragraph = document.querySelector("article>p#first_paragraph");
    paragraph.innerHTML = paragraph_content;
}

function paragraph_second(){
    const paragraph_content = "ENJOY!";
    const paragraph = document.querySelector("article>p#second_paragraph");
    paragraph.innerHTML = paragraph_content;
}
// Paragraphs - End

// Call functions
title();
greetings();

setInterval(updateClock, 1000); // For update our time in every second
updateClock();

paragraph_first();
paragraph_second();