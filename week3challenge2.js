var bookTitles = [
    'Too Loud a Solitude',
    'Things Fall Apart',
    'The Master and Margarita',
    'The Three Body Problem',
    'The Woman Destroyed',
    'Beloved',
    'The Tenant of Wildfell Hall',
    "Lady Chatterley's Lover",
];

bookTitles.sort();

var lowTitles = []
for (var i = 0; i < bookTitles.length; i++) {
    lowTitles.push(bookTitles[i].toLowerCase())
}


var libRequests = [];
var requestedTitle = "";

alert("Welcome to the library!\n\nPlease search for a book title when prompted.\n\nType `request` at the prompt to make a request for a book.\n\nYou can also type `display` at the prompt to display all available book titles.\n\nType `quit` at the prompt to quit the program.");

var response = "";
var response = response.toLowerCase();

while (response != 'quit') {
    response = prompt("Search for a book title or make a request by typing 'request': ");
    // check if the user wants to make a request
    if (response == 'request') {
        requestedTitle = prompt("What book would you like to request? ");
        libRequests.push(requestedTitle); // add the requested title to the library requests array
        alert("You have requested the following titles:" + libRequests + "."); // alert the user their requests
    }
    // check if the user wants to display all the titles
    else if (response == 'display') {
        for (var i = 0; i < bookTitles.length; i++) {
            alert(bookTitles[i]); // display all available book titles
            }
    }
    // otherwise, check if the book the user entered is in the library
    else {
        var bookIndex = lowTitles.indexOf(response);
        if (response != 'quit'){
            // if indexOf returns -1, the book the user entered is not in the library
            if (bookIndex == -1) {
                alert("Sorry, we don't have that book. You can always request it.");
            }
            else {
                alert("Yes, " + response + " is available to check out.");
            }
        }
    }
}