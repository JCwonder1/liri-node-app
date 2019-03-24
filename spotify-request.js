require("dotenv").config();


var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


function spotifySearch(userSong){

    spotify
        .search({ type: 'track', query: userSong, limit:5 })
        .then( (response)=> {
                console.log("Search for: ", userSong);
                console.log("\n");

            for(let i =0;  i < response.tracks.items.length; i++) {

                console.log("Artist: ", response.tracks.items[i].album.artists[0].name);
                console.log("Song: ",response.tracks.items[i].name);
                console.log("Album: ", response.tracks.items[i].album.name);
                console.log("Release Date: ", response.tracks.items[i].album.release_date);
                (response.tracks.items[i].preview_url) ? console.log("Preview: ",response.tracks.items[i].preview_url) : console.log("No Preview available.");
                console.log("\n------------\n");

            }
            console.log("\nWhat would you like me to look up next?");
        })
        .catch(function(err) {
            console.log(err);
        });

}
module.exports = spotifySearch;

