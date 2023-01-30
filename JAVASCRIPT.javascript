// Array of possible lottery numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to generate a random lottery ticket
function generateTicket() {
    var ticket = [];
    for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * numbers.length);
        ticket.push(numbers[randomIndex]);
    }
    return ticket;
}

// Function to display the lottery ticket on the webpage
function displayTicket(ticket) {
    var numbersElement = document.getElementById("numbers");
    numbersElement.innerHTML = ticket.join(", ");
}

// Get a reference to the "Generate Ticket" button
var generateButton = document.getElementById("generate-button");

// Add a click event listener to the button
generateButton.addEventListener("click", function() {
    var ticket = generateTicket();
    displayTicket(ticket);
});
var sound = new Audio("candle.mp3");

// Get a reference to the "Generate Ticket" button
var generateButton = document.getElementById("generate-button");

// Add a click event listener to the button
generateButton.addEventListener("click", function() {
    sound.play();
    var ticket = generateTicket();
    displayTicket(ticket);
});
