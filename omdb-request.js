var moment = require('moment');
var axios = require('axios');

var keys = require("./keys.js");

function getMovieInfo(userMovie){
    axios.get(`http://omdbapi.com/?t=${userMovie}&apikey=${keys.omdb.id}`)
        .then(response =>{
            console.log("Title: ", response.data.title);
            console.log("Release Date: ", response.data.Released);
            console.log("IMDB Rating: ", response.data.Ratings[0].Value); //TODO: Check to see if this exist before console log
            console.log("Rotten Tomatoes: ", response.data.Ratings[1].Value); //TODO: Check to see if this exist before console log
            console.log("Country: ", response.data.Country);
            console.log("Language: ", response.data.Language);
            console.log("Plot: ", response.data.Plot);
            console.log("Actors: ", response.data.Actors);

            console.log("\n------------\n");

            console.log("\nWhat would you like me to fetch next?");
        })
}

module.exports = getMovieInfo;


