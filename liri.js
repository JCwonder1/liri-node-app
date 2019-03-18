require("dotenv").config();

var keys = require("./keys.js");

//var spotify = new Spotify(keys.spotify);

var welcomeMessage = "I am an app that will fetch you song, concert and movie data.  I can also fetch random data.  Use these commands: \n\n" +
    "concert-this then artist/band name here \n" +
    "spotify-this-song 'song name here'\n" +
    "movie-this 'movie name here'\n"+
    "do-what-it-says for random \n";

//Setup question to ask the user
var questions = [
    "What would you like me to fetch?",
    "What would you like me to fetch next?"
];

console.log(welcomeMessage);

//TODO: add a listener to the cmd to get data
//TODO: add a switch to go through the data and run something
//TODO: add seprate file to control spotify api call
//TODO: add separate file to control bandsintown
//TODO: add separate file to control OMDB
//TODO: Connect each file with the liri.js
//TODO: make a call to spotify - make function
//TODO: Connect call to switch and pass info and return info
//TODO:  do the same for bandsintown and omdb - make function
//TODO: Fill random with random fetches.
//TODO: pull a random from the file
//TODO: let the random call the correct function
//TODO: once completed function should ask the next question
//TODO: Allow the user to exit.
