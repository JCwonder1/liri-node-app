require("dotenv").config();


var keys = require("./keys.js");
var Spotify = require('node-spotify-api')

var spotify = new Spotify(keys.spotify);

function spotifySearch(userSong){
    console.log(userSong);
}

module.exports = spotifySearch;