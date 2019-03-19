require("dotenv").config();


var keys = require("./keys.js");
var Spotify = require('node-spotify-api')

var spotify = new Spotify(keys.spotify);

let welcomeMessage = "I am an app that will fetch you song, concert and movie data.  I can also fetch random data.  Use these commands: \n\n" +
    "concert-this then artist/band name here \n" +
    "spotify-this-song 'song name here'\n" +
    "movie-this 'movie name here'\n"+
    "do-what-it-says for random \n";

//Setup question to ask the user
let questions = [
    "What would you like me to fetch?",
    "What would you like me to fetch next?"
];

//Store users response
var userResponse = "";

console.log(welcomeMessage);

process.stdin.on('data', data=> {
    userResponse = data.toString().trim();

    //Deconstruct the user response to pull out the call to action
    let userAction = userResponse.split(" ");
    userAction = userAction[0];

    switch(userAction){
        case (userAction = 'concert-this'):
            console.log('In Concert This');
            break
        case (userAction = 'spotify-this-song'):
            console.log('In Spotify This');
            break
        case (userAction = 'movie-this'):
            console.log('In Movie This');
            break
        case (userAction = 'do-what-it-says'):
            console.log('In do-what-it-says');
            break
        default:
            console.log('Sorry I dont know that command.  Try again');
            break

    }
    //console.log(userAction);

    //console.log(userResponse.split(" "));
    


});


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
