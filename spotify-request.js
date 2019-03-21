require("dotenv").config();


var keys = require("./keys.js");
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify);


function spotifySearch(userSong){

    spotify
        .search({ type: 'track', query: userSong, limit:5 })
        .then(function(response) {
                console.log("Search for: ", userSong);
            for(let i =0;  i < response.tracks.items.length; i++) {

                console.log("Artist: ", response.tracks.items[i].album.artists[0].name);
                console.log("Album: ", response.tracks.items[i].album.name);
                console.log("Release Date: ", response.tracks.items[i].album.release_date);
                console.log("\n------------\n");

            }
            console.log("\nWhat would you like me to fetch next?");
        })
        .catch(function(err) {
            console.log(err);
        });
}
module.exports = spotifySearch;

