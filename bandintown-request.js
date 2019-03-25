var moment = require('moment');
var axios = require('axios');

var keys = require("./keys.js");

function bandsInTown(artist){

    axios.get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=${keys.bandsintown.id}`)
        .then(function (response) {
            if(response.data[0]) {
                for (let i = 0; i < response.data.length; i++) {
                    console.log("Venue: ", response.data[i].venue.name);
                    console.log("City: ", response.data[i].venue.city);
                    console.log("State: ", response.data[i].venue.region);
                    console.log("Country: ", response.data[i].venue.country);
                    console.log("Date: ", moment(response.data[i].datetime).format("MM/DD/YY"));
                    console.log("\n------------\n");
                }
                console.log("\nWhat would you like me to look up next?");
            }else{
                artist = artist.split("+").join(" ");
                console.log(`\nSorry there are no concerts scheduled for ${artist}`);
                console.log("\nWhat would you like me to look up next?");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

module.exports = bandsInTown;

//TODO: Add the artist/band name in the console when there are no concerts.

// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")