require("dotenv").config();
var spotifySearch = require('./spotify-request');
var bandsInTownSearch = require('./bandintown-request');

let welcomeMessage = "I am an app that will fetch you song, concert and movie data.  I can also fetch random data.  Use these commands: \n\n" +
    "concert-this 'artist/band name here' \n" +
    "spotify-this-song 'song name here'\n" +
    "movie-this 'movie name here'\n"+
    "do-what-it-says for random \n";

//Setup question to ask the user
var questions = [
    "What would you like me to fetch?",
    "What would you like me to fetch next?"
];

//Store users response
var userResponse = "";

console.log(welcomeMessage);

process.stdin.on('data', data=> {
    userResponse = data.toString().toLocaleLowerCase().trim();

    //Deconstruct the user response to pull out the call to action
    let whatToLookup = userResponse.indexOf(' ') >=0 ? userResponse.substr(userResponse.indexOf(' ')) : false;


    let apiToFetch =  null;
    if(userResponse.indexOf(' ') >=0 && whatToLookup !== false){
                       apiToFetch = userResponse.substr(0,userResponse.indexOf(' '))
    }else if(whatToLookup === false && userResponse === "exit"){
        process.exit()
    }


    if(apiToFetch) {
        switch (apiToFetch) {
            case (apiToFetch = 'concert-this'):
                whatToLookup = whatToLookup.trim().split(" ").join("+");
                bandsInTownSearch(whatToLookup);
                break
            case (apiToFetch = 'spotify-this-song'):
                spotifySearch(whatToLookup);
                break
            case (apiToFetch = 'movie-this'):
                console.log('In Movie This');
                break
            case (apiToFetch = 'do-what-it-says'):
                console.log('In do-what-it-says');
                break
            default:
                console.log('Sorry I dont know that command.  Try again');
                //console.log(userAction);
                break

        }
    }else{
        console.log("\nOpps! I think you forgot to tell me what you wanted to lookup!")
        console.log("Try again.");

    }
    //console.log(userAction);

    //console.log(userResponse.split(" "));
    


});


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
