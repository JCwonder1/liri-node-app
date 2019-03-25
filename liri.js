require("dotenv").config();
var spotifySearch = require('./spotify-request');
var bandsInTownSearch = require('./bandintown-request');
var omdbSearch = require('./omdb-request');
var randomSearch = require('./random');

let welcomeMessage = "\nI am an app that will find you song, concert and movie data.  \nI can also serve random data.  \n\nUse these commands: \n\n" +
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
    }else if(userResponse === "do-what-it-says"){
        apiToFetch = userResponse;
    }else if(userResponse ==="help"){
        apiToFetch = "help";
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
                whatToLookup = whatToLookup.trim().split(" ").join("+");
                omdbSearch(whatToLookup);
                break
            case (apiToFetch = 'do-what-it-says'):
                randomSearch();
                break
            case (apiToFetch = "help"):
                //TODO: Get Help to work
                console.log("Commands: ");
                console.log("concert-this 'artist/band name here'");
                console.log("spotify-this-song 'song name here'");
                console.log("movie-this 'movie name here'");
                console.log("do-what-it-says for random");
                console.log("exit to end program");
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
});



//TODO: Fill random with random fetches.
//TODO: pull a random from the file
//TODO: let the random call the correct function


