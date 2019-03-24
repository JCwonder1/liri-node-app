var moment = require('moment');
var axios = require('axios');

var keys = require("./keys.js");

function getMovieInfo(userMovie){
    axios.get(`http://omdbapi.com/?t=${userMovie}&apikey=${keys.omdb.id}`)
        .then(response =>{

            if(response.data.Title) {

                console.log("Title: ", response.data.Title);
                console.log("Release Date: ", response.data.Released);
                if(response.data.Ratings[0]) {
                    console.log("IMDB Rating: ", response.data.Ratings[0].Value);
                    console.log("Rotten Tomatoes: ", response.data.Ratings[1].Value)
                }else{
                    console.log("Ratings not available")
                }
                console.log("Country: ", response.data.Country);
                console.log("Language: ", response.data.Language);
                console.log("Plot: ", response.data.Plot);
                console.log("Actors: ", response.data.Actors);

                console.log("\n------------\n");


            }else{
                console.log("Sorry no results for that search.");
            }
            console.log("\nWhat would you like me to look up next?");
        }).catch(err=> console.log(err));
}

module.exports = getMovieInfo;


